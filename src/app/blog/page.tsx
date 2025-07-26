import { blogPosts } from "@/components/blog/BlogPosts";
import BlogCard from "@/components/blog/BlogCard";

export default function Page() {
	return (
		<div className="bg-black mt-20 text-white min-h-screen px-6 py-20">
			<div className="max-w-7xl mx-auto text-center mb-10">
				<h1 className="text-4xl md:text-5xl font-bold">
					Latest Insights from HSDev
				</h1>
				<p className="text-gray-400 mt-2">
					Explore how we build modern digital products
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{blogPosts.map((post) => (
					<BlogCard key={post.slug} post={post} />
				))}
			</div>
		</div>
	);
}
