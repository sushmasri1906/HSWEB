"use client";
import { useState } from "react";
import Image from "next/image";
import MeetingRequestForm from "../forms/MeetForm"; // Adjust path if needed

export default function HomeHero() {
	const [showForm, setShowForm] = useState(false);

	return (
		<section className="bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-24 py-32 mt-20 relative">
			<div className="max-w-7xl mx-auto text-center">
				<p className="text-sm uppercase tracking-wide text-[#1c00d3] font-semibold mb-4">
					Driven by Innovation. Focused on Impact.
				</p>

				<h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
					Where <span className="text-[#1c00d3]">Vision</span> Transforms Into{" "}
					<span className="text-[#1c00d3]">Digital Reality</span>
				</h1>

				<p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl mb-10">
					At HSDev, we build stunning websites, scalable apps, and impactful
					digital platforms. Our mission? Helping brands launch faster, scale
					smarter, and stand out in the digital world.
				</p>

				{/* CTA Button opens modal */}
				<button
					onClick={() => setShowForm(true)}
					className="inline-block bg-[#1c00d3] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#000fb5] transition-shadow shadow-md hover:shadow-lg">
					Book a meeting
				</button>
			</div>

			{/* Hero Image */}
			<div className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#1c00d3]">
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752648873/image_rmyalh.png"
					alt="Team collaborating on digital strategy"
					className="w-full object-cover h-[700px]"
					width={1200}
					height={600}
				/>
			</div>

			{/* Modal Form */}
			{showForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
					<div className="bg-white text-black p-6 rounded-xl w-full max-w-md shadow-xl relative">
						<button
							onClick={() => setShowForm(false)}
							className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black">
							×
						</button>
						<MeetingRequestForm />
					</div>
				</div>
			)}
		</section>
	);
}
