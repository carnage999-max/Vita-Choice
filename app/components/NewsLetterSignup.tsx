export default function NewsletterSignup() {
    return (
        <div className="bg-[#071018] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h4 className="text-lg font-semibold">Get updates & launch offers</h4>
                <p className="text-sm text-[#9fb0c9] mt-1">
                    Subscribe for product news and early access codes.
                </p>
            </div>

            <form
                action="/api/waitlist"
                method="POST"
                className="w-full sm:w-auto flex gap-2"
            >
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@domain.com"
                    className="px-4 py-2 rounded-md bg-[#0b1317] border border-[#16202a] focus:outline-none"
                />
                <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-white text-[#071018] font-medium"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}
