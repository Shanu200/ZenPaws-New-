import React from "react";
import Herogif from "../../assets/Home Assest/Untitled design.gif";
import {motion} from "framer-motion";
import { FadeRight } from "../../utility/HomeUtility/animation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        <div className="flex flex-col justify-center py-10 md:py-1 relative z-10">
          <div className="text-center md:text-left space-y-5 lg:max-w-[450px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="ml-24 text-4xl lg:text-5xl font-semi bold xl:leading-loose font-poppins text-gray-900 md:text-left "
            >
              Relax and Heal
              with
              <br />
              <span className="text-orange-600 ">
                Our Pet Therapy Services!
              </span>
            </motion.h1>

            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 ml-14 font-medium leading-relaxed justify-center"
            >
              "Welcome to our pet therapy services! Relax and feel calm with our
              friendly cats, happy dogs, and peaceful fish. Spend time with our
              pets and enjoy a break from stress. Let them help you feel happy
              and refreshed."
            </motion.p>

            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-2xl ml-20 tracking-wide text-red-950 font-semibold"
            >
              Book Your Therapy Session Now
            </motion.p>

            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <Link to="/categories">
                <button1 className="ml-50 primary-btn bg-orange-700 text-white px-6 py-3 rounded-2xl hover:bg-orange-800 transition cursor-pointer">
                  Book Now
                </button1>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            src={Herogif}
            alt="Hero Animation"
            className="w-[750px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

