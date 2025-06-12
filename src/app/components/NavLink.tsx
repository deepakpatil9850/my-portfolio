"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavLink({href, children, onClick}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        isActive ? "text-theme" : " " + " hover:text-theme duration-300"
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
