"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function WhereToFindUs() {
	return (
		<section
			className="relative text-white px-6 sm:px-12 lg:px-20 py-28 bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1752651962/abstract-background-with-blue-and-green-waved-lines-for-brochure-website-flyer-design-modern-technology-wallpaper-with-abstract-blue-and-green-digital-waves-ai-generated-free-photo_nx66eu.jpg')",
			}}>
			{/* 🔹 Overlay to reduce brightness */}
			<div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

			{/* 🔹 Main Content */}
			<div className="relative max-w-7xl mx-auto text-center mb-20 z-10">
				<h2 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-up">
					Where to Find Us
				</h2>
				<p className="text-gray-300 text-base sm:text-lg animate-fade-up delay-100">
					Let’s connect and collaborate - wherever you are.
				</p>
			</div>

			<div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center z-10">
				{/* HQ */}
				<div className="bg-[#101017]/90 border border-[#1c00d3]/20 rounded-3xl p-10 shadow-xl hover:scale-105 transition-all duration-300 hover:border-[#1c00d3] animate-fade-up delay-150">
					<h3 className="text-xl font-semibold mb-3">HSDev Headquarters</h3>
					<p className="text-gray-300 leading-relaxed">
						Hyderabad, Telangana – India <br />
						<span className="text-sm text-gray-400">(By appointment only)</span>
					</p>
				</div>

				{/* Remote Teams */}
				<div className="bg-[#101017]/90 border border-[#1c00d3]/20 rounded-3xl p-10 shadow-xl hover:scale-105 transition-all duration-300 hover:border-[#1c00d3] animate-fade-up delay-300">
					<h3 className="text-xl font-semibold mb-3">Remote First, Always</h3>
					<p className="text-gray-300 leading-relaxed">
						Working across 10+ time zones <br />
						<span className="text-sm text-gray-400">
							(IST, EST, GMT & more)
						</span>
					</p>
				</div>

				{/* Social Links */}
				<div className="bg-[#101017]/90 border border-[#1c00d3]/20 rounded-3xl p-10 shadow-xl hover:scale-105 transition-all duration-300 hover:border-[#1c00d3] animate-fade-up delay-500">
					<h3 className="text-xl font-semibold mb-4">Follow HSDev</h3>
					<div className="flex justify-center items-center gap-6 text-2xl text-white">
						<FaFacebookF className="hover:text-[#1c00d3] hover:scale-125 transition cursor-pointer" />
						<FaInstagram className="hover:text-[#1c00d3] hover:scale-125 transition cursor-pointer" />
						<FaYoutube className="hover:text-[#1c00d3] hover:scale-125 transition cursor-pointer" />
						<FaXTwitter className="hover:text-[#1c00d3] hover:scale-125 transition cursor-pointer" />
					</div>
				</div>
			</div>
		</section>
	);
}
