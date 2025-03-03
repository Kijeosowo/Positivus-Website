import "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import LandingImage from "../images/services.png";
import { FaCircleArrowUp } from "react-icons/fa6";
import Howwework from "../Components/howwework";
import Footer from "../Components/Footer";

const ServicesPage = () => {
  return (
    <section>
      <section className="p-5 md:p-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-10 bg-[#F3F3F3] rounded-[30px] p-10 md:p-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-[50%]">
            <img
              src={LandingImage}
              alt="landing image"
              className="w-[50%] max-w-[400px] md:max-w-[90%] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full md:w-[50%] flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Expert Digital <br />
              Marketing Services
            </h1>
            <p className="text-sm text-gray-700">
              Unlock your business’s full potential with tailored strategies
              designed to drive growth and deliver results.
            </p>
          </motion.div>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-10">
          <Link
            to="/"
            className="flex gap-2 text-[#191A23] text-xl items-center">
            <FaCircleArrowUp /> Back
          </Link>
        </motion.div>

        {/* SEO Section */}
        <div className="flex flex-col justify-around md:flex-row bg-[#191A23] text-white rounded-[30px] p-10 md:p-20 mt-10 gap-10 items-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-2xl md:text-3xl text-center md:text-left">
            Search Engine <br /> Optimization
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="w-full md:w-[60%] flex flex-col gap-5 text-center md:text-left">
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              consequuntur porro, error repellendus nobis consequatur autem
              commodi numquam molestiae eligendi voluptatibus alias! Cumque
              corporis voluptas sit tenetur quaerat quia corrupti?
            </p>
            <Link
              to=""
              className="text-center bg-white text-[#191A23] rounded p-3 transition duration-300 hover:bg-[#191A23] hover:text-white hover:border hover:border-white">
              Boost my Rankings
            </Link>
          </motion.div>
        </div>
      </section>

      <Howwework />
      <Footer />
    </section>
  );
};

export default ServicesPage;
