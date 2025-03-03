import "react";
import { Link } from "react-router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Featuredsuccess = () => {
  const successStories = [
    {
      title: "E-Commerce Fashion Brand",
      description:
        "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    },
    {
      title: "Local Restaurant Chain",
      description:
        "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    },
    {
      title: "Healthcare Provider",
      description:
        "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    },
  ];

  // Animation Variants
  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay, ease: "easeOut" },
    }),
  };

  return (
    <div className="md:px-10">
      {/* Featured Story Section */}
      <div className="mt-20 bg-[#191A23] flex flex-col md:flex-row justify-between items-center p-10 md:p-20 rounded-[30px] gap-10">
        {/* Left Content */}
        <aside className="flex flex-col gap-5 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:w-[50%] text-2xl md:text-3xl text-[#191A23] bg-[#B9FF66] p-2 rounded">
            Featured Success Story
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-white text-xl md:text-2xl">
            Scaling Success for a <br /> Leading E-commerce Brand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="text-sm md:text-base text-gray-400">
            Through a comprehensive SEO and PPC strategy, we helped this
            e-commerce brand increase visibility, drive traffic, and boost
            sales.
          </motion.p>
          <motion.Link
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            to=""
            className="flex gap-2 text-[#B9FF66] justify-center md:justify-start">
            <BsArrowUpRightCircleFill className="mt-1" /> Read
          </motion.Link>
        </aside>

        {/* Right Content (Stats) */}
        <aside className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: "200%", text: "increase in organic traffic" },
            { value: "150%", text: "rise in online sales" },
            { value: "75%", text: "reduction in cost-per-click (CPC)" },
            { value: "300%", text: "improvement in conversion rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popIn}
              custom={index * 0.2}
              className="group bg-white rounded-[20px] p-5 flex flex-col justify-center items-center">
              <h1 className="text-[#191A23] text-2xl md:text-4xl font-semibold">
                {stat.value}
              </h1>
              <p className="text-center text-sm md:text-base">{stat.text}</p>
            </motion.div>
          ))}
        </aside>
      </div>

      {/* All Success Stories Section */}
      <section className="mt-20">
        <motion.div
          whileInView={{ opacity: 1, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col md:flex-row gap-5 items-center md:items-start
          text-center md:text-left -ml-10 px-10 lg:px-0 lg:ml-0">
          <h1 className="bg-[#191A23] text-white rounded text-lg p-2">
            All Success Stories
          </h1>
          <p className="text-stone-800 text-sm md:text-base">
            Explore real-life examples of our proven digital marketing success
            through our case studies.
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {successStories.map((story, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popIn}
              custom={index * 0.2}
              key={index}
              className="p-5 md:p-10 rounded-[20px] group hover:bg-[#191A23] transition ease-in-out duration-300 border">
              <h1 className="text-xl md:text-2xl text-[#191A23] font-semibold group-hover:text-white">
                {story.title}
              </h1>
              <p className="text-[#333] text-sm md:text-base group-hover:text-white">
                {story.description}
              </p>
              <Link
                to=""
                className="flex gap-2 text-[#191A23] group-hover:text-white mt-2">
                <BsArrowUpRightCircleFill className="mt-1" /> Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Featuredsuccess;
