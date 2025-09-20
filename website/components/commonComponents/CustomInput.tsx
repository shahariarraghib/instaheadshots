import React from "react";

const CustomInput = ({
    type,
    placeholder,
    name,
    textArea
}: {
    type: string;
    placeholder: string;
    name: string;
    textArea?: boolean;
}) => {
    return (
        <div>
            {!textArea ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="text[16px] w-full rounded border-2  border-black bg-gray-200 p-4 text-black shadow-inner  placeholder:text-black focus:outline-none dark:border-white dark:bg-secondaryDark dark:text-white dark:placeholder:text-white"
                />
            ) : (
                <textarea
                    placeholder={placeholder}
                    name={name}
                    className="text[16px] h-48 w-full rounded border-2 border-black bg-gray-200 p-4 text-black shadow-inner placeholder:text-black focus:outline-none dark:border-white dark:bg-secondaryDark dark:text-white dark:placeholder:text-white"
                />
            )}
        </div>
    );
};

export default CustomInput;
