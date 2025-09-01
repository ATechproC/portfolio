import Image from "next/image";
import { assets } from "../assets/assets";



export default function Contact() {
    return (
        <>
            <div className="py-10 m-auto text-center w-[480px] bg-no-repeat bg-cover">
                <p className="text-slate-800">Connect with me</p>
                <h1 className="text-4xl text-slate-800">Get in touch</h1>
                <p className="w-2/3 m-auto mt-3 text-sm text-gray-600">
                    Id love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.
                </p>
                <form className="items-center w-full mt-6">
                    <div className="flex items-center justify-between gap-3">
                        <input className="p-2 border border-gray-500 outline-none" placeholder="Enter your name" />
                        <input className="p-2 border border-gray-500 outline-none" placeholder="Enter your email" />
                    </div>
                    <textarea className="w-full p-2 mt-5 border border-gray-500 outline-none h-52" placeholder="Enter your message" />
                    <button className="flex items-center gap-3 px-5 py-1 mx-auto mt-3 text-white bg-black border rounded-full" type="submit">Submit <Image src={assets.right_arrow_white} alt="" width={17} height={17} /> </button>
                </form>
            </div>
        </>
    )
}