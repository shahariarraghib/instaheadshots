"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState, useRef, useContext } from "react";
import menuData from "@/content/menuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RouteContext } from "@/app/providers";
import { FiChevronDown } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import headsortData from "@/content/headshortData";
const NavBar = () => {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const { activeSection, setActiveSection } = useContext(RouteContext);
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full md:top-0">
            <div className="mx-auto">
                <div
                    className={`relative flex h-16 items-center justify-between gap-3 bg-transparent backdrop-blur-none duration-300 before:pointer-events-none before:absolute before:inset-0 before:border before:border-transparent  lg:border-b-2 lg:bg-white lg:px-3 `}
                >
                    <div className="container max-w-5xl px-0">
                        <div className="relative flex items-center justify-between">
                            <div className="min-w-fit pl-4 ">
                                <Link
                                    onClick={() => setActiveSection("/")}
                                    href="/"
                                    className={`header-logo plg:py-2 y-2 w-full`}
                                >
                                    <div className="flex items-center justify-center gap-x-1">
                                        {/* Mobile logo */}
                                        <img
                                            src="/images/logo/logo-minimised.svg"
                                            alt="Mobile Logo"
                                            className="h-[36px] w-[36px] lg:hidden"
                                        />
                                        {/* Desktop logo */}
                                        <img
                                            src="/images/logo/logo-default.svg"
                                            alt="Desktop Logo"
                                            className="hidden w-40 lg:block"
                                        />
                                    </div>
                                </Link>
                            </div>

                            <div className="flex w-full items-center justify-center  ">
                                <div>
                                    <label
                                        htmlFor="my-drawer-3"
                                        className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg  px-4 py-2 lg:hidden"
                                    >
                                        <span
                                            className={`relative my-1 block h-0.5 w-[20px] bg-primary transition-all duration-300`}
                                        />
                                        <span
                                            className={`relative my-1 block h-0.5 w-[20px] bg-primary transition-all duration-300 `}
                                        />
                                        <span
                                            className={`relative my-1 block h-0.5 w-[20px] bg-primary transition-all duration-300 `}
                                        />
                                    </label>
                                    <nav
                                        id="navbarCollapse"
                                        className={`navbar absolute right-0 z-[60] hidden w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 shadow-lg duration-300 lg:visible lg:static lg:block lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none `}
                                    >
                                        <ul className="block py-5 text-black lg:flex lg:space-x-2">
                                            {menuData.map((menuItem, index) => (
                                                <li key={index} className="relative">
                                                    {index === 0 ? (
                                                        <div>
                                                            <button
                                                                onClick={() => setOpenDropdown(!openDropdown)}
                                                                className="flex min-w-[4rem] items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-[15px] font-medium text-black hover:border-black"
                                                            >
                                                                {menuItem.title}
                                                                <FiChevronDown
                                                                    className={`transition-transform duration-300 ${
                                                                        openDropdown ? "rotate-180" : "rotate-0"
                                                                    }`}
                                                                />
                                                            </button>
                                                            {openDropdown && (
                                                                <ul className=" absolute left-1/2 top-full mt-4 w-[750px] -translate-x-1/2 rounded-lg border border-gray-200 bg-white px-5 py-2 shadow-lg">
                                                                    <div className="grid min-w-[600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
                                                                        {headsortData.map((item, index) => (
                                                                            <div
                                                                                key={index}
                                                                                className="group flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-4 hover:border-gray-900"
                                                                            >
                                                                                <div>
                                                                                    <Image
                                                                                        src={item.image}
                                                                                        alt={item.title}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        className="w-18 h-16 rounded-md object-cover"
                                                                                    />
                                                                                </div>
                                                                                <div className="flex flex-col">
                                                                                    <div className="mb-1 flex items-center justify-between gap-2">
                                                                                        <span className="tracking-base text-base font-medium text-primary antialiased">
                                                                                            {item.title}
                                                                                        </span>
                                                                                        <span>
                                                                                            <IoArrowForward className="h-6 w-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                                                                                        </span>
                                                                                    </div>
                                                                                    <span className="tracking-sm text-sm font-normal text-primary/80 antialiased">
                                                                                        {item.designation}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <Link
                                                            onClick={() => setActiveSection(menuItem.path)}
                                                            href={`/${menuItem.path}`}
                                                            className="tracking-sm rounded-md border border-transparent px-3 py-2 text-sm font-[450] text-primary antialiased hover:border-primary"
                                                            style={{ whiteSpace: "nowrap" }}
                                                        >
                                                            {menuItem.title}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="mr-4 flex min-w-fit items-center justify-end gap-x-1 rounded-xl bg-white py-1 lg:bg-transparent lg:pr-0">
                                <div className="inline-flex items-center justify-center gap-3 rounded-xl bg-white py-1 pl-1 pr-3">
                                    {/* world icon hidden on mobile */}

                                    <div className="ml-3 flex cursor-pointer items-center justify-center rounded-lg  shadow-[0px_0px_8.899999618530273px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-200 lg:hidden">
                                        {" "}
                                        <div className="relative  inline-flex  items-center justify-center overflow-hidden rounded-md border border-transparent  px-2 py-1 ">
                                            <Image
                                                src="/images/logo/languages.svg"
                                                alt="Languages"
                                                width={20}
                                                height={20}
                                                className=""
                                                unoptimized
                                            />
                                        </div>
                                    </div>

                                    <button className="tracking-sm group relative hidden cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-white bg-white p-2 text-sm font-medium text-primary antialiased hover:border-primary active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 lg:inline-flex">
                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700 group-hover:ease-out"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-globe text-primary"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                    </button>

                                    <button className="tracking-sm group relative flex hidden cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-white px-4 py-2 text-sm font-medium text-primary antialiased active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 lg:inline-flex">
                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700 group-hover:ease-out"></div>
                                        Log In
                                    </button>

                                    {/* Login stays visible on mobile */}
                                    <div className="mr-10 flex cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-1 shadow-[0px_0px_8.899999618530273px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-200 lg:hidden">
                                        <div className="group inline-block">
                                            <button className="relative overflow-hidden  text-black">
                                                <span className="relative ">Log In</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* CTA hidden on mobile */}
                                    <div className="ml-2 hidden lg:block">
                                        <div className="group inline-block">
                                            <button className="relative overflow-hidden rounded-lg border border-black bg-black px-4 py-2 text-white">
                                                <span className="relative">Create Your Headshots</span>
                                                <span className="absolute left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-transform duration-700 ease-in-out group-hover:translate-x-[200px] group-hover:opacity-100"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
