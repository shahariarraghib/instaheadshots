export type BannerImage = {
    name: string;
    comment: string;
    designation: string;
    star: string;
    data: string;
    images: bannerImage[];
};

interface bannerImage {
    src: string;
}
