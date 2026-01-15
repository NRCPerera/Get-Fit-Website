import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/siteData';
import logoImage from '../assets/icon.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="navbar__container">
                <div className="navbar__content">
                    {/* Logo */}
                    <Link to="/" className="navbar__logo" aria-label="Get Fit Home">
                        <img
                            src={logoImage}
                            alt="Get Fit Logo"
                            className="navbar__logo-image"
                        />
                        <span className="navbar__logo-text">
                            <span className="navbar__logo-text--white">Get</span>
                            <span className="navbar__logo-text--gradient">Fit</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar__nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <span className="navbar__link-indicator" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="navbar__actions">
                        <Link to="/contact" className="navbar__cta">
                            Join Now
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="navbar__toggle"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <X className="navbar__toggle-icon" />
                            ) : (
                                <Menu className="navbar__toggle-icon" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : 'navbar__mobile--closed'}`}>
                <div className="navbar__mobile-content">
                    <div className="navbar__mobile-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : 'navbar__mobile-link--inactive'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="navbar__mobile-cta">
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
