"use client"
import React from "react"
import { BorderBeam } from "@/components/ui/border-beam"
import { Card } from "@/components/ui/card"

// Icons
import { IoMailOutline, IoGlobeOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export function Profile() {
    return (
        <>
            <div className="relative w-full px-10 pb-5 pt-7 rounded-lg overflow-hidden gap-2 third_bg">
                <h1 className="text-center font-semibold uppercase mb-3 text-blue-900 hidden">Contact Me</h1>
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3 text-blue-900">
                        <IoMailOutline size={22} className="pt-0.5 opacity-70" />
                        <a href="mailto:vik.patra@cutm.ac.in" target="_blank" className="w-full">vik.patra@cutm.ac.in</a>
                    </div>
                    <div className="flex items-center gap-3 text-blue-900">
                        <IoGlobeOutline size={22} className="pt-0.5 opacity-70" />
                        <a href="https://vik.sametmaritime.com/" target="_blank" className="w-full">vik.sametmaritime.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-blue-900">
                        <FaWhatsapp size={22} className="pt-0.5 opacity-70" />
                        <a href="https://wa.me/447501247715" target="_blank" className="w-full">+44 7501 247715</a>
                    </div>
                    <hr className="border-blue-800/50 my-1" />
                    <div className="flex items-center gap-3 text-blue-900">
                        <FaInstagram size={22} className="pt-0.5 opacity-70" />
                        <a href="https://www.instagram.com/vik_patra/" target="_blank" className="w-full">vik_patra</a>
                    </div>
                    <div className="flex items-center gap-3 text-blue-900">
                        <AiOutlineLinkedin size={22} className="pt-0.5 opacity-70" />
                        <a href="https://www.linkedin.com/in/vik-patra-5b710240/" target="_blank" className="w-full">vik-patra-5b710240</a>
                    </div>
                    <div className="flex items-center gap-3 text-blue-900">
                        <FaXTwitter size={22} className="pt-0.5 opacity-70" />
                        <a href="https://x.com/vik_patra" target="_blank" className="w-full">vik_patra</a>
                    </div>
                </div>
            </div>
        </>
    )
}
