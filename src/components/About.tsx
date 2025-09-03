"use client";

import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";
import { useDarkTheme } from "../contexts/DarkThemeContext";
import { motion } from "motion/react";


export default function About() {

    const { isDarkTheme } = useDarkTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about" className="relative w-4/5 lg:py-10 m-auto mt-24 text-center -z-10 scroll-mt-20 ">
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-slate-800 dark:text-white">Introduction</motion.p>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl text-slate-800 dark:text-white">About me</motion.h1>
            <div
                className="flex flex-col items-center gap-10 mt-4 md:flex-row">
                <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="rounded-lg w-[250px] h-[300px] hover:-translate-y-[2px] duration-300">
                    <Image className="object-contain w-full h-full" src={assets.user_image} alt="" />
                </motion.div>
                <div
                    className="w-[700px] flex flex-col items-center gap-3">
                    <motion.div

                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .7, delay: .5, ease: "linear" }}
                        className="relative flex flex-col items-center gap-2 p-2 mt-4 -z-10 md:flex-row">
                        {infoList.map(({ icon, iconDark, title, description }, index) => {
                            return <div className="cursor-default border border-slate-400 rounded-md p-3 max-w-[200px] h-[150px] shadow-initial hover:-translate-y-[2px] hover:shadow-shadow duration-300" key={index}>
                                <div>
                                    <Image src={isDarkTheme ? iconDark : icon} alt="" width={30} height={30} />
                                </div>
                                <h2> {title} </h2>
                                <p> {description} </p>
                            </div>
                        })}
                    </motion.div>
                    <div className="pl-2 md:mr-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: .7, delay: .6, ease: "linear" }}
                            className="my-3 text-center md:text-start dark:text-white text-slate-600">Tools i use</motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: .7, delay: .6, ease: "linear" }}
                            className="flex items-center gap-3">
                            {toolsData.map((tool, index) => {
                                return <div className="p-3 border rounded-md shadow-lg hover:-translate-y-[2px] cursor-pointer duration-300 border-slate-600" key={index}>
                                    <Image src={tool} alt="" width={30} height={30} />
                                </div>
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}