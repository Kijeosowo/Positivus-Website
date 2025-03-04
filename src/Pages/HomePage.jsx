import "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import hero from "../images/hero.png";
import Companylogo from "../Components/Companylogo";
import Secondsec from "../Components/Secondsec";
import Thingshappen from "../Components/Thingshappen";
import Casestudies from "../Components/Casestudies";
import WorkingProcess from "../Components/WorkingProcess";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 lg:px-48 px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl text-center md:text-left">
            Navigating the <br /> digital landscape <br /> for success.
          </h1>
          <p className="text-sm text-stone-800 mt-5 text-center md:text-left">
            Our digital marketing agency helps businesses grow and <br />
            succeed online through a range of services including <br /> SEO,
            PPC, social media marketing, and content creation.
          </p>
          <div className="mt-5 flex justify-center md:justify-start">
            <Link
              to="/blog"
              className="pt-3 pb-3 pl-7 pr-7 rounded-[10px] bg-[#191A23] text-white hover:text-[#191A23] hover:bg-white hover:border transition ease-in-out duration-300">
              Book a consultation
            </Link>
          </div>
        </motion.div>

        <div className="mt-10 md:mt-0">
          <img
            src={hero}
            alt="Hero"
            className="w-full md:w-[90%] transiton ease-in-out duration-300"
          />
        </div>
      </div>

      <Companylogo />
      <Secondsec />
      <Thingshappen />
      <Casestudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default HomePage;