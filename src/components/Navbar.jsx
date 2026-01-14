import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Coffee } from 'lucide-react';
import { navLinks } from '../data/siteData';

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#121212]/95 backdrop-blur-lg shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 group"
                        aria-label="Get Fit Home"
                    >
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#39FF14] group-hover:shadow-lg group-hover:shadow-[#00D4FF]/30 transition-all duration-300">
                            <Dumbbell className="w-6 h-6 text-[#121212]" />
                            <Coffee className="w-4 h-4 text-[#121212] absolute bottom-1 right-1" />
                        </div>
                        <span className="text-2xl font-bold">
                            <span className="text-white">Get</span>
                            <span className="gradient-text">Fit</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${location.pathname === link.path
                                        ? 'text-[#00D4FF]'
                                        : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#39FF14] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="hidden sm:inline-flex btn-primary text-sm px-6 py-3"
                        >
                            Join Now
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-white hover:text-[#00D4FF] transition-colors"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
                    }`}
            >
                <div className="container-custom py-4 bg-[#121212]/98 backdrop-blur-lg">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${location.pathname === link.path
                                        ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="btn-primary text-center mt-2"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
