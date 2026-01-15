import { Link } from 'react-router-dom';
import {
    Dumbbell,
    Coffee,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Twitter,
    ArrowUp
} from 'lucide-react';
import { businessInfo, navLinks } from '../data/siteData';
import logoImage from '../assets/icon.png';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            {/* Decorative top border */}
            <div className="footer__border" />

            <div className="footer__container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img
                                src={logoImage}
                                alt="Get Fit Logo"
                                className="footer__logo-image"
                            />
                            <span className="footer__logo-text">
                                <span className="footer__logo-text--white">Get</span>
                                <span className="footer__logo-text--gradient">Fit</span>
                            </span>
                        </Link>
                        <p className="footer__description">
                            {businessInfo.description}
                        </p>
                        <div className="footer__socials">
                            <a
                                href={businessInfo.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="footer__social-icon" />
                            </a>
                            <a
                                href={businessInfo.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="footer__social-icon" />
                            </a>
                            <a
                                href={businessInfo.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter className="footer__social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer__section-title">Quick Links</h4>
                        <ul className="footer__links">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/privacy" className="footer__link">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="footer__section-title">Hours</h4>
                        <div className="footer__hours">
                            <div className="footer__hours-item">
                                <div className="footer__hours-label footer__hours-label--gym">
                                    <Dumbbell className="footer__hours-icon" />
                                    <span className="footer__hours-name">The Gym</span>
                                </div>
                                <p className="footer__hours-time">{businessInfo.hours.gym}</p>
                            </div>
                            <div className="footer__hours-item">
                                <div className="footer__hours-label footer__hours-label--coffee">
                                    <Coffee className="footer__hours-icon" />
                                    <span className="footer__hours-name">Coffee Bar</span>
                                </div>
                                <p className="footer__hours-time">{businessInfo.hours.coffeeBar}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="footer__section-title">Contact</h4>
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">
                                <MapPin className="footer__contact-icon" />
                                <span className="footer__contact-text">{businessInfo.address}</span>
                            </li>
                            <li className="footer__contact-item footer__contact-item--center">
                                <Phone className="footer__contact-icon" />
                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="footer__contact-link"
                                >
                                    {businessInfo.phone}
                                </a>
                            </li>
                            <li className="footer__contact-item footer__contact-item--center">
                                <Mail className="footer__contact-icon" />
                                <a
                                    href={`mailto:${businessInfo.email}`}
                                    className="footer__contact-link"
                                >
                                    {businessInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} Get Fit. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="footer__scroll-top"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="footer__scroll-top-icon" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
