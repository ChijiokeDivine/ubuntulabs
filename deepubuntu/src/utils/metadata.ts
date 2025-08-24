import { Metadata } from "next";

export const generateMetadata = ({
    title = `Deep Ubuntu Labs | Autonomous Vehicles for Rural America & Beyond`,
    description = `Deep Ubuntu Labs develops autonomous vehicle technology for rural America and underserved markets worldwide. Building safe, accessible transportation solutions.`,
    image = "/images/dtftyfytf.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/icons.svg"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/icons.svg"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
