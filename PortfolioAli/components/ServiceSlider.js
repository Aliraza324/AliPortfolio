import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowBottomLeft,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Build a strong and memorable brand identity that sets you apart from the competition. We craft compelling visuals and strategies that leave a lasting impression.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Transform ideas into stunning visuals. From eye-catching graphics to user-friendly interfaces, our designs captivate and engage your audience effortlessly.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Custom-built, high-performance websites that are responsive, fast, and tailored to your business needs. Elevate your online presence with our cutting-edge development solutions.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Words that sell, engage, and inspire. We create persuasive and SEO-optimized content that turns visitors into loyal customers.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boost your website’s visibility and rank higher on search engines. Our proven SEO strategies drive more traffic, leads, and conversions for your business.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(98,65,169,0.15)] transition-all duration-300 '>
              {/* icon  */}
              <div className='text-accent text-4xl mb-4'>{item.icon}</div>
              {/* title or description  */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal  '>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>);
};

export default ServiceSlider;
