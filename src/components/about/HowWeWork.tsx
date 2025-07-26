"use client";

import { FaSearch, FaTools, FaRocket } from "react-icons/fa";
import Image from "next/image";

const steps = [
	{
		title: "Discover",
		description:
			"We dive deep into your goals and 'must-haves' to craft a battle plan.",
		step: "Step 1",
		icon: <FaSearch className="text-[#1c00d3] text-2xl" />,
	},
	{
		title: "Design & Build",
		description:
			"You’ll see real work fast—with checkpoints to refine every detail.",
		step: "Step 2",
		icon: <FaTools className="text-[#1c00d3] text-2xl" />,
	},
	{
		title: "Launch & Grow",
		description: "We don’t just deliver—we optimize for long-term success.",
		step: "Step 3",
		icon: <FaRocket className="text-[#1c00d3] text-2xl" />,
	},
];

export default function HowWeWorkSection() {
	return (
		<section className="relative bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 py-28 overflow-hidden">
			{/* 🔹 Background Image (Cloudinary) */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752588140/raw_kvkdrv.png"
					alt="HSDev Background"
					className="w-full h-full object-cover opacity-30 sepia-60"
					quality={100}
					fill
				/>
			</div>

			{/* 🔹 Content */}
			<div className="relative z-10 max-w-7xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-extrabold mb-20">
					How We Build{" "}
					<span className="text-[#1c00d3]">High-Impact Software</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{steps.map((step, index) => (
						<div
							key={index}
							className="relative group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#1c00d3] rounded-3xl p-10 shadow-[0_10px_50px_rgba(28,0,211,0.1)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_10px_rgba(28,0,211,0.2)]">
							{/* Shine on Hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl pointer-events-none" />

							{/* Animated glowing border on hover */}
							<div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#1c00d3]/40 transition duration-700 blur-md" />

							{/* Icon */}
							<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#101018] border border-white/10 shadow-inner">
								{step.icon}
							</div>

							{/* Title */}
							<h3 className="text-xl font-semibold mb-4">{step.title}</h3>

							{/* Description */}
							<p className="text-gray-300 text-sm leading-relaxed mb-6">
								{step.description}
							</p>

							{/* Step Badge */}
							<div className="inline-block bg-[#1c00d3] text-white text-sm px-5 py-2 rounded-full font-medium shadow hover:shadow-md transition">
								{step.step}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
