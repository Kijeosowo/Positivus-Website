import { Link } from "react-router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Casestudies = () => {
  const details = [
    {
      paragraph:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "Learn more",
      path: "/case-study/restaurant",
    },
    {
      paragraph:
        "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
      link: "Learn more",
      path: "/case-study/b2b-software",
    },
    {
      paragraph:
        "For an e-commerce brand, we boosted customer engagement with social media campaigns, increasing sales by 150% within three months.",
      link: "Learn more",
      path: "/case-study/ecommerce",
    },
  ];

  return (
    <div className="p-5 md:p-10 mt-10">
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <h1 className="bg-[#191A23] text-white text-lg px-4 py-2 rounded">
          Case Studies
        </h1>
        <p className="text-stone-800">
          Explore Real-Life Examples of Our Proven Digital Marketing{" "}
          <br className="hidden md:block" />
          Success through Our Case Studies
        </p>
      </motion.div>

      {/* Case Studies Section */}
      <motion.div
        className="mt-10 bg-[#191A23] p-5 md:p-10 rounded-[30px] flex flex-col md:flex-row flex-wrap gap-6 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true }}>
        {details.map((detail, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-md w-full md:w-[45%] lg:w-[30%] transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}>
            <p className="text-white text-sm">{detail.paragraph}</p>
            <Link
              to={detail.path}
              className="flex items-center text-[#B9FF66] gap-2 mt-3 hover:text-[#DAFF95] transition duration-300">
              <BsArrowUpRightCircleFill />
              {detail.link}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Casestudies;