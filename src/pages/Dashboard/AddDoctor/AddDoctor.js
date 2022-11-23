import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AddDoctor = () => {
     const { register, handleSubmit, formState: { errors } } = useForm();

     const imgaeHostKey = process.env.REACT_APP_imageHostingKey;
     const navigate = useNavigate();

     const {data:addDoctor, isLoading} = useQuery({
          queryKey:['addDoctor'],
          queryFn: async ()=>{
               const res = await fetch('http://localhost:5000/appointmentSpecialty')
               const data = await res.json()
               return data;
          }
     })

     if(isLoading){
          return <Loading></Loading>
     }

     const handleAddDoctor = data => {
          
          const image = data.img[0];
          const formData = new FormData();
          formData.append('image', image)
          const url = `https://api.imgbb.com/1/upload?key=${imgaeHostKey}`
          fetch(url,{
               method: 'POST',
               body: formData
          })
          .then(res => res.json())
          .then(imgData => {
               console.log(imgData)
               if(imgData.success){
                    console.log(imgData.data.url)
                    const doctor = {
                         name:data.name,
                         email: data.email,
                         specialty: data.specialty,
                         image: imgData.data.url
                    }
                    // save information to database
                    fetch('http://localhost:5000/doctors', {
                         method: 'POST',
                         headers: {
                              'content-type' : 'application/json',
                              authorization: `bearer ${localStorage.getItem('accessToken')}`
                         },
                         body:JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(result => {
                         console.log(result)
                         toast.success(`${data.name} added successfully`)
                         navigate('/dashboard/managedoctors')
                    })
               }
          })
     }
     return (
          <div className=' max-w-md '>
               <form onSubmit={handleSubmit(handleAddDoctor)} className='px-6'>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Name</span></label>
                         <input type="text" {...register('name')} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Email*</span></label>
                         <input type="email" {...register('email', {
                              required: "This field is required"
                         })} className="input input-bordered w-full" />
                         {errors.email && <p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Specialty</span></label>
                         <select {...register('specialty',{required:'This field is required.'})} className="select select-bordered w-full ">
                              <option>please pick a specialty</option>
                              {
                                   addDoctor?.map(option => <option
                                   key={option._id}
                                   value={option.name}
                                   >{option.name}</option>)
                              }
                              
                         </select>
                         {errors.password && <p role='alert' className='text-sm text-red-500 mt-1'>{errors.password.message}</p>}                        

                    </div>

                    <div className="form-control w-full">
                         <label className="label"><span className="label-text font-bold">Photo</span></label>
                         <input type="file" {...register('img')} className="border-2 border-slate-300 py-6 px-3 rounded-lg w-full" />
                    </div>

                    <div className='form-control mt-4'>
                         <input type="submit" value='Add doctor' className='btn bg-accent' />
                    </div>

               </form>
          </div>
     );
};

export default AddDoctor;