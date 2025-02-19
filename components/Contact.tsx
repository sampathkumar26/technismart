import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
	return (
		<div className="flex flex-col justify-between items-center py-4 mx-5 m-0 p-0 sm:mx-[50px] md:mx-[10px] lg:mx-[100px]">
			<div className="flex flex-col md:flex-row justify-center items-center gap-4">
				<div className="flex flex-1/2 flex-col gap-4">
					<div className="rounded-2xl overflow-hidden ">
						<Image
							src="./images/contact.svg"
							alt="contact"
							width="100"
							height="100"
							style={{
								objectFit: "cover",
								width: "100%",
								height: "auto",
							}}
						/>
					</div>
					<div className="rounded-2xl border border-[#747474] p-2 space-x-2">
						<p className="my-2">
							Got more questions about the brandname?
							<br /> Our team is here to help.
						</p>
						<div className="px-5 py-2.5 w-full bg-[#E8F7FE] flex my-2 rounded-xl items-center gap-2">
							<div className="p-2 bg-secondary rounded-xl ">
								<MdMailOutline color="#ffffff" />
							</div>
							<p>info@teknismart.com</p>
						</div>
						<div className="px-5 py-2.5  w-full bg-[#E8F7FE] flex rounded-xl items-center gap-2">
							<div className="p-2 bg-secondary rounded-xl">
								<FiPhone color="#ffffff" />
							</div>
							<p>214-427-1022</p>
						</div>
					</div>
				</div>
				<div className="flex flex-1/2 flex-col border border-[#747474] rounded-2xl p-5 md:p-10">
					<h1 className="text-base sm:text-lg md:text-xl font-bold text-primary text-center md:text-left">
						Leave us a message. We’ll reach out to you shortly.
					</h1>
					<div className="flex flex-col items-center justify-center w-full gap-8 mt-14">
						<div className="w-full relative">
							<input
								type="text"
								placeholder="John Doe"
								className="w-full block border border-[#747474] focus:outline-none  rounded-md px-4 py-2"
							/>
							<label
								htmlFor="name"
								className="absolute -top-3 bg-white left-2 text-sm font-medium text-gray-700 px-2"
							>
								Name
							</label>
						</div>
						<div className="w-full relative">
							<label
								htmlFor="name"
								className="absolute -top-3 bg-white left-2 text-sm font-medium text-gray-700 px-2"
							>
								Email
							</label>
							<input
								type="email"
								placeholder="xyz@example.com"
								className="w-full block border border-[#747474] focus:outline-none  rounded-md px-4 py-2"
							/>
						</div>
						<div className="w-full relative">
							<label
								htmlFor="name"
								className="absolute -top-3 bg-white left-2 text-sm font-medium text-gray-700 px-2"
							>
								Phone
							</label>
							<input
								type="text"
								placeholder="+91 1234567890"
								className="w-full block border border-[#747474] focus:outline-none  rounded-md px-4 py-2"
							/>
						</div>
						<div className="w-full relative">
							<label
								htmlFor="name"
								className="absolute -top-3 bg-white left-2 text-sm font-medium text-gray-700 px-2"
							>
								Subject
							</label>
							<input
								type="text"
								placeholder="IT Staffing"
								className="w-full block border border-[#747474] focus:outline-none  rounded-md px-4 py-2"
							/>
						</div>
						<div className="w-full relative">
							<label
								htmlFor="name"
								className="absolute -top-3 bg-white left-2 text-sm font-medium text-gray-700 px-2"
							>
								Message
							</label>
							<textarea
								placeholder="Your Message"
								rows={6}
								className="w-full block border border-[#747474] focus:outline-none  rounded-md px-4 py-2"
							/>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
