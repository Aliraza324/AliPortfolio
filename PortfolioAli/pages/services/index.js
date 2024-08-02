// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing .',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
/// framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'


const Services = () => {
  return (
    <div className="h-full bg-primary/60 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}

          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="xl:mt-8 h2">My Services <span className="text-accent">.</span></motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 max-w-[400px] mx-auto xl:mx-0">I stay up-to-date with the latest trends, tools, and techniques, delivering solutions that are fresh, modern, and effective.I stand behind my work and offer a satisfaction guarantee, ensuring that you are completely happy with the final result</motion.p></div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[65%]">
            {/* slider  */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Services;
