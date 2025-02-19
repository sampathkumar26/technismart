import React from "react";

function NavMenu() {
	return (
		<div className="flex justify-between items-center py-4 mx-5 m-0 p-0 sm:mx-[50px] md:mx-[10px] lg:mx-[100px]">
			<div className="">
				<h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-secondary">
					TEKNISMART
				</h1>
			</div>
			<ul className="flex-row justify-center items-center md:space-x-4 space-x-2 text-base hidden md:flex">
				<li className="flex justify-center items-center">Home</li>
				<li className="flex justify-center items-center">
					Technical Solutions
				</li>
				<li className="flex justify-center items-center">
					Talent Solutions
				</li>
				<li className="flex justify-center items-center">Careers</li>
				<li className="flex justify-center items-center">Contact Us</li>
			</ul>
			<div></div>
		</div>
	);
}

export default NavMenu;
