"use client"
import React from "react";
import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { MdSaveAlt } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Profile } from "@/components/Design/Details";
import { About } from "@/components/Design/About";
import { Social } from "@/components/Design/Social";

import vector from "@/assets/images/vector.png"
import avatar from "@/assets/images/avatar.png"
import mainImage from "@/assets/images/main_avatar.png"
import { Share } from "@/components/Design/Share";
import { Others } from "@/components/Design/Others";

export default function Home() {
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/vikas-patra.vcf';
      link.download = 'vikas-patra.vcf';
      link.setAttribute('type', 'text/vcard');

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <div className="h-full lg:h-screen flex items-center justify-center bg-[#ebf5ff] relative">
      <FlickeringGrid className="fixed inset-0 w-full" />
      <div className="min-w-[320px] max-w-[400px] h-full px-2 relative">
        <div className="absolute inset-0 w-full h-full flex bg-[#13365e]/95">
          <div className="h-full w-full  background_image"></div>
        </div>
        <div className="relative z-25 h-full flex flex-col text-white py-5 px-3">
          <div className="flex flex-col w-full justify-center items-center pt-3">
            <Image src={mainImage} alt="Capt. Vikas Patra Image" className="w-[290px]" />
          </div>
          {/* <div className="flex flex-col w-full justify-center items-center  px-5 pt-3 pb-6 first_bg relative -top-3 z-20 mb-3"> */}
          <div className="flex flex-col w-full justify-center items-center  px-3 pt-3 pb-6 relative -top-3 z-20 mb-5 bg-white rounded-xl">
            <h1 className="text-3xl font-semibold text-blue-950 text-center">Capt. Vikas Patra</h1>
            <p className="text-center text-[14px] text-blue-900">Director, School of Maritime Studies, CUTM</p>
            <Social />
          </div>
          <section className="pb-18">
            <div className="flex flex-col gap-4">
              <About />
              <Profile />
              <Others />
            </div>
          </section>
          <div className="flex w-full justify-center items-center fixed bottom-3 left-0 px-3">
            <div className="flex max-fit justify-center items-center overflow-hidden rounded-full border border-blue-200 md:hover:scale-110 transition-all duration-200">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-blue-950 hover:bg-blue-900 text-white font-medium py-2 px-3 transition-all duration-200"
              >
                <MdSaveAlt className="text-lg" />
                Save Contact
              </button>
              <Drawer>
                <DrawerTrigger className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-blue-950 border-l border-blue-200 hover:bg-blue-900 text-white font-medium py-2 px-3 transition-all duration-200">
                  <IoMdShare className="text-lg" />
                  Share Contact
                </DrawerTrigger>
                <DrawerContent className="bg-blue-50 min-w-[320px] max-w-[400px] mx-auto">
                  <DrawerHeader>
                    <DrawerTitle>
                      <div className="text-3xl font-semibold text-blue-900 text-center">Capt. Vikas Patra</div>
                    </DrawerTitle>
                    <DrawerDescription className="text-blue-900 text-[19px]">Director, School of Maritime Studies, CUTM</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4">
                    <Share />
                  </div>
                  <DrawerFooter>
                    <DrawerClose className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-full transition-all duration-200">
                      CLOSE
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}