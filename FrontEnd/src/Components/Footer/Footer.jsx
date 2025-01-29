import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../../assets/Home Assest/zenpaws.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#e3dcd6] text-[#0c0c0c] pt-8 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-10 md:px-32">
        {/* Footer Main Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8"
          variants={fadeInUp}
        >
          {/* Left Section: Logo */}
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <img src={logo} alt="Logo" className="h-60 w-auto " />
          </div>

          {/* Center Section: Information & Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Why Zen Paws?</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Experience the joy of personalized pet therapy sessions with our
              highly trained and loving therapy pets. Zen Paws is dedicated to
              creating moments of peace and happiness for everyone.
            </p>

            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <div className="flex justify-center space-x-8 mb-6">
              {["aboutus", "Categories", "Login", "Contact", "Cart"].map(
                (link) => (
                  <motion.a
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-xl font-medium hover:text-[#eb9329f4] transition"
                    variants={fadeInUp}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: <FaFacebook size={35} />, href: "#", color: "#2735b8" },
                { icon: <FaLinkedin size={35} />, href: "#", color: "#2735b8" },
                {
                  icon: <FaInstagram size={35} />,
                  href: "#",
                  color: "#dd1f87",
                },
                { icon: <FaYoutube size={35} />, href: "#", color: "#ea2e19" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: social.color }}
                  className="transition"
                  variants={fadeInUp}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section: Contact Information */}
          <div className="text-left ">
            <h4 className="font-bold text-2xl mb-10 ml-45">Contact Us</h4>
            <p className="text-xl mb-1 ml-38">
              Email:{" "}
              <a
                href="mailto:zenpaws@therapydogs.com"
                className="underline hover:text-[#290f93] transition"
              >
                zenpaws@therapydogs.com
              </a>
            </p>
            <p className="text-xl mb-2 ml-38 ">Phone: 071-432-0272</p>
            <p className="text-xl mb-1 ml-38">Phone: 077-843-7364</p>
            <p className="text-xl underline hover:text-[#290f93] transition ml-38">
              Privacy Policy
            </p>
            <p className="text-xl underline hover:text-[#290f93] transition ml-38">
              Terms & Conditions
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-xs text-[#0b0b0a] border-t border-[#121211] pt-4"
          variants={fadeInUp}
        >
          <p className="text-lg">
            Copyright @ 2024 ZenPaws Therapy Dogs, All Rights Reserved
          </p>
          <p className="text-lg">
            Website Design by{" "}
            <a href="#" className="hover:text-[#3129cc] transition underline">
              ZenPaws Marketing
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
