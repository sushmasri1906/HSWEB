"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
	return (
		<section className="relative  mt-10 bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 py-28 overflow-hidden">
			{/* 🔹 Background Image Layer */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752651895/modern-black-blue-abstract-background-minimal-color-gradient-dark-web-banner-geometric-shape-3d-effect-lines-stripes-triangles-design-futuristic_1028938-120111_nbhdbg.jpg" // Change if needed
					alt="Background"
					fill
					className="object-cover opacity-10"
					quality={100}
				/>
			</div>

			{/* 🔹 Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
				{/* Left Image */}
				<div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752648873/image_rmyalh.png"
						alt="HSDev Team"
						fill
						className="object-cover rounded-2xl"
					/>
				</div>

				{/* Right Content */}
				<div>
					<h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
						From Code to Impact: <br />
						<span className="text-[#1c00d3]">HSDev Builds What Matters</span>
					</h2>

					<p className="text-white mb-6 text-base leading-relaxed">
						Since 2023, HSDev has partnered with ambitious brands and visionary
						startups to build high-performance digital products that don&apos;t
						just work they wow.
					</p>

					<p className="text-white mb-10">
						With a passionate team of engineers, designers, and strategists, we
						turn ideas into scalable software that delivers lasting value.
					</p>

					<ul className="space-y-4 text-sm sm:text-base text-white">
						<li className="flex items-start gap-3">
							<FaCheckCircle className="text-[#1c00d3] mt-1" />
							Custom web & app development for startups and enterprises
						</li>
						<li className="flex items-start gap-3">
							<FaCheckCircle className="text-[#1c00d3] mt-1" />
							Scalable architecture & seamless UI/UX experiences
						</li>
						<li className="flex items-start gap-3">
							<FaCheckCircle className="text-[#1c00d3] mt-1" />
							Long-term tech partnerships built on trust & performance
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
