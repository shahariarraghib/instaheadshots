"use client";
import { useState } from "react";
import { BannerImage } from "@/types/bannerType";
import Image from "next/image";

type Props = {
    item: BannerImage;
    open: boolean;
    onClose: () => void;
};

const ImageCard: React.FC<{ item: BannerImage }> = ({ item }) => {
    const { name, images } = item;

    // modal state
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <div className="group relative cursor-pointer overflow-visible ">
                <div onClick={() => setOpen(true)} className="relative overflow-visible hover:z-10 ">
                    {images && (
                        <Image
                            src={images[0]?.src || ""}
                            alt={name}
                            width={250}
                            height={200}
                            className="h-full w-full transition-transform duration-150 group-hover:scale-[1.2]"
                            unoptimized
                        />
                    )}
                    {/* Overlay Text */}
                    <span className="absolute inset-0 flex items-end justify-center text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:z-20 group-hover:opacity-100 ">
                        Click to View
                    </span>
                </div>
            </div>

            <HeadshotModal item={item} open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default ImageCard;

function HeadshotModal({ item, open, onClose }: Props) {
    if (!open) return null;

    const { name, images, comment, designation, star, data } = item;
    const mainImage = item.images && item.images[1]?.src;
    console.log(item);

    return (
        <div
            className=" fixed inset-0 z-[999] flex items-center justify-center overflow-visible p-4"
            aria-label="Headshots modal"
        >
            {/* Backdrop with stronger blur and opacity */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />

            {/* Modal content above backdrop */}
            <div className="relative z-10 flex w-full max-w-5xl items-stretch gap-8 rounded-2xl lg:ml-28">
                {/* LEFT: Photo container */}
                <div className="relative flex-shrink-0 overflow-hidden rounded-2xl bg-black/5 shadow-lg">
                    {/* big image */}
                    <div className=" h-[572px] w-[572px] max-w-full sm:h-[460px] sm:w-[620px] md:h-[480px] md:w-[680px] lg:h-[572px] lg:w-[572px]">
                        {mainImage ? (
                            <Image src={mainImage} alt={item.name || "Main"} fill className="rounded-2xl" unoptimized />
                        ) : (
                            <div className="h-full w-full rounded-2xl bg-gray-200" />
                        )}
                    </div>

                    {/* pinned image with paperclip */}
                    <div className="absolute left-6 top-0 -rotate-6">
                        <div className="relative">
                            {/* Clip image overlay */}
                            <Image
                                src="/images/banner/clip.png"
                                alt="clip"
                                width={50}
                                height={50}
                                className="absolute -top-8 left-6 z-10 h-14 w-14 "
                                unoptimized
                            />
                            <div className="relative z-0 rounded-md bg-white p-1 shadow-md">
                                {item.images && item.images[2]?.src ? (
                                    <Image
                                        src={item.images[2].src}
                                        alt={item.name || "Pinned"}
                                        width={110}
                                        height={110}
                                        className="h-[110px] w-[110px] rounded-md object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="h-[110px] w-[110px] rounded-md bg-gray-100" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Info card */}
                <div className=" relative z-10 -ml-24 flex items-center justify-center">
                    <div className="relative max-h-[400px] w-[340px] rounded-2xl bg-white p-6 shadow-2xl lg:max-h-[460px] lg:w-[400px]">
                        {/* close X */}
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
                        >
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {data === "true" ? (
                            <div className="">
                                <div>
                                    <svg
                                        width="22"
                                        height="16"
                                        viewBox="0 0 22 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mb-1 text-gray-200"
                                    >
                                        <path
                                            d="M9.62055 11.0865C9.62055 13.4274 7.99361 15.2008 5.51782 15.2008C3.04203 15.2008 0.919922 13.2146 0.919922 9.66778C0.919922 5.26974 4.24455 1.51014 8.5595 0.800781V3.42541C6.08371 3.92196 4.24455 5.69536 4.24455 7.7525C4.66897 7.46876 5.23487 7.25595 6.15445 7.25595C7.99361 7.25595 9.62055 8.60374 9.62055 11.0865ZM21.0799 11.0865C21.0799 13.4274 19.3822 15.2008 16.9064 15.2008C14.5014 15.2008 12.3086 13.2146 12.3086 9.66778C12.3086 5.26974 15.6332 1.51014 20.0189 0.800781V3.42541C17.5431 3.92196 15.7039 5.69536 15.7039 7.68157C16.1283 7.39782 16.765 7.25595 17.6138 7.25595C19.453 7.25595 21.0799 8.60374 21.0799 11.0865Z"
                                            fill="#0A1727"
                                            fill-opacity="0.2"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-md mb-4 line-clamp-[6] overflow-hidden pt-4 leading-relaxed text-primary lg:line-clamp-[10] lg:text-base">
                                        {comment}
                                    </p>
                                    <div className="mb-6 flex items-start justify-between">
                                        <div>
                                            <p className="mb-1 text-sm font-medium text-primary">{name}</p>
                                            <p className="text-xs text-primary/60">{designation}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {(() => {
                                                const starValue = Number(star) || 0;
                                                const fullStars = Math.floor(starValue);
                                                const hasHalf = starValue % 1 >= 0.5;
                                                return (
                                                    <>
                                                        {[...Array(fullStars)].map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                        ))}
                                                        {hasHalf && (
                                                            <svg
                                                                key={"half"}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-star h-5 w-5 text-yellow-400"
                                                            >
                                                                <defs>
                                                                    <linearGradient
                                                                        id="halfStar"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="1"
                                                                        y2="0"
                                                                    >
                                                                        <stop offset="50%" stopColor="#facc15" />
                                                                        <stop offset="50%" stopColor="white" />
                                                                    </linearGradient>
                                                                </defs>
                                                                <polygon
                                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                                                    fill="url(#halfStar)"
                                                                />
                                                            </svg>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <button className="tracking-sm group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-primary px-14 py-3 text-base font-[450] text-white antialiased active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40">
                                        <span className="relative">Create your Headshots Now</span>
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
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className="mb-4 mr-4 text-left text-2xl font-medium text-gray-900">
                                    Get stunning headshots in{" "}
                                    <span className="text-secondary">
                                        <br /> simple steps
                                    </span>
                                </h3>

                                <ul className="relative mb-5 flex flex-col gap-3 text-sm text-gray-700">
                                    {/* Timeline vertical line */}
                                    <div className="absolute bottom-5 left-3 top-5 z-0 ml-[1px] w-0.5 bg-secondary" />
                                    <li className="relative flex items-start gap-3">
                                        <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
                                            1
                                        </div>
                                        <div className="text-base text-primary">Upload a few photos</div>
                                    </li>
                                    <li className="relative flex items-start gap-3">
                                        <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
                                            2
                                        </div>
                                        <div className="text-base text-primary">Our AI learns how you look</div>
                                    </li>
                                    <li className="relative flex items-start gap-3">
                                        <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
                                            3
                                        </div>
                                        <div className="text-base text-primary">Headshots ready in 15 minutes</div>
                                    </li>
                                </ul>

                                <div className="flex flex-col items-center justify-center gap-3">
                                    <button className="tracking-sm group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-primary px-14 py-3 text-base font-[450] text-white antialiased active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40">
                                        <span className="relative">Create your Headshots Now</span>
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
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* backdrop click to close - putting it last ensures it's below modal content */}
            <button onClick={onClose} className="absolute inset-0 z-0 h-full w-full cursor-default" aria-hidden />
        </div>
    );
}
