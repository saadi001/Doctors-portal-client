import React from 'react';
import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
     return (
          <div>
               <p className='text-xl text-center font-bold text-primary'>Our services</p>
               <p className='text-4xl text-center text-accent'>Services We Provide</p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                    <div className=' py-10 px-14'>
                         <div className='flex justify-center mb-8'>
                              <img  src={floride} alt="" />
                         </div>
                         <div className='text-center'>
                              <p className='text-xl font-semibold mb-2'>Flouride Treatment</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum!</p>
                         </div>
                    </div>
                    <div className=' py-10 px-14'>
                         <div className='flex justify-center mb-8'>
                              <img  src={cavity} alt="" />
                         </div>
                         <div className='text-center'>
                              <p className='text-xl font-semibold mb-2'>Cavity Filling</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum!</p>
                         </div>
                    </div>
                    <div className=' py-10 px-14'>
                         <div className='flex justify-center mb-8'>
                              <img  src={whitening} alt="" />
                         </div>
                         <div className='text-center'>
                              <p className='text-xl font-semibold mb-2'>Teeth Whitening</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum!</p>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Services;