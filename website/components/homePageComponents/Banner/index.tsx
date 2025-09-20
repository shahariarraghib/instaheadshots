"use client";
import { bannerImage } from "@/content/bannerData";
import ImageCard from "./ImageCard/crad";
import Image from "next/image";

const Banner: React.FC = () => {
    return (
        <section className="relative h-[120vh] overflow-hidden md:h-screen lg:mt-16 lg:min-h-[110vh] xl:h-screen">
            {/* Top Banner Overlay - hidden on mobile */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 hidden w-full justify-center p-4 md:flex">
                <div className="pointer-events-auto rounded-xl bg-white/80 px-6 py-3 shadow-md backdrop-blur-md">
                    <div className="flex items-center gap-2 md:gap-4 lg:gap-2">
                        <div>
                            <Image
                                src="/images/banner/glowing-heart-icon.png"
                                alt="glowing-heart-icon"
                                width={25}
                                height={25}
                                className=""
                                unoptimized={true}
                            />
                        </div>
                        <div>
                            <h1 className="md:text-text-base text-base font-medium text-gray-900">
                                Real headshots of people just like you
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Banner */}

            <div className="grid grid-cols-3 gap-2 overflow-visible xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-12 lg:gap-0 xl:grid-cols-12 ">
                {bannerImage.map((item, index) => (
                    <div key={index} className="overflow-visible">
                        <ImageCard item={item} />
                    </div>
                ))}
            </div>

            {/* Bottom Banner Overlay - hidden on mobile */}
            <div className="pointer-events-none absolute bottom-[180px] left-0 z-20 hidden w-full justify-center md:flex">
                <div className="pointer-events-auto rounded-xl bg-white">
                    <div className="left-0 right-0 top-0 flex w-full items-center gap-1 rounded-t-2xl bg-[#EAFDF3] px-20 py-2 text-center">
                        <Image
                            src="/images/banner/trustpilot_star.svg"
                            alt="trustpilot_star"
                            width={0}
                            height={0}
                            className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                            unoptimized={true}
                        />
                        <Image
                            src="/images/banner/trustpilot_star.svg"
                            alt="trustpilot_star"
                            width={0}
                            height={0}
                            className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                            unoptimized={true}
                        />
                        <Image
                            src="/images/banner/trustpilot_star.svg"
                            alt="trustpilot_star"
                            width={0}
                            height={0}
                            className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                            unoptimized={true}
                        />
                        <Image
                            src="/images/banner/trustpilot_star.svg"
                            alt="trustpilot_star"
                            width={0}
                            height={0}
                            className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                            unoptimized={true}
                        />
                        <Image
                            src="/images/banner/trustpilot_star.svg"
                            alt="trustpilot_star"
                            width={0}
                            height={0}
                            className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                            unoptimized={true}
                        />
                        <p className="whitespace-nowrap text-xs font-medium text-primary sm:text-sm">
                            {" "}
                            Rated 5/5 with 5,574+ reviews on Trustpilot
                        </p>
                        <Image
                            src="/images/banner/trustpilot_logo.svg"
                            alt="trustpilot_logo"
                            width={80}
                            height={20}
                            className="flex "
                            unoptimized={true}
                        />
                    </div>
                    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-6 py-5">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-center text-[2rem] font-bold leading-tight text-transparent ">
                                Stunning headshots
                            </h1>
                            <h1 className="text-center text-[2rem] font-medium leading-tight text-gray-900">
                                for successful professionals
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <button className="tracking-sm group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-primary px-8 py-3 text-base font-[450] text-white antialiased active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40">
                            <span className="relative">Create your Headshots Now For FREE</span>
                            <span className="absolute left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-transform duration-700 ease-in-out group-hover:translate-x-[400px] group-hover:opacity-100"></span>
                            <Image
                                src="/images/banner/arrow_right.svg"
                                alt="arrow_rights"
                                width={24}
                                height={24}
                                className=""
                                unoptimized={true}
                            />
                        </button>
                        <p className="tracking-inter-sm mb-2 py-3 text-sm text-primary/80">
                            Pay only after you love your headshots
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Banner Overlay - only visible on mobile */}
            <div className="pointer-events-none absolute bottom-[400px] left-1/2 z-20 flex h-[260px] w-[274px] -translate-x-1/2 transform flex-col justify-center overflow-clip bg-[url('/images/banner/mweb-hero-card.png')] bg-cover bg-center bg-no-repeat px-3 pb-3 pt-[2.25rem] md:hidden">
                <div className="">
                    <div className="flex flex-col  gap-2">
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end box-decoration-clone bg-clip-text text-[2rem] font-bold  leading-8 text-transparent">
                            Stunning headshots
                        </span>

                        <span className="text-[18px] font-semibold">for successful professionals</span>
                        <div className="-mt-[35px] flex items-end justify-end">
                            {" "}
                            <Image
                                src="/images/banner/curver_underline_pencil.png"
                                alt="curver_underline_pencil"
                                width={140}
                                height={51}
                                className=""
                                unoptimized={true}
                            />
                        </div>

                        <div className="">
                            <div className="flex gap-1">
                                <Image
                                    src="/images/banner/trustpilot_star.svg"
                                    alt="trustpilot_star"
                                    width={0}
                                    height={0}
                                    className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                                    unoptimized={true}
                                />
                                <Image
                                    src="/images/banner/trustpilot_star.svg"
                                    alt="trustpilot_star"
                                    width={0}
                                    height={0}
                                    className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                                    unoptimized={true}
                                />
                                <Image
                                    src="/images/banner/trustpilot_star.svg"
                                    alt="trustpilot_star"
                                    width={0}
                                    height={0}
                                    className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                                    unoptimized={true}
                                />
                                <Image
                                    src="/images/banner/trustpilot_star.svg"
                                    alt="trustpilot_star"
                                    width={0}
                                    height={0}
                                    className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                                    unoptimized={true}
                                />
                                <Image
                                    src="/images/banner/trustpilot_star.svg"
                                    alt="trustpilot_star"
                                    width={0}
                                    height={0}
                                    className="flex h-4 w-4 items-center justify-center bg-[#00B67A]"
                                    unoptimized={true}
                                />

                                <p className=" ml-2 text-xs font-bold text-primary sm:text-sm">Perfect 5 out of 5 </p>
                            </div>

                            <div className="mt-1 flex items-center gap-2">
                                <div>
                                    <p className="flex items-end gap-1 text-xs font-normal leading-normal text-[#6C747D]">
                                        5,598 reviews on{" "}
                                    </p>
                                </div>
                                <div>
                                    <Image
                                        src="/images/banner/trustpilot_logo.svg"
                                        alt="trustpilot_logo"
                                        width={80}
                                        height={20}
                                        className="flex "
                                        unoptimized={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
