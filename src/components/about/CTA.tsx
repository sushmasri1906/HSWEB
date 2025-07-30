"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
	return (
		<section className="bg-black text-white px-6 sm:px-12 lg:px-20 py-28 relative overflow-hidden text-center">
			<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
				{/* Profile Image */}
				<div className="w-24 h-24 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-[#1c00d3]">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1728044830/66fbd7ac8b663ce6b698945b/66fbd7ac8b663ce6b698945bFri%20Oct%2004%202024%2012:27:08%20GMT%2B0000%20%28Coordinated%20Universal%20Time%29.jpg" // 🔁 Replace with your profile
						alt="Harunath Eskuri"
						width={96}
						height={96}
						className="object-cover"
					/>
				</div>

				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
					Meet the Minds Behind the{" "}
					<span className="text-[#1c00d3]">Magic</span>
				</h2>

				{/* Subtext */}
				<p className="text-gray-300 mb-10 text-sm sm:text-base">
					Book a free 30-minute strategy session with our founder and lead
					architect.
				</p>

				<Link
					href="mailto:hsdev.original@gmail.com
"
					className="bg-[#1c00d3] hover:bg-[#1900a3] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300">
					Book a Free Call
				</Link>

				{/* Alternate Contact */}
				<p className="text-gray-400 mt-10 text-sm">Prefer Email?</p>
				<Link
					href="mailto:hsdev.original@gmail.com
"
					className="text-white underline font-semibold hover:text-[#1c00d3] transition">
					hsdev.original@gmail.com
				</Link>
			</div>
		</section>
	);
}
