import React from 'react';
import About from '../Information/About';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
     return (
          <div className='mx-10'>
               <Banner></Banner>
               <About></About>
               <Services></Services>
               <Terms></Terms>
               <Appointment></Appointment>
               <Testimonial></Testimonial>
               <Contact></Contact>
          </div>
     );
};

export default Home;