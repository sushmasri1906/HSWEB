// import { blogPosts } from "@/components/blog/BlogPosts";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

// export default async function Page({
// 	params: { slug },
// }: {
// 	params: { slug: string };
// }) {
// 	const post = blogPosts.find((p) => p.slug === slug);

// 	if (!post) return notFound();
// 	return (
// 		<div className="bg-black mt-20 text-white px-6 pt-28 pb-20 min-h-screen">
// 			<div className="max-w-4xl mx-auto space-y-8">
// 				{/* Cover Image */}
// 				<div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
// 					<Image
// 						src={post.image}
// 						alt={post.title}
// 						fill
// 						className="object-cover"
// 						priority
// 					/>
// 				</div>

// 				{/* Title + Meta */}
// 				<div className="space-y-2">
// 					<h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
// 					<div className="text-sm text-gray-400 flex flex-wrap items-center gap-4">
// 						<span>{post.date}</span>
// 						<span>•</span>
// 						<span>
// 							by <strong>{post.author}</strong>
// 						</span>
// 						{post.tags?.length > 0 && (
// 							<div className="flex flex-wrap gap-2 ml-4">
// 								{post.tags.map((tag) => (
// 									<span
// 										key={tag}
// 										className="text-xs bg-[#1c00d3] px-2 py-1 rounded-full text-white">
// 										#{tag}
// 									</span>
// 								))}
// 							</div>
// 						)}
// 					</div>
// 				</div>

// 				{/* Content */}
// 				<div
// 					className="prose prose-invert prose-lg max-w-none mt-4 text-gray-200"
// 					dangerouslySetInnerHTML={{ __html: post.content }}
// 				/>

// 				{/* Share Buttons (Optional) */}
// 				<div className="mt-10 border-t border-gray-700 pt-6 flex items-center gap-4">
// 					<span className="text-gray-400 text-sm">Share this post:</span>
// 					<Link
// 						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
// 							post.title
// 						)}&url=https://hsdev.in/blog/${post.slug}`}
// 						target="_blank"
// 						className="text-blue-400 hover:underline text-sm">
// 						Twitter
// 					</Link>
// 					<Link
// 						href={`https://www.linkedin.com/sharing/share-offsite/?url=https://hsdev.in/blog/${post.slug}`}
// 						target="_blank"
// 						className="text-blue-300 hover:underline text-sm">
// 						LinkedIn
// 					</Link>
// 				</div>

// 				{/* Related Posts (Optional) */}
// 				<div className="mt-16">
// 					<h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
// 					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// 						{blogPosts
// 							.filter((p) => p.slug !== post.slug)
// 							.slice(0, 2)
// 							.map((related) => (
// 								<Link
// 									key={related.slug}
// 									href={`/blog/${related.slug}`}
// 									className="group block bg-[#1a1a1a] rounded-xl p-4 hover:bg-[#222] transition border border-[#333]">
// 									<h3 className="text-lg font-medium group-hover:text-[#1c00d3]">
// 										{related.title}
// 									</h3>
// 									<p className="text-gray-400 text-sm mt-1">
// 										{related.excerpt}
// 									</p>
// 								</Link>
// 							))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React from "react";

function page() {
	return <div>page</div>;
}

export default page;
