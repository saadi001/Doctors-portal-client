import React from 'react';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'


const About = () => {
     return (
          <div className='grid grid-cols-3 gap-6 my-14 '>
               <div className='bg-gradient-to-r from-primary to-secondary flex gap-5 items-center px-7 py-10 rounded-xl'>
                    <div className=''>
                         <img src={img1} alt="" />
                    </div>
                    <div className='text-white'>
                         <p className='text-xl font-bold'>Opening Hours</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
               </div>
               <div className='bg-accent flex gap-5 items-center px-7 py-10 rounded-xl'>
                    <div className=''>
                         <img src={img2} alt="" />
                    </div>
                    <div className='text-white'>
                         <p className='text-xl font-bold'>Opening Hours</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
               </div>
               <div className='bg-gradient-to-r from-primary to-secondary flex gap-5 items-center px-7 py-10 rounded-xl'>
                    <div className=''>
                         <img src={img3} alt="" />
                    </div>
                    <div className='text-white'>
                         <p className='text-xl font-bold'>Opening Hours</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
               </div>

          </div>
     );
};

export default About;