import React from "react";
import img from "../../../assets/images/treatment.png";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col gap-20 lg:flex-row lg:mx-24 my-6">
        <img src={img} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-accent">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to={"/appointment"}>
            <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
