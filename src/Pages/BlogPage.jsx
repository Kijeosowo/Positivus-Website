import "react";
import LandingImage from "../images/hero.png";
import Hero from "../Components/hero";
import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col-reverse lg:flex-col lg:flex-row justify-center gap-32 items-center mt-10 mx-5 md:mx-10 lg:mx-20 p-10 md:p-20 bg-[#F3F3F3] rounded-[30px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full">
          <img src={LandingImage} alt="landing image" className="w-[40%]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-5 w-full lg:w-1/2 mt-5 lg:mt-0">
          <p className="text-sm bg-stone-200 w-[150px] p-2 rounded">
            Marketing Strategies
          </p>

          <h1 className="text-2xl md:text-3xl font-semibold">
            PPC vs Organic <br className="hidden md:block" />
            Marketing: Which one is <br className="hidden md:block" />
            Right for your business?
          </h1>

          <p className="text-sm md:text-base">
            PPC and organic marketing each offer unique benefits{" "}
            <br className="hidden md:block" />
            for driving traffic and growing your business.{" "}
            <br className="hidden md:block" />
            Discover which strategy aligns best with your goals{" "}
            <br className="hidden md:block" />
            and how to strike the perfect balance.
          </p>
        </motion.div>
      </motion.div>

      <Hero />
    </section>
  );
};

export default BlogPage;
