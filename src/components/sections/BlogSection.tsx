// components/Blog.tsx
import { blogData } from "../../data/blogData";

const Blog = () => {
    return (
        <section id="blog" className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <h4 className="text-xs font-semibold mt-4 text-gray-400">{post.date}</h4>
                            <h3 className="text-xl font-bold mt-4">{post.title}</h3>
                            <p className="text-sm text-gray-700 mt-2">{post.excerpt}</p>
                            <a
                                href={post.link}
                                title="Read More"
                                className="text-blue-900 hover:underline mt-4 block"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;