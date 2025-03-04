import "react";
import { Link } from "react-router";
import logo from "../images/whitelogo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#191A23] mx-auto max-w-1xl rounded-tl-[30px] rounded-tr-[30px] p-5">
      <div className="pt-5">
        <nav className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-5 md:mb-0">
            <Link to="/">
              <img src={logo} className="w-32 md:w-48" alt="Logo" />
            </Link>
          </div>

          <div className="mb-5 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-5 text-sm text-white">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/usecase">Use Case</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 text-white text-xl">
            <Link to="/">
              <FaLinkedinIn />
            </Link>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </nav>
      </div>

      <section className="mx-auto max-w-1xl pt-5">
        <div className="flex flex-col md:flex-row justify-around items-center pt-10 pb-10 gap-5">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="bg-[#B9FF66] inline-block p-2 rounded text-sm">
              Contact us:
            </p>
            <p className="text-white text-sm">E-mail: info@positivus.com</p>
            <p className="text-white text-sm">Phone: 555-567-8901</p>
            <p className="text-white text-sm">
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="bg-[#292A32] flex flex-col md:flex-row items-center gap-5 p-5 rounded-[10px] w-full md:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="border border-white p-3 rounded-[10px] text-white placeholder:text-white w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-[#B9FF66] p-3 rounded-[10px] w-full md:w-auto">
              Subscribe to news
            </button>
          </div>
        </div>

        <hr className="text-white ml-[10%] mr-[10%]" />

        <div className="flex flex-col md:flex-row justify-around items-center pt-20 pb-10 gap-3 text-center md:text-left">
          <p className="text-white text-sm">
            @2023 Positivus. All Rights Reserved.
          </p>
          <Link to="" className="text-sm text-white underline">
            Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
