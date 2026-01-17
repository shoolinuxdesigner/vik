"use client"
import React from "react"
import { MdAnchor } from "react-icons/md";

export function About() {
    return (
        <>
            <div className="relative w-full p-4 rounded-lg overflow-hidden gap-2 bg-[#0f1f33]">
                <div className="flex flex-col gap-1.5">
                    <p className="text-white text-center text-[19px] font-semibold">Master Mariner | Maritime Education & Consultancy Leader</p>
                    <hr className="border-white/30 my-1" />
                    <ul className="flex flex-col gap-3">
                        <li><MdAnchor className="inline mr-2 mb-1" /><strong>Director</strong> &minus; School of Maritime Studies, CUTM</li>
                        <li><MdAnchor className="inline mr-2 mb-1" /><strong>Founder & MD</strong> &minus; Lagos Maritime Academy</li>
                        <li><MdAnchor className="inline mr-2 mb-1" /><strong>Founder</strong> &minus; PMV Maritime Solutions</li>
                        <li><MdAnchor className="inline mr-2 mb-1" /><strong>Managing Trustee</strong> &minus; IMarEST India Branch</li>
                        <li><MdAnchor className="inline mr-2 mb-1" /><strong>Former Head of Maritime</strong> &minus; Liverpool John Moores University (UK)</li>
                        <li><MdAnchor className="inline mr-2 mb-1" />20+ years global maritime leadership &minus; <strong>UK · India · Nigeria</strong></li>
                        <li><MdAnchor className="inline mr-2 mb-1" />Trained 5,000+ merchant navy officers worldwide</li>
                        <li><MdAnchor className="inline mr-2 mb-1" />IMO & international maritime policy exposure</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
