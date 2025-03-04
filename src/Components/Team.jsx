import "react";
import { motion } from "framer-motion";
import michael from "../images/michael.png";
import jane from "../images/jane.png";
import kelvin from "../images/kelvin.png";
import emily from "../images/emily.png";
import brian from "../images/brian.png";
import sarah from "../images/sarah.png";
import { LiaLinkedinIn } from "react-icons/lia";

const Team = () => {
  const teams = [
    {
      image: michael,
      name: "Michael Smith",
      title: "Ceo and Founder",
      paragraph:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      image: jane,
      name: "Jane Wallace",
      title: "Director of Operations",
      paragraph:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      image: kelvin,
      name: "Kelvin Brown",
      title: "Senior SEO Specialist",
      paragraph:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      image: emily,
      name: "Emily Johnson",
      title: "PPC Manager",
      paragraph:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      image: brian,
      name: "Brian Williams",
      title: "Social Media Specialist",
      paragraph:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      image: sarah,
      name: "Sarah Kim",
      title: "Content Creator",
      paragraph:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
  };

  return (
    <div className="p-5 md:p-10 mt-10">
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10"
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} 
      >
        <h1 className="bg-[#191A23] rounded text-lg text-center px-4 py-2 text-white">
          Team
        </h1>
        <p className="text-stone-800 text-center md:text-left">
          Meet the skilled and experienced team behind our <br /> successful
          digital marketing strategies
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-20 lg:mx-20 mx-5">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popIn}
            custom={index * 0.2}
          >
            <div className="flex flex-col gap-5 border border-b-5 bg-white p-10 rounded-[30px] shadow-lg">
              <div className="flex justify-around items-center">
                <img
                  src={team.image}
                  className="group-hover:scale-110 transition ease-in-out duration-300"
                />
                <div>
                  <h1 className="font-semibold">{team.name}</h1>
                  <p className="text-sm text-stone-800">{team.title}</p>
                </div>
                <LiaLinkedinIn className="text-3xl text-[#191A23]" />
              </div>
              <hr />
              <p className="text-sm text-stone-800">{team.paragraph}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
