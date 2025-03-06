import "react";
import Pricingplan from "../Components/Pricingplan";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";

const PricingPage = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto pt-5 pl-5 pr-5">
        <div className="mt-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl">Pricing</h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700">
            Elevate your online presence: Competitive pricing{" "}
            <br className="hidden md:block" /> for Exceptional Results.
          </p>
        </div>

        <div className="mt-10">
          <Pricingplan />
        </div>

        <div className="mt-20">
          <h1 className="text-4xl md:text-5xl text-center text-[#191A23]">
            Frequently Asked Questions
          </h1>

          <div>
            <Faqs />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;
