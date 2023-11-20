import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// catos
import Catitos from "../../components/Catitos";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaShopify,
  FaPython,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDatabricks,
  SiPandas,

} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "about",
    info: [
      {
        title: "Iniciei minha jornada em 2022, imergindo nos estudos de desenvolvimento web e engenharia de dados. Hoje estou no mercado de trabalho utilizando todo meu conhecimento para solucionar problemas e aprendendo cada dia mais. Gosto de gatos, frio, astronomia, livros, uns jogos indies e animes.",
      },

    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaNodeJs />,
          <SiNextdotjs />,
          <FaWordpress />,
          <FaShopify />,
        ],
      },
      {
        title: "Data Engineering",
        icons: [<FaPython />, <FaAws />, <SiDatabricks />, <SiPandas />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Mobitype",
        stage: "11/2022 - 04/2023",
      },
      {
        title: "Data Engineer - Mobitype/Provu",
        stage: "05/2023 - 07/2023",
      },
      {
        title: "Web Developer - Mobitype/Emakeit",
        stage: "08/2023 - now",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "ADS - Descomplica",
        stage: "01/2023 - 06/2025",
      },
      {
        title: "FullStack Java - Generation",
        stage: "01/2022 - 04/2022",
      },
      {
        title: "Téc. ADM - Senac",
        stage: "03/2021 - 07/2022",
      },
    ],
  },
  // {
  //   title: "cats",
  //   info: [
  //     {
  //       title: "Mi Catitos",
  //       icons: [
  //         <Catitos />
  //       ],
  //     },

  //   ],
  // },
];

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[270px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl font-extrabold mb-6 xl:h2"
          >
            Data Engineer e Web Developer: Conectando <span className="text-accent">Dados</span>, Criando <span className="text-accent">Experiências</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Iniciei minha jornada em 2022, imergindo nos estudos de desenvolvimento web e engenharia de dados. Hoje estou no mercado de trabalho onde mostro meus conhecimentos e aprendo cada vez mais.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full xl:after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={1} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-full]">
                  ano de experiência
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4 mb-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
