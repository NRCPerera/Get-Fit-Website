import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { businessInfo } from '../data/siteData';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const lastUpdated = "January 1, 2026";

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
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Introduction</h2>
                            <p className="privacy-card__text">
                                Get Fit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                                explains how we collect, use, disclose, and safeguard your information when you visit our
                                fitness center and coffee bar, use our website, or interact with our services. Please read
                                this privacy policy carefully. By using our services, you consent to the data practices
                                described in this statement.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Information We Collect</h2>

                            <h3 className="privacy-card__subtitle">Personal Information</h3>
                            <p className="privacy-card__text">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="privacy-card__list">
                                <li>Register for a gym membership</li>
                                <li>Sign up for classes or personal training sessions</li>
                                <li>Fill out a contact form on our website</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Participate in promotions or surveys</li>
                            </ul>
                            <p className="privacy-card__text">
                                This information may include your name, email address, phone number, date of birth,
                                emergency contact information, payment details, and health-related information necessary
                                for safe exercise participation.
                            </p>

                            <h3 className="privacy-card__subtitle">Automatically Collected Information</h3>
                            <p className="privacy-card__text">
                                When you access our website, we may automatically collect certain information about your
                                device, including information about your web browser, IP address, time zone, and some of
                                the cookies installed on your device. We refer to this automatically-collected information
                                as "Device Information." We collect Device Information using cookies, log files, web beacons,
                                tags, and pixels.
                            </p>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">How We Use Your Information</h2>
                            <p className="privacy-card__text">
                                We use the information we collect to:
                            </p>
                            <ul className="privacy-card__list">
                                <li>Process your membership registration and manage your account</li>
                                <li>Facilitate class bookings and personal training sessions</li>
                                <li>Process payments and send transaction receipts</li>
                                <li>Communicate with you about your membership, classes, and promotions</li>
                                <li>Improve our facilities, services, and website experience</li>
                                <li>Ensure the safety and security of our premises and members</li>
                                <li>Comply with legal obligations</li>
                                <li>Respond to your inquiries and provide customer support</li>
                            </ul>
                        </div>

                        {/* Information Sharing */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Information Sharing and Disclosure</h2>
                            <p className="privacy-card__text">
                                We do not sell, trade, or rent your personal information to third parties. We may share
                                your information in the following circumstances:
                            </p>
                            <ul className="privacy-card__list">
                                <li><strong>Service Providers:</strong> We may share information with third-party
                                    vendors who perform services on our behalf, such as payment processing, email delivery,
                                    and website hosting.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required
                                    by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                                    of assets, your information may be transferred as part of that transaction.</li>
                                <li><strong>Emergency Contacts:</strong> In case of a medical emergency, we may contact
                                    your designated emergency contact.</li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Data Security</h2>
                            <p className="privacy-card__text">
                                We implement appropriate technical and organizational measures to protect your personal
                                information against unauthorized access, alteration, disclosure, or destruction. These
                                measures include secure socket layer (SSL) encryption, secure servers, firewalls, and
                                password-protected databases. However, no method of transmission over the Internet or
                                electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Cookies and Tracking Technologies</h2>
                            <p className="privacy-card__text">
                                Our website uses cookies and similar tracking technologies to enhance your experience.
                                Cookies are small data files stored on your device. We use:
                            </p>
                            <ul className="privacy-card__list">
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                            </ul>
                            <p className="privacy-card__text">
                                You can control cookies through your browser settings. Please note that disabling certain
                                cookies may affect the functionality of our website.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Your Rights</h2>
                            <p className="privacy-card__text">
                                Depending on your location, you may have certain rights regarding your personal information:
                            </p>
                            <ul className="privacy-card__list">
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
                                <li><strong>Data Portability:</strong> Request your data in a machine-readable format.</li>
                            </ul>
                            <p className="privacy-card__text">
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Children's Privacy</h2>
                            <p className="privacy-card__text">
                                Our services are not intended for individuals under the age of 16 without parental consent.
                                We do not knowingly collect personal information from children under 16. If you are a parent
                                or guardian and believe your child has provided us with personal information without your
                                consent, please contact us, and we will take steps to delete such information.
                            </p>
                        </div>

                        {/* Health Information */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Health and Fitness Information</h2>
                            <p className="privacy-card__text">
                                As a fitness facility, we may collect health-related information to ensure your safety and
                                provide appropriate services. This information may include medical conditions, physical
                                limitations, or fitness goals. We treat this information with the highest level of
                                confidentiality and use it solely for the purpose of providing safe and effective fitness
                                services. We do not share health information with third parties except as required by law or
                                in case of emergency.
                            </p>
                        </div>

                        {/* Changes to Policy */}
                        <div className="privacy-card">
                            <h2 className="privacy-card__title">Changes to This Privacy Policy</h2>
                            <p className="privacy-card__text">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or
                                for other operational, legal, or regulatory reasons. We will notify you of any material
                                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                                We encourage you to review this Privacy Policy periodically.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="privacy-card privacy-card--highlight">
                            <h2 className="privacy-card__title">Contact Us</h2>
                            <p className="privacy-card__text">
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="privacy-card__contact">
                                <p><span className="privacy-card__contact-label">Get Fit</span></p>
                                <p>Address: {businessInfo.address}</p>
                                <p>Phone: <a href={`tel:${businessInfo.phone}`} className="privacy-card__contact-link">{businessInfo.phone}</a></p>
                                <p>Email: <a href={`mailto:${businessInfo.email}`} className="privacy-card__contact-link">{businessInfo.email}</a></p>
                            </div>
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
