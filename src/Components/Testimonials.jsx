import { useRef } from "react";
import testimonialsImage from "../images/testimonials.png";

const Testimonials = () => {
  const testifys = [
    {
      image: testimonialsImage,
      header: "Will Baker",
      title: "Marketing Director at Forbes",
    },
    {
      image: testimonialsImage,
      header: "Samson Reggie",
      title: "CEO of Diamond Access",
    },
    {
      image: testimonialsImage,
      header: "Frank Batista",
      title: "Senior Engineer at Polarinka",
    },
  ];

  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="p-5 md:p-10 mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
        <h1 className="bg-[#191A23] rounded text-lg text-center px-4 py-2 text-white">
          Testimonials
        </h1>
        <p className="text-stone-800 text-center md:text-left">
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </p>
      </div>

      {/* Swipeable Testimonials */}
      <div
        className="mt-10 overflow-x-auto no-scrollbar flex lg:gap-6 p-20 bg-[#191A23] rounded-[30px]"
        ref={scrollRef}
        onWheel={handleScroll}>
        {testifys.map((testify, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[300px] flex-shrink-0">
            <img
              src={testify.image}
              alt="Testimonials"
              className="lg:w-full w-[50%] rounded-lg hover:scale-110 transition duration-300"
            />
            <h1 className="mt-3 text-lg text-[#B9FF66] lg:text-center text-left">
              {testify.header}
            </h1>
            <p className="text-sm text-white lg:text-center text-left">{testify.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;