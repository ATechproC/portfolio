import Image from "next/image";
import { assets } from "../assets/assets";



export default function Contact() {
    return (
        <>
            <div id="contact" className="w-4/5 py-10 m-auto mt-1 text-center bg-no-repeat bg-cover md:w-[500]">
                <p className="text-slate-800">Connect with me</p>
                <h1 className="text-4xl text-slate-800">Get in touch</h1>
                <p className="w-2/3 m-auto mt-3 text-sm text-gray-600">
                    Id love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.
                </p>
                <form className="items-center w-full mt-6">
                    <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                        <input className="w-full p-2 border border-gray-500 outline-none" placeholder="Enter your name" />
                        <input className="w-full p-2 border border-gray-500 outline-none" placeholder="Enter your email" />
                    </div>
                    <textarea className="w-full p-2 mt-5 border border-gray-500 outline-none h-52" placeholder="Enter your message" />
                    <button className="flex items-center gap-3 px-5 py-1 mx-auto mt-3 text-white bg-black border rounded-full" type="submit">Submit <Image src={assets.right_arrow_white} alt="" width={17} height={17} /> </button>
                </form>
            </div>
            <div className="pb-2">
                <div className="w-1/5 m-auto">
                    <Image className="m-auto" src={assets.logo} alt="" width={100} height={100} />
                    <div className="relative -z-10 flex items-center text-center w-fit text-sm gap-2 left-[50%] -translate-x-[50%] text-slate-600" >
                        <Image className="object-contain" src={assets.mail_icon} alt="" width={20} height={20} /> 
                        <div>greatstackdev@gmail.com</div>
                    </div>
                </div>
                <div className="w-[90%] h-[2px] bg-slate-700 m-auto mt-3"></div>
                <div className="flex mt-2 md:mt-0 gap-2 md:gap-4 items-center flex-col md:flex-row text-slate-600 justify-between w-[90%] m-auto text-sm">
                    <p>© 2025 William Mark. All rights reserved.</p>
                    <span className="flex flex-col items-center gap-2 md:gap-4 md:flex-row">
                        <p>Terms of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </span>
                </div>
            </div>
        </>
    )
}