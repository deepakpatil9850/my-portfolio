"use client";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <form about="" method="" onSubmit={handleSubmit} className="mb-10">
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <input
            type="text"
            placeholder="Name"
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
          />
        </div>
        <div className="grid gap-2">
          <textarea
            placeholder="Message"
            rows={3}
            className="bg-secondary my-1 border-2 border-tertiary px-6 py-2 rounded-2xl focus:border-cyan-500 focus:outline-none  text-foreground  transition duration-200 text-lg"
          />

          <button className=" text-center my-1  py-2 px-6 rounded-4xl bg-theme text-black cursor-pointer hover:bg-cyan-500 transition duration-500">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
