"use client";

import Image from "next/image";
import { assets, serviceData } from "../assets/assets";
import { useDarkTheme } from "../contexts/DarkThemeContext";

export default function Services() {
    
    const {isDarkTheme} = useDarkTheme();

    return (
            <div id="services"  className="w-4/5 my-[70px] 10 m-auto text-center scroll-mt-20">
                <p className="text-slate-800 dark:text-white">What i offers</p>
                <h1 className="text-4xl text-slate-800 dark:text-white">My services</h1>
                <p className="w-2/3 m-auto mt-3 text-sm text-gray-600 dark:text-white">
                    I am a frontend developer from California, USA with 10 years of experience in multiple
                    companies like Microsoft, Tesla and Apple.
                </p>
                <ul className="grid gap-4 pt-10 sm:grid-cols-3">
                    {serviceData.map(({icon, title, description}, index) => {
                        return <li key={index} className="relative flex-col flex-wrap justify-center gap-3 px-5 duration-300 border cursor-default -z-10 lex _ w-100 border-gray shadow-initial rounded-xl hover:-translate-y-1 hover:shadow-shadow" >
                            <Image className="mt-2" src={icon} alt="" width={50} height={50} />
                            <h1 className="dark:text-white">{title}</h1>
                            <p className="text-sm text-gray-500 dark:text-white"> {description} </p>
                            <span className="flex items-center justify-center gap-3 pb-4 text-sm text-gray-500 dark:text-white">Read more <Image src={isDarkTheme ? assets.right_arrow_white : assets.right_arrow} alt="" width={20} height={20} /> </span>
                        </li>
                    })}
                </ul>
            </div>
    )
}
