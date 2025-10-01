"use client";

import React, { useState, useEffect } from 'react';
import { COLORS, TYPOGRAPHY } from '../lib/constants';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        subject: '',
        inquiry_type: 'general',
        message: '',
        consent: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        console.log('Submitting form with data:', formData);

        try {
            // Add timeout to prevent endless loading
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

            // Use Next.js API route to avoid CORS issues
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            console.log('Response status:', response.status);

            if (response.ok) {
                const result = await response.json();
                console.log('Success response:', result);
                setSubmitStatus('success');
                // Reset form on success
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    subject: '',
                    inquiry_type: 'general',
                    message: '',
                    consent: false
                });
            } else {
                const errorData = await response.json();
                console.error('Error response:', errorData);
                throw new Error(`Server error: ${response.status} - ${errorData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Failed to submit form:', error);
            
            if (error instanceof Error && error.name === 'AbortError') {
                setSubmitStatus('error');
                console.error('Request timed out');
            } else {
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Auto-clear status messages after 5 seconds
    useEffect(() => {
        if (submitStatus !== 'idle') {
            const timer = setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const contactMethods = [
        {
            icon: "📧",
            title: "Email Support",
            description: "Get detailed answers to your questions",
            contact: "support@vita-choice.com",
            responseTime: "24-48 hours"
        },
        {
            icon: "📞",
            title: "Phone Consultation",
            description: "Speak directly with our medical team",
            contact: "+1 (555) 123-4567",
            responseTime: "Mon-Fri 9AM-6PM EST"
        },
        {
            icon: "💬",
            title: "Live Chat",
            description: "Instant answers to quick questions",
            contact: "Available on website",
            responseTime: "Mon-Fri 9AM-9PM EST"
        },
        {
            icon: "🩺",
            title: "Medical Review",
            description: "Complex health questions require review",
            contact: "medical@vita-choice.com",
            responseTime: "3-5 business days"
        }
    ];

    const officeLocations = [
        {
            city: "New York",
            address: "123 Health Plaza, Suite 450",
            address2: "New York, NY 10001",
            phone: "+1 (555) 123-4567",
            email: "ny@vita-choice.com"
        },
        {
            city: "Los Angeles",
            address: "456 Wellness Boulevard",
            address2: "Los Angeles, CA 90210",
            phone: "+1 (555) 987-6543",
            email: "la@vita-choice.com"
        },
        {
            city: "London",
            address: "789 Nutrition Street",
            address2: "London, UK SW1A 1AA",
            phone: "+44 20 7123 4567",
            email: "london@vita-choice.com"
        }
    ];

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/8 to-transparent rounded-full blur-3xl" />
                </div>
                {/* Floating Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-12 h-12 rounded-full bg-[#2EE6D6]/20 animate-float-slow" />
                    <div className="absolute bottom-32 right-20 w-10 h-10 bg-[#2EA7FF]/20 rotate-12 animate-float-medium" />
                    <div
                        className="absolute top-1/2 left-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#2EE6D6]/30 animate-float-fast"
                    />
                </div>


                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                        style={{
                            backgroundColor: `${COLORS.accentTeal}10`,
                            borderColor: `${COLORS.accentTeal}30`
                        }}>
                        <div className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: COLORS.accentTeal }} />
                        <span className="text-sm font-medium" style={{ color: COLORS.accentTeal }}>
                            GET IN TOUCH
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                        style={{ fontFamily: TYPOGRAPHY.heading }}>
                        Let's Talk About
                        <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                            Your Health Goals
                        </span>
                    </h1>

                    <p className="text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                        Our team of nutritional scientists and medical professionals
                        is here to guide you on your personalized wellness journey.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <div key={index}
                                className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31] hover:border-[#2EE6D6]/30 transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="text-4xl mb-4">{method.icon}</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    {method.title}
                                </h3>
                                <p className="text-sm mb-4" style={{ color: COLORS.textMuted }}>
                                    {method.description}
                                </p>
                                <p className="font-medium mb-2" style={{ color: COLORS.accentTeal }}>
                                    {method.contact}
                                </p>
                                <p className="text-xs" style={{ color: COLORS.textMuted }}>
                                    {method.responseTime}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl p-8 border border-[#262A31]">
                                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    Send Us a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textPrimary }}>
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border bg-[#0B0C0E] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none focus:ring-2 focus:ring-[#2EE6D6]/20"
                                                style={{
                                                    borderColor: COLORS.border,
                                                    color: COLORS.textPrimary,
                                                    fontFamily: TYPOGRAPHY.body
                                                }}
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textPrimary }}>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border bg-[#0B0C0E] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none focus:ring-2 focus:ring-[#2EE6D6]/20"
                                                style={{
                                                    borderColor: COLORS.border,
                                                    color: COLORS.textPrimary,
                                                    fontFamily: TYPOGRAPHY.body
                                                }}
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textPrimary }}>
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone_number"
                                                value={formData.phone_number}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border bg-[#0B0C0E] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none focus:ring-2 focus:ring-[#2EE6D6]/20"
                                                style={{
                                                    borderColor: COLORS.border,
                                                    color: COLORS.textPrimary,
                                                    fontFamily: TYPOGRAPHY.body
                                                }}
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textPrimary }}>
                                                Inquiry Type
                                            </label>
                                            <select
                                                name="inquiry_type"
                                                value={formData.inquiry_type}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border bg-[#0B0C0E] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none focus:ring-2 focus:ring-[#2EE6D6]/20"
                                                style={{
                                                    borderColor: COLORS.border,
                                                    color: COLORS.textPrimary,
                                                    fontFamily: TYPOGRAPHY.body
                                                }}
                                            >
                                                <option value="general">General Questions</option>
                                                <option value="medical">Medical/Health Questions</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="billing">Billing & Orders</option>
                                                <option value="partnership">Partnerships</option>
                                                <option value="media">Media Inquiries</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textPrimary }}>
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border bg-[#0B0C0E] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none focus:ring-2 focus:ring-[#2EE6D6]/20"
                                            style={{
                                                borderColor: COLORS.border,
                                                color: COLORS.textPrimary,
                                                fontFamily: TYPOGRAPHY.body
                                            }}
                                            placeholder="Brief subject line"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textPrimary }}>
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl border bg-[#0B0C0E] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none focus:ring-2 focus:ring-[#2EE6D6]/20 resize-none"
                                            style={{
                                                borderColor: COLORS.border,
                                                color: COLORS.textPrimary,
                                                fontFamily: TYPOGRAPHY.body
                                            }}
                                            placeholder="Please provide as much detail as possible about your question or concern..."
                                        />
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            id="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-4 h-4 rounded border-2 bg-[#0B0C0E] checked:bg-[#2EE6D6] focus:ring-2 focus:ring-[#2EE6D6]/20"
                                            style={{ borderColor: COLORS.border }}
                                        />
                                        <label htmlFor="consent" className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
                                            I agree to receive communications from Vita-Choice and understand that my information
                                            will be processed according to the <span style={{ color: COLORS.accentTeal }}>Privacy Policy</span>.
                                            I can unsubscribe at any time.
                                        </label>
                                    </div>

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="p-4 rounded-xl bg-[#2ECC71]/10 border border-[#2ECC71]/30 mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#2ECC71]">✓</span>
                                                <p className="text-sm" style={{ color: COLORS.textPrimary }}>
                                                    Your message has been sent successfully! We'll get back to you soon.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="p-4 rounded-xl bg-[#FF5A5F]/10 border border-[#FF5A5F]/30 mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5A5F]">⚠</span>
                                                <p className="text-sm" style={{ color: COLORS.textPrimary }}>
                                                    Failed to send message. Please try again or contact us directly.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                                            isSubmitting 
                                                ? 'bg-gray-600 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] hover:-translate-y-1'
                                        }`}
                                        style={{ 
                                            color: isSubmitting ? '#999' : '#0B0C0E'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                                Sending Message...
                                            </div>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Office Locations */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    Our Locations
                                </h2>

                                <div className="space-y-6">
                                    {officeLocations.map((location, index) => (
                                        <div key={index}
                                            className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                            <h3 className="text-lg font-semibold mb-3"
                                                style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                                {location.city}
                                            </h3>
                                            <div className="space-y-2 text-sm" style={{ color: COLORS.textMuted }}>
                                                <p>{location.address}</p>
                                                <p>{location.address2}</p>
                                                <p className="flex items-center gap-2 pt-2">
                                                    <span>📞</span>
                                                    <span style={{ color: COLORS.textPrimary }}>{location.phone}</span>
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <span>📧</span>
                                                    <span style={{ color: COLORS.accentTeal }}>{location.email}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    Business Hours
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span style={{ color: COLORS.textMuted }}>Monday - Friday</span>
                                        <span style={{ color: COLORS.textPrimary }}>9:00 AM - 6:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span style={{ color: COLORS.textMuted }}>Saturday</span>
                                        <span style={{ color: COLORS.textPrimary }}>10:00 AM - 4:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span style={{ color: COLORS.textMuted }}>Sunday</span>
                                        <span style={{ color: COLORS.textMuted }}>Closed</span>
                                    </div>
                                    <div className="pt-3 border-t" style={{ borderColor: COLORS.border }}>
                                        <p className="text-xs" style={{ color: COLORS.textMuted }}>
                                            Emergency medical questions are reviewed within 24 hours,
                                            including weekends and holidays.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    Quick Resources
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { title: "Return Policy", link: "/return-policy" },
                                        { title: "Shipping Info", link: "/shipping-policy" },
                                        { title: "FAQ", link: "/faq" },
                                    ].map((item, index) => (
                                        <a key={index}
                                            href={item.link}
                                            className="block text-sm hover:text-[#2EE6D6] transition-colors duration-300"
                                            style={{ color: COLORS.textMuted }}>
                                            → {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-[#FF5A5F]/10 to-[#FF5A5F]/5 rounded-2xl p-8 border border-[#FF5A5F]/20">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🚨</div>
                            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.error }}>
                                Medical Emergency?
                            </h3>
                            <p className="mb-6" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                                For serious adverse reactions or medical emergencies, contact your physician immediately
                                or call emergency services. Do not rely on email or contact forms for urgent medical issues.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:911"
                                    className="bg-[#FF5A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e74c3c] transition-colors duration-300">
                                    Emergency: 911
                                </a>
                                <a href="tel:+15551234567"
                                    className="border border-[#FF5A5F] text-[#FF5A5F] px-6 py-3 rounded-xl font-semibold hover:bg-[#FF5A5F]/10 transition-colors duration-300">
                                    Medical Hotline: +1 (555) 123-4567
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Follow Up CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-[#14161A]/80 to-[#262A31]/80 rounded-3xl p-12 border border-[#2EE6D6]/20">
                        <div className="text-5xl mb-6">⏱️</div>
                        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading }}>
                            What Happens Next?
                        </h2>
                        <div className="text-left max-w-2xl mx-auto space-y-4 mb-8"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#2EE6D6] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-[#0B0C0E] text-xs font-bold">1</span>
                                </div>
                                <p>We'll acknowledge your message within 2 hours during business hours</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#2EA7FF] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-[#0B0C0E] text-xs font-bold">2</span>
                                </div>
                                <p>A specialist will review your inquiry and medical history (if applicable)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-xs font-bold">3</span>
                                </div>
                                <p>You'll receive a detailed response with next steps or recommendations</p>
                            </div>
                        </div>
                        <p className="text-sm" style={{ color: COLORS.textMuted }}>
                            Response times may be longer for complex medical questions requiring physician review.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;