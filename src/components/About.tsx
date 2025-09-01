import Image from "next/image";
import { assets } from "../assets/assets";

export default function About() {
    return (
        <div>
            <div className="m-auto mt-10 text-center">
                <p>introduction</p>
                <h1 className="text-3xl">About Me</h1>
            </div>
            <div className="flex items-center w-4/5 gap-5 m-auto mt-10">
                <div className="w-full" >
                    <Image className="object-contain w-full" src={assets.user_image} alt="" />
                </div>
                <div>
                    <p className="text-gray-600">
                        I am an experienced Frontend Developer with over
                        a decade of professional expertise in the field.
                        Throughout my career, I have had the privilege of collaborating with prestigious organizations,
                        to their success and growth.
                    </p>
                    <div className="flex items-center gap-10 py-5">
                        <div className="px-5 border-2 rounded-md shadow-xl py-7">
                            <div>
                                <Image src={assets.code_icon} alt="" width={30} height={30} />
                            </div>
                            <h2 className="py-2 font-bold">Languages</h2>
                            <p>
                                HTML, CSS, JavaScript,
                                React Js, Next JS
                            </p>
                        </div>
                        <div className="w-1/3 px-5 border-2 rounded-md shadow-xl py-7">
                            <div>
                                <Image src={assets.edu_icon} alt="" width={30} height={30} />
                            </div>
                            <h2 className="py-2 pt-3 font-bold">Education</h2>
                            <p>
                                B.Tech in Computer Science
                            </p>
                        </div>
                        <div className="px-5 border-2 rounded-md shadow-xl py-7">
                            <div>
                                <Image src={assets.project_icon} alt=""  width={30} height={30}/>
                            </div>
                            <h2  className="py-2 font-bold">Projects</h2>
                            <p>
                                Built more than 5 
projects
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="pb-1 text-gray-600">Tools i use</p>
                        <div className="flex items-center gap-5">
                            <div className="p-3 border-2 border-gray-700 rounded-md">
                                <Image src={assets.vscode} alt="" width={30} height={30} />
                            </div>
                            <div className="p-3 border-2 border-gray-700 rounded-md">
                                <Image src={assets.firebase} alt="" width={30} height={30} />
                            </div>
                            <div className="p-3 border-2 border-gray-700 rounded-md">
                                <Image src={assets.mongodb} alt="" width={30} height={30} />
                            </div>
                            <div className="p-3 border-2 border-gray-700 rounded-md">
                                <Image src={assets.figma} alt="" width={30} height={30} />
                            </div>
                            <div className="p-3 border-2 border-gray-700 rounded-md">
                                <Image src={assets.git} alt="" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
