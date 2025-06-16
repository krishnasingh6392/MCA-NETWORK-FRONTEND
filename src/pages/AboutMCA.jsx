import React from "react";
import mcaBanner from "/miscillineous/mca banner.jpg";

const AboutMCA = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-blue-800 mt-16">
        About M.C.A
      </h2>
      <div className="mt-12">
        <img src={mcaBanner} className="h-96 w-full" alt="" />
      </div>

      <div>
        <p className=" p-12 leading-loose text-justify font-semibold text-slate-800">
          About MCA – MMMUT Gorakhpur The Master of Computer Applications (MCA)
          program at Madan Mohan Malaviya University of Technology (MMMUT),
          Gorakhpur, is a comprehensive two-year postgraduate course aimed at
          nurturing skilled professionals in the field of computer science and
          applications. Designed to bridge the gap between theoretical computing
          concepts and real-world software development, the program offers
          in-depth knowledge of programming languages, data structures,
          algorithms, database systems, web and mobile application development,
          and emerging technologies like Artificial Intelligence, Machine
          Learning, and Data Analytics. With a strong academic framework, modern
          laboratories, and project-based learning, the MCA department at MMMUT
          empowers students to develop problem-solving abilities and
          industry-ready technical skills. The curriculum is continuously
          updated to align with current industry trends, supported by
          experienced faculty and mentorship opportunities. The department also
          emphasizes soft skills, teamwork, and professionalism—ensuring
          holistic development. Graduates from the MCA program have been placed
          in top IT companies such as Accenture, IBM, Streebo, and LTIMindtree,
          reflecting the strong placement support and reputation of the
          university. Through academic excellence, practical exposure, and a
          focus on innovation, MCA at MMMUT offers a solid foundation for a
          successful career in the tech industry
        </p>

        <div className="flex justify-center">
          <a href="https://www.mmmut.ac.in/A_PG" target="_blank">
            {" "}
            <button className="bg-blue-400 px-6 py-2 rounded-r-full rounded-l-full hover:bg-blue-600 text-white">
              know more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMCA;
