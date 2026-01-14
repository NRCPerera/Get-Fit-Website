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

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-b from-[#121212] to-[#0a0a0a] pt-20 pb-8">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img
                                src={logoImage}
                                alt="Get Fit Logo"
                                className="w-12 h-12 object-contain rounded-lg"
                            />
                            <span className="text-2xl font-bold">
                                <span className="text-white">Get</span>
                                <span className="gradient-text">Fit</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {businessInfo.description}
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={businessInfo.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-300"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={businessInfo.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-300"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href={businessInfo.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-300"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/60 hover:text-[#00D4FF] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-white/60 hover:text-[#00D4FF] transition-colors duration-300 text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Hours</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 text-[#00D4FF] mb-1">
                                    <Dumbbell className="w-4 h-4" />
                                    <span className="text-sm font-medium">The Gym</span>
                                </div>
                                <p className="text-white/60 text-sm">{businessInfo.hours.gym}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#C8A882] mb-1">
                                    <Coffee className="w-4 h-4" />
                                    <span className="text-sm font-medium">Coffee Bar</span>
                                </div>
                                <p className="text-white/60 text-sm">{businessInfo.hours.coffeeBar}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">{businessInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="text-white/60 hover:text-[#00D4FF] transition-colors duration-300 text-sm"
                                >
                                    {businessInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                                <a
                                    href={`mailto:${businessInfo.email}`}
                                    className="text-white/60 hover:text-[#00D4FF] transition-colors duration-300 text-sm"
                                >
                                    {businessInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Get Fit. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-300"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
