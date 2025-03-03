import "react";
import { Link } from "react-router";
import { FaCircleCheck } from "react-icons/fa6";

// ✅ Reusable Pricing Card Component
const PricingCard = ({ title, price, features, isPopular, bgColor }) => (
  <div
    className={`border border-b-5 hover:border-t-5 hover:border-b-1 flex flex-col gap-5 p-7 rounded-[20px] 
    w-full sm:w-[80%] md:w-[60%] lg:w-1/3 ${bgColor}`}>
    <div className="flex justify-between items-center">
      <p className="text-lg font-semibold">{title}</p>
      {isPopular && (
        <span className="bg-[#191A23] text-white text-xs px-3 py-1 rounded-full">
          Popular
        </span>
      )}
    </div>

    <h1 className="text-5xl">
      ${price} <span className="text-sm font-normal">/month</span>
    </h1>

    <div className="flex flex-col gap-2">
      <Link
        to=""
        className="bg-[#191A23] text-white text-center p-3 rounded w-full">
        Get Started
      </Link>
      <Link
        to=""
        className="bg-white text-[#191A23] border text-center p-3 rounded w-full">
        Request a Quote
      </Link>
    </div>

    <hr />

    <ul className="flex flex-col gap-2 text-sm">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-2">
          <FaCircleCheck className="mt-1" /> {feature}
        </li>
      ))}
    </ul>
  </div>
);

// ✅ Main Pricing Plan Component
const Pricingplan = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: 500,
      bgColor: "bg-white",
      isPopular: false,
      features: [
        "Website Optimization",
        "Social media setup and management (1 Platform)",
        "Monthly progress report",
        "Email support",
        "Basic competitor analysis",
        "Initial SEO audit",
      ],
    },
    {
      title: "Pro Plan",
      price: 1000,
      bgColor: "bg-[#B9FF66]",
      isPopular: true,
      features: [
        "Includes all from the Basic Plan",
        "Social media setup and management (up to 3 Platforms)",
        "PPC and campaign management",
        "Email and phone support",
        "On-page SEO improvement",
        "Monthly content recommendations",
      ],
    },
    {
      title: "Elite Plan",
      price: 2000,
      bgColor: "bg-white",
      isPopular: false,
      features: [
        "Includes all from the Pro Plan",
        "Website design and development",
        "Comprehensive SEO strategy",
        "Social media setup and management (up to 5 Platforms)",
        "Content marketing strategy and implementation",
        "In-depth analytics and reporting",
      ],
    },
  ];

  return (
    <section className="mt-10 text-[#191A23]">
      <div className="flex flex-wrap justify-center gap-10">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricingplan;
