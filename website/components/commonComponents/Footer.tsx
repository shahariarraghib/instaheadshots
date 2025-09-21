/* eslint-disable @next/next/no-img-element */
"use client";
import { companyData, photoData, socialData } from "@/content/footerdata";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#FAFAFA] px-4 pb-20 pt-8 md:p-12">
            <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
                    <div className="flex flex-col items-start gap-8 md:col-span-2">
                        <div className="flex flex-col items-start gap-5">
                            <a href="/" aria-label="Home">
                                <img
                                    src="/images/footer/logo-default.svg"
                                    alt="Logo"
                                    loading="lazy"
                                    width="150"
                                    height="32"
                                    className="h-auto w-[150px]"
                                />
                            </a>

                            <div className="flex items-center gap-4">
                                {socialData.map((item, index) => (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        key={index}
                                    >
                                        <img
                                            src={item.image}
                                            alt="Facebook"
                                            loading="lazy"
                                            width="28"
                                            height="28"
                                            className="h-7 w-7"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="/giftcards/"
                            className="group flex w-fit items-center justify-between gap-3 rounded-lg border border-primary/20 bg-white p-5 transition-all duration-200 hover:border-primary"
                            aria-label="Gift cards — Gift amazing headshots now"
                        >
                            <div className="relative h-10 w-10 flex-shrink-0">
                              svg
                            </div>

                            <div className="flex flex-col items-start gap-1">
                                <p className="tracking-sm text-sm font-[550]">Gift amazing headshots now</p>
                                <p className="tracking-xs text-xs font-normal text-primary">
                                    Help them make a stunning first impression
                                </p>
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-arrow-right transform text-primary transition-all duration-200 group-hover:translate-x-2"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 antialiased">
                        <div className="flex flex-col gap-6">
                            <p className="tracking-sm text-sm font-medium text-primary">Photo Types</p>
                            <div className="flex flex-col gap-5">
                                {photoData.map((item, index) => (
                                    <a
                                        className="tracking-sm group flex items-center gap-1 text-sm font-normal text-primary/80 transition-all duration-200 hover:text-primary"
                                        href={item.link}
                                        aria-label={item.name}
                                        key={index}
                                    >
                                        {item.name}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-arrow-up-right invisible text-primary/80 group-hover:visible"
                                        >
                                            <path d="M7 7h10v10"></path>
                                            <path d="M7 17 17 7"></path>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 antialiased md:items-end">
                        <div className="flex flex-col gap-6">
                            <p className="tracking-sm text-sm font-medium text-primary">Company</p>
                            <div className="flex flex-col gap-5">
                                {companyData.map((item, index) => (
                                    <a
                                        className="tracking-sm group flex items-center gap-1 text-sm font-normal text-primary/80 transition-all duration-200 hover:text-primary"
                                        href={item.link}
                                        aria-label={item.name}
                                        key={index}
                                    >
                                        {item.name}
                                        <svg
                                            className="lucide lucide-arrow-up-right invisible h-3.5 w-3.5 text-primary/80 group-hover:visible"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path d="M7 7h10v10"></path>
                                            <path d="M7 17 17 7"></path>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
                    <p className="tracking-xs text-xs font-normal text-primary/80">
                        © 2025 instaheadshots. All rights reserved.
                    </p>

                    <button className="tracking-sm group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-white px-4 py-2 text-sm font-medium text-primary active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40">
                        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0"></div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-globe"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>

                        <span>Change Language</span>
                    </button>
                </div>
            </div>

            
        </footer>
    );
};

export default Footer;
