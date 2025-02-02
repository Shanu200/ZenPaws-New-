import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaCalendarCheck, FaUsers, FaBone } from "react-icons/fa";

const Banner = () => {
  return (
  
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8}}
      className="bg-gray-50 p-10 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto mt-6"
    >
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mr-10">
          Helping a local <br />
          <span className="text-orange-700 mr-6">pet therapy shop thrive</span>
        </h2>
        <p className="text-gray-500 mt-1 mr-5">ZenPaws grows with love, care, and dedication</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center md:text-right w-full md:w-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-center md:justify-start gap-3">
          <FaUsers className="text-orange-700 text-2xl" />
          <div>
            <p className="text-orange-700 text-xl font-bold">242,341</p>
            <p className="text-gray-500">Customers</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center justify-center md:justify-start gap-3">
          <FaCalendarCheck className="text-orange-700 text-2xl" />
          <div>
            <p className="text-orange-700 text-xl font-bold">28,867</p>
            <p className="text-gray-500">Bookings</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center justify-center md:justify-start gap-3">
          <FaPaw className="text-orange-700 text-2xl" />
          <div>
            <p className="text-orange-700 text-xl font-bold">46,328</p>
            <p className="text-gray-500">Pet Clubs</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center justify-center md:justify-start gap-3">
          <FaBone className="text-orange-700 text-2xl" />
          <div>
            <p className="text-orange-700 text-xl font-bold">926,436</p>
            <p className="text-gray-500">Treats Given</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


export default Banner;
