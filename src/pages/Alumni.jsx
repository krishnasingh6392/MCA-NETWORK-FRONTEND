import React from "react";
import vinay from "/alumni/vinay jain.png";
import javed from "/alumni/javed khan.png";
import soren from "/alumni/soren.png";
import vishal from "/alumni/vishal tiwari.jpeg";
import mrityunjay from "/alumni/mrityunjay tiwari.jpeg";
import raghvendra from "/alumni/raghvendra pratap singh.jpeg";
import subham from "/alumni/shubham singh.jpeg";
import neha from "/alumni/neha singh.jpeg";
import ashutosh from "../../public/alumni/ashutosh singh.jpeg";

const Alumni = () => {
  // Array of alumni objects
  const alumniData = [
    {
      id: 1,
      name: "Vinay Kumar Jain",
      image: vinay,
      company: "Accenture",
      linkedin: "https://www.linkedin.com/in/jainvinay/",
    },
    {
      id: 2,
      name: "Ashutosh Singh",
      image: ashutosh,
      company: "Jr Software Engineer at Vagaro Technologies",
      linkedin: "https://www.linkedin.com/in/ashutosh-sin1096/",
    },
    {
      id: 3,
      name: "Javed Khan",
      image: javed,
      company: "Go Developer",
      linkedin: "https://www.linkedin.com/in/javed9700/",
    },
    {
      id: 4,
      name: "Vishal Tiwari",
      image: vishal,
      company: "Associate Software Engineering Analyst at DHL IT Services",
      linkedin: "https://www.linkedin.com/in/vishal-tiwari-097230192/",
    },
    {
      id: 5,
      name: "Mrityunjay Tiwari",
      image: mrityunjay,
      company: "",
      linkedin: "https://www.linkedin.com/in/mntiwari/",
    },
    {
      id: 6,
      name: "Raghvendra Pratap Singh",
      image: raghvendra,
      company: "Assistant System Engineer at TCS",
      linkedin:
        "https://www.linkedin.com/in/raghvendra-pratap-singh-318069227/",
    },
    {
      id: 7,
      name: "Shubham Singh",
      image: subham,
      company: "Senior Automation Engineer | Python | Selenium",
      linkedin: "https://www.linkedin.com/in/mrshubhamsingh94/",
    },
    {
      id: 8,
      name: "Neha Singh",
      image: neha,
      company: "Senior Process Executive at Infosys BPM",
      linkedin: "https://www.linkedin.com/in/nisha-singh-40a661310/",
    },
  ];

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Alumni</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {alumniData.map((alumni) => (
          <div
            key={alumni.id}
            className="w-64 p-4 border border-gray-300 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="h-32 w-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
            <p className="text-gray-600 mb-2">{alumni.company}</p>
            <a
              href={alumni.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/Alumni" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View Alumni
        </a>
      </div>
    </div>
  );
};

export default Alumni;
