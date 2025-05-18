import React from "react";
import { Link } from "react-router-dom";
import pet1 from "../../assets/Home Assest/pets/dogs.avif";
import pet2 from "../../assets/Home Assest/pets/cats.jpg";
import pet3 from "../../assets/Home Assest/pets/rabits.webp";
import pet4 from "../../assets/Home Assest/pets/fish.jpg";
import pet5 from "../../assets/Home Assest/pets/hamsters.jpg";
import {motion} from "framer-motion";
import { FadeLeft, FadeRight } from "../../utility/HomeUtility/animation";

const MenusData = [
  {
    id: 1,
    title: "Dogs",
    link: "/Categories",
    description: "Relax and play with our friendly dogs.",
    img: pet1,
    delay:0.3,
  },

  {
    id: 2,
    title: "Cats",
    link: "/Categories",
    description: "Enjoy the company of our affectionate cats.",
    img: pet2,
    delay:0.6,
  },

  {
    id: 3,
    title: "Rabbits",
    link: "/Categories",
    description: "Experience peace with our gentle rabbits.",
    img: pet3,
    delay:0.9,
  },

  {
    id: 4,
    title: "Fish",
    link: "/Categories",
    description: "Feel calm as you watch our beautiful fish.",
    img: pet4,
    delay:1.2,
  },

  {
    id: 5,
    title: "Hamsters",
    link: "/Categories",
    description: "Play with our cute and energetic hamsters.",
    img: pet5,
    delay:1.5,
  },
];


const Menus = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
        initial = {{opacity:0, x: -200}}
        whileInView={{opacity: 1, x:0}}
        transition={{duration: 1, delay: 0.3}}
        className="text-3xl font-bold text-center text-gray-800 pb-10 uppercase">
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {MenusData.map((menu) => (
            <motion.div
              variants={FadeRight(menu.delay)}
              initial= "hidden"
              whileInView={"visible"}
              whileHover={{scale:1.1}}
              key={menu.id}
              className="bg-white rounded-xl p-6 shadow-yellow-700 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-[250px] h-[100px] mx-auto mb-4 scale-110 transform"
              />
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {menu.title}
                </h2>
              <p className="text-sm text-gray-600 text-center font-bold">
                {menu.description || "Learn more about our relaxing services."}
              </p>
              <div className="text-center mt-4">
                <Link
                  to={menu.link} // Use Link instead of <a>
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
