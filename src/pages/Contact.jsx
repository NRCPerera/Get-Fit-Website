import { useState } from 'react';
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
import './Contact.css';

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
            <section className="contact-hero">
                {/* Background */}
                <div className="contact-hero__background">
                    <img
                        src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1600&h=900&fit=crop"
                        alt="Get Fit reception"
                        className="contact-hero__image"
                    />
                    <div className="contact-hero__overlay" />
                </div>

                {/* Content */}
                <div className="contact-hero__container">
                    <h1 className="contact-hero__title">
                        Get in <span className="contact-hero__title-gradient">Touch</span>
                    </h1>
                    <p className="contact-hero__subtitle">
                        Ready to start your fitness journey or just want to grab a coffee?
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-cards">
                <div className="contact-cards__container">
                    <div className="contact-cards__grid">
                        {/* Location */}
                        <div className="contact-card">
                            <div className="contact-card__icon-wrapper contact-card__icon-wrapper--primary">
                                <MapPin className="contact-card__icon contact-card__icon--primary" />
                            </div>
                            <h3 className="contact-card__title">Visit Us</h3>
                            <p className="contact-card__text">{businessInfo.address}</p>
                        </div>

                        {/* Phone */}
                        <div className="contact-card">
                            <div className="contact-card__icon-wrapper contact-card__icon-wrapper--accent">
                                <Phone className="contact-card__icon contact-card__icon--accent" />
                            </div>
                            <h3 className="contact-card__title">Call Us</h3>
                            <a href={`tel:${businessInfo.phone}`} className="contact-card__link">
                                {businessInfo.phone}
                            </a>
                        </div>

                        {/* Email */}
                        <div className="contact-card">
                            <div className="contact-card__icon-wrapper contact-card__icon-wrapper--latte">
                                <Mail className="contact-card__icon contact-card__icon--latte" />
                            </div>
                            <h3 className="contact-card__title">Email Us</h3>
                            <a href={`mailto:${businessInfo.email}`} className="contact-card__link">
                                {businessInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-main">
                <div className="contact-main__container">
                    <div className="contact-main__grid">
                        {/* Contact Form */}
                        <div>
                            <h2 className="contact-form__title">Send Us a Message</h2>
                            <p className="contact-form__subtitle">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="contact-form__form">
                                {/* Name */}
                                <div className="contact-form__group">
                                    <label htmlFor="name" className="contact-form__label">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="contact-form__input"
                                        placeholder="John Doe"
                                        aria-required="true"
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="contact-form__row">
                                    <div className="contact-form__group">
                                        <label htmlFor="email" className="contact-form__label">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="contact-form__input"
                                            placeholder="john@example.com"
                                            aria-required="true"
                                        />
                                    </div>
                                    <div className="contact-form__group">
                                        <label htmlFor="phone" className="contact-form__label">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="contact-form__input"
                                            placeholder="076 XXX XXXX"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="contact-form__group">
                                    <label htmlFor="subject" className="contact-form__label">
                                        I'm Interested In *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="contact-form__select"
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
                                <div className="contact-form__group">
                                    <label htmlFor="message" className="contact-form__label">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="contact-form__textarea"
                                        placeholder="Tell us how we can help..."
                                        aria-required="true"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitted}
                                    className={`contact-form__submit ${isSubmitted ? 'contact-form__submit--success' : 'contact-form__submit--default'}`}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <Check className="contact-form__submit-icon" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="contact-form__submit-icon" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Map & Hours */}
                        <div className="contact-sidebar">
                            {/* Map */}
                            <div className="contact-map">
                                <div className="contact-map__wrapper">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.855!2d79.8836!3d7.1252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMzAuNyJOIDc5wrA1MycwMS4wIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                                        className="contact-map__iframe"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Get Fit Location Map"
                                        aria-label="Google Maps showing Get Fit location"
                                    />

                                    {/* Map Overlay */}
                                    <div className="contact-map__overlay">
                                        <div className="contact-map__info">
                                            <MapPin className="contact-map__icon" />
                                            <div>
                                                <p className="contact-map__address">{businessInfo.address}</p>
                                                <a
                                                    href="https://maps.google.com/?q=Puttalam+-+Colombo+Rd,+Seeduwa+11410"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="contact-map__link"
                                                >
                                                    Get Directions
                                                    <ChevronRight className="contact-map__link-icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="contact-hours">
                                <h3 className="contact-hours__title">
                                    <Clock className="contact-hours__title-icon" />
                                    Opening Hours
                                </h3>

                                <div className="contact-hours__list">
                                    <div className="contact-hours__item">
                                        <div className="contact-hours__label">
                                            <Dumbbell className="contact-hours__label-icon contact-hours__label-icon--primary" />
                                            <span className="contact-hours__label-text">The Gym</span>
                                        </div>
                                        <span className="contact-hours__time">{businessInfo.hours.gym}</span>
                                    </div>

                                    <div className="contact-hours__item">
                                        <div className="contact-hours__label">
                                            <Coffee className="contact-hours__label-icon contact-hours__label-icon--latte" />
                                            <span className="contact-hours__label-text">Coffee Bar</span>
                                        </div>
                                        <span className="contact-hours__time">{businessInfo.hours.coffeeBar}</span>
                                    </div>
                                </div>

                                <p className="contact-hours__note">
                                    * Hours may vary on public holidays. Follow us on social media for updates.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="contact-social">
                                <h3 className="contact-social__title">Follow Us</h3>
                                <div className="contact-social__links">
                                    <a
                                        href={businessInfo.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-social__link"
                                        aria-label="Follow us on Instagram"
                                    >
                                        <Instagram className="contact-social__link-icon" />
                                        <span className="contact-social__link-text">Instagram</span>
                                    </a>
                                    <a
                                        href={businessInfo.socials.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-social__link"
                                        aria-label="Follow us on Facebook"
                                    >
                                        <Facebook className="contact-social__link-icon" />
                                        <span className="contact-social__link-text">Facebook</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="faq-section">
                <div className="faq-section__container">
                    <div className="faq-section__header">
                        <h2 className="faq-section__title">Frequently Asked Questions</h2>
                        <p className="faq-section__subtitle">
                            Quick answers to common questions about Get Fit.
                        </p>
                    </div>

                    <div className="faq-section__list">
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
                            <details key={index} className="faq-item">
                                <summary className="faq-item__summary">
                                    {faq.q}
                                    <ChevronRight className="faq-item__icon" />
                                </summary>
                                <p className="faq-item__answer">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
