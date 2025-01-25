// components/Contact.tsx
const ContactSection = () => {
    return (
        <section id="contact" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Me</h2>
                <form className="mx-auto">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg border border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg border border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg border border-gray-300"
                            rows={5}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;