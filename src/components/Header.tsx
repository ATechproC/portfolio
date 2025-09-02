import Image from "next/image";
import { assets } from "../assets/assets";

export default function Header() {
    return (
        <>
            <div id="home" className="h-full pt-12 md:pt-[120px] text-center">
                <div className="w-24 m-auto mt-10 overflow-hidden rounded h- md:mt-0">
                    <Image className="object-contain w-full h-full" src={assets.profile_img} alt="" />
                </div>
                <p className="flex items-center justify-center p-3 font-bold">
                    Hi! Im William Mark
                    <Image src={assets.hand_icon} alt="" width={20} height={20} />
                </p>
                <div className="flex flex-col w-4/5 gap-3 m-auto" >
                    <div className="p-2 text-[26px] whitespace-nowrap">
                        <p>frontend web developer</p>
                        <p>based in London.</p>
                    </div>
                    <p className="p-1 text-gray-600">
                        <span className="block">
                            I am a frontend developer from California, USA with 10 years of experience in multiple companies
                        </span>
                        <span className="block">like Microsoft, Tesla and Apple</span>
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 pt-3 md:flex-row">
                        <button className="flex items-center gap-3 px-4 py-3 font-bold text-white bg-black rounded-full">
                            connect with me
                            <Image src={assets.right_arrow_bold_dark} alt="" width={20} height={20} />
                        </button>
                        <button className="flex items-center justify-center gap-3 px-3 py-2 font-bold text-black border-2 border-black rounded-full w-[185px] md:w-50">
                            resume
                            <Image src={assets.download_icon} alt="" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}