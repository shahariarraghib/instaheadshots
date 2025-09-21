"use client";
import { teamData } from "@/content/teamData";
import React from "react";

const TeamSection = () => {
    return (
        <section className="mx-auto mt-4 max-w-5xl gap-10 p-4 sm:py-16 lg:mt-28 lg:px-0 lg:py-0">
            <div
                className="flex w-full flex-col items-center bg-cover bg-center px-5 py-10 text-center sm:rounded-3xl sm:px-12 sm:py-20"
                style={{ backgroundImage: "url('/images/team/team-plan-bg.webp')" }}
            >
                <h2 className="text-[2.625rem] font-medium leading-[1.1] text-white sm:text-7xl">
                    InstaHeadshots for Companies and Teams
                </h2>

                <p className="mt-5 text-xl text-white/80 sm:text-2xl">
                    On-brand headshots, without expensive, complicated photoshoots.
                </p>

                <button className="group relative mt-6 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-white px-9 py-5 text-lg font-medium text-primary active:scale-95 disabled:pointer-events-none disabled:opacity-40 sm:py-6 sm:text-xl">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700 group-hover:ease-out"></div>
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 transition-transform duration-200 ease-in group-hover:translate-x-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="hidden w-full max-w-screen-md auto-rows-fr grid-cols-2 gap-0 overflow-hidden rounded-xl sm:mt-16 sm:grid sm:grid-cols-4">
                    {teamData.map((item, index) => (
                        <div key={index} className="relative aspect-[1/1.4] w-full">
                            <img
                                src={item.image}
                                className="h-full w-full rounded-none object-cover"
                                alt={item.fullName}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-10 grid w-full max-w-screen-md auto-rows-fr grid-cols-2 gap-0 overflow-hidden rounded-xl sm:hidden">
                    {teamData.slice(0, 4).map((item, index) => (
                        <div key={index} className="relative aspect-[1/1.4] w-full">
                            <img
                                src={item.image}
                                className="h-full w-full rounded-none object-cover"
                                alt={item.fullName}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
