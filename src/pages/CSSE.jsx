import React from "react";
import dssingh from "../images/ds-singh.jpg";
import rkd from "../images/rkd.jpg";
import shivaPrakash from "../images/shiva-prakash.jpeg";
import prachi from "../images/prachi.png";
import csseTeam from "../images/csse-team.png";
import csselogo from "../images/csse-logo.png";
import { motion } from "framer-motion";

const CSSE = () => {
  return (
    <div>
      <div className="society flex justify-center items-center gap-12 bg-gradient-to-br from-orange-300 rounded-md to-blue-300 p-20 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0.5, 0.7, 1],
            y: [-10, 0, -10],
            color: ["#2563eb", "#1d4ed8", "#2563eb"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="csse-tag text-9xl text-blue-600 mb-4 font-raleway underline decoration-wavy decoration-blue-500 underline-offset-8 mt-4"
        >
          CSSE
        </motion.div>

        <div className="mt-4">
          <p className="text-3xl font-semibold text-slate-800">
            Computer Society of Software Engineers Departmental society of
          </p>
          <div className="overflow-x-auto">
            <p className="text-2xl text-center mt-4 text-blue-600 animate-marquee">
              MCA Department, MMMUT Gorakhpur
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-8">
        <div className="csse-logo">
          <img src={csselogo} className="h-56" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">About Society</h1>
          <ul className="list-disc mt-4 font-raleway text-slate-800 text-xl">
            <li>
              Founded in the year 2013, by Alumni Respected
              <span className="font-semibold text-blue-600">
                {" "}
                Ankit Porwal{" "}
              </span>{" "}
              and
              <span className="font-semibold text-blue-600">Vivek Samele.</span>
            </li>
            <li>The basic OBJECTIVES of the society are:</li>
            <li>to develop the managerial and soft skills of the students</li>
            <li>
              to organize activities for social awareness and social benefits.
            </li>
            <li>To increase mutual bonding among each other.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center text-blue-900 m">
        Faculty Heads
      </h2>
      <div className="faculty-heads flex justify-evenly items-center mt-16 pt-12 px-16">
        <div className="bbg-green h-48 w-48">
          <img src={shivaPrakash} className="h-48 rounded-lg" alt="error" />
          <p className="text-center font-semibold text-slate-800">
            Shiva Prakash
          </p>
          <p className="font-semibold font-raleway text-blue-500 text-center text-lg">
            Faculty president
          </p>
        </div>
        <div className="bbg-green h-48 w-48">
          <img src={dssingh} className="rounded-lg" alt="error" />
          <p className="text-center font-semibold text-slate-800">D.S Singh</p>
          <p className="font-semibold text-blue-500 text-center text-lg">
            Faculty vice-president
          </p>
        </div>
        <div className="bbg-green h-48 w-48">
          <img src={rkd} className="rounded-lg" alt="error" />
          <p className="text-center font-semibold text-slate-800">
            R.K Dwivedi
          </p>
          <p className="font-semibold font-raleway text-blue-500 text-center text-lg">
            Faculty secretary
          </p>
        </div>
        <div className="bbg-green h-48 w-48">
          <img src={prachi} className="h-48 w-48 rounded-lg" alt="error" />
          <p className="text-center font-semibold text-slate-800">
            Prachi Verma
          </p>
          <p className="font-semibold font-raleway text-blue-600 text-center text-lg">
            Faculty treasurer
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center text-blue-900 mt-32">
        Society Events
      </h2>

      <div className="society-events flex justify-between items-center mt-16 px-10">
        <div className="h-80 w-80 ml-8 bg-white rounded-md shadow-xl  text-justify pl-12 ">
          <h2 className="text-2xl font-bold text-center pt-8 text-blue-600 underline underline-offset-8">
            Formal Events
          </h2>

          <ul className="text-xl mt-4 font-raleway     ">
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Technical
              Presentation
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Debate
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Extempore
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Group
              Discussion
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Web-Wonders
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Creative
              Writting
            </li>
          </ul>
        </div>

        <div className="h-80 w-80 ml-8 bg-white rounded-md shadow-xl  text-justify pl-12 ">
          <h2 className="text-2xl font-bold text-center pt-8 text-blue-600 underline underline-offset-8">
            Informal Events
          </h2>

          <ul className="text-xl mt-4 font-raleway     ">
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Singing -
              Solo & Group
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Dancing- Solo
              & Group
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Art & Craft
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Mehndi
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Open-mic
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Fashion Show
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Hackathon
            </li>
          </ul>
        </div>

        <div className="h-80 w-80 ml-8 bg-white rounded-md shadow-xl  text-justify pl-12 ">
          <h2 className="text-2xl font-bold text-center pt-8 text-blue-600 underline underline-offset-8">
            Coding Events
          </h2>

          <ul className="text-xl mt-4 font-raleway     ">
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Coding
              Classes
            </li>
            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>
              Contest(code-bugger)
            </li>

            <li className="flex gap-2">
              {" "}
              <i class="ri-quill-pen-ai-fill text-orange-400 "></i>Quiz
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 text-center mt-12">
        <p className="text-2xl text-orange-400 font-semibold">
          Click here to Download the CSSE Brochure
        </p>
        <a href="/csse-brochure.pdf " target="_blank">
          <button className="bg-blue-400 text-white px-6 py-2 mt-2 rounded-r-full rounded-l-full font-semibold hover:bg-blue-500">
            Click here
          </button>
        </a>
      </div>
      <div className="csse-team mt-8">
        <img src={csseTeam} className="w-full h-auto" alt="" />
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/csse" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View society
        </a>
      </div>
    </div>
  );
};

export default CSSE;
