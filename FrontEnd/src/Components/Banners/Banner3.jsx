import React from "react";
import BannerPng from "../../assets/Home Assest/21-22-55-867_512.png";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../../utility/HomeUtility/animation";
import { Link } from "react-router-dom";

const Banner3 = () => {
  return (
    <section className="bg-transparent">
      <div className="constainer grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0  py-14">
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[300px] md: max-w-[400px] h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold uppercase"
            >
              Relax with Pet Therapy
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-slate-900"
            >
              Experience the calming effects of our furry and finned friends.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-slate-900"
            >
              Whether you're seeking relaxation with cats, dogs, rabbits, or the
              gentle presence of fish, we provide an environment to soothe your
              mind and body.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <Link to="/aboutus">
                <button3 className="primary-btn bg-orange-700 text-white px-6 py-3 rounded-2xl hover:bg-orange-800 transition cursor-pointer">
                  Learn More
                </button3>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
