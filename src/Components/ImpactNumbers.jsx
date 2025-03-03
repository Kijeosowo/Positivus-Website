import "react";
import LandingImage from "../images/thirdsec.png";
import { easeOut, motion } from "framer-motion";

const ImpactNumbers = () => {
  // Animation Variants
  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 2, delay, ease: "easeOut" },
    }),
  };
  return (
    <div className="p-5 md:p-10">
      {/* Impact Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true }}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
          <h1 className="bg-[#191A23] rounded text-lg text-center px-4 py-2 text-white">
            Our Impact in Numbers
          </h1>
          <p className="text-stone-800 text-center md:text-left">
            A snapshot of the milestones and achievements{" "}
            <br className="hidden md:block" />
            that drive our success.
          </p>
        </div>
      </motion.div>

      {/* Numbers Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {[
          { number: "8+", label: "Years of experience" },
          { number: "50+", label: "Experts" },
          { number: "100+", label: "Successful Campaigns" },
          { number: "20+", label: "Industry Awards" },
          { number: "500%", label: "ROI for our Clients" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popIn}
            custom={index * 0.2}>
            <div className="flex flex-col items-center gap-2 p-6 bg-white border-t-2 rounded-t-[20px] w-[150px] md:w-[200px]">
              <h1 className="text-3xl font-semibold">{item.number}</h1>
              <p className="text-sm text-center">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Values Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10 mt-20">
        <h1 className="bg-[#191A23] rounded text-lg text-center px-4 py-2 text-white">
          Core Values
        </h1>
        <p className="text-stone-800 text-center md:text-left">
          At the heart of everything we do <br className="hidden md:block" />
          are our core values.
        </p>
      </motion.div>
      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {[
          "Client Success First",
          "Innovation & Creativity",
          "Data-Driven Strategies",
          "Collaboration & Transparency",
        ].map((value, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border border-b-4 rounded-[20px] p-20 group hover:bg-[#191A23] transition ease-in-out duration-300">
            <h1 className="text-xl font-semibold group-hover:text-white">
              {value}
            </h1>
            <hr className="group-hover:text-white" />
            <p className="text-sm group-hover:text-white">
              We are dedicated to achieving measurable results for our clients.
              Each strategy is tailored to meet unique business goals and drive
              long-term success.
            </p>
          </div>
        ))}
      </div>
      {/* Quote Section */}
      <div className="flex flex-col md:flex-row bg-[#191A23] rounded-[30px] justify-center items-center mt-20 p-20 gap-10">
        <div className="w-full md:w-[40%] flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }} // Slide in from right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            src={LandingImage}
            alt="Landing"
            className="w-[80%] md:w-[90%] max-w-[300px]"></motion.img>
        </div>
        <div className="flex flex-col gap-5 text-center md:text-left text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Slide in from right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}>
            <h1 className="text-2xl md:text-4xl">
              At Positivus, we believe that <br className="hidden md:block" />
              success is built on <br className="hidden md:block" />
              innovation, collaboration, <br className="hidden md:block" />
              and a relentless focus on <br className="hidden md:block" />
              delivering results.
            </h1>
            <p className="text-sm">~ Michael Smith, Founder of Positivus</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImpactNumbers;
