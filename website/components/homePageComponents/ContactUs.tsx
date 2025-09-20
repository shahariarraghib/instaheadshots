"use client";
import React, { useRef, useState } from "react";
import { ContactPhoneIcon } from "@/customIcon/contactPhoneIcon";
import { ContactEmailIcon } from "@/customIcon/contactEmailIIcon";
import { FadeLeftAnimation, FadeRightAnimation, FadeUpAnimation } from "@/utility/transitionsAnimation";
import SectionTitle from "../commonComponents/SectionTitle";
import { emailJSEmailService } from "@/utility/emailJs";
import { toast } from "react-toastify";

const ContactUs = () => {
    return (
        <div id="contact" className="px-4 py-10 md:pb-16 md:pt-10">
            <div className="relative mx-auto max-w-xl lg:max-w-6xl">
                <SectionTitle
                    title={
                        <>
                            Contact <span className="text-primary">Us</span>
                        </>
                    }
                    subTitle=" Get in touch with us."
                />
                <div className="mt-6 flex justify-center gap-x-5">
                    {/* <Contact
                        icon={<ContactPhoneIcon className="w-[80%] md:w-auto" />}
                        detail="+1 (844) 859-5422"
                        href="tel:9051290512"
                    /> */}
                    <Contact
                        icon={<ContactEmailIcon className="w-[80%] md:w-auto" />}
                        detail="info@biota-labs.com"
                        href="mailto:info@biota-labs.com"
                    />
                </div>

                <div className="mt-10 ">
                    <FadeUpAnimation>
                        <ContactForm />
                    </FadeUpAnimation>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

const Contact = ({ icon, detail, href }) => {
    return (
        <a href={href} className="flex items-center  md:gap-x-4">
            <div>{icon}</div>
            <div className="flex flex-col ">
                <p className="text-sm font-semibold md:text-base">{detail}</p>
            </div>
        </a>
    );
};

const ContactForm = () => {
    const formRef = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = formRef.current;
        const data = {
            name: form.fullName.value,
            email: form.emailAddress.value,
            phone: form.phoneNumber.value,
            objective: form.objective.value,
            message: form.message.value,
            subject: `[Email Update] ${form.emailAddress.value} is trying to contact you!`,
            receiverEmailAddress: process.env.NEXT_PUBLIC_RECEIVER_EMAIL_ADDRESS
        };

        try {
            const emailSent = await emailJSEmailService(data);
            if (emailSent) {
                form.reset();
                toast.success("Thank You! will be in touch soon.");
            } else {
                toast.error("Error! Please reach us through email on info@biota-labs.com");
            }
        } catch (error) {
            toast.error("Error! Please reach us through email on info@biota-labs.com");
        }
    };

    return (
        <section className="mx-auto max-w-3xl">
            <div className="h-fit min-h-[19rem]  w-full rounded-xl  bg-primary/80 p-6 md:min-h-[24.5rem]">
                <section className="h-fit">
                    <h1 className="font-satoshi pb-8 text-xl font-semibold text-white dark:text-dark  md:text-3xl ">
                        Send Us a Message
                    </h1>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="grid w-full grid-cols-2 gap-3 md:gap-6">
                            <InputField name="fullName" type="text" placeholder="Full Name" />
                            <InputField name="phoneNumber" type="text" placeholder="Phone Number" />
                            <InputField name="emailAddress" type="text" placeholder="Email Address" />
                            <InputField name="objective" type="text" placeholder="Objective" />
                            <InputField name="message" type="text" placeholder="Message" full textArea />
                        </div>

                        <div className="mt-8 flex w-full justify-center">
                            <button
                                type="submit"
                                className="w-fit cursor-pointer rounded-md bg-dark px-6 py-3 text-[10px] font-semibold text-white hover:opacity-80 disabled:pointer-events-none disabled:opacity-75 md:text-base"
                            >
                                {/* {loading && (
                      <Spinner heightWidthClass="w-5 h-5 mr-2.5" />
                    )} */}
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
};

const InputField = ({
    name,
    type,
    placeholder,
    required,
    loading,
    full,
    textArea
}: {
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
    loading?: boolean;
    full?: boolean;
    textArea?: boolean;
}) => {
    return (
        <div className={`w-full ${full && "col-span-2"}`}>
            {textArea ? (
                <textarea
                    name={name}
                    className="w-full border-b border-white bg-inherit pb-2 text-sm font-medium text-white placeholder:text-white focus:outline-none dark:border-dark  dark:text-dark dark:placeholder:text-dark md:pb-3 md:text-base"
                    placeholder={placeholder}
                    required={required}
                    disabled={loading}
                    rows={3}
                ></textarea>
            ) : (
                <input
                    className=" w-full border-b border-white bg-inherit pb-2 text-sm font-medium text-white placeholder:text-white focus:outline-none dark:border-dark dark:text-dark dark:placeholder:text-dark md:pb-3 md:text-base"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
};
