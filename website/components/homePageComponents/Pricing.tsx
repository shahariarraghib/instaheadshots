import React from "react";
import SectionTitle from "../commonComponents/SectionTitle";
import Image from "next/image";
import { pricingData, pricingMarqueeData } from "@/content/pricingData";
import Marquee from "react-fast-marquee";
import { marqueeType } from "@/types/pricingType";

const Pricing = () => {
    const [{ discountprice, originalprice, save }] = pricingData;
    console.log(pricingData);
    return (
        <>
            <section className="mx-auto mt-4 max-w-5xl gap-10 p-4 sm:py-16 lg:mt-28 lg:px-0 lg:py-0">
                {" "}
                <SectionTitle
                    mainTitle="PRICING"
                    title={
                        <>
                            <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                                Studio quality headshots,
                            </span>
                            <span>minus the studio costs </span>
                        </>
                    }
                    subTitle="Get high-quality AI headshots in 15 minutes. No photographer needed."
                    left
                />
                <div className="mt-6 grid grid-cols-1 items-center justify-items-center gap-0 md:grid-cols-[47%_53%] lg:gap-3">
                    {/* Left card */}
                    <div className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-primary/10 bg-white">
                        <div className="flex w-full flex-col gap-6 p-6">
                            <div className="flex flex-col items-start gap-4">
                                {/* Price row */}
                                <div className="flex items-end gap-2">
                                    <p className="text-3xl font-medium tracking-tight text-neutral-400 line-through">
                                        $<span className="tracking-normal">{originalprice}</span>
                                    </p>

                                    <p className="text-3xl font-semibold tracking-tight text-primary">
                                        $<span className="tracking-normal">{discountprice}</span>
                                    </p>

                                    <p className="tracking-sm self-end text-sm font-normal">USD</p>

                                    <p
                                        className="box-decoration-clone bg-clip-text text-xs font-[550] uppercase tracking-wider text-transparent"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(90deg, #0FA455 0%, #12ED7A 51.44%, #0FA456 100%)"
                                        }}
                                    >
                                        Save {save}%
                                    </p>
                                </div>

                                {/* Features list */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 flex-shrink-0 text-primary">
                                            {/* SVG icon */}
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                            >
                                                <g clipPath="url(#clip0_4418_9254)">
                                                    <path
                                                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M2.67004 18.9496L7.60004 15.6396C8.39004 15.1096 9.53004 15.1696 10.24 15.7796L10.57 16.0696C11.35 16.7396 12.61 16.7396 13.39 16.0696L17.55 12.4996C18.33 11.8296 19.59 11.8296 20.37 12.4996L22 13.8996"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4418_9254">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-normal text-[#0A1727]">50 headshots</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 flex-shrink-0 text-primary">
                                            {/* SVG icon */}
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                            >
                                                <g clipPath="url(#clip0_4482_11885)">
                                                    <path
                                                        d="M11.8697 8.67L8.49973 9.51C7.89973 9.66 7.29973 9.3 7.14973 8.7L6.46973 5.96C6.36973 5.55 6.37973 5.12 6.51973 4.72L7.16973 2.76C7.31973 2.31 7.74973 2 8.21973 2H15.5097C15.9897 2 16.4097 2.31 16.5597 2.76L17.3197 5.03C17.3897 5.23 17.3897 5.45 17.3397 5.65L16.5797 8.7C16.4297 9.3 15.8297 9.66 15.2297 9.51L11.8597 8.67H11.8697Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M6.40988 5.33008H5.20988C3.36988 5.33008 1.87988 6.82008 1.87988 8.66008V18.6601C1.87988 20.5001 3.36988 21.9901 5.20988 21.9901H18.5399C20.3799 21.9901 21.8699 20.5001 21.8699 18.6601V8.67008C21.8699 6.83008 20.3799 5.34008 18.5399 5.34008H17.3799"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M15.7598 14.2202H17.9798"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M16.1703 2.22021L11.8703 8.67021L7.57031 2.22021"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M11.8896 21.9999V8.66992"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4482_11885">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-normal text-[#0A1727]">5 looks</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 flex-shrink-0 text-primary">
                                            {/* SVG icon */}
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                            >
                                                <g clipPath="url(#clip0_4482_7572)">
                                                    <path
                                                        d="M16.5001 12.67H11.3301"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M11.3301 12.67V6.44"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4482_7572">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-normal text-[#0A1727]">Ready in 15 minutes</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="tracking-sm group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-primary px-8 py-3 text-sm font-medium text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 ">
                                {/* shimmer */}
                                <span className="absolute left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-transform duration-700 ease-in-out group-hover:translate-x-[300px] group-hover:opacity-100"></span>
                                Create Headshots Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right transition-transform duration-200 ease-in group-hover:translate-x-2 "
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right panel (gradient bg) */}
                    <div className="relative  flex h-[230px] w-[calc(100%-28px)] flex-col justify-center gap-2 rounded-b-2xl bg-gradient-to-b from-[#e8fdf2] to-transparent px-2 py-4 md:ml-[-24px] md:w-full md:rounded-b-none md:rounded-r-2xl md:py-10 md:pl-12 md:pr-10 lg:bg-gradient-to-r ">
                        <Image
                            src="/images/pricing/shield-icon.svg"
                            alt=""
                            width={24}
                            height={24}
                            className=""
                            unoptimized
                        />

                        <h3 className="text-[1.125rem] font-medium  text-primary md:text-[1.25rem]">
                            Don&apos;t pay till you see your amazing headshots
                        </h3>

                        <p className="max-w-prose text-sm tracking-tight text-primary/70">
                            99.9% of our customers love their headshots at first sight. We are sure you will love your
                            headshots too. That&apos;s why we will create your headshots and show them to you. You only
                            have to pay if you love your headshots and want to keep them.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mb-16 mt-16 w-full  overflow-hidden bg-yellow-500/10 py-6 ">
                <Marquee autoFill={true} speed={70} pauseOnHover={true} direction="left">
                    {pricingMarqueeData.map((item: marqueeType, index: number) => (
                        <MarqueeCard key={index} item={item} />
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default Pricing;
const MarqueeCard = ({ item }: { item: marqueeType }) => {
    return (
        <div className="mx-20 flex flex-col">
            <div className="flex items-center justify-start">
                <p className=" tracking-sm sm:tracking-base whitespace-nowrap text-sm font-[450] text-primary sm:text-base ">
                    &apos;&apos;{item.text}&apos;&apos;
                </p>

                <div className="ml-2 flex items-center justify-start">
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
};
