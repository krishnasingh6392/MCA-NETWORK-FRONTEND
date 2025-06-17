import React from "react";
import { useState } from "react";
import axios from "axios";

const FacultyRegistration = () => {
  const [form, setform] = useState({
    name: "",
    designation: "",
    contact: "",
    email: "",
    specialization: "",
  });

  const handleInput = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/facultyregister/facultyregister",
        form
      );
      alert("Registerd successfully");
      console.log(response.data);
    } catch (err) {
      console.log("error is:", err);
      alert(" Error Occured");
    }
  };

  return (
    <div className="mt-24">
      <p className="text-center text-3xl font-semibold">Faculty Registartion</p>

      <div className=" flex justify-center mt-8 ">
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[600px] rounded-md shadow-lg h-[400px] "
          >
            <div className="flex justify-center gap-2 pt-8">
              <label className="font-semibold text-xl w-40 flex justify-center items-center ">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="Enter the Name"
                className="w-[300px] text-center text-gray-50  h-10 bg-blue-500  rounded-r-full  rounded-l-full border border-blue-600 placeholder:text-center placeholder:text-gray-50  "
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <label className="font-semibold text-xl w-40 flex justify-center items-center ">
                Designation:
              </label>
              <input
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleInput}
                placeholder="Enter the Designation"
                className="w-[300px] text-center text-gray-50   h-10 bg-blue-500  rounded-r-full  rounded-l-full border border-blue-600 placeholder:text-center placeholder:text-gray-50  "
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <label className="font-semibold text-xl w-40 flex justify-center items-center ">
                Contact No:
              </label>
              <input
                type="contact"
                name="contact"
                value={form.contact}
                onChange={handleInput}
                placeholder="Enter the Contact No"
                className="w-[300px] text-center text-gray-50   h-10 bg-blue-500  rounded-r-full  rounded-l-full border border-blue-600 placeholder:text-center placeholder:text-gray-50  "
              />
            </div>{" "}
            <div className="flex justify-center gap-2 mt-4">
              <label className="font-semibold text-xl w-40 flex justify-center items-center ">
                Email:
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={form.email}
                placeholder="Enter the Email"
                className="w-[300px] text-center text-gray-50   h-10 bg-blue-500  rounded-r-full  rounded-l-full border border-blue-600 placeholder:text-center placeholder:text-gray-50  "
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <label className="font-semibold text-xl w-40 flex justify-center items-center ">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                value={form.specialization}
                onChange={handleInput}
                placeholder="Enter the Specialization"
                className="w-[300px] text-center text-gray-50   h-10 bg-blue-500  rounded-r-full  rounded-l-full border border-blue-600 placeholder:text-center placeholder:text-gray-50  "
              />
            </div>
            <div className="mt-8 flex justify-center items-center">
              <button
                type="submit"
                className="bg-orange-300 w-full mx-8 py-2 font-semibold rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyRegistration;
