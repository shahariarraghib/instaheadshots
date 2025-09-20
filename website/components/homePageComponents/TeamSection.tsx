"use client";
import { teamData } from "@/content/teamData";
import React from "react";

const TeamSection = () => {
    return (
        <section className="mx-auto flex w-full max-w-5xl py-1 sm:px-4 sm:py-1">
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

                    {/* <div className="relative aspect-[1/1.4] w-full">
                        <img src="/images/team-plan/6.png" className="h-full w-full object-cover" alt="AI Headshot" />
                    </div>
                    <div className="relative aspect-[1/1.4] w-full">
                        <img src="/images/team-plan/7.png" className="h-full w-full object-cover" alt="AI Headshot" />
                    </div>
                    <div className="relative aspect-[1/1.4] w-full">
                        <img src="/images/team-plan/8.png" className="h-full w-full object-cover" alt="AI Headshot" />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

// export const TeamCard = ({ people }: { people: PeopleType }) => {
//     return (
//         <div className="group flex items-center justify-center">
//             <div className="mx-6 w-full overflow-hidden  lg:mx-2">
//                 <div className="relative">
//                     <img
//                         src={people.image}
//                         alt={people.fullName}
//                         className="h-[350px] w-full rounded-lg border border-primary bg-primary/10 object-cover object-top lg:h-[420px] xl:h-[350px]"
//                     />
//                     <div className="absolute bottom-0 left-1/2 mb-4 flex -translate-x-1/2 transform items-center justify-center opacity-100 duration-300 group-hover:opacity-0 ">
//                         <div className="z-10 -mb-9 rounded bg-black p-2 text-3xl text-primary">
//                             <TiPlus />
//                         </div>
//                     </div>
//                     <div className="absolute bottom-0 left-1/2 mb-4 flex -translate-x-1/2 transform items-center justify-center gap-0 opacity-0 duration-300 group-hover:gap-4 group-hover:opacity-100">
//                         {people.socialLinks.map((item, index) => (
//                             <a
//                                 key={index}
//                                 target="__blank"
//                                 href={item.href}
//                                 className="z-10 -mb-9 rounded bg-primary p-3 text-xl text-white"
//                             >
//                                 {item.icon}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="mt-4 p-4 text-center">
//                     <h3 className="text-2xl font-medium">{people.fullName}</h3>
//                     <p className="text-sm font-semibold text-primary">{people.designation}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
