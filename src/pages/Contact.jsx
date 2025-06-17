import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Input Changed");
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contactUser/contactUser",
        formData
      );
      alert("Message sent successfully!");
      console.log(response.data);
    } catch (err) {
      console.log("error is:", err);
      alert("error occured");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-white to-purple-50 shadow-lg rounded-xl border border-purple-100"
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Have questions or feedback? We'd love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-[1.02] active:scale-[0.98] font-medium"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
