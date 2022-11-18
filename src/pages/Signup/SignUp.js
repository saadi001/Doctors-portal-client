import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
     const {register, handleSubmit, formState:{errors}} = useForm();
     const {createUser, updateuser} = useContext(AuthContext)
     const [signupError, setSignupError] = useState('');

     const handleSignup = data =>{
          
          createUser(data.email, data.password)
          .then(result =>{
               const user = result.user;
               console.log(user)
               toast.success('sign up successfully')
               setSignupError('')
               const userInfo = {
                    displayName: data.name
               }
               updateuser(userInfo)
               .then(()=>{})
               .catch(error => console.error(error))
          })
          .catch(error =>{
               console.error(error)
               const err = error.message;
               const CuttingErrorMessage = err.split('/')
               const errorMessage = (CuttingErrorMessage[1])
               const removeLastChar = errorMessage.slice(0,-1);
               const removeLastTwoChar = removeLastChar.slice(0,-1);
               setSignupError(removeLastTwoChar) 
          })
     }
     return (
          <div className='max-w-md mx-auto border py-4 rounded-md shadow-xl my-5'>
               <h3 className='text-2xl font-bold text-center'>Sign up</h3>
               <form onSubmit={handleSubmit(handleSignup)} className='px-6'>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Name</span></label>
                         <input type="text" {...register('name')} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Email*</span></label>
                         <input type="email" {...register('email',{
                              required: "This field is required"
                         })} className="input input-bordered w-full" />
                         {errors.email && <p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Password*</span></label>
                         <input type="password" {...register('password',{
                              required: "This field is required",
                              minLength: {value: 6, message: "password must be 6 character or longer"},
                              // pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/, message: "password must be stronger."}
                         })} className="input input-bordered w-full" />
                         {errors.password && <p role='alert' className='text-sm text-red-500 mt-1'>{errors.password.message}</p>}
                         {signupError && <p className='text-red-500 text-sm mt-1'>{signupError}</p>}
               
                    </div>
                    
                    <div className='form-control mt-4'>
                         <input type="submit" value='Sign up' className='btn bg-accent' />
                    </div>
                    <div className=' mt-3 text-center'>
                         <p>Already have an account?<Link to={'/login'} className='text-primary'> Please login</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                         <button className='uppercase w-full border btn bg-white hover:bg-slate-200 text-accent font-normal'>Continue with google</button>
                    </div>
               </form>
          </div>
     );
};

export default SignUp;