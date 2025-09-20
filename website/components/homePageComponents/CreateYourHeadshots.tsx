import { createYourHeadshotsData } from "@/content/createYourHeadshotsData";
import React from "react";

const CreateYourHeadshots = () => {
    return (
        <section>
            <div className="flex flex-col py-12 sm:py-16">
                <div className="relative mx-auto flex w-full items-center justify-center gap-5 overflow-hidden">
                    {createYourHeadshotsData.map((item, index) => (
                        <div
                            className="relative aspect-[1/1.4] w-40 shrink-0 overflow-hidden rounded-xl sm:w-80"
                            key={index}
                        >
                            <img src={item.image} alt="AI Headshot Output" className="h-full w-full object-cover" />
                        </div>
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>

                <div className="mx-auto w-full max-w-5xl -translate-y-1/2 px-4">
                    <button className="group relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-primary px-9 py-5 text-xl font-[450] text-white active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 sm:gap-4 sm:py-14 sm:text-5xl">
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></div>
                        Create your Headshots
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 transition-transform duration-200 ease-in group-hover:translate-x-2 sm:h-12 sm:w-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CreateYourHeadshots;
