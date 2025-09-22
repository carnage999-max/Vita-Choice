"use client";

export default function WaitlistModal({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            <div className="relative z-10 w-full max-w-md bg-[#071018] border border-[#0f1720] rounded-2xl p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Join the waitlist</h3>
                        <p className="text-sm text-[#9fb0c9] mt-1">
                            Be the first to know when we launch. We'll send exclusive early
                            access and offers.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="text-sm text-[#9fb0c9]"
                    >
                        Close
                    </button>
                </div>

                <form
                    action="/api/waitlist"
                    method="POST"
                    className="mt-4 flex flex-col gap-3"
                >
                    <input
                        name="name"
                        placeholder="Full name (optional)"
                        className="px-4 py-2 rounded-md bg-[#0b1317] border border-[#16202a]"
                    />
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@domain.com"
                        className="px-4 py-2 rounded-md bg-[#0b1317] border border-[#16202a]"
                    />
                    <div className="flex items-center justify-between mt-2">
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-white text-[#071018] font-medium"
                        >
                            Join
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-sm text-[#9fb0c9]"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
