import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
	{
		rating: 5.0,
		stars: [1, 1, 1, 1, 1],
		feedback:
			"Working with HS Dev has been a game-changer for Biz-Network®. We’ve taken several full-stack and front-end applications from HSDev . Each one delivered with precision, performance, and an eye for detail. From our main Biz-Network® platform to supporting tools, their work has consistently exceeded expectations. Highly recommended!",
		name: "Narayana Swamy",
		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
	},
	{
		rating: 5.0,
		stars: [1, 1, 1, 1, 1],
		feedback:
			"I'm really happy with how the Rolanplast website turned out. The design is clean, smooth, and interactive. The team was quick to respond, made all the changes I asked for, and made the whole process easy and stress-free.",
		name: "Mahesh Devarakonda",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744695457/mahesh_vgalio.jpg",
	},
];

export default function Testimonials() {
	return (
		<section className="bg-black py-16 px-4 md:px-8">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-white text-3xl font-bold mb-10 text-center">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((t, i) => (
						<div
							key={i}
							className="bg-[#0a052a]  text-white rounded-2xl border border-gray-800 hover:border-[#1c00d3] hover:shadow-[0_0_20px_#1c00d3] transition duration-300 ease-in-out p-6 cursor-pointer">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src={t.image}
									alt={t.name}
									width={56}
									height={56}
									className="rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-lg">{t.name}</p>
									<div className="flex items-center gap-1 text-yellow-400 text-sm">
										{t.stars.map((s, idx) =>
											s === 1 ? (
												<FaStar key={idx} />
											) : s === 0.5 ? (
												<FaStarHalfAlt key={idx} />
											) : null
										)}
										<span className="text-white ml-2">
											{t.rating.toFixed(1)}
										</span>
									</div>
								</div>
							</div>
							<p className="text-gray-300 italic leading-relaxed">
								“{t.feedback}”
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
