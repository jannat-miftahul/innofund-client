const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        name="message"
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>
                <button type="submit" className="btn bg-skyBlue mt-4">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
