
"use client"
import Circles from '/components/Circles'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Email is invalid.");
      return;
    }

    const serviceId = "service_m9d9snq";
    const templateId = "template_8wvocwr";
    const publicKey = "_OadE31GSFdaahEiP";

    const templateParams = {
      from_name: name,
      from_subject: subject,
      from_email: email,
      to_name: "Ali Raza",
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent", response);
        toast.success("Email sent successfully!");
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending mail", error);
        toast.error("Error sending email.");
      });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder='Name'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                // required
              />
              <input
                type="email"
                placeholder='Email'
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </div>
            <input
              type="text"
              placeholder='Subject'
              className='input'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              // required
            />
            <textarea
              className='textarea'
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              // required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border-white/50 border max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
};

export default Contact;
