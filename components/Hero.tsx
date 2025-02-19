"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
	const content: {
		title: string;
		button: string;
		image: string;
		url: string;
		description: string;
	}[] = [
		{
			title: "Ignite your business with innovative technology solutions that drive success.",
			button: "Get Started",
			image: "/images/hero1.svg",
			url: "",
			description:
				"Harness the power of cutting-edge technologies to elevate your business. From scalable cloud solutions to airtight cybersecurity, we create solutions that enhance performance, streamline processes, and keep you ahead in a rapidly evolving digital world.",
		},
		{
			title: "Unlock the potential of your workforce with top-tier talent, perfectly matched.",
			button: "Get Started",
			image: "/images/hero2.svg",
			url: "",
			description:
				"Find the ideal fit for your business with our comprehensive staffing solutions. Whether onshore, offshore, or via our exclusive Parley marketplace, we provide you with pre-vetted professionals ready to take your business to the next level.",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? content.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === content.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="m-0 p-0 sm:mx-[50px] md:mx-[10px] lg:mx-[100px]">
			<div className="flex flex-1 h-max-content justify-center items-center mx-5 gap-x-8 ">
				<div className="flex-1/2 space-y-8">
					<h1 className="lg:text-4xl/12 md:text-3xl text-2xl sm:tracking-wide tracking-none  font-bold text-[#1E1E1E] uppercase ">
						{content[currentIndex].title}
					</h1>
					<p className="my-8 sm:my-8 lg:my-6">
						{content[currentIndex].description}
					</p>
					<button className="bg-secondary text-white px-4 py-2 md:px-8 md:py-4 rounded-full">
						{content[currentIndex].button}
					</button>
				</div>
				<div className="w-1/3 flex justify-center items-center h-auto hidden md:block p-8">
					<Image
						src={content[currentIndex].image}
						alt={content[currentIndex].title}
						width="100"
						height="100"
						style={{
							objectFit: "cover",
							width: "100%",
							height: "100%",
						}}
					/>
				</div>
			</div>

			<div className="flex flex-row items-center md:gap-6 gap-4 m-5">
				<div
					onClick={handlePrev}
					className={`bg-secondary flex justify-center items-center text-white size-10 md:size-12 rounded-full p-2 transition-opacity ${
						currentIndex === 0
							? "opacity-50 pointer-events-none"
							: ""
					}`}
				>
					<FaChevronLeft />
				</div>
				<div
					onClick={handleNext}
					className={`bg-secondary flex justify-center items-center text-white size-10 md:size-12 rounded-full p-2 transition-opacity ${
						currentIndex === content.length - 1
							? "opacity-50 pointer-events-none"
							: ""
					}`}
				>
					<FaChevronRight />
				</div>
			</div>
		</div>
	);
}
