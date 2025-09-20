/* eslint-disable @next/next/no-img-element */
"use client";
import menuData from "@/content/menuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
    const pathname = usePathname();
    const closeNav = () => {
        const label = document.querySelector<HTMLLabelElement>('[for="my-drawer-3"]');
        if (label) {
            label.click();
        }
    };

   
    return (
        <nav className={`visibility flex h-[90vh] overflow-hidden opacity-100 duration-300`}>
            <div className="flex w-full flex-col items-center justify-start gap-y-6 font-semibold text-black">
                <div className="flex h-full w-full flex-col justify-between py-6 ">
                    <div>
                        <div className="flex items-center justify-between px-6">
                            <Link href="/" className={`block w-full`}></Link>
                        </div>
                        <div className="mt-10 flex w-full flex-col">
                            {menuData.map((menuItem, index) => (
                                <Link
                                    href={`/${menuItem.path}`}
                                    key={index}
                                    onClick={closeNav}
                                    className="grounded-lg relative w-full border-l-[6px] border-white px-6 py-4 text-base font-semibold text-black duration-300 hover:border-black hover:bg-black/5"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    {menuItem.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6">
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
