"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { useDarkTheme } from "../contexts/DarkThemeContext";

import { motion } from "motion/react";



export default function Contact() {

    const { isDarkTheme } = useDarkTheme();

    const [result, setResult] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setResult("");
        }, 2000)
    }, [result]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        const form = event.target as HTMLFormElement;

        const formData = new FormData(form);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");

            form.reset();

        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact" className="w-4/5 scroll-mt-12 py-10 m-auto mt-1 text-center bg-no-repeat bg-cover md:w-[500]">
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-slate-800 dark:text-white">Connect with me</motion.p>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl dark:text-white text-slate-800">Get in touch</motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: .5 }}
                className="w-2/3 m-auto mt-3 text-sm text-gray-600 dark:text-white">
                Id love to hear from you! If you have any questions, comments or
                feedback, please use the form below.
            </motion.p>
            <form
                onSubmit={onSubmit} className="items-center w-full mt-7">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: .8 }}
                    className="flex flex-col items-center justify-between gap-3 md:flex-row">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .7 }}
                        className="w-full p-2 border border-gray-500 rounded-lg outline-none placeholder:dark:text-white dark:bg-darkHover" type="text" placeholder="Enter your name" required name="name" />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: 1 }}
                        className="w-full p-2 border border-gray-500 rounded-lg outline-none placeholder:dark:text-white dark:bg-darkHover" type="email" placeholder="Enter your email" required name="email" />
                </motion.div>
                <motion.textarea
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1 }}
                    transition={{ duration: .7, delay: 1.2 }}
                    className="w-full p-2 mt-5 border border-gray-500 rounded-lg outline-none placeholder:dark:text-white dark:bg-darkHover h-52" placeholder="Enter your message" required name="message" ></motion.textarea>
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex items-center gap-3 px-5 py-1 mx-auto mt-4 text-white bg-black border rounded-full dark:bg-darkHover" type="submit">Submit <Image src={isDarkTheme ? assets.right_arrow_white : assets.right_arrow_white} alt="" width={17} height={17} /> </motion.button>
            </form>
            <div className="mt-1 text-start text-slate-700 dark:text-white">{result}</div>
        </motion.div>
    )
}