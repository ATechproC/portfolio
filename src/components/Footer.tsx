"use client";
import Image from "next/image";
import { assets } from "../assets/assets";
import { useDarkTheme } from "../contexts/DarkThemeContext";

import { motion } from "motion/react";

export default function Footer() {

    const { isDarkTheme } = useDarkTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: .9 }}
            className="pb-2">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-1/5 m-auto">
                <Image className="m-auto" src={isDarkTheme ? assets.logo_dark : assets.logo} alt="" width={100} height={100} />
                <div className="relative -z-10 flex items-center text-center w-fit text-sm gap-2 left-[50%] -translate-x-[50%] text-slate-600" >
                    <Image className="object-contain" src={isDarkTheme ? assets.mail_icon_dark : assets.mail_icon} alt="" width={20} height={20} />
                    <div className="dark:text-white">greatstackdev@gmail.com</div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-[90%] h-[2px] bg-slate-700 m-auto mt-3 dark:bg-white"></motion.div>
            <div className="flex mt-2 md:mt-0 gap-2 md:gap-4 items-center flex-col md:flex-row text-slate-600 justify-between w-[90%] m-auto text-sm dark:text-white">
                <motion.p initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}>© 2025 William Mark. All rights reserved.</motion.p>
                <ul className="flex items-center gap-3">
                    <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}><a target="_blank" href="https://www.linkedin.com/in/anass-choraichi-80a403267/">LinkedIn</a></motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    ><a target="_blank" href="https://github.com/ATechproC">GitHub</a></motion.li>
                </ul>
                <span className="flex flex-col items-center gap-2 md:gap-4 md:flex-row">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >Terms of Services</motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                    >Privacy Policy</motion.p>
                    <motion.p initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.1 }}
                    >Connect with me</motion.p>
                </span>
            </div>
        </motion.div>

    )
}
