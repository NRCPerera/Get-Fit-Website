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
                            <h2 className="refund-card__title">Cancellations</h2>
                            <p className="refund-card__text">
                                We accept cancellation requests within 7 days from the date of purchase, provided that the 
                                membership, service, or package has not yet been activated or used.
                            </p>
                        </div>

                        {/* Refunds */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Refunds</h2>
                            <p className="refund-card__text">
                                Once we receive your cancellation request and verify the status of your service
                                usage, we will notify you of the approval or rejection of your refund.
                                If your refund is approved, the refund will be strictly issued to the payment-initiated
                                media itself (the original payment method used during the purchase). We are unable to
                                process refunds to third-party accounts or via cash.
                            </p>
                        </div>

                        {/* Non-Returnable Items */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Non-Refundable Services</h2>
                            <p className="refund-card__text">
                                Certain services are non-refundable once the service period has commenced or the product has been accessed. These include:
                            </p>
                            <ul className="refund-card__list">
                                <li className="refund-card__list-item">Gym membership fees</li>
                                <li className="refund-card__list-item">Personal training sessions</li>
                                <li className="refund-card__list-item">Downloadable software products or digital guides once downloaded.</li>
                            </ul>
                        </div>

                        {/* Damaged or Defective Items */}
                        <div className="refund-card">
                            <h2 className="refund-card__title">Processing Time</h2>
                            <p className="refund-card__text">
                                Refunds will be processed within 5-7 business days after approval. Please
                                note that it may take additional time for the refund to appear in your bank account or card
                                statement, depending on your payment provider’s processing times.
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
