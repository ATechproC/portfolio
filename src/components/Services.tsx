import Image from "next/image";
import { assets, serviceData } from "../assets/assets";


export default function Services() {
    return (
            <div id="services"  className="w-4/5 my-[70px] 10 m-auto text-center ">
                <p className="text-slate-800">What i offers</p>
                <h1 className="text-4xl text-slate-800">My services</h1>
                <p className="w-2/3 m-auto mt-3 text-sm text-gray-600">
                    I am a frontend developer from California, USA with 10 years of experience in multiple
                    companies like Microsoft, Tesla and Apple.
                </p>
                <ul className="grid gap-4 pt-10 sm:grid-cols-3">
                    {serviceData.map(({icon, title, description}, index) => {
                        return <li key={index} className="relative flex-col flex-wrap justify-center gap-3 px-5 duration-300 border cursor-default -z-10 lex _ w-100 border-gray shadow-initial rounded-xl hover:-translate-y-1 hover:shadow-shadow" >
                            <Image className="mt-2" src={icon} alt="" width={50} height={50} />
                            <h1>{title}</h1>
                            <p className="text-sm text-gray-500"> {description} </p>
                            <span className="flex items-center justify-center gap-3 pb-4 text-sm text-gray-500">Read more <Image src={assets.right_arrow} alt="" width={20} height={20} /> </span>
                        </li>
                    })}
                </ul>
            </div>
    )
}
