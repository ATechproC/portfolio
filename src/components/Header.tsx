import Image from "next/image";
import { assets } from "../assets/assets";

export default function Header() {
    return (
        <>
            <div className="h-full p-20 text-center">
                <div className="w-24 h-24 m-auto overflow-hidden rounded">
                    <Image className="object-contain w-full h-full" src={assets.profile_img} alt="" />
                </div>
                <p className="flex items-center justify-center p-3 font-bold">
                    Hi! Im William Mark
                    <Image src={assets.hand_icon} alt="" width={20} height={20} />
                </p>
                <div className="p-2 text-4xl whitespace-nowrap">
                    <p>frontend web developer</p>
                    <p className="text-3xl">based in London.</p>
                </div>
                <p className="p-1 text-gray-600">
                    <p>
                        I am a frontend developer from California, USA with 10 years of experience in multiple companies
                    </p>
                    <p>like Microsoft, Tesla and Apple</p>
                </p>
                <div className="flex items-center justify-center gap-3 pt-3">
                    <button className="flex items-center gap-3 px-4 py-3 font-bold text-white bg-black rounded-full">
                        connect with me
                        <Image src={assets.right_arrow_bold_dark} alt="" width={20} height={20}/>
                    </button>
                    <button className="flex items-center justify-center w-40 gap-3 px-4 py-3 font-bold text-black border-2 border-black rounded-full">
                        resume
                        <Image src={assets.download_icon} alt=""  width={20} height={20}/>
                    </button>
                </div>
            </div>
        </>
    );
}