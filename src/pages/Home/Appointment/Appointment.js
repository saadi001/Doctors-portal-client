import React from "react";
import img from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="hero mt-32 border"
    >
      <div className=" flex gap-5 lg:flex-row items-center lg:mx-20 mx-3 my-2 lg:my-0">
        <img
          src={img}
          alt=""
          className="w-1/2 h-full -mt-20 rounded-lg hidden lg:block "
        />

        <div className="text-white">
          <p className="text-xl font-bold text-primary my-3">Appointment</p>
          <h1 className="text-4xl font-semibold my-3">
            Make an appointment Today
          </h1>
          <p className="my-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to={"/appointment"}>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
