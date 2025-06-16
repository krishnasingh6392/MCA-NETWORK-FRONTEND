import React from "react";
import { motion } from "framer-motion";
import mmmutLogo from "../images/logo.png";

const Landing = () => {
  return (
    <div className="bg-gary-50">
      <motion.div
        style={{
          backgroundImage: 'url("/landing4.png")',
          backgroundSize: "cover",
          backgroundPosition: "center -100px",
        }}
        className="adminstrative-block  h-[400px] "
      ></motion.div>

      <motion.div>
        <p className="text-center text-3xl my-8 font-semibold font-raleway text-orange-500">
          "Empowered by knowledge, driven by dreams — We are MCA Malviyans."
        </p>
      </motion.div>
      {/* Animated MMMUT Logo */}
    </div>
  );
};

export default Landing;
