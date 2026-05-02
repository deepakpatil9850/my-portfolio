"use client";
import {Smartphone, Mail, Instagram, Linkedin, Twitter} from "lucide-react";
import React from "react";
import SectionLayout from "../SectionLayout";
import SocialLinks from "../SocialLinks";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <SectionLayout heading="Get In Touch" id="contact">
      <div className="">
        <ContactForm />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-between gap-2 md:gap-5 "
        >
          <motion.div variants={itemVariants}>
            <SocialLinks
              icon={<Mail />}
              href="mailto:deepakpatil4111@gmail.com"
              target="_blank"
            >
              <p>deepakpatil4111@gmail.com</p>
            </SocialLinks>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLinks
              href="https://www.instagram.com/mr._deep__patil__/?hl=en"
              icon={<Instagram />}
              target="_blank"
            >
              Instagram
            </SocialLinks>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLinks
              icon={<Smartphone />}
              href="tel:+919850624107"
              target="_blank"
            >
              <p>+91 9850624107</p>
            </SocialLinks>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLinks
              href="https://www.linkedin.com/in/deepak-patil-4111deep/"
              icon={<Linkedin />}
              target="_blank"
            >
              Linkedin
            </SocialLinks>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLinks href="" icon={<Twitter />}>
              Twitter
            </SocialLinks>
          </motion.div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
