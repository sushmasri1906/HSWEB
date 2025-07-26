"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 pt-32 pb-28">
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-20">
					We Design & Build Digital <br />
					<span className="text-[#1c00d3]">Experiences That Deliver</span>
				</h1>

				{/* Image + Text Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
					{/* Image 1 */}
					<div className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-[1.03]">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752650104/digital-technology-technical-support-customer-service-concept-software-engineer-team-ai-photo_555983-3947_o9qum8.jpg"
							alt="HSDev Collaboration"
							width={400}
							height={520}
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 border border-white/10 group-hover:border-[#1c00d3] transition-all duration-300" />
					</div>

					{/* Image 2 */}
					<div className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-[1.03]">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752650104/digital-technology-technical-support-customer-service-concept-software-engineer-team-ai-photo_555983-3951_oruhx8.jpg"
							alt="HSDev Team"
							width={420}
							height={560}
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 border border-white/10 group-hover:border-[#1c00d3] transition-all duration-300" />
					</div>

					{/* Text Section */}
					<div className="flex flex-col justify-center space-y-8">
						<p className="text-lg text-gray-300 leading-relaxed">
							At <span className="font-semibold text-white">HSDev</span>, we
							craft high-performance digital experiences that blend strategic
							design with scalable tech.
							<br />
							<br />
							Since 2023, we&apos;ve helped many startups, agencies & enterprises
							build stunning apps, websites, and tools that convert and grow.
						</p>

						<Link
							href="/showreel"
							className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
							Play Showreel
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
