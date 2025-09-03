"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

export default function Header() {
    return (
        <>
            <div id="home" className="h-full pt-12 md:pt-[120px] text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="w-24 m-auto mt-10 overflow-hidden rounded h- md:mt-0">
                    <Image className="object-contain w-full h-full" src={assets.profile_img} alt="" />
                </motion.div>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center justify-center p-3 font-bold">
                    Hi! Im William Mark
                    <Image src={assets.hand_icon} alt="" width={20} height={20} />
                </motion.p>
                <div className="flex flex-col w-4/5 gap-3 m-auto" >
                    <div className="p-2 text-[26px] whitespace-nowrap">
                        <motion.p
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >frontend web developer</motion.p>
                        <motion.p
                        initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >based in London.</motion.p>
                    </div>
                    <motion.p
                    initial={{opacity : 0}}
                    whileInView={{opacity : 1}}
                    transition={{duration: 0.8, delay : 0.8}}
                     className="p-1 text-gray-600 dark:text-white">
                        <span className="block">
                            I am a frontend developer from California, USA with 10 years of experience in multiple companies
                        </span>
                        <span className="block">like Microsoft, Tesla and Apple</span>
                    </motion.p>
                    <div className="flex flex-col items-center justify-center gap-3 pt-3 md:flex-row">
                        <motion.button
                        initial={{y : 30, opacity : 0}}
                        whileInView={{y : 0, opacity : 1}}
                        transition={{duration : 1, delay : 1.1}}
                        className="dark:bg-darkHover flex items-center gap-3 px-4 py-3 font-bold text-white bg-black rounded-full">
                            connect with me
                            <Image src={assets.right_arrow_bold_dark} alt="" width={20} height={20} />
                        </motion.button>
                        <motion.a href="./sample-resume.pdf" download
                        initial={{y : 30, opacity: 0}}
                        whileInView={{y : 0, opacity : 1}}
                        transition={{duration : 0.8, delay : 1.3}}
                        className="flex cursor-pointer items-center justify-center gap-3 px-3 py-2 font-bold text-black border-2 border-black rounded-full w-[185px] md:w-50 dark:bg-white">
                            resume
                            <Image src={assets.download_icon} alt="" width={20} height={20} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    );
}
