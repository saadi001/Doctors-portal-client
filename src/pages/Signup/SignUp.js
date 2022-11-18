import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
     const {register, handleSubmit, formState:{errors}} = useForm();

     const handleSignup = data =>{
          console.log(data)
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
                              pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/, message: "password must be stronger."}
                         })} className="input input-bordered w-full" />
                         {errors.password && <p role='alert' className='text-sm text-red-500 mt-1'>{errors.password.message}</p>}
               
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