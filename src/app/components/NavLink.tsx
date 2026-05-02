"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavLink({href, children, onClick}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.span whileHover={{ y: -2 }} whileTap={{ y: 0, scale: 0.95 }} className="inline-block">
      <Link
        href={href}
        onClick={onClick}
        className={
          isActive ? "text-theme" : " " + " hover:text-theme duration-300"
        }
      >
        {children}
      </Link>
    </motion.span>
  );
}

export default NavLink;
