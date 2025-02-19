import React from "react";

function Tagline() {
	return (
		<div className="flex justify-center items-center w-full text-center bg-[#EBF9FF] p-10">
			<div className="flex flex-col justify-center items-center my-10 lg:w-1/2 text-center mx-auto">
				<h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-primary uppercase tracking-wide ">
					Smart Solutions for Technology and Talent
				</h1>
				<p className="lg:text-base sm:text-base text-xs my-5">
					Our experts are ready to collaborate and deliver technology
					that fits your needs, budget, and timeline.
				</p>
			</div>
		</div>
	);
}

export default Tagline;
