import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "Campaign Creator",
            avatar: "https://i.pravatar.cc/150?img=1",
            message:
                "InnoFund helped me raise funds for my tech startup in just 2 weeks! The platform is incredibly user-friendly and the support team is amazing.",
            rating: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Regular Donor",
            avatar: "https://i.pravatar.cc/150?img=5",
            message:
                "I love how easy it is to find and support meaningful campaigns. The transparency and security features give me confidence in every donation.",
            rating: 5,
        },
        {
            id: 3,
            name: "Sam Wilson",
            role: "Nonprofit Organizer",
            avatar: "https://i.pravatar.cc/150?img=3",
            message:
                "Our nonprofit has raised over $50,000 through InnoFund. The tools for campaign management are fantastic and exceed all expectations!",
            rating: 5,
        },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Hear from our community of creators and supporters who
                        have made their dreams come true.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-brightPink rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <FaQuoteLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4 justify-center sm:justify-start">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-softOrange"
                                    />
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                                &ldquo;{testimonial.message}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-brightPink/30"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
