import Image from "next/image";
import React from "react";

function Resources() {
	const data: { title: string; image: string; link: string }[] = [
		{
			title: "Articles",
			image: "./images/articles.svg",
			link: "",
		},
		{
			title: "Success Stories",
			image: "./images/stories.svg",
			link: "",
		},
		{
			title: "Case Studies",
			image: "./images/case-study.svg",
			link: "",
		},
		{
			title: "Blogs",
			image: "./images/blogs.svg",
			link: "",
		},
	];

	return (
		<div className=" m-0 p-0 sm:mx-[50px] md:mx-[10px] lg:mx-[100px]">
			<div className="flex flex-col justify-center items-center w-full text-center">
				<div>
					<h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold text-center text-primary sm:py-10 py-5">
						Our Resources
					</h1>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 ">
					{data.map((item, index) => (
						//card
						<div
							key={index}
							className="flex flex-col justify-center items-center w-full h-auto p-3 md:p-5 relative"
						>
							<Image
								src={item.image}
								alt={item.title}
								width="100"
								height="100"
								style={{
									objectFit: "cover",
									width: "100%",
									height: "100%",
									position: "relative",
								}}
							/>
							<h1 className="absolute text-lg font-bold text-center text-white top-1/3 left-1/2 transform -translate-x-1/2">
								{item.title}
							</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Resources;
