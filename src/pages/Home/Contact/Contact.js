import React from 'react';
import bg from '../../../assets/images/appointment.png'

const Contact = () => {
     return (
          <div style={{backgroundImage: `url(${bg})`}} className='mt-16 bg-cover bg-no-repeat'>
               <div className='max-w-md mx-auto py-8'>
                    <p className='text-xl font-bold text-center text-primary'>Contact Us</p>
                    <h2 className='text-4xl text-center text-white'>Stay connected with us</h2>
                    <form className='mx-5 py-3 '>
                         <div className="form-control w-full my-5">
                              <input type="email" placeholder="Email adress" className="input input-bordered w-full" />
                         </div>
                         <div className="form-control w-full my-5">
                              <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                         </div>
                         <div className="form-control">                              
                              <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>                              
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Contact;