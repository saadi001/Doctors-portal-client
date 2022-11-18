import React, {  } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     // const [data, setData] = useState("");

     const handleLogin = (data) =>{
          console.log(data)
     }
     return (
          <div className='max-w-md mx-auto border py-4 rounded-md shadow-xl my-5'>
               <h3 className='text-2xl font-bold text-center'>Login</h3>
               <form onSubmit={handleSubmit(handleLogin)} className='px-6'>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text">Email</span></label>
                         <input type="email" {...register("email",{required:"Email is required"})} className="input input-bordered w-full" />
                         {errors.email && <p className='text-red-500 mt-1 text-xs'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text">Password</span></label>
                         <input type="password" {...register("password",{required: "password required", minLength:{value:6, message:'password should be 6 character or longer.'}})} className="input input-bordered w-full" />
                         {errors.password && <p className='text-red-500 mt-1 text-xs'>{errors.password?.message}</p>}
                         <label className="text-[10px] my-1"><span >Forget password?</span></label>
                    </div>
                    
                    <div className='form-control mt-4'>
                         <input type="submit" value='Login' className='btn bg-accent' />
                    </div>
                    <div className=' mt-3 text-center'>
                         <p>New to Doctors Portal?<Link to={'/signup'} className='text-primary'> Create new account</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                         <button className='uppercase w-full border btn bg-white hover:bg-slate-200 text-accent font-normal'>Continue with google</button>
                    </div>
               </form>
          </div>
     );
};

export default Login;