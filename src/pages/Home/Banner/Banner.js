import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
     return (
          <div className="hero hero-css bg-no-repeat">
               <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                         <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         <Link to={"/appointment"}><button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button></Link>
                    </div>
               </div>
          </div>
     );
};

export default Banner;