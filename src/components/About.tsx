
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";

export default function About() {
    return (
        <div id="about" className="relative w-4/5 py-10 m-auto mt-16 text-center -z-10">
            <p className="text-slate-800">Introduction</p>
            <h1 className="text-4xl text-slate-800">About me</h1>
            <div className="flex flex-col items-center gap-10 mt-4 md:flex-row">
                <div className="rounded-lg w-[250px] h-[300px] hover:-translate-y-[2px] duration-300">
                    <Image className="object-contain w-full h-full" src={assets.user_image} alt="" />
                </div>
                <div className="w-[700px] flex flex-col items-center gap-3">
                    {/* <p className="text-sm text-slate-600">
                        I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p> */}
                    <div className="relative flex flex-col items-center gap-2 p-2 mt-4 -z-10 md:flex-row">
                        {infoList.map(({ icon, title, description }, index) => {
                            return <div className="cursor-default border border-slate-400 rounded-md p-3 max-w-[200px] h-[150px] shadow-initial hover:-translate-y-[2px] hover:shadow-shadow duration-300" key={index}>
                                <div>
                                    <Image src={icon} alt="" width={30} height={30} />
                                </div>
                                <h2> {title} </h2>
                                <p> {description} </p>
                            </div>
                        })}
                    </div>
                    <div className="pl-2 md:mr-auto">
                        <p className="my-3 text-center md:text-start text-slate-600">Tools i use</p>
                        <div className="flex items-center gap-3">
                            {toolsData.map((tool, index) => {
                                return <div className="p-3 border rounded-md shadow-lg hover:-translate-y-[2px] cursor-pointer duration-300 border-slate-600" key={index}>
                                    <Image src={tool} alt="" width={30} height={30} />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}