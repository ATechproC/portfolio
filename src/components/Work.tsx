import Image from "next/image";
import { assets, serviceData, workData } from "../assets/assets";


export default function Work() {
    return (
        <>
            <div className="w-4/5 py-10 m-auto text-center">
                <p className="text-slate-800">My portfolio</p>
                <h1 className="text-4xl text-slate-800">My latest work</h1>
                <p className="w-2/3 m-auto mt-3 text-sm text-gray-600">
                    Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development.
                </p>
                <ul  className="flex flex-wrap items-center justify-center gap-5 mt-10" >
                    {workData.map(({ title, description, bgImage }, index) => {
                        return <li key={index} className="grow-1 basis-44">
                            <div className="relative w-full">
                                <Image className="w-full duration-300 cursor-default shadow-initial hover:shadow-shadow" src={bgImage} alt=""/>
                                <div className="absolute text-sm bg-white bottom-5 left-[50%] translate-x-[-50%] whitespace-nowrap px-5 py-1 rounded-md">
                                    <h3 className="text-sm font-bold text-slate-700"> {title} </h3>
                                    <p className="text-gray-500"> {description} </p>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-2 mx-auto mt-10 border rounded-full w-fit text-neutral-700 border-slate-600">
                Read more <Image src={assets.right_arrow} width={25} height={25} alt="" />
                </a>
            </div>
        </>
    )
}