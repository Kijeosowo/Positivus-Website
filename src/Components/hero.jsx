import "react";
import sarah from "../images/sarah.png";
import Factsaboutppc from "./factsaboutppc";
import { motion } from "framer-motion";
import Footer from "./Footer";

const hero = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center mt-20 ml-20 mr-20 pb-3">
        <div className="flex items-center gap-3">
          <img src={sarah} alt="Sarah kim" className="w-18" />
          <div className="flex flex-col">
            <h1 className="font-semibold">Sarah Kim</h1>
            <p className="text-sm">Content Creator</p>
          </div>
        </div>

        <div className="flex">
          <p className="text-gray-300 text-3xl">A</p>
          <p className="font-semibold text-3xl">A</p>
          <p className="text-gray-300 text-3xl">A</p>
        </div>
      </div>
      <hr className="ml-20 mr-20" />

      <div className="mt-10 lg:ml-[10%] lg:mr-[10%] ml-5 mr-5">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          repellat fugit ullam molestiae numquam ea soluta, corporis optio
          nulla? Numquam, porro maiores cupiditate dignissimos rem tempora
          sapiente aspernatur dolores magnam non quam et, aperiam asperiores sed
          natus possimus itaque, facilis quisquam fugit dolorem architecto qui
          explicabo repellendus sunt. Excepturi quidem facere debitis autem
          nostrum officiis incidunt, impedit adipisci, amet tempora sunt saepe!
          Officia, aliquid placeat illum reiciendis voluptatibus possimus
          corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Labore quae ullam tempore doloremque iusto non libero inventore
          deserunt, temporibus aperiam commodi, fugit sequi deleniti. Adipisci
          enim veritatis fuga veniam provident ea doloribus tempora consequatur
          ipsa quam ut debitis quisquam vitae necessitatibus, quo esse, quaerat
          ducimus.
        </motion.p>

        <h1 className="text-4xl mt-10">The challenge of standing out online</h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          repellat fugit ullam molestiae numquam ea soluta, corporis optio
          nulla? Numquam, porro maiores cupiditate dignissimos rem tempora
          sapiente aspernatur dolores magnam non quam et, aperiam asperiores sed
          natus possimus itaque, facilis quisquam fugit dolorem architecto qui
          explicabo repellendus sunt. Excepturi quidem facere debitis autem
          nostrum officiis incidunt, impedit adipisci, amet tempora sunt saepe!
          Officia, aliquid placeat illum reiciendis voluptatibus possimus
          corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Labore quae ullam tempore doloremque iusto non libero inventore
          deserunt, <br /> <br /> temporibus aperiam commodi, fugit sequi
          deleniti. Adipisci enim veritatis fuga veniam provident ea doloribus
          tempora consequatur ipsa quam ut debitis quisquam vitae
          necessitatibus, quo esse, quaerat ducimus.
        </motion.p>

        <h1 className="text-4xl mt-10">Comparing PPC and Oraganic Marketing</h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          repellat fugit ullam molestiae numquam ea soluta, corporis optio
          nulla? Numquam, porro maiores cupiditate dignissimos rem tempora
          sapiente aspernatur dolores magnam non quam et, aperiam asperiores sed
          natus possimus itaque, facilis quisquam fugit dolorem architecto qui
          explicabo repellendus sunt. Excepturi quidem facere debitis autem
          nostrum officiis incidunt, impedit adipisci, amet tempora sunt saepe!
          Officia, aliquid placeat illum reiciendis voluptatibus possimus
          corrupti. Excepturi quidem facere debitis autem nostrum officiis
          incidunt, impedit adipisci, amet tempora sunt saepe! Officia, aliquid
          placeat illum reiciendis voluptatibus possimus corrupti. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Labore quae ullam tempore
          doloremque iusto non libero inventore deserunt, <br /> <br />{" "}
          temporibus aperiam commodi, fugit sequi deleniti. Adipisci enim
          veritatis fuga veniam provident ea doloribus tempora consequatur ipsa
          quam ut debitis quisquam vitae necessitatibus, quo esse, quaerat
          ducimus.
        </motion.p>

        <h1 className="text-4xl mt-10">Striking the Right Balance</h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white mt-5 p-5 border-l-7 border-[#B9FF66]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
          laudantium tempora quis, optio sit accusantium sint, facilis harum
          sunt assumenda cum voluptatum quae beatae expedita quaerat!. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quos,
          minima maxime facilis eveniet debitis eos dolores quas porro dolor
          earum, molestias iusto, velit voluptate laboriosam a nostrum nemo
          aliquid.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          repellat fugit ullam molestiae numquam ea soluta, corporis optio
          nulla? Numquam, porro maiores cupiditate dignissimos rem tempora
          sapiente aspernatur dolores magnam non quam et, aperiam asperiores sed
          natus possimus itaque, facilis quisquam fugit dolorem architecto qui
          explicabo repellendus sunt. Excepturi quidem facere debitis autem
          nostrum officiis incidunt, impedit adipisci, amet tempora sunt saepe!
          Officia, aliquid placeat illum reiciendis voluptatibus possimus
          corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Labore quae ullam tempore doloremque iusto non libero inventore
          deserunt, <br /> <br /> temporibus aperiam commodi, fugit sequi
          deleniti. Adipisci enim veritatis fuga veniam provident ea doloribus
          tempora consequatur ipsa quam ut debitis quisquam vitae
          necessitatibus, quo esse, quaerat ducimus.
        </motion.p>

        <h1 className="text-4xl mt-10">
          By the Numbers: Facts about PPC and <br /> Organic Marketing
        </h1>

        <div>
          <Factsaboutppc />
        </div>

        <h1 className="text-4xl mt-10">Real World Examples</h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          repellat fugit ullam molestiae numquam ea soluta, corporis optio
          nulla? Numquam, porro maiores cupiditate dignissimos rem tempora
          sapiente aspernatur dolores magnam non quam et, aperiam asperiores sed
          natus possimus itaque, facilis quisquam fugit dolorem architecto qui
          explicabo repellendus sunt. Excepturi quidem facere debitis autem
          nostrum officiis incidunt, impedit adipisci, amet tempora sunt saepe!
          Officia, aliquid placeat illum reiciendis voluptatibus possimus
          corrupti. Excepturi quidem facere debitis autem nostrum officiis
          incidunt, impedit adipisci, amet tempora sunt saepe! Officia, aliquid
          placeat illum reiciendis voluptatibus possimus corrupti. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Labore quae ullam tempore
          doloremque iusto non libero inventore deserunt, <br /> <br />{" "}
          temporibus aperiam commodi, fugit sequi deleniti. Adipisci enim
          veritatis fuga veniam provident ea doloribus tempora consequatur ipsa
          quam ut debitis quisquam vitae necessitatibus, quo esse, quaerat
          ducimus.
        </motion.p>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default hero;
