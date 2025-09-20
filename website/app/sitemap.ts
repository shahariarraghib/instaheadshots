import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoute = [
        {
            url: ``,
            lastModified: new Date("2024-09-07"),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: ``,
            lastModified: new Date("2024-09-07"),
            changeFrequency: "yearly",
            priority: 0.8
        },
        {
            url: ``,
            lastModified: new Date("2024-09-07"),
            changeFrequency: "yearly",
            priority: 0.8
        }
    ];

    return [...(staticRoute as any)];
}
