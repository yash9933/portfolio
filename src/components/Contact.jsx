import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validInputs, setValidInputs] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (name === "email") {
      validateEmail(value);
    } else if (name === "message") {
      validateMessage(value);
    } else {
      validateInput(name, value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidInputs({
      ...validInputs,
      email: emailRegex.test(email) || email === "",
    });
  };

  const validateMessage = (message) => {
    setValidInputs({
      ...validInputs,
      message: message.trim().length >= 5 || message === "",
    });
  };

  const validateInput = (name, value) => {
    setValidInputs({
      ...validInputs,
      [name]: value.trim() !== "" || value === "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setValidInputs({
        name: !!name.trim(),
        email: !!email.trim(),
        message: !!message.trim(),
      });
      setLoading(false);
      return;
    }

    if (!validInputs.email || !validInputs.message) {
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yash Sharma",
          from_email: form.email,
          to_email: "3927yash@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        {/* Social Icons Section */}
        <div className="mt-10 flex justify-center mt-4 mb-8 gap-5">
          <a href="https://www.linkedin.com/in/9yash/" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={26} />
          </a>
          <a href="https://twitter.com/yashh_dev" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={26} />
          </a>
          <a href="https://github.com/yash9933" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={26} color='white' />
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${!validInputs.name ? "border-red-500" : ""}`}
            />
            {!validInputs.name && (
              <span className="text-red-500">Please enter your name.</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your E-mail</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${!validInputs.email ? "border-red-500" : ""}`}
            />
            {!validInputs.email && (
              <span className="text-red-500">Please enter a valid e-mail address.</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${!validInputs.message ? "border-red-500" : ""}`}
            />
            {!validInputs.message && (
              <span className="text-red-500">Please enter your message (minimum 5 characters).</span>
            )}
          </label>

          <button
            type='submit'
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/*
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      */}
    </div>
  )
}

export default SectionWrapper(Contact, "contact");