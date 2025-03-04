import "react";
import LandingImage from "../images/usecase.png";
import Footer from "../Components/Footer";
import Featuredsuccess from "../Components/Featuredsuccess";
import Thingshappen from "../Components/Thingshappen";
import { motion } from "framer-motion";

const UseCasePage = () => {
  return (
    <section>
      <div className="px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-center items-center mt-10 bg-[#F3F3F3] rounded-[30px] p-10 md:p-20 gap-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2">
            <img
              src={LandingImage}
              alt="landing image"
              className="w-full max-w-[400px] mx-auto md:mx-0 transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Proven Success <br /> Stories
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              PPC and organic marketing each offer unique <br /> benefits for
              driving traffic and growing your <br /> business. Discover which
              strategy aligns best <br /> with your goals and how to strike the
              perfect <br /> balance.
            </p>
          </motion.div>
        </motion.div>

        <Featuredsuccess />
        <Thingshappen />
      </div>

      <Footer />
    </section>
  );
};

export default UseCasePage;
