"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReferralHeroWidget from "./ReferralHeroWidget";

import { useModal } from "@/context/ModalContext";

export default function ReferralModal() {
    const { isModalOpen, closeModal } = useModal();

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Side: Content/Image */}
                <div className="w-full md:w-1/2 bg-[#F3F4F6] relative flex flex-col items-center justify-center p-8 text-center bg-cover bg-center" >
                    {/* Fallback content or Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/referral-rewards.png"
                            alt="Refer and Earn"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                    </div>


                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-6 mt-20 md:pt-28 overflow-y-auto bg-white flex flex-col justify-center">
                    <div className="w-full">
                        {/* Using the same ID as in ReferAndEarn.tsx */}
                        <ReferralHeroWidget widgetId="MF2f0c6063df" />
                    </div>
                </div>
            </div>
        </div>
    );
}
