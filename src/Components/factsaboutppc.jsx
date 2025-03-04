import "react";
import { motion } from "framer-motion";

const FactsAboutPPC = () => {
  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay, ease: "easeInOut" },
    }),
  };
  return (
    <section className="mt-10 px-5">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5
        max-w-screen-lg mx-auto">

        {/* Fact 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={popIn}
          className="border border-b-5 rounded-2xl bg-white p-6 sm:p-10 flex flex-col items-center text-center">
          <p>Businesses earn an average of</p>
          <h1 className="text-lg sm:text-xl font-bold">
            $2 for every $1 spent
          </h1>
          <p>on PPC advertising</p>
        </motion.div>

        {/* Fact 2 */}
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={popIn} className="border border-b-5 rounded-2xl bg-[#B9FF66] p-6 sm:p-10 col-span-1 sm:col-span-2 text-center">
          <h1 className="text-xl sm:text-2xl font-bold">41% of clicks</h1>
          <p>
            on search engines go to the top three organic results, showing the{" "}
            importance of ranking highly.
          </p>
        </motion.div>

        {/* Fact 3 */}
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={popIn} className="border border-b-5 rounded-2xl bg-[#F3F3F3] p-6 sm:p-10 col-span-1 sm:col-span-2 flex flex-col justify-center items-center text-center">
          <p>
            Content marketing costs{" "}
            <span className="font-bold text-xl sm:text-2xl">
              62% less than paid ads
            </span>
          </p>
          <p>
            but generates{" "}
            <span className="font-bold text-xl sm:text-2xl">
              3x as many leads
            </span>
          </p>
        </motion.div>
        
        {/* Fact 4 */}
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={popIn} className="border border-b-5 rounded-2xl bg-[#191A23] p-6 sm:p-10 text-center text-white">
          <p>Organic search drives</p>
          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="text-[#B9FF66]">53%</span> of all website traffic,
          </h1>
          <p>making it the largest single source of traffic.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FactsAboutPPC;
