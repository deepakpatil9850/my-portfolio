"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.form 
      about="" 
      method="" 
      onSubmit={handleSubmit} 
      className="mb-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Name"
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
            required
          />
          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Email"
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
            required
          />
          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Subject"
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
            required
          />
        </div>
        <div className="grid gap-2">
          <motion.textarea
            variants={itemVariants}
            placeholder="Message"
            rows={3}
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
            required
          />

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" text-center my-1  py-2 px-6 rounded-4xl bg-theme text-black cursor-pointer hover:bg-cyan-500 transition duration-500"
          >
            Send message
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
