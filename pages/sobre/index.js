import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Image from "next/image";
import CalypsoIcon from "/public/calypso-icon 1.png";

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
  FaJava,
  FaLinux,
  FaWindows,
} from "react-icons/fa";

import { SiNextdotjs, SiDatabricks, SiPandas, SiMacos  } from "react-icons/si";

import { BsFiletypeSql  } from "react-icons/bs";

//  data
const aboutData = [
  {
    title: "about",
    info: [
      {
        title:
          "Iniciei minha jornada em 2022, imergindo nos estudos de desenvolvimento web e engenharia de dados. Hoje estou no mercado de trabalho utilizando todo meu conhecimento para solucionar problemas e aprendendo cada dia mais. Gosto de gatos, frio, astronomia, livros, uns jogos indies e animes.",
      },
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Development",
        icons: [
          { id: 1, icon: <FaJava /> },
          { id: 2, icon: <BsFiletypeSql /> },
          { id: 9, icon: <Image src={CalypsoIcon} alt="Calypso Icon" width={32} height={32} />},
          { id: 3, icon: <FaJs /> },
          { id: 4, icon: <FaReact /> },
          { id: 5, icon: <FaNodeJs /> },
          { id: 6, icon: <SiNextdotjs /> },
          { id: 7, icon: <FaWordpress /> },
          { id: 8, icon: <FaShopify /> },
          
        ],
      },
      {
        title: "Data Engineering",
        icons: [
          { id: 9, icon: <FaPython /> },
          { id: 10, icon: <SiDatabricks /> },
          { id: 11, icon: <SiPandas /> },
        ],
      },
      {
        title: "SO",
        icons: [
          { id: 12, icon: <FaLinux /> },
          { id: 13, icon: <FaWindows /> },
          { id: 14, icon: <SiMacos /> },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Calypso Technical - Nfq Advisory",
        stage: "05/2025 - now",
      },
      {
        title: "Full Stack Developer - Emakeit",
        stage: "11/2022 - 04/2024",
      },
      {
        title: "Data Engineer - Mobitype/Provu",
        stage: "05/2023 - 07/2023",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "ADS - UniAmérica",
        stage: "01/2023 - 06/2025",
      },
      {
        title: "Full Stack Java - Generation",
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
            className="hidden md:block text-2xl font-extrabold mb-6 xl:h2"
          >
            Data Engineer e Developer: Conectando{" "}
            <span className="text-accent">Dados</span>, Criando{" "}
            <span className="text-accent">Experiências</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Iniciei minha jornada em 2022, imergindo nos estudos de
            desenvolvimento web e engenharia de dados. Hoje estou no mercado de
            trabalho onde mostro meus conhecimentos e aprendo cada vez mais.
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
                  <CountUp start={1} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-full]">
                  anos de experiência
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
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 mb-3"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={icon.id} className="text-2xl text-white">
                          {icon.icon}
                        </div>
                      );
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
