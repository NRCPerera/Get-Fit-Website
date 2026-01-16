import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import { businessInfo } from '../data/siteData';
import './TermsConditions.css';

const TermsConditions = () => {
    const lastUpdated = "January 16, 2026";

    return (
        <main className="terms">
            {/* Header */}
            <section className="terms-header">
                <div className="terms-header__container">
                    <Link to="/" className="terms-header__back">
                        <ArrowLeft className="terms-header__back-icon" />
                        Back to Home
                    </Link>

                    <div className="terms-header__info">
                        <div className="terms-header__icon-wrapper">
                            <FileText className="terms-header__icon" />
                        </div>
                        <div>
                            <h1 className="terms-header__title">Terms and Conditions</h1>
                            <p className="terms-header__date">Last updated: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="terms-content">
                <div className="terms-content__container">
                    <div className="terms-content__wrapper">
                        {/* Introduction */}
                        <div className="terms-card terms-card--highlight">
                            <h2 className="terms-card__title">Terms and Conditions</h2>
                            <p className="terms-card__text">
                                Welcome to Get Fit. These Terms and Conditions govern your use of our website and the
                                purchase and sale of products and services from our platform. By accessing and using our
                                website, you agree to comply with these terms. Please read them carefully before proceeding
                                with any transactions.
                            </p>
                        </div>

                        {/* Use of the Website */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Use of the Website</h2>
                            <ul className="terms-card__list terms-card__list--alpha">
                                <li className="terms-card__list-item">
                                    You must be at least 18 years old to use our website or make purchases.
                                </li>
                                <li className="terms-card__list-item">
                                    You are responsible for maintaining the confidentiality of your account information,
                                    including your username and password.
                                </li>
                                <li className="terms-card__list-item">
                                    You agree to provide accurate and current information during the registration and
                                    checkout process.
                                </li>
                                <li className="terms-card__list-item">
                                    You may not use our website for any unlawful or unauthorized purposes.
                                </li>
                            </ul>
                        </div>

                        {/* Product Information and Pricing */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Product Information and Pricing</h2>
                            <ul className="terms-card__list terms-card__list--alpha">
                                <li className="terms-card__list-item">
                                    We strive to provide accurate product descriptions, images, and pricing information.
                                    However, we do not guarantee the accuracy or completeness of such information.
                                </li>
                                <li className="terms-card__list-item">
                                    Prices are subject to change without notice. Any promotions or discounts are valid
                                    for a limited time and may be subject to additional terms and conditions.
                                </li>
                            </ul>
                        </div>

                        {/* Orders and Payments */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Orders and Payments</h2>
                            <ul className="terms-card__list terms-card__list--alpha">
                                <li className="terms-card__list-item">
                                    By placing an order on our website, you are making an offer to purchase the selected
                                    products or services.
                                </li>
                                <li className="terms-card__list-item">
                                    We reserve the right to refuse or cancel any order for any reason, including but not
                                    limited to product availability, errors in pricing or product information, or suspected
                                    fraudulent activity.
                                </li>
                                <li className="terms-card__list-item">
                                    You agree to provide valid and up-to-date payment information and authorize us to charge
                                    the total order amount, including applicable taxes and fees, to your chosen payment method.
                                </li>
                                <li className="terms-card__list-item">
                                    We use trusted third-party payment processors to handle your payment information securely.
                                    We do not store or have access to your full payment details.
                                </li>
                            </ul>
                        </div>

                        {/* Shipping and Delivery */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Shipping and Delivery</h2>
                            <ul className="terms-card__list terms-card__list--alpha">
                                <li className="terms-card__list-item">
                                    We will make reasonable efforts to ensure timely shipping and delivery of your orders.
                                </li>
                                <li className="terms-card__list-item">
                                    Shipping and delivery times provided are estimates and may vary based on your location
                                    and other factors.
                                </li>
                            </ul>
                        </div>

                        {/* Returns and Refunds */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Returns and Refunds</h2>
                            <p className="terms-card__text">
                                Our Returns and Refund Policy governs the process and conditions for returning products and
                                seeking refunds. Please refer to our <Link to="/refunds" className="terms-card__link">Refund Policy</Link> page
                                for more information.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Intellectual Property</h2>
                            <ul className="terms-card__list terms-card__list--alpha">
                                <li className="terms-card__list-item">
                                    All content and materials on our website, including but not limited to text, images,
                                    logos, and graphics, are protected by intellectual property rights and are the property
                                    of Get Fit or its licensors.
                                </li>
                                <li className="terms-card__list-item">
                                    You may not use, reproduce, distribute, or modify any content from our website without
                                    our prior written consent.
                                </li>
                            </ul>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Limitation of Liability</h2>
                            <ul className="terms-card__list terms-card__list--alpha">
                                <li className="terms-card__list-item">
                                    In no event shall Get Fit, its directors, employees, or affiliates be liable for any
                                    direct, indirect, incidental, special, or consequential damages arising out of or in
                                    connection with your use of our website or the purchase and use of our products and services.
                                </li>
                                <li className="terms-card__list-item">
                                    We make no warranties or representations, express or implied, regarding the quality,
                                    accuracy, or suitability of the products and services offered on our website.
                                </li>
                            </ul>
                        </div>

                        {/* Amendments and Termination */}
                        <div className="terms-card">
                            <h2 className="terms-card__title">Amendments and Termination</h2>
                            <p className="terms-card__text">
                                We reserve the right to modify, update, or terminate these Terms and Conditions at any time
                                without prior notice. It is your responsibility to review these terms periodically for any changes.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="terms-card terms-card--highlight">
                            <h2 className="terms-card__title">Contact Us</h2>
                            <p className="terms-card__text">
                                If you have any questions or concerns regarding these Terms and Conditions, please contact us
                                using the information provided below.
                            </p>
                            <div className="terms-card__contact">
                                <p><span className="terms-card__contact-label">Get Fit</span></p>
                                <p>Address: {businessInfo.address}</p>
                                <p>Phone: <a href={`tel:${businessInfo.phone}`} className="terms-card__contact-link">{businessInfo.phone}</a></p>
                                <p>Email: <a href={`mailto:${businessInfo.email}`} className="terms-card__contact-link">{businessInfo.email}</a></p>
                            </div>
                        </div>

                        {/* Disclaimer Note */}
                        <div className="terms-card terms-card--note">
                            <p className="terms-card__text terms-card__text--note">
                                <em>(Note: These Terms and Conditions are provided as a general guideline.)</em>
                            </p>
                        </div>

                        {/* Back to top */}
                        <div className="terms-back-top">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="terms-back-top__button"
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

export default TermsConditions;
