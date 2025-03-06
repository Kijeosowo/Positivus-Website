import "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      number: "01",
      question: "Consultation",
      answer:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      question: "Research and Strategy Development",
      answer:
        "While it varies by project, most clients start seeing results within 3 to 6 months.",
    },
    {
      number: "03",
      question: "Implementation",
      answer:
        "Yes, we tailor our strategies to meet each client's unique business goals and target audience.",
    },
    {
      number: "04",
      question: "Monitoring and Optimization",
      answer:
        "Simply reach out to us through our contact page, and we'll schedule a consultation to discuss your needs.",
    },
    {
      number: "05",
      question: "Reporting and Communication",
      answer:
        "While it varies by project, most clients start seeing results within 3 to 6 months.",
    },
    {
      number: "06",
      question: "Continual Improvement",
      answer:
        "Simply reach out to us through our contact page, and we'll schedule a consultation to discuss your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="mb-4 border rounded-[30px] bg-gray-50 w-full md:w-[80%] lg:w-[100%] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          custom={index * 0.2}>
          <div
            className="flex justify-between items-center cursor-pointer p-10"
            onClick={() => toggleFAQ(index)}>
            <div className="flex gap-3">
              <h1 className="text-2xl md:text-3xl">{faq.number}</h1>
              <h3 className="text-base md:text-lg mt-1">{faq.question}</h3>
            </div>
            {openIndex === index ? (
              <FaCircleMinus className="text-2xl md:text-3xl text-[#191A23]" />
            ) : (
              <FaCirclePlus className="text-2xl md:text-3xl text-[#191A23]" />
            )}
          </div>

          {openIndex === index && (
            <motion.div className="text-sm p-5 md:p-7 text-gray-700 bg-[#B9FF66] rounded-b-2xl">
              {faq.answer}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Faqs;
