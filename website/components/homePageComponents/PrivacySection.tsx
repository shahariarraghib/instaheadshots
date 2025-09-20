import React from "react";
import SectionTitle from "../commonComponents/SectionTitle";

const PrivacySection = () => {
    return (
        <section className="mx-auto max-w-5xl gap-10 px-4 py-12 sm:py-16">
            <SectionTitle
                mainTitle="PRIVACY"
                title={
                    <>
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                            Your data is yours,
                        </span>
                        <span>and yours only</span>
                    </>
                }
                subTitle="Throughout your journey on InstaHeadshots, your data is secure, in your control."
                left
            />

            <div className="grid auto-rows-fr grid-cols-1 justify-items-center gap-5 sm:grid-cols-2">
                <div className="flex w-full flex-col gap-3 rounded-xl border border-primary/20 p-5">
                    <img alt="Privacy Feature Icon" src="/images/privacyImage/delete.svg" className="h-8 w-8" />
                    <p className="text-xl font-medium sm:text-2xl">Delete when you want (or we do it for you)</p>
                    <p className="text-sm font-normal text-primary/65 sm:text-base">
                        You can delete your data including your input images and created headshots at any time. We
                        delete your data automatically 30 days after the headshots have been created.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3 rounded-xl border border-primary/20 p-5">
                    <img alt="Privacy Feature Icon" src="/images/privacyImage/shield.svg" className="h-8 w-8" />
                    <p className="text-xl font-medium sm:text-2xl">Your images for your headshots only</p>
                    <p className="text-sm font-normal text-primary/65 sm:text-base">
                        We train an individual AI for each individual photoshoot. Those images are not used for any
                        other purpose or training. Your likeness is your property, not ours.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3 rounded-xl border border-primary/20 p-5">
                    <img alt="Privacy Feature Icon" src="/images/privacyImage/folder.svg" className="h-8 w-8" />
                    <p className="text-xl font-medium sm:text-2xl">Caring by not sharing</p>
                    <p className="text-sm font-normal text-primary/65 sm:text-base">
                        We do not share your images with anybody or anything. We do not sell your data. We do not
                        advertise you. You are of course free to share your headshots as you see fit.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3 rounded-xl border border-primary/20 p-5">
                    <img alt="Privacy Feature Icon" src="/images/privacyImage/internet.svg" className="h-8 w-8" />
                    <p className="text-xl font-medium sm:text-2xl">Rock-solid security</p>
                    <p className="text-sm font-normal text-primary/65 sm:text-base">
                        Access to all headshots is controlled by a password-less system, all data is encrypted in
                        transit and stored only for the period required.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacySection;
