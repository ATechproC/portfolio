"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import { workData } from "../assets/assets";
import { useDarkTheme } from "../contexts/DarkThemeContext";

import { motion } from "motion/react";

export default function Work() {
    const { isDarkTheme } = useDarkTheme();

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                id="work"
                className="w-4/5 lg:py-16 m-auto text-center scroll-mt-10"
            >
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-slate-800 dark:text-white"
                >
                    My portfolio
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl text-slate-800 dark:text-white"
                >
                    My latest work
                </motion.h1>
                <motion.p className="w-2/3 m-auto mt-3 text-sm text-gray-600 dark:text-white">
                    Welcome to my web development portfolio! Explore a collection of
                    projects showcasing my expertise in front-end development.
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-5 mt-10"
                >
                    {workData.map(({ title, description, bgImage }, index) => {
                        return (
                            <li key={index} className="grow-1 basis-44">
                                <div className="relative w-full -z-10">
                                    <Image
                                        className="w-full duration-300 rounded-sm cursor-default shadow-initial hover:shadow-shadow"
                                        src={bgImage}
                                        width={50}
                                        height={80}
                                        alt=""
                                    />
                                    <div className="absolute text-sm bg-white bottom-5 left-[50%] translate-x-[-50%] whitespace-nowrap px-5 py-1 rounded-md">
                                        <h3 className="text-sm font-bold text-slate-700">
                                            {title}
                                        </h3>
                                        <p className="text-gray-500">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </motion.ul>
                <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay : .8 }}
                    href="#"
                    className="flex items-center justify-center gap-2 px-6 py-2 mx-auto mt-10 border rounded-full dark:text-white w-fit text-neutral-700 border-slate-600 dark:border-white"
                >
                    Read more{" "}
                    <Image
                        src={isDarkTheme ? assets.right_arrow_white : assets.right_arrow}
                        width={25}
                        height={25}
                        alt=""
                    />
                </motion.a>
            </motion.div>
        </>
    );
}
