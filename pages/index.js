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
      <head>
        <meta property="og:title" content="Samuel Saturn Dev" />
        <meta property="og:description" content="Portfolio Maneirinho" />
        <meta
          property="og:image"
          content="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec6143f1-5c7f-4d6c-b104-17a42e32ba4a/dd7pr1d-ead17cf5-aac7-4ec9-9371-7c444e1f37c8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjNjE0M2YxLTVjN2YtNGQ2Yy1iMTA0LTE3YTQyZTMyYmE0YVwvZGQ3cHIxZC1lYWQxN2NmNS1hYWM3LTRlYzktOTM3MS03YzQ0NGUxZjM3YzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zm0qwwtfICG5Djost7j1PLI7V1Kj2fjNwRknIgwyJEk"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:locale" content="pt_BR" />
      </head>
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
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8"
          >
            Apaixonado por astronomia e sempre tentando me aprimorar até
            alcançar o infinito.
          </motion.p>
          {/* botão */}
          <div className="flex justify-center xl:hidden relative z-20">
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
