import "react";
import LandingImage from "../images/success.png";
import ImpactNumbers from "../Components/ImpactNumbers";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <sectio>
      <div className="p-5 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#F3F3F3] rounded-[30px] flex flex-col md:flex-row justify-around items-center gap-5 p-8 md:p-16">
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-[50%] flex justify-center">
            <img
              src={LandingImage}
              alt="Landing"
              className="w-[80%] md:w-[90%] max-w-[400px] group-hover:scale-110 transition ease-in-out duration-300"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
            <div className="flex flex-col gap-5 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold">
                Together for <br className="hidden md:block" />
                Success
              </h1>

              <p className="text-sm text-stone-800 leading-relaxed">
                At Positivus, we help businesses grow by{" "}
                <br className="hidden md:block" />
                combining creativity, innovation, and data-{" "}
                <br className="hidden md:block" />
                driven strategies. Together, we build a future{" "}
                <br className="hidden md:block" />
                of shared success.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Other Components */}
        <ImpactNumbers />
      </div>
      <Footer />
    </sectio>
  );
};

export default AboutPage;
