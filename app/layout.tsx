import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
	title: "TEKNISMART",
	description:
		"Leaders in Custom Software Development and Professional IT Consulting",
	icons: "./icon.png",
};

const font: ReturnType<typeof Poppins> = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning className={`${font.className} `}>
				{children}
			</body>
		</html>
	);
}
