import Image from 'next/image';
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title 1',
          path: '/abc.png',
          link: 'https://grilli-abc90.web.app/'
        },
        {
          title: 'title 2',
          path: '/portfolio.jpg',
          link: 'https://portfolioali-5305e.web.app/'
        },
        {
          title: 'title 3',
          path: '/1.png',
          link: 'https://aquafreshdxb.com/'
        },
         {
          title: 'title 4',
          path: '/TodoApp.png',
          link: 'https://todo-app-five-blush.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'Awards winning website',
          path: '/replace.png',
          link: 'https://awwards-website-jet.vercel.app/'
        },
        {
          title: 'title 6',
          path: '/thumb1.jpg',
          link: 'https://example.com/project6'
        },
        {
          title: 'title 7',
          path: '/thumb2.jpg',
          link: 'https://example.com/project7'
        },
        {
          title: 'title 8',
          path: '/thumb3.jpg',
          link: 'https://example.com/project8'
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'

import { Pagination } from 'swiper';
// icons
import { BsArrowRight } from 'react-icons/bs'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                  <div key={index} className='relative rounded-lg flex items-center justify-center group overflow-hidden'>
                    <div className='flex items-center justify-center overflow-hidden '>
                      <Image src={image.path} width={500} height={300} className='z-1  ' alt='project-img' />
                      <div className="absolute inset-0 bg-gradient-to-1 from-transparent via-[#e838cc] to-[#4a2sb6] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300 text-white text-center text-xl font-bold">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100 ">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100">PROJECT</div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>);
};

export default WorkSlider;
