"use client";
import Image from "next/image";

const projects = [
	{
		title: "AgriNetwork Platform",
		role: "Full-Stack Web App",
		desc: "Built a scalable farmer-to-consumer platform with dashboards, marketplace, and payments.",
		hover: "Tech: Next.js, TurboRepo, Tailwind, Prisma, PostgreSQL, Cloudinary",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1718898065/web-dev-modern.png",
	},
	{
		title: "Brand Identity – VR Agri Farms",
		role: "Branding & UI Design",
		desc: "Crafted brand visuals, logo, and a clean digital presence for an organic farming collective.",
		hover: "Tools: Figma, Illustrator, Photoshop, Tailwind CSS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1718898098/branding-showcase.png",
	},
	{
		title: "Framer Showcase Site",
		role: "No-Code Website",
		desc: "Launched a high-end portfolio site for a creator using Framer — fast, clean, and elegant.",
		hover: "Platform: Framer, Custom Animations, CMS Integration",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1718898123/nocode-tools-builder.png",
	},
	{
		title: "Smart Inventory Dashboard",
		role: "UI/UX & Web Development",
		desc: "Designed and built an admin dashboard for inventory tracking, insights, and alerts.",
		hover: "Stack: Next.js, Chart.js, Tailwind, Zustand",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1718898033/uiux-design-dashboard.png",
	},
];

export default function CoreCapabilities() {
	return (
		<section className="bg-black mt-20 text-white py-24 px-6">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
					Our Core Capabilities
				</h2>
				<p className="text-gray-400 max-w-2xl mx-auto text-lg">
					Engineering bold digital experiences through design, code, and
					strategy.
				</p>
			</div>

			<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
				{projects.map((service, i) => (
					<div
						key={i}
						className="group relative rounded-2xl overflow-hidden shadow-lg bg-[#111111] border border-[#1c00d3] hover:border-[#000fb5] transition-transform duration-300 hover:scale-[1.025]">
						<div className="relative h-48 w-full">
							<Image
								src={service.image}
								alt={service.title}
								fill
								className="object-cover group-hover:opacity-20 transition-opacity duration-300"
							/>
						</div>
						<div className="p-5 space-y-2 z-10 relative">
							<h3 className="text-xl font-semibold">{service.title}</h3>
							<p className="text-gray-400">{service.desc}</p>
						</div>
						<div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-90 text-gray-300 text-sm px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							{service.hover}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
