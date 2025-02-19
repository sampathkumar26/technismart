import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { TbMail } from "react-icons/tb";

const Footer = () => {
	return (
		<div className="flex flex-col justify-between items-center py-4 mx-5 m-0 p-0 sm:mx-[50px] md:mx-[10px] lg:mx-[100px]">
			<div className="flex flex-col md:flex-row md:justify-between justify-center md:items-center items-baseline w-full">
				{/* Left Column */}
				<div className="flex flex-col gap-4 m-4">
					<h1 className="text-4xl sm:text-5xl md:text-6xl uppercase font-bold text-primary/20 text-center md:text-left">
						Teknismart
					</h1>
					<div className="flex px-2 gap-4 items-center">
						<LuPhone color="#0d92f4" />
						<p className="text-xs text-text-gray">972-905-7431</p>
					</div>
					<div className="flex px-2 gap-4 items-center">
						<TbMail color="#0d92f4" />
						<p className="text-xs text-text-gray">
							info@teknismart.com
						</p>
					</div>
					<div className="flex px-2 gap-4 items-center">
						<HiOutlineLocationMarker color="#0d92f4" />
						<p className="text-xs text-text-gray">
							520 Central Parkway East, Ste 212, Plano, TX, 75074
						</p>
					</div>
				</div>

				{/* Right Column (Newsletter Subscribe Section) */}
				<div className="flex-col md:gap-4 text-text-gray mx-0 sm:mx-10 md:mx-10 lg:mx-12 w-full md:w-1/3 gap-2">
					<p className="text-xs sm:text-sm">
						Subscribe for newsletter
					</p>

					<div className="flex flex-row justify-between w-full border border-[#D9D9D9] rounded-full px-4 py-2  flex-nowrap overflow-hidden mt-4">
						<input
							type="email"
							placeholder="Email"
							className="focus:outline-none w-full sm:w-auto"
						/>
						<div className="flex-0 text-center px-4 py-2 bg-primary text-white rounded-full">
							submit
						</div>
					</div>
					{/* social media */}
					<div className="flex w-full justify-center gap-10 mt-8">
						<Link href="">
							<Image
								src="/images/instagram.svg"
								alt="facebook"
								width={30}
								height={30}
								className="cursor-pointer h-10 w-10"
							/>
						</Link>
						<Link href="">
							<Image
								src="/images/linkedin.svg"
								alt="facebook"
								width={30}
								height={30}
								className="cursor-pointer h-10 w-10"
							/>
						</Link>
						<Link href="">
							<Image
								src="/images/twitter.svg"
								alt="facebook"
								width={30}
								height={30}
								className="cursor-pointer h-10 w-10"
							/>
						</Link>
						<Link href="">
							<Image
								src="/images/facebook.svg"
								alt="facebook"
								width={30}
								height={30}
								className="cursor-pointer h-10 w-10"
							/>
						</Link>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="mt-4 text-center sm:text-left">
				<p className="text-xs text-text-gray">
					&#169; 2025 All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
