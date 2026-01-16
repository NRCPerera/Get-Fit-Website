import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { businessInfo } from '../data/siteData';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const lastUpdated = "January 16, 2026";

    return (
        <main className="privacy">
            {/* Header */}
            <section className="privacy-header">
                <div className="privacy-header__container">
                    <Link to="/" className="privacy-header__back">
                        <ArrowLeft className="privacy-header__back-icon" />
                        Back to Home
                    </Link>

                    <div className="privacy-header__info">
                        <div className="privacy-header__icon-wrapper">
                            <Shield className="privacy-header__icon" />
                        </div>
                        <div>
                            <h1 className="privacy-header__title">Privacy Policy</h1>
                            <p className="privacy-header__date">Last updated: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="privacy-content">
                <div className="privacy-content__container">
                    <div className="privacy-content__wrapper">
                        {/* Introduction */}
                        <div className="privacy-card privacy-card--highlight">
                            <h2 className="privacy-card__title">Privacy Policy</h2>
                            <p className="privacy-card__text">
                                At Get Fit, we are committed to protecting the privacy and security of our customers'
                                personal information. This Privacy Policy outlines how we collect, use, and safeguard
                                your information when you visit or make a purchase on our website or use our services at
                                our fitness center and coffee bar. By using our website and services, you consent to the
                                practices described in this policy.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Information We Collect</h2>
                            <p className="privacy-card__text">
                                When you visit our website or use our services, we may collect certain information about you, including:
                            </p>
                            <ul className="privacy-card__list">
                                <li className="privacy-card__list-item">
                                    <strong>Personal identification information</strong> (such as your name, email address,
                                    and phone number) provided voluntarily by you during the registration or checkout process.
                                </li>
                                <li className="privacy-card__list-item">
                                    <strong>Payment and billing information</strong> necessary to process your orders and
                                    membership payments, including credit card details, which are securely handled by trusted
                                    third-party payment processors.
                                </li>
                                <li className="privacy-card__list-item">
                                    <strong>Browsing information</strong>, such as your IP address, browser type, and device
                                    information, collected automatically using cookies and similar technologies.
                                </li>
                                <li className="privacy-card__list-item">
                                    <strong>Health and fitness information</strong> necessary for safe exercise participation
                                    and personalized training services.
                                </li>
                            </ul>
                        </div>

                        {/* Use of Information */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Use of Information</h2>
                            <p className="privacy-card__text">
                                We may use the collected information for the following purposes:
                            </p>
                            <ul className="privacy-card__list">
                                <li className="privacy-card__list-item">
                                    To process and fulfill your orders, including shipping and delivery.
                                </li>
                                <li className="privacy-card__list-item">
                                    To communicate with you regarding your purchases, membership, provide customer support,
                                    and respond to inquiries or requests.
                                </li>
                                <li className="privacy-card__list-item">
                                    To personalize your experience and present relevant product recommendations and promotions.
                                </li>
                                <li className="privacy-card__list-item">
                                    To improve our website, products, and services based on your feedback and browsing patterns.
                                </li>
                                <li className="privacy-card__list-item">
                                    To detect and prevent fraud, unauthorized activities, and abuse of our website.
                                </li>
                                <li className="privacy-card__list-item">
                                    To ensure the safety and security of our premises and members.
                                </li>
                            </ul>
                        </div>

                        {/* Information Sharing */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Information Sharing</h2>
                            <p className="privacy-card__text">
                                We respect your privacy and do not sell, trade, or otherwise transfer your personal
                                information to third parties without your consent, except in the following circumstances:
                            </p>
                            <ul className="privacy-card__list">
                                <li className="privacy-card__list-item">
                                    <strong>Trusted service providers:</strong> We may share your information with third-party
                                    service providers who assist us in operating our website, processing payments, and delivering
                                    products. These providers are contractually obligated to handle your data securely and confidentially.
                                </li>
                                <li className="privacy-card__list-item">
                                    <strong>Legal requirements:</strong> We may disclose your information if required to do so
                                    by law or in response to valid legal requests or orders.
                                </li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Data Security</h2>
                            <p className="privacy-card__text">
                                We implement industry-standard security measures to protect your personal information from
                                unauthorized access, alteration, disclosure, or destruction. However, please be aware that
                                no method of transmission over the internet or electronic storage is 100% secure, and we
                                cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Cookies and Tracking Technologies */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Cookies and Tracking Technologies</h2>
                            <p className="privacy-card__text">
                                We use cookies and similar technologies to enhance your browsing experience, analyze website
                                traffic, and gather information about your preferences and interactions with our website.
                                You have the option to disable cookies through your browser settings, but this may limit
                                certain features and functionality of our website.
                            </p>
                        </div>

                        {/* Changes to the Privacy Policy */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Changes to the Privacy Policy</h2>
                            <p className="privacy-card__text">
                                We reserve the right to update or modify this Privacy Policy at any time. Any changes will
                                be posted on this page with a revised "last updated" date. We encourage you to review this
                                Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="privacy-card privacy-card--highlight">
                            <h2 className="privacy-card__title">Contact Us</h2>
                            <p className="privacy-card__text">
                                If you have any questions, concerns, or requests regarding our Privacy Policy or the handling
                                of your personal information, please contact us using the information provided below.
                            </p>
                            <div className="privacy-card__contact">
                                <p><span className="privacy-card__contact-label">Get Fit</span></p>
                                <p>Address: {businessInfo.address}</p>
                                <p>Phone: <a href={`tel:${businessInfo.phone}`} className="privacy-card__contact-link">{businessInfo.phone}</a></p>
                                <p>Email: <a href={`mailto:${businessInfo.email}`} className="privacy-card__contact-link">{businessInfo.email}</a></p>
                            </div>
                        </div>

                        {/* Disclaimer Note */}
                        <div className="privacy-card privacy-card--note">
                            <p className="privacy-card__text privacy-card__text--note">
                                <em>(Note: This Privacy Policy is provided as a general guideline and reflects Get Fit's
                                    commitment to protecting your privacy.)</em>
                            </p>
                        </div>

                        {/* Back to top */}
                        <div className="privacy-back-top">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="privacy-back-top__button"
                            >
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
