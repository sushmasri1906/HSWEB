"use client";
import Link from "next/link";
import React from "react";
import {
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-12 px-6 md:px-20">
			{/* Main Grid */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
				{/* Logo & Intro */}
				<div>
					<img src="/your-logo.svg" alt="HSDev Logo" className="w-32 mb-4" />
					<p className="text-gray-400 mb-4">
						We craft high-performance digital experiences that deliver real
						business outcomes using modern tech like Next.js & React.
					</p>
					<div className="flex space-x-4 mt-4">
						<a href="#" className="text-white hover:text-gray-400">
							<FaInstagram size={20} />
						</a>
						<a href="#" className="text-white hover:text-gray-400">
							<FaFacebookF size={20} />
						</a>
						<a href="#" className="text-white hover:text-gray-400">
							<FaLinkedinIn size={20} />
						</a>
						<a href="#" className="text-white hover:text-gray-400">
							<FaXTwitter size={20} />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-gray-400">
						<li>
							<Link href="/" className="hover:text-white">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-white">
								About
							</Link>
						</li>
						<li>
							<Link href="/blog" className="hover:text-white">
								Blog
							</Link>
						</li>
						<li>
							<Link href="/portfolio" className="hover:text-white">
								Portfolio
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-white">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Services */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Services</h3>
					<ul className="space-y-2 text-gray-400">
						<li>Full Stack Development</li>
						<li>Mobile App Development</li>
						<li>Custom Software</li>
						<li>Payment Integrations</li>
					</ul>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="text-xl font-semibold mb-4">
						Get the Latest Inspiration
					</h3>
					<input
						type="email"
						placeholder="Enter your email *"
						className="w-full p-3 mb-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none"
					/>
					<button className="w-full bg-[#1c00d3] text-[#050227] font-semibold py-3">
						Subscribe
					</button>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="mt-10 text-center text-sm text-gray-500 space-y-1">
				<div>© {new Date().getFullYear()} HSDev. All rights reserved.</div>
				<div>
					Developed by{" "}
					<Link
						href="https://sushmasri.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 ">
						Sushmasri
					</Link>{" "}
					&{" "}
					<Link
						href="https://harunath.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 ">
						Harunath
					</Link>
				</div>
			</div>
		</footer>
	);
}
