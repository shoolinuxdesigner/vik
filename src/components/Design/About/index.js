"use client"
import React from "react"

export function About() {
    return (
        <>
            <div className="relative w-full p-4 rounded-lg overflow-hidden gap-2 bg-[#0f1f33]">
                {/* <div className="relative w-full px-8 py-7 rounded-lg overflow-hidden gap-2 second_bg"> */}
                <h1 className="text-center font-semibold uppercase mb-2 text-blue-950 hidden">About Me</h1>
                <div className="flex flex-col gap-1.5">
                    <p className="text-white text-center text-[16px]">I am a Master Mariner and the Director of the School of Maritime Studies at Centurion University, with over 25 years of leadership in maritime education. I currently serve as the Vice Chair of the IMarEST India Branch, dedicated to training the next generation of merchant navy professionals.</p>
                </div>
            </div>
        </>
    )
}
