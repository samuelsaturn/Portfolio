// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/nerdstickers.png",
          name: 'Nerd Stickers',
          link: 'https://www.nerdstickers.com.br',
        },
        {
          title: "title",
          path: "/pokedex.png",
          name: 'Pokédex',
          link: 'https://samuelsaturn.github.io/MyPokedex/',
        },
        {
          title: "title",
          path: "/danatty.png",
          name: 'Danatty',
          link: 'https://danatty.com.br',
        },
        {
          title: "title",
          path: "/dsmovie.png",
          name: 'DS Movie',
          link: 'https://samuelsaturn.github.io/DSMovie-Iniciante/',
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/ligimports.png",
          name: 'Lig Imports BR',
          link: 'https://ligimportsbrasil.com.br/',
        },
        {
          title: "title",
          path: "/Feeling.png",
          name: 'Feeling',
          link: 'https://feeling-mkqtctne1-feeling.vercel.app/entrar',
        },
        {
          title: "title",
          path: "/helpinhouse.png",
          name: 'Help in house',
          link: 'https://help-in-house-b60o6wbdi-samuelsaturn.vercel.app/feed',
        },
        {
          title: "title",
          path: "/blog.png",
          name: 'Blog pessoal',
          link: 'https://coffe-stargazing-mmw2ddnob-feeling.vercel.app/entrar',
        },
      ],
    },
  ],
};

// import required modules
import {  Pagination } from "swiper";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { BsArrowRight } from "react-icons/bs";

// Image
import Image from "next/image";

// Link
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className='relative flex items-center justify-center overflow-hidden group'>
                      {/* image */}
                      
                      <Image src={image.path} width={500} height={300} alt="" />
                      
                      {/* overlay */}
                      <Link href={image.link} target="_blank">
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      </Link>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <Link href={image.link} target="_blank">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">VER</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJETO</div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                        </div>
                        </Link>
                      </div>
                    </div>
                   
                    <div className="absolute top-0"><p className="text-xs xl:text-lg text-white capitalize bg-primary/70 px-6 rounded-lg mt-3">{image.name}</p></div>
                  
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
