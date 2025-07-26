"use client";

const logoImages = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744796359/Logos_For_We_Work_t24ef3.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1753545558/final_logo_1_mskpl9.png",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936899/4_bgqtwl.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936895/3_r2tlqy.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936892/1_teiasc.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png",
];

export default function LogoSection() {
	return (
		<section className="bg-[#0b0b11] py-20 px-6">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center text-white text-xl font-semibold mb-10 uppercase tracking-wide">
					Trusted by Brands & Partners
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
					{logoImages.map((src, index) => (
						<div key={index} className="flex justify-center">
							<img
								src={src}
								alt={`Logo ${index + 1}`}
								className="h-16 object-contain transition duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
