import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Dumbbell,
    Coffee,
    Send,
    Check,
    Instagram,
    Facebook,
    ChevronRight
} from 'lucide-react';
import { businessInfo } from '../data/siteData';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'membership',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'membership',
                message: ''
            });
        }, 3000);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1600&h=900&fit=crop"
                        alt="Get Fit reception"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/70 to-[#121212]" />
                </div>

                {/* Content */}
                <div className="relative container-custom py-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        Ready to start your fitness journey or just want to grab a coffee?
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative -mt-12 z-10 mb-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Location */}
                        <div className="card text-center hover-lift">
                            <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-[#00D4FF]" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                            <p className="text-white/60 text-sm">{businessInfo.address}</p>
                        </div>

                        {/* Phone */}
                        <div className="card text-center hover-lift">
                            <div className="w-16 h-16 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-[#39FF14]" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                            <a
                                href={`tel:${businessInfo.phone}`}
                                className="text-white/60 text-sm hover:text-[#39FF14] transition-colors"
                            >
                                {businessInfo.phone}
                            </a>
                        </div>

                        {/* Email */}
                        <div className="card text-center hover-lift">
                            <div className="w-16 h-16 rounded-2xl bg-[#C8A882]/10 flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-[#C8A882]" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                            <a
                                href={`mailto:${businessInfo.email}`}
                                className="text-white/60 text-sm hover:text-[#C8A882] transition-colors"
                            >
                                {businessInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Send Us a Message
                            </h2>
                            <p className="text-white/60 mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="John Doe"
                                        aria-required="true"
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="john@example.com"
                                            aria-required="true"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="076 XXX XXXX"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                                        I'm Interested In *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        aria-required="true"
                                    >
                                        <option value="membership">Gym Membership</option>
                                        <option value="trial">Free Trial</option>
                                        <option value="personal-training">Personal Training</option>
                                        <option value="classes">Group Classes</option>
                                        <option value="coffee">Coffee Bar Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="form-input resize-none"
                                        placeholder="Tell us how we can help..."
                                        aria-required="true"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitted}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitted
                                            ? 'bg-[#39FF14] text-[#121212]'
                                            : 'bg-gradient-to-r from-[#00D4FF] to-[#39FF14] text-[#121212] hover:shadow-lg hover:shadow-[#00D4FF]/30'
                                        }`}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <Check className="w-5 h-5" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Map & Hours */}
                        <div className="space-y-8">
                            {/* Map Placeholder */}
                            <div className="rounded-2xl overflow-hidden border border-white/10">
                                <div className="relative aspect-[4/3] bg-[#1E293B]">
                                    {/* Google Maps Embed Placeholder */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.855!2d79.8836!3d7.1252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMzAuNyJOIDc5wrA1MycwMS4wIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Get Fit Location Map"
                                        aria-label="Google Maps showing Get Fit location"
                                    ></iframe>

                                    {/* Map Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-effect-dark">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-white font-medium text-sm">{businessInfo.address}</p>
                                                <a
                                                    href="https://maps.google.com/?q=Puttalam+-+Colombo+Rd,+Seeduwa+11410"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#00D4FF] text-xs inline-flex items-center gap-1 mt-1 hover:underline"
                                                >
                                                    Get Directions
                                                    <ChevronRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="card">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-[#00D4FF]" />
                                    Opening Hours
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                                        <div className="flex items-center gap-3">
                                            <Dumbbell className="w-5 h-5 text-[#00D4FF]" />
                                            <span className="text-white font-medium">The Gym</span>
                                        </div>
                                        <span className="text-white/70 text-sm">{businessInfo.hours.gym}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                                        <div className="flex items-center gap-3">
                                            <Coffee className="w-5 h-5 text-[#C8A882]" />
                                            <span className="text-white font-medium">Coffee Bar</span>
                                        </div>
                                        <span className="text-white/70 text-sm">{businessInfo.hours.coffeeBar}</span>
                                    </div>
                                </div>

                                <p className="text-white/50 text-sm mt-6">
                                    * Hours may vary on public holidays. Follow us on social media for updates.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="card">
                                <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
                                <div className="flex items-center gap-4">
                                    <a
                                        href={businessInfo.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] text-white/70 transition-all duration-300"
                                        aria-label="Follow us on Instagram"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        <span className="text-sm font-medium">Instagram</span>
                                    </a>
                                    <a
                                        href={businessInfo.socials.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] text-white/70 transition-all duration-300"
                                        aria-label="Follow us on Facebook"
                                    >
                                        <Facebook className="w-5 h-5" />
                                        <span className="text-sm font-medium">Facebook</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="section-padding bg-[#0a0a0a]">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-white/60">
                            Quick answers to common questions about Get Fit.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: 'Do I need a membership to use the coffee bar?',
                                a: 'No! Our coffee bar is open to the public. Everyone is welcome to enjoy our specialty drinks and healthy snacks.'
                            },
                            {
                                q: 'Is there free parking available?',
                                a: 'Yes, we have a complimentary parking lot for both gym members and coffee bar customers.'
                            },
                            {
                                q: 'Can I get a tour before joining?',
                                a: 'Absolutely! Walk-ins are welcome for tours, or you can call ahead to schedule one. We\'re happy to show you around.'
                            },
                            {
                                q: 'Do you offer personal training?',
                                a: 'Yes, we have certified personal trainers available. Personal training sessions can be booked separately or are included with certain membership packages.'
                            }
                        ].map((faq, index) => (
                            <details
                                key={index}
                                className="group card cursor-pointer"
                            >
                                <summary className="flex items-center justify-between text-white font-medium list-none">
                                    {faq.q}
                                    <ChevronRight className="w-5 h-5 text-[#00D4FF] group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-4 text-white/60 text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
