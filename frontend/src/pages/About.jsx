/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="w-full text-center">
        <p className="text-2xl text-gray-400">
          ABOUT <span className=" font-medium text-gray-800">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10">

        <img className="w-full md:max-w-[360px]" src={assets.about_image} />

        <div className="flex flex-col justify-center gap-6 text-md ">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to scheduling
            doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior service.
            Whether you are booking your first appointment or managing ongoing
            care, Prescripto is here to support you every step of the way.
          </p>
          <h4 className="text-xl font-medium">Our Vision</h4>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience
            for every user. We aim to bridge the gap between patients and
            healthcare providers, making it easier for you to access the care you
            need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl text-gray-600">
        <p>WHY <span className="text-gray-900 font-semibold">CHOOSE US</span> </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 mt-20 gap-2">
        <div className="border px-16 py-12 flex flex-col gap-5 text-[-15px] md:px-10 hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy lifestyle
          </p>
        </div>
        <div className="border px-16 py-12 flex flex-col gap-5 text-[-15px] md:px-10 hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your area.
          </p>
        </div>
        <div className="border px-16 py-12 flex flex-col gap-5 text-[-15px] md:px-10 hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600">
          <b>
            PERSONALIZATION:
          </b>
          <p>
            Tailored recommendations and reminders to help you stay on top of your health.
          </p>
        </div>
      </div>
    </div>

  );
};

export default About;
