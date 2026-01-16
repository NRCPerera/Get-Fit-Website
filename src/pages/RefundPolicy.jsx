import { Link } from 'react-router-dom';
import { RotateCcw, ArrowLeft } from 'lucide-react';
import { businessInfo } from '../data/siteData';
import './RefundPolicy.css';

const RefundPolicy = () => {
    const lastUpdated = "January 16, 2026";

    return (
        <main className="refund">
            {/* Header */}
            <section className="refund-header">
                <div className="refund-header__container">
                    <Link to="/" className="refund-header__back">
                        <ArrowLeft className="refund-header__back-icon" />
                        Back to Home
                    </Link>

                    <div className="refund-header__info">
                        <div className="refund-header__icon-wrapper">
                            <RotateCcw className="refund-header__icon" />
                        </div>
                        <div>
                            <h1 className="refund-header__title">Refund Policy</h1>
                            <p className="refund-header__date">Last updated: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="refund-content">
                <div className="refund-content__container">
                    <div className="refund-content__wrapper">
                        {/* Introduction */}
                        <div className="refund-card refund-card--highlight">
                            <h2 className="refund-card__title">Refund Policy</h2>
                            <p className="refund-card__text">
                                Thank you for choosing Get Fit. We value your satisfaction and strive to provide you with
                                the best experience possible. If, for any reason, you are not completely satisfied with
                                your purchase, we are here to help.
                            </p>
                        </div>

                        {/* Returns */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Returns</h2>
                            <p className="refund-card__text">
                                We accept returns within 7 days from the date of purchase. To be eligible for a return,
                                your item must be unused and in the same condition that you received it. It must also be
                                in the original packaging.
                            </p>
                        </div>

                        {/* Refunds */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Refunds</h2>
                            <p className="refund-card__text">
                                Once we receive your return and inspect the item, we will notify you of the status of your
                                refund. If your return is approved, we will initiate a refund to your original method of
                                payment. Please note that the refund amount will exclude any shipping charges incurred
                                during the initial purchase.
                            </p>
                        </div>

                        {/* Exchanges */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Exchanges</h2>
                            <p className="refund-card__text">
                                If you would like to exchange your item for a different size, color, or style, please contact
                                our customer support team within 7 days of receiving your order. We will provide you with
                                further instructions on how to proceed with the exchange.
                            </p>
                        </div>

                        {/* Non-Returnable Items */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Non-Returnable Items</h2>
                            <p className="refund-card__text">
                                Certain items are non-returnable and non-refundable. These include:
                            </p>
                            <ul className="refund-card__list">
                                <li className="refund-card__list-item">Gift cards</li>
                                <li className="refund-card__list-item">Downloadable software products</li>
                                <li className="refund-card__list-item">Personalized or custom-made items</li>
                                <li className="refund-card__list-item">Perishable goods (food and beverages)</li>
                                <li className="refund-card__list-item">Gym membership fees (after use)</li>
                                <li className="refund-card__list-item">Personal training sessions (after completion)</li>
                            </ul>
                        </div>

                        {/* Damaged or Defective Items */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Damaged or Defective Items</h2>
                            <p className="refund-card__text">
                                In the unfortunate event that your item arrives damaged or defective, please contact us
                                immediately. We will arrange for a replacement or issue a refund, depending on your
                                preference and product availability.
                            </p>
                        </div>

                        {/* Return Shipping */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Return Shipping</h2>
                            <p className="refund-card__text">
                                You will be responsible for paying the shipping costs for returning your item unless the
                                return is due to our error (e.g., wrong item shipped, defective product). In such cases,
                                we will provide you with a prepaid shipping label.
                            </p>
                        </div>

                        {/* Processing Time */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Processing Time</h2>
                            <p className="refund-card__text">
                                Refunds and exchanges will be processed within 5-7 business days after we receive your
                                returned item. Please note that it may take additional time for the refund to appear in
                                your account, depending on your payment provider.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="refund-card refund-card--highlight">
                            <h2 className="refund-card__title">Contact Us</h2>
                            <p className="refund-card__text">
                                If you have any questions or concerns regarding our refund policy, please contact our
                                customer support team. We are here to assist you and ensure your experience with us is
                                enjoyable and hassle-free.
                            </p>
                            <div className="refund-card__contact">
                                <p><span className="refund-card__contact-label">Get Fit</span></p>
                                <p>Address: {businessInfo.address}</p>
                                <p>Phone: <a href={`tel:${businessInfo.phone}`} className="refund-card__contact-link">{businessInfo.phone}</a></p>
                                <p>Email: <a href={`mailto:${businessInfo.email}`} className="refund-card__contact-link">{businessInfo.email}</a></p>
                            </div>
                        </div>

                        {/* Disclaimer Note */}
                        <div className="refund-card refund-card--note">
                            <p className="refund-card__text refund-card__text--note">
                                <em>(Note: This Refund Policy is provided as a general guideline.)</em>
                            </p>
                        </div>

                        {/* Back to top */}
                        <div className="refund-back-top">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="refund-back-top__button"
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

export default RefundPolicy;
