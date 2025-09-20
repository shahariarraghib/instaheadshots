import emailjs from "emailjs-com";

export const emailJSEmailService = (data: any): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICEID!,
                process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE!,
                data,
                process.env.NEXT_PUBLIC_EMAIL_PUBLICKEY!
            )
            .then(
                (result) => {
                    resolve(true);
                },
                (error: any) => {
                    reject(false);
                }
            );
    });
};
