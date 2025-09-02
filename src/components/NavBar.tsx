"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

export default function NavBar() {

    const [navBar, setNavBar] = useState("-right-52");

    function close() {
        setNavBar("-right-52");
    }

    function open() {
        setNavBar("right-0")

    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            close();
        })
    }, [])

    return (
        <div  className="fixed w-screen backdrop-blur-lg">
            {/* <div className="fixed top-0 w-11/12 right 0 -z-10 translate-x-[20%]  translate-y-[-80%]">
                <Image className="w-full" src={assets.header_bg_color} alt="" />
            </div> */}
            <nav className="flex items-center justify-between mx-2 mt-2 z-100 md:mx-3 lg:mx-10 ">
                <a href="#home" className="w-40">
                    <Image src={assets.logo} alt="logo" />
                </a>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5 p-2 shadow-md rounded-2xl">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#work'>My Work</a></li>
                        <li><a href='#contact'>Contact me</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 cursor-pointer">
                    <button>
                        <Image src={assets.moon_icon} alt="" width={20} height={20} />
                    </button>
                    <span className="hidden mr-3 md:block">
                        <a href="#contact" className="flex items-center gap-2 p-1.5 border-2 border-gray-400 rounded-2xl">
                            Contact me <Image className="w-3 h-3" src={assets.arrow_icon} alt="" />
                        </a>
                    </span>
                    <button className="block md:hidden" onClick={open}>
                        <Image src={assets.menu_black} alt="" width={20} height={20} />
                    </button>
                </div>

                <span className={`fixed z-10 top-0 h-screen text-white bg-black ${navBar} w-52 md:hidden duration-300 ease`}>
                    <span className="absolute cursor-pointer right-3 top-6" onClick={close}>
                        <Image src={assets.close_white} alt="" width={20} height={20} />
                    </span>
                    <ul className="flex flex-col gap-1 pt-20 pl-6 h-2/5">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#work'>My Work</a></li>
                        <li><a href='#contact'>Contact me</a></li>
                    </ul>
                </span>
                {/* <NavBarC element="menu" /> */}
            </nav>
        </div>
    )
}