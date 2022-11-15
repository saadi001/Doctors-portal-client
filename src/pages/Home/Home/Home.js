import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';

const Home = () => {
     return (
          <div className='mx-5'>
               <Banner></Banner>
               <About></About>
               <Services></Services>
               <Terms></Terms>
          </div>
     );
};

export default Home;