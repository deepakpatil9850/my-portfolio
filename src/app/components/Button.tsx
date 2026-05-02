"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: boolean;

  children?: React.ReactElement;
}

const Button = ({label, handleClick, theme, children}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`${
        theme
          ? " border-2 border-theme hover:bg-theme hover:text-foreground"
          : " border border-secondary hover:bg-foreground hover:text-background"
      }   px-7 bg-background py-3 rounded-3xl m-2 transition duration-500 cursor-pointer`}
    >
      {children} {label}
    </motion.button>
  );
};

export default Button;
