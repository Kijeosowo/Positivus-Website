import "react";
import { motion } from "framer-motion";
import amazon from "../images/amazon.png";
import dribbble from "../images/dribbble.png";
import hubspot from "../images/hubspot.png";
import notion from "../images/notion.png";
import netflix from "../images/netflix.png";
import zoom from "../images/zoom.png";

const logos = [amazon, dribbble, hubspot, notion, netflix, zoom];

const CompanyLogo = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-5">
      <motion.div
        className="flex w-max"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`company-logo-${index}`}
            className="w-24 mx-10 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CompanyLogo;
