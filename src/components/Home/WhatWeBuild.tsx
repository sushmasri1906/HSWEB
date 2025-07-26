"use client";

import { FaCheckCircle } from "react-icons/fa";

const categories = [
	{
		title: "Full Stack Development",
		desc: "Build seamless, scalable applications from frontend to backend with Next.js, React.js, and powerful APIs.From MVPs to enterprise platforms, we deliver future-proof solutions using the latest tech stacks.",
		points: [
			"Robust apps using Next.js & React.js",
			"TurboRepo & monorepo architecture",
			"End-to-end scalable solutions",
		],
	},
	{
		title: "Frontend Engineering",
		desc: "Craft stunning, responsive user interfaces that captivate and convert—built with performance-first principles.We blend UI/UX precision with the speed of React.js and elegance of Tailwind CSS.",
		points: [
			"Pixel-perfect UI/UX in React.js",
			"Tailwind CSS & Framer Motion animations",
			"Optimized for performance & accessibility",
		],
	},
	{
		title: "Backend Systems",
		desc: "Power your applications with secure, scalable, and high-performance backend infrastructure.APIs, databases, authentication, and business logic—expertly engineered with Node.js & modern stacks.",

		points: [
			"API development with Node.js & Express",
			"Database design (PostgreSQL, MongoDB)",
			"REST & GraphQL integrations",
		],
	},
	{
		title: "Mobile App Development",
		desc: "Launch cross-platform mobile apps that feel native, load fast, and keep users engaged.We build with React Native for iOS and Android, ensuring rapid delivery with a unified codebase.",
		points: [
			"React Native apps with shared codebase",
			"iOS & Android support with clean UI",
			"Fast deployment & OTA updates",
		],
	},
	{
		title: "E-Commerce Solutions",
		desc: "Build modern online stores with real-time inventory, secure checkout, and smooth UX across devices.From D2C to multi-vendor marketplaces, we create conversion-focused commerce experiences.",

		points: [
			"Custom stores with secure checkout",
			"Product dashboards & inventory tracking",
			"Multi-vendor & B2B marketplace support",
		],
	},
	{
		title: "B2B Platforms",
		desc: "Automate business operations with powerful dashboards, portals, and CRM systems tailored to your workflow.We deliver scalable, secure solutions that integrate seamlessly with your business processes.",
		points: [
			"Custom dashboards & CRMs",
			"Enterprise-grade scalability",
			"Secure authentication systems",
		],
	},
	{
		title: "Custom Software Development",
		desc: "Your ideas, engineered into powerful digital products—from scratch to launch.We specialize in custom platforms, SaaS tools, and internal apps that fit your exact needs.",
		points: [
			"Tailored solutions to business needs",
			"Modular and maintainable code",
			"Agile development process",
		],
	},
	{
		title: "Payment Gateway Integration",
		desc: "Accept payments effortlessly with secure integrations like Razorpay, Stripe, and Paytm.Subscriptions, invoicing, and one-time payments—built to scale and fully compliant.",

		points: [
			"Razorpay, Stripe, Paytm & more",
			"Secure transaction flows",
			"Subscription & one-time payments",
		],
	},
];

export default function WhatWeBuild() {
	return (
		<section className="bg-black text-white py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<p className="text-sm uppercase tracking-wide text-[#1c00d3] font-semibold mb-4 text-center">
					Built with Next.js & React.js
				</p>
				<h2 className="text-4xl font-bold text-center mb-12">What We Build</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{categories.map((category, idx) => (
						<div
							key={idx}
							className="bg-white/25 rounded-2xl shadow-md p-6 md:p-8 md:py-20 space-y-4">
							<h3 className="text-2xl font-semibold">{category.title}</h3>
                            <p className="text-lg font-medium">{category.desc}</p>
							<ul className="space-y-2 ml-4">
								{category.points.map((point, i) => (
									<li key={i} className="flex items-start gap-2">
										<FaCheckCircle className="text-green-400 mt-1" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
