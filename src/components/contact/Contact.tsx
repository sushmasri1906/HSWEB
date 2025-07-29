"use client";

import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Submitted:", formData);
		alert("Thank you! We’ll connect with you shortly.");
	};

	return (
		<section className="bg-[#0b0b11] mt-16 text-white px-6 sm:px-12 lg:px-20 py-28">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
				{/* Left Content */}
				<div>
					<h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
						Start Your <br />
						<span className="text-[#1c00d3]">Next Big Project</span> with HSDev
					</h2>
					<p className="text-gray-300 text-base sm:text-lg">
						Whether you&apos;re building a scalable platform, a powerful brand
						site, or a seamless web app. HSDev is here to bring it to life.
						Share your vision with us and let&apos;s make something remarkable.
					</p>
					<p className="text-gray-400 mt-4 text-sm sm:text-base">
						Our team usually responds within 24 hours.
					</p>
				</div>

				{/* Right Form */}
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-sm font-medium mb-1">
							Your Name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#1c00d3]"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Your Email <span className="text-red-500">*</span>
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#1c00d3]"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Phone Number
						</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="+91"
							className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#1c00d3]"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Message</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={5}
							placeholder="Tell us what you're building or need help with..."
							className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#1c00d3]"
						/>
					</div>

					<button
						type="submit"
						className="bg-[#1c00d3] hover:bg-[#000fb5] text-white font-semibold px-6 py-3 rounded-md transition">
						Submit Enquiry
					</button>
				</form>
			</div>
		</section>
	);
}
