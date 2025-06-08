import {Smartphone, Mail, Instagram, Linkedin, Twitter} from "lucide-react";
import React from "react";
import SectionLayout from "../SectionLayout";
import SocialLinks from "../SocialLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <SectionLayout heading="Contact" id="contact">
      <div className="">
        <ContactForm />
        <div className="flex flex-wrap justify-between gap-2 md:gap-5 ">
          <SocialLinks
            href="https://www.linkedin.com/in/deepak-patil-4111deep/"
            icon={<Linkedin />}
            target="_blank"
          >
            Linkedin
          </SocialLinks>
          <SocialLinks href="" icon={<Twitter />}>
            Twitter
          </SocialLinks>
          <SocialLinks
            href="https://www.instagram.com/mr._deep__patil__/?hl=en"
            icon={<Instagram />}
            target="_blank"
          >
            Instagram
          </SocialLinks>
          <SocialLinks
            icon={<Smartphone />}
            href="tel:+919850624107"
            target="_blank"
          >
            <p>+91 9850624107</p>
          </SocialLinks>
          <SocialLinks
            icon={<Mail />}
            href="mailto:deepakpatil4111@gmail.com"
            target="_blank"
          >
            <p>deepakpatil4111@gmail.com</p>
          </SocialLinks>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
