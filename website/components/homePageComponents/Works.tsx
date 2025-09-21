import { gridFirstRowImage, gridFirstAIImage, gridthirdAIImage, gridthirdRowImage } from "@/content/workData";
import Image from "next/image";
import React from "react";
import SectionTitle from "../commonComponents/SectionTitle";

const Works = () => {
    return (
        <section className="mx-auto mt-4 max-w-5xl gap-10 p-4 sm:py-16 lg:mt-28 lg:px-0 lg:py-0">
            <SectionTitle
                mainTitle="HOW THIS WORKS"
                title={
                    <>
                        <span>Hundreds of headshots,</span>
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                            15 minutes of your time
                        </span>
                    </>
                }
                subTitle="Ready in 15 minutes, from the comfort of your home."
                left
            />
            {/* <div className="px-4 lg:px-0">
                <p className="mb-1 text-[13px] font-medium uppercase tracking-widest text-primary/80 antialiased sm:text-sm">
                    HOW THIS WORKS
                </p>
                <h2 className="tracking-2xl text-3xl font-medium -tracking-[0.021em] text-primary antialiased sm:text-[2.5rem] sm:leading-[1.1] sm:-tracking-[0.022em]">
                    <span>Hundreds of headshots, </span>
                    <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                        15 minutes of your time
                    </span>
                </h2>
                <p className="tracking-base sm:tracking-lg py-2 text-base font-normal text-primary/80 antialiased sm:text-lg">
                    Ready in 15 minutes, from the comfort of your home.
                </p>
            </div> */}

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr]">
                {/* Column 1 */}
                <div className="hidden rounded-lg px-2 lg:block">
                    <div className="flex items-center justify-center">
                        {gridFirstRowImage.map((item, index) => (
                            <div key={index} className="px-2">
                                <Image
                                    src={item.image}
                                    alt={`${index}`}
                                    width={120}
                                    height={50}
                                    className="h-16 w-16 rounded-xl object-contain"
                                    unoptimized={true}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center py-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-down text-primary"
                        >
                            <path d="M8 18L12 22L16 18"></path>
                            <path d="M12 2V22"></path>
                        </svg>
                    </div>

                    <div className="">
                        <div className="grid w-full grid-cols-2 gap-3 ">
                            {gridFirstAIImage.map((item, index) => (
                                <div key={index} className="relative">
                                    <Image
                                        src={item.image}
                                        alt={`${index}`}
                                        width={0}
                                        height={0}
                                        className="relative  h-[180px] w-[200px] overflow-hidden rounded-lg bg-slate-50"
                                        unoptimized={true}
                                    />

                                    <div className="">
                                        <p className="inset-x-0z-20  absolute bottom-2 left-1/2 flex h-fit w-fit -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md bg-primary/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-lg">
                                            AI GENERATED
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="relative flex flex-col items-center">
                    {/* vertical line */}
                    <div className="absolute bottom-0 top-0 w-px bg-primary/30"></div>

                    {/* STEP 1 - top */}
                    <div className="relative -mt-8 mb-20 flex flex-col items-center bg-white pb-4">
                        <div className="z-10 flex h-6 w-6 items-center justify-center"></div>
                        <div className="mt-2 text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary/60">STEP 1</p>
                            <p className="text-xl font-medium text-primary">Upload a few photos</p>
                        </div>
                    </div>

                    {/* STEP 2 - center */}
                    <div className="relative mb-20 mt-4 flex flex-col items-center bg-white pb-6">
                        <div className="z-10 flex h-6 w-6 items-center justify-center "></div>
                        <div className="mt-2 text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary/60">STEP 2</p>
                            <p className="text-xl font-medium text-primary">Our AI learns how you look</p>
                        </div>
                    </div>

                    {/* STEP 3 - bottom */}
                    <div className="relative mt-4 flex flex-col items-center bg-white">
                        <div className="z-10 flex h-6 w-6 items-center justify-center"></div>
                        <div className="mt-2 text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary/60">STEP 3</p>
                            <p className="text-xl font-medium text-primary">Headshots ready in 15 minutes</p>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="order-2 rounded-lg md:order-2">
                    <div>
                        <div className="flex items-center justify-center">
                            {gridthirdRowImage.map((item, index) => (
                                <div key={index} className="px-2">
                                    <Image
                                        src={item.image}
                                        alt={`${index}`}
                                        width={120}
                                        height={50}
                                        className="h-16 w-16 rounded-xl object-contain"
                                        unoptimized={true}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center py-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-move-down text-primary"
                            >
                                <path d="M8 18L12 22L16 18"></path>
                                <path d="M12 2V22"></path>
                            </svg>
                        </div>

                        <div className="">
                            <div className="grid w-full grid-cols-2 gap-3 ">
                                {gridthirdAIImage.map((item, index) => (
                                    <div key={index} className="relative">
                                        <Image
                                            src={item.image}
                                            alt={`${index}`}
                                            width={0}
                                            height={0}
                                            className="relative  h-[180px] w-[200px] overflow-hidden rounded-lg bg-slate-50"
                                            unoptimized={true}
                                        />

                                        <div className="">
                                            <p className="inset-x-0z-20  absolute bottom-2 left-1/2 flex h-fit w-fit -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md bg-primary/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-lg">
                                                AI GENERATED
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
