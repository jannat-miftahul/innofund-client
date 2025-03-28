const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            message: "This is an amazing service! Highly recommend.",
        },
        {
            id: 2,
            name: "Jane Smith",
            message: "I had a great experience. Will use again.",
        },
        {
            id: 3,
            name: "Sam Wilson",
            message: "Fantastic! Exceeded my expectations.",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
            <div className="space-y-4">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="p-4 border rounded-lg shadow"
                    >
                        <h2 className="text-xl font-semibold">
                            {testimonial.name}
                        </h2>
                        <p className="mt-2">{testimonial.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
