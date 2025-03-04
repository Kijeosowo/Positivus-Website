import "react";
import { Link } from "react-router";
import Ai from "../images/ai.png";
import { motion, easeOut } from "framer-motion";

const HowWeWork = () => {
  const processes = [
    {
      number: "01",
      title: "Website Audit & Analysis",
      paragraph:
        "We conduct a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
    },
    {
      number: "02",
      title: "Keyword Research & Strategy",
      paragraph:
        "We analyze market trends and competitors to identify high-impact keywords and develop a tailored strategy for your business.",
    },
    {
      number: "03",
      title: "On-Page Optimization",
      paragraph:
        "Our team optimizes your website’s structure, metadata, and content to enhance search engine visibility and user experience.",
    },
    {
      number: "04",
      title: "Content Creation & Optimization",
      paragraph:
        "We create high-quality, SEO-friendly content that engages your audience and improves search engine rankings.",
    },
    {
      number: "05",
      title: "Link Building",
      paragraph:
        "We build authoritative backlinks to increase domain credibility and improve search rankings.",
    },
    {
      number: "06",
      title: "Monitoring & Reporting",
      paragraph:
        "We track progress with in-depth analytics and provide transparent reports to measure the impact of our strategies.",
    },
  ];

  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay, ease: "easeOut" },
    }),
  };

  return (
    <section className="mt-20 p-5 md:p-10">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
        <h1 className="bg-[#191A23] text-white text-lg text-center px-4 py-2 rounded">
          How We Work: SEO Process
        </h1>
        <p className="text-stone-800 text-sm md:text-base">
          Our step-by-step SEO Process ensures your website ranks higher,
          attracts more traffic, and drives lasting results.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {processes.map((process, index) => (
          <motion.div
            key={index}
            className="flex gap-5 bg-[#F3F3F3] p-8 rounded-[30px] items-center group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popIn}
            custom={index * 0.2}>
            <div className="flex items-center justify-center lg:w-20 w-20 h-20 h-10 p-5 md:w-20 md:h-20 bg-[#191A23] text-[#B9FF66] text-2xl md:text-3xl font-bold rounded-full">
              {process.number}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-semibold">
                {process.title}
              </h1>
              <p className="text-sm md:text-base text-gray-700">
                {process.paragraph}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between bg-[#F3F3F3] p-10 md:p-20 mt-10 rounded-[30px] items-center gap-10 group">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Ready to Elevate Your Search Rankings?
          </h1>
          <hr className="border-gray-400 w-20 mx-auto md:mx-0" />
          <p className="text-gray-700">
            Get started with our proven SEO strategies and take your website to
            the next level.
          </p>
          <Link
            to="/pricing"
            className="text-center bg-[#191A23] text-[#fff] rounded p-3 transition duration-300 hover:bg-[#fff] hover:text-[#191A23] hover:border hover:border-[#191A23]">
            Boost my Rankings
          </Link>
        </motion.div>

        <div className="">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={Ai}
            alt="AI"
            className="w-[100%] mx-auto transition-transform duration-300 group-hover:scale-110">
            </motion.img>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
