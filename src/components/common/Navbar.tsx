"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", icon: <FaHome /> },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/blog", label: "Blog" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/quote", label: "Get a Quote" },
	{ href: "/contact", label: "Contact" },
];

const serviceDropdown = [
	{ label: "UI/UX Design", href: "/services/ui-ux-design" },
	{ label: "Brand Design", href: "/services/brand-design" },
	{ label: "Webflow Development", href: "/services/webflow-development" },
	{ label: "No-Code Development", href: "/services/no-code-development" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const pathname = usePathname();
	const popupRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const servicesRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				popupRef.current &&
				!popupRef.current.contains(event.target as Node) &&
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				servicesRef.current &&
				!servicesRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setShowDropdown(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-black px-4 py-3 shadow-lg">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752587740/GST_logo__1_-removebg-preview_w2nb7n.png"
						alt="HSDev Logo"
						width={100}
						height={40}
						className="saturate-100 cursor-pointer"
					/>
				</Link>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-white">
					{isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
				</button>

				<ul className="hidden md:flex items-center gap-6 text-white font-medium relative">
					{navLinks.map((link) => (
						<motion.li
							key={link.href}
							whileHover={{ scale: 1.1 }}
							className={`transition relative group ${
								pathname === link.href
									? "text-[#1c00d3] underline underline-offset-4"
									: "hover:text-[#1c00d3]"
							}`}
							ref={link.href === "/services" ? servicesRef : undefined}>
							{link.href === "/services" ? (
								// Services button - opens dropdown, no navigation
								<button
									onClick={() => setShowDropdown((prev) => !prev)}
									className="focus:outline-none">
									{link.label}
								</button>
							) : (
								// Normal navigation links
								<Link href={link.href}>
									{link.icon && link.icon} {link.label}
								</Link>
							)}

							{link.href === "/services" && showDropdown && (
								<div
									ref={dropdownRef}
									className="absolute left-0 top-full bg-white shadow-md rounded-md py-2 w-56 z-50 text-black">
									{serviceDropdown.map((service, i) => (
										<Link
											key={i}
											href={service.href}
											className="block px-4 py-2 hover:bg-gray-100">
											{service.label}
										</Link>
									))}
								</div>
							)}
						</motion.li>
					))}
					<li>
						<Link
							href="/schedule"
							className="bg-[#1c00d3] hover:bg-[#000fb5] text-white px-4 py-2 rounded-md transition">
							Schedule a Call Now
						</Link>
					</li>
				</ul>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={popupRef}
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						className="md:hidden bg-[#050227] w-full rounded-b-xl mt-2 overflow-hidden">
						<ul className="flex flex-col space-y-4 p-4 text-white">
							{navLinks.map((link) => (
								<motion.li
									key={link.href}
									whileHover={{ scale: 1.05 }}
									className={`${
										pathname === link.href
											? "text-[#1c00d3] underline underline-offset-4"
											: "hover:text-[#1c00d3]"
									}`}>
									<Link href={link.href} onClick={() => setIsOpen(false)}>
										{link.icon && link.icon} {link.label}
									</Link>
								</motion.li>
							))}
							<li>
								<Link
									href="/schedule"
									onClick={() => setIsOpen(false)}
									className="block bg-[#1c00d3] hover:bg-[#000fb5] text-white px-4 py-2 rounded-md text-center transition">
									Schedule a Call Now
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
