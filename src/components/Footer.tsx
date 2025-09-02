"use client";
import Image from "next/image";
import { assets } from "../assets/assets";
import { useDarkTheme } from "../contexts/DarkThemeContext";

export default function Footer() {

    const {isDarkTheme} = useDarkTheme();

    return (
        <div className="pb-2">
            <div className="w-1/5 m-auto">
                <Image className="m-auto" src={isDarkTheme ? assets.logo_dark : assets.logo} alt="" width={100} height={100} />
                <div className="relative -z-10 flex items-center text-center w-fit text-sm gap-2 left-[50%] -translate-x-[50%] text-slate-600" >
                    <Image className="object-contain" src={isDarkTheme ? assets.mail_icon_dark :assets.mail_icon} alt="" width={20} height={20} />
                    <div className="dark:text-white">greatstackdev@gmail.com</div>
                </div>
            </div>
            <div className="w-[90%] h-[2px] bg-slate-700 m-auto mt-3 dark:bg-white"></div>
            <div className="flex mt-2 md:mt-0 gap-2 md:gap-4 items-center flex-col md:flex-row text-slate-600 justify-between w-[90%] m-auto text-sm dark:text-white">
                <p>© 2025 William Mark. All rights reserved.</p>
                <ul className="flex items-center gap-3">
                    <li><a target="_blank" href="https://www.linkedin.com/in/anass-choraichi-80a403267/">LinkedIn</a></li>
                    <li><a target="_blank" href="https://github.com/ATechproC">GitHub</a></li>
                </ul>
                <span className="flex flex-col items-center gap-2 md:gap-4 md:flex-row">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </span>
            </div>
        </div>

    )
}
