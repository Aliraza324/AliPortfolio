import { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
     
      {
        title: 'Web Developer - Career Institute',
        stage: '2023 - 2023',
      },
      {
        title: 'Intern - VirtuenetZ Software Company',
        stage: '2023 - 2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - Career institute, Rahim yar khan, punjab',
        stage: '2022',
      },
      {
        title: 'Computer Science  - The Islamiya Univeristy Of Bahawalpur',
        stage: '2022-2026',
      },
      {
        title: 'Certified Frontend-Developer - VirtuenetZ Limited, Rahim yar khan, Punjab',
        stage: '2023',
      },
    ],
  },
];
// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
//framer-motion
import { motion } from "framer-motion";
import { fadeIn, fadeInadeIn } from '../../variants'
// countup
import Countup from 'react-countup'
const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar-img  */}
      <motion.div className="hidden xl:flex absolute bottom-0 -left-[370px]"
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        {/* <Avatar /> */}

      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6">
        <div className="flex-1 flex-col justify-center">
          <motion.h2 
          variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
          className="h2">Captivating <span className="text-accent">stories</span> birth magnificant design.</motion.h2>
          <p 
          variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">3 year ago, i began freelancer as a developer. Since then, I,ve done remote work for agenices, consulted for startup, and collaborated on digital products for business and consumer use.</p>
          {/* counter */}
          <motion.div
          variants={fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
           className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div>
              {/* project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={200} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished project</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
         className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:h-[200px]">
          {/* <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
              {aboutData.map((item,itemIndex)=>{
                return(
                  <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}   cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={()=>setIndex(itemIndex)}
                  >
                  {item.title}
                  </div>
                )
              })}
            </div> */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`flex-grow flex-shrink cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${index === itemIndex
                    ? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                    : ""
                    }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {item.title}
                  <div className=" flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
