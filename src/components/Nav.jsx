import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cap from "/files/cap.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/faculty", label: "Faculty" },
    { path: "/resources", label: "Resources" },
    { path: "/csse", label: "CSSE Society" },
    { path: "/alumni", label: "Alumni" },
    { path: "/placement", label: "Placement" },
    { path: "/about-mca", label: "About MCA" },
    { path: "/galleries", label: "Gallery" },
    { path: "/about-mmmut", label: "About MMMUT" },
    { path: "/contact", label: "Contact Form" },
    { path: "/admin/contacts", label: "Admin Contacts" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-green-50  backdrop-blur-md shadow-sm"
    >
      <div className=" mx-auto  ">
        <div className="flex justify-center items-center w-full bg-orange-300">
          <motion.div className="flex justify-center items-center  p-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-4xl font-bold bg-fary-50  bg-clip- text-gray-50">
                MCA MALVIYANS
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: -10,
            }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          >
            <img src={cap} className="h-10 rounded-full" alt="" />
          </motion.div>
        </div>

        <div className="flex justify-center w-full  bg-blue-100 items-center h-20 ">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg text-blue-500">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className="text-blue-600 hover:text-indigo-600 transition-colors duration-200 font-semibold"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    initial={false}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <i
                className={`ri-${isMenuOpen ? "close" : "menu"}-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Nav;
