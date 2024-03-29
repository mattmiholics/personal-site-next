"use client"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Image from 'next/image';
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      text: "Portfolio",
    },
    {
      id: 3,
      link: "resume",
      text: "Resume",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white  bg-black fixed z-40">
      <div >
          <Link
            className="link-underline link-underline-black duration-200 hover:text-orange-400 hover:scale-105"
            href="/"
            rel="noreferrer"
          >
            <h1 className='font-bold text-xl'>Matt Miholics</h1>
          </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-orange-400 duration-200 link-underline"
          >
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-black text-white">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;