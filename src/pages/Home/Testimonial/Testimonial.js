import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

     const testimonialData = [
          {
               id: 1,
               name: "Winson Herry",
               location: "California",
               review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
               img: people1
          },
          {
               id: 2,
               name: "Winson Herry",
               location: "California",
               review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
               img: people2
          },
          {
               id: 1,
               name: "Winson Herry",
               location: "California",
               review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
               img: people3
          },
     ]
     return (
          <div className='mt-20 mx-12'>
               <div className='flex justify-between '>
                    <div>
                         <p className='text-xl font-bold text-primary my-2'>Testimonial</p>
                         <h2 className='text-4xl'>What Our Patients Says</h2>
                    </div>
                    <div>
                         <img className='w-24 h-20 lg:w-48 lg:h-36' src={quote} alt="" />
                    </div>
               </div>

               <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-2 mt-20'>
                    {
                         testimonialData.map(review => <TestimonialCard
                              key={review.id}
                              review={review}
                         ></TestimonialCard>)
                    }
               </div>
          </div>
     );
};

export default Testimonial;