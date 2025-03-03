import "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Thirdsecimg from "../images/thirdsec.png";

const Thingshappen = () => {
  return (
    <section className="p-5 md:p-10">
      <motion.div
        className="bg-[#F3F3F3] rounded-[30px] flex flex-col md:flex-row justify-around items-center gap-10 p-10 md:p-16"
        initial={{ opacity: 0, y: 50 }} // Fade in and slide up
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-4 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }} // Slide in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Lets Make Things Happen
          </h1>
          <p className="text-sm text-stone-800">
            Contact us today to learn more about how our digital{" "}
            <br className="hidden md:block" />
            marketing services can help your business grow and{" "}
            <br className="hidden md:block" />
            succeed online.
          </p>
          <div className="mt-5">
            <motion.div
              whileHover={{ scale: 1.05 }} // Button hover effect
              transition={{ duration: 0.3 }}>
              <Link
                to=""
                className="border py-3 px-6 rounded-[10px] bg-[#191A23] text-white text-sm md:text-base hover:bg-[#333] transition duration-300">
                Get Your Free Proposal
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src={Thirdsecimg}
          className="w-full md:w-[50%] lg:w-[40%] max-w-[400px] transition duration-300 ease-in-out"
          alt="Things Happen"
          initial={{ opacity: 0, x: 50 }} // Slide in from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default Thingshappen;