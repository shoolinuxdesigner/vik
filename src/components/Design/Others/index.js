"use client"
import React from "react"
import Image from "next/image";

// Images
import Soms from "@/assets/images/soms.png"
import Imarest from "@/assets/images/imarest.png"
import Lagos from "@/assets/images/lagos.png"
import Pmv from "@/assets/images/pmv.png"

// Icons
import { IoIosGlobe } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

export function Others() {
    return (
        <>
            {/* SOMS */}
            <div className="relative w-full p-4 rounded-lg gap-2 bg-[#04274d] mt-8">
                <div className="flex flex-col gap-1.5 relative">
                    <div className="absolute -top-8 bg-[#04274d] flex justify-center items-center p-1 rounded-md">
                        <Image src={Soms} alt="School of Marine Studies" className="w-[160px]" />
                    </div>
                    <div className="flex flex-col gap-1 pt-8">
                        <p className="text-white text-[20px] leading-none font-semibold">School of Marine Studies</p>
                        <p className="text-white text-[17px] leading-none">Director</p>
                    </div>
                    <hr className="border-white/30 my-1" />
                    <ul className="flex flex-col gap-1">
                        <li><a href="https://maritime.cutm.ac.in" target="_blank" rel="noopener noreferrer"><IoIosGlobe className="inline mr-2" />maritime.cutm.ac.in</a></li>
                        <li><a href="mailto:vik.patra@cutm.ac.in"><IoMailOutline className="inline mr-2" />vik.patra@cutm.ac.in</a></li>
                    </ul>
                </div>
            </div>


            {/* IMarEST India Branch */}
            <div className="relative w-full p-4 rounded-lg gap-2 bg-[#0f202c] mt-7">
                <div className="flex flex-col gap-1.5 relative">
                    <div className="absolute -top-13 bg-[#0f202c] flex justify-center items-center p-1 rounded-full">
                        <Image src={Imarest} alt="IMarEST India Branch" className="w-[70px]" />
                    </div>
                    <div className="flex flex-col gap-1 pt-10">
                        <p className="text-white text-[20px] leading-none font-semibold">IMarEST India Branch</p>
                        <p className="text-white text-[17px] leading-none">Managing Trustee</p>
                    </div>
                    <hr className="border-white/30 my-1" />
                    <ul className="flex flex-col gap-1">
                        <li><a href="https://www.imarest.org" target="_blank" rel="noopener noreferrer"><IoIosGlobe className="inline mr-2" />www.imarest.org</a></li>
                        <li><a href="mailto:vik.patra@cutm.ac.in"><IoMailOutline className="inline mr-2" />vik.patra@cutm.ac.in</a></li>
                    </ul>
                </div>
            </div>


            {/* Lagos */}
            <div className="relative w-full p-4 rounded-lg gap-2 bg-[#123023] mt-7">
                <div className="flex flex-col gap-1.5 relative">
                    <div className="absolute -top-13 bg-[#123023] flex justify-center items-center p-1 rounded-full">
                        <Image src={Lagos} alt="Lagos" className="w-[70px]" />
                    </div>
                    <div className="flex flex-col gap-1 pt-8">
                        <p className="text-white text-[20px] leading-none font-semibold">Lagos Maritime Academy</p>
                        <p className="text-white text-[17px] leading-none">Founder & Managing Director</p>
                    </div>
                    <hr className="border-white/30 my-1" />
                    <ul className="flex flex-col gap-1">
                        <li><a href="https://www.lagosmaritime.com" target="_blank" rel="noopener noreferrer"><IoIosGlobe className="inline mr-2" />www.lagosmaritime.com</a></li>
                        <li><a href="mailto:ceo@lagosmaritime.com"><IoMailOutline className="inline mr-2" />ceo@lagosmaritime.com</a></li>
                    </ul>
                </div>
            </div>


            {/* Lagos */}
            <div className="relative w-full p-4 rounded-lg gap-2 bg-[#135a75] mt-7">
                <div className="flex flex-col gap-1.5 relative">
                    <div className="absolute -top-13 bg-[#135a75] flex justify-center items-center p-1 rounded-full">
                        <Image src={Pmv} alt="Lagos" className="w-[70px]" />
                    </div>
                    <div className="flex flex-col gap-1 pt-8">
                        <p className="text-white text-[20px] leading-none font-semibold">PMV Maritime Solutions</p>
                        <p className="text-white text-[17px] leading-none">Founder</p>
                    </div>
                    <hr className="border-white/30 my-1" />
                    <ul className="flex flex-col gap-1">
                        <li><a href="https://www.pmvmaritime.com" target="_blank" rel="noopener noreferrer"><IoIosGlobe className="inline mr-2" />www.pmvmaritime.com</a></li>
                        <li><a href="mailto:info@pmvmaritime.com"><IoMailOutline className="inline mr-2" />info@pmvmaritime.com</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
