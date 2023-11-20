// Next image
import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Framer motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

import Typing from "/components/Typing";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* bg img */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-center xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      {/* texto */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* titulo */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Eu sou <br />{" "}
            <span className="text-accent">
              <Typing />
            </span>
          </motion.h1>

          {/* subtitulo */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Apaixonado por astronomia e sempre tentando me aprimorar até
            alcançar o infinito.
          </motion.p>
          {/* botão */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Particicles */}
        <ParticlesContainer />
        {/* Avatar Image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[550px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:right-[10%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
