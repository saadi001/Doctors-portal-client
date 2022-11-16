import React from 'react';

const TestimonialCard = ({ review }) => {
     const { name, location, review: SingleReview, img } = review;

     return (
          <div className='p-5 '>
               <div className='mb-8'>
                    {SingleReview}
               </div>
               <div>
                    <div className='flex items-center'>
                         <div className="avatar mr-3 ">
                              <div className="w-16 h-16 rounded-full border-primary border-4">
                                   <img src={img} alt=""/>
                              </div>
                         </div>
                         <div>
                              <div className='text-xl font-semibold'>{name}</div>
                              <div>{location}</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TestimonialCard;