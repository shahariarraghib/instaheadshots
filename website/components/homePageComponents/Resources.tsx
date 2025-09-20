import React from "react";
import SectionTitle from "../commonComponents/SectionTitle";
import { rosourceData } from "@/content/resourceData";

const Resources = () => {
    return (
        <section className="mx-auto max-w-5xl gap-10  sm:py-16">
            <SectionTitle
                mainTitle="RESOURCES"
                title={
                    <>
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                            Personal branding
                        </span>
                        <span> for successful professionals </span>
                    </>
                }
                subTitle="Stay ahead of the curve with our expert insights and tips on making a good impression."
                left
            />
            <div className="no-scrollbar mt-8 flex w-full flex-row gap-4 overflow-x-auto">
                {rosourceData.map((item, index) => (
                    <>
                        {" "}
                        <a
                            href={item.link}
                            target="_self"
                            className="group w-full min-w-64 overflow-hidden rounded-xl border border-primary/20"
                            key={index}
                        >
                            <div className="relative h-48 w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                className
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-contain backdrop-blur-xl"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between gap-2 p-4">
                                <p className="text-left text-base font-[450] text-primary sm:text-lg">{item.title}</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 text-primary transition-all duration-200 group-hover:-translate-y-2 group-hover:translate-x-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17L17 7"></path>
                                </svg>
                            </div>
                        </a>
                    </>
                ))}
            </div>
        </section>
    );
};

export default Resources;
