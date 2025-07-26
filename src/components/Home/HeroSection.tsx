"use client";
import { useState } from "react";
import Image from "next/image";
import MeetingRequestForm from "../forms/MeetForm";

export default function HeroSection() {
	const [showForm, setShowForm] = useState(false);

	return (
		<section className="bg-[#0b0b11] text-white py-20 px-6 relative">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				<div>
					<h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
						Powerful Websites, <br />
						Digital Products & Strategy <br />
						for Visionary Brands.
					</h1>
					<p className="text-lg text-gray-300 mb-8">
						At HS Dev, we craft future-ready digital experiences...
					</p>
					<button
						onClick={() => setShowForm(true)}
						className="inline-block px-6 py-3 bg-[#1c00d3] text-white hover:bg-white hover:text-black border border-white transition rounded-full">
						Request a Meeting
					</button>
				</div>
				<div>
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752937424/software-developers-writing-code-computers-modern-office-night-two-programmers-working-dark-purple-lights-379344757_quarpq.jpg"
						alt="Team collaborating on digital strategy"
						className="w-full max-w-md object-cover h-[400px] mx-auto"
						width={500}
						height={300}
					/>
				</div>
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

						{/* Reused Form Component */}
						<MeetingRequestForm />
					</div>
				</div>
			)}
		</section>
	);
}
