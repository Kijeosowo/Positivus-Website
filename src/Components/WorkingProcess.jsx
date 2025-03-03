import "react";
import { motion } from "framer-motion";
import Faqs from "./Faqs";

const WorkingProcess = () => {
  return (
    <div className="p-5 md:p-10 mt-10">
      {/* Header Section with Animation */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <h1 className="bg-[#191A23] rounded text-lg text-center px-4 py-2 text-white">
          Working Process
        </h1>
        <p className="text-stone-800 text-center md:text-left">
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
      </motion.div>

      {/* FAQ Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}>
      </motion.div>
        <Faqs />
    </div>
  );
};

export default WorkingProcess;
