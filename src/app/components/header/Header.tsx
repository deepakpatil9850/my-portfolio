"use client";

import {X, MenuIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const menuList = [
    {name: "Home", pageLink: "/"},
    {name: "About Me", pageLink: "/aboutme"},
    {name: "Resume", pageLink: "/view-resume"},
    {name: "Blogs", pageLink: "/blogs"},
  ];
  return (
    <header className="p-5 sticky top-2 z-10 rounded-4xl border flex justify-between items-center border-secondary bg-background/30 backdrop-blur-xl mb-10">
      <Link href="/">
        <Image
          src="/logo.png"
          height={35}
          width={35}
          alt="logo D"
          className="ml-2 md:ml-4"
        />
      </Link>
      <div className="sm:block hidden">
        <ul className="flex gap-x-12">
          {menuList.map(({name, pageLink}) => (
            <Link
              href={pageLink}
              about=""
              key={name}
              className="hover:text-theme duration-300 active:text-theme"
            >
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="sm:hidden">
          <MenuIcon onClick={handleMenuClick} />
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          showMenu ? "left-0 w-full" : " -left-30 w-0 overflow-hidden "
        } absolute rounded-4xl border border-secondary top-17  duration-500  bg-background/90 p-6`}
      >
        <ul className="flex flex-col gap-10 items-center">
          {menuList.map(({name, pageLink}) => (
            <Link
              href={pageLink}
              about=""
              key={name}
              className="hover:text-theme duration-300 active:text-theme"
              onClick={() => closeMenu()}
            >
              <li>{name}</li>
            </Link>
          ))}
        </ul>
        <button
          className="absolute right-4 top-4 border border-secondary rounded p-1 cursor-pointer"
          onClick={() => closeMenu()}
        >
          <X />
        </button>
      </div>
    </header>
  );
};

export default Header;
