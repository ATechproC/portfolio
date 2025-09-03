"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

export default function ScrollTop() {

    const [display, setDisplay] = useState<string>("hidden")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(scrollY > 150) {
                setDisplay('block');
            }else {
                setDisplay("hidden")
            }
        })
    }, [])

    function scrollTop() {
        window.scrollTo({
            top : 0,
            behavior : "smooth",
        })
    }

    useEffect(scrollTop, []);

    return (
        <div onClick={scrollTop}  className={`fixed z-20 bottom-3 ${display} right-3 p-2 rounded-md cursor-pointer bg-black dark:bg-darkHover transition`}>
            <Image src={assets.top1} alt="" width={15} height={15} />
        </div>
    )
}
