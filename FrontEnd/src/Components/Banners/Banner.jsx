import React from "react";
import { motion } from "framer-motion";
import BgImage from "../../assets/Home Assest/Untitled design.png";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container  w-full py-28 md:py-85 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold text-red-700 !leading-snug">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-lg text-black font-bold leading-relaxed">
              Stay updated with our
              <br />
              latest news and special offers.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium shadow-lg hover:bg-blue-600"
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
