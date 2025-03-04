import "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import illustration1 from "../images/illustration1.png";
import illustration2 from "../images/illustration2.png";
import illustration3 from "../images/illustration3.png";
import illustration4 from "../images/illustration4.png";
import illustration5 from "../images/illustration5.png";
import illustration6 from "../images/illustration6.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Secondsec = () => {
  const boxes = [
    {
      paragraph: "Search engine optimization",
      link: "Learn more",
      image: illustration1,
    },
    {
      paragraph: "Pay-per-click advertising",
      link: "Learn more",
      image: illustration2,
    },
    {
      paragraph: "Social Media Marketing",
      link: "Learn more",
      image: illustration3,
    },
    { paragraph: "Email Marketing", link: "Learn more", image: illustration4 },
    { paragraph: "Content Creation", link: "Learn more", image: illustration5 },
    {
      paragraph: "Analytics and Tracking",
      link: "Learn more",
      image: illustration6,
    },
  ];

  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
  ];

  return (
    <motion.div
      className="p-5 md:p-10 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
        <motion.h1
          className="bg-[#191A23] rounded text-lg text-center px-4 py-2 text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}>
          Services
        </motion.h1>
        <motion.p
          className="text-stone-800 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}>
          At our digital marketing agency, we offer a range of services to{" "}
          <br /> help businesses grow and succeed online. These services
          include:
        </motion.p>
      </div>

      <div className="flex justify-center mt-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-">
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className={`group inline-flex gap-20 p-10 border border-b-5 rounded-[30px] ${
                colors[index % colors.length]
              } cursor-pointer hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col gap-32">
                <p className="text-lg bg-white rounded p-2 font-semibold lg:max-w-48 max-w-full">
                  {box.paragraph}
                </p>
                <Link to="/services" className="flex items-center gap-2 text-[#191A23]">
                  <BsArrowUpRightCircleFill />
                  {box.link}
                </Link>
              </div>
              <div className="flex items-center">
                <motion.img
                  src={box.image}
                  alt="Illustration"
                  className="lg:w-56 lg:h-48 transform transition-transform duration-300 group-hover:scale-110"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Secondsec;
