import Image from "next/image";
import { assets } from "../assets/assets";

export default function Footer() {
    return (
        <div className="pb-2">
        <div className="w-1/5 m-auto">
            <Image className="m-auto" src={assets.logo} alt="" width={100} height={100} />
            <div className="flex items-center h-3 gap-3 text-sm w-7 text-slate-600" >
                <Image className="object-contain w-full h-full" src={assets.mail_icon} alt="" /> greatstackdev@gmail.com
            </div>
        </div>
        <div className="w-[90%] h-[2px] bg-slate-700 m-auto mt-3"></div>
        <div className="flex items-center text-slate-600 justify-between w-[90%] m-auto text-sm">
            <p>© 2025 William Mark. All rights reserved.</p>
            <span className="flex items-center gap-4">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </span>
        </div>
        </div>
    )
}
