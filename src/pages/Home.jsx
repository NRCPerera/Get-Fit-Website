import { Link } from 'react-router-dom';
import {
    Dumbbell,
    Coffee,
    Users,
    Apple,
    Heart,
    Timer,
    ArrowRight,
    ChevronRight,
    Star,
    Zap
} from 'lucide-react';
import { features, testimonials, businessInfo } from '../data/siteData';
import './Home.css';

const iconMap = {
    Dumbbell,
    Coffee,
    Users,
    Apple,
    Heart,
    Timer
};

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                {/* Background */}
                <div className="hero__background">
                    {/* Left side - Gym */}
                    <div className="hero__bg-left">
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop"
                            alt="Modern gym with equipment"
                            className="hero__bg-image"
                        />
                        <div className="hero__bg-overlay-left" />
                    </div>

                    {/* Right side - Coffee (visible on lg+) */}
                    <div className="hero__bg-right">
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop"
                            alt="Cozy coffee bar atmosphere"
                            className="hero__bg-image"
                        />
                        <div className="hero__bg-overlay-right" />
                    </div>

                    {/* Center gradient overlay */}
                    <div className="hero__bg-overlay-center" />
                </div>

                {/* Floating elements */}
                <div className="hero__float hero__float--blue" />
                <div className="hero__float hero__float--green" />

                {/* Content */}
                <div className="hero__container">
                    <div className="hero__content">
                        {/* Badge */}
                        <div className="hero__badge">
                            <Zap className="hero__badge-icon" />
                            <span className="hero__badge-text">Where Fitness Meets Flavor</span>
                        </div>

                        {/* Headline */}
                        <h1 className="hero__headline">
                            <span className="hero__headline-white">Fuel Your </span>
                            <span className="hero__headline-gradient">Workout.</span>
                            <br />
                            <span className="hero__headline-white">Savor the </span>
                            <span className="hero__headline-latte">Flavor.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="hero__subheadline">
                            Experience the perfect blend of high-energy fitness and artisan coffee culture.
                            Your new favorite destination for strength, stamina, and specialty brews.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero__cta-group">
                            <Link to="/gym" className="hero__cta-primary">
                                <Dumbbell className="hero__cta-icon" />
                                Explore The Gym
                                <ArrowRight className="hero__cta-arrow" />
                            </Link>
                            <Link to="/coffee" className="hero__cta-secondary">
                                <Coffee className="hero__cta-icon" />
                                View Menu
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="hero__stats">
                            <div>
                                <div className="hero__stat-value hero__stat-value--gradient">500+</div>
                                <div className="hero__stat-label">Active Members</div>
                            </div>
                            <div>
                                <div className="hero__stat-value hero__stat-value--latte">15+</div>
                                <div className="hero__stat-label">Coffee Varieties</div>
                            </div>
                            <div>
                                <div className="hero__stat-value hero__stat-value--gradient">4.9</div>
                                <div className="hero__stat-label">Star Rating</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="hero__scroll">
                    <span className="hero__scroll-text">Scroll</span>
                    <div className="hero__scroll-indicator">
                        <div className="hero__scroll-dot" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="features__container">
                    {/* Section Header */}
                    <div className="features__header">
                        <span className="features__badge">Why Choose Us</span>
                        <h2 className="features__title">
                            Everything You Need in <span className="features__title-gradient">One Place</span>
                        </h2>
                        <p className="features__subtitle">
                            From high-intensity workouts to handcrafted lattes, we've got your entire wellness routine covered.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="features__grid">
                        {features.map((feature) => {
                            const IconComponent = iconMap[feature.icon];
                            return (
                                <div key={feature.id} className="feature-card">
                                    <div className={`feature-card__icon feature-card__icon--${feature.category}`}>
                                        <IconComponent className="feature-card__icon-svg" />
                                    </div>
                                    <h3 className="feature-card__title">{feature.title}</h3>
                                    <p className="feature-card__description">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Split Visual Section */}
            <section className="split-visual">
                <div className="split-visual__grid">
                    {/* Gym Side */}
                    <div className="split-visual__side">
                        <div className="split-visual__image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop"
                                alt="Gym equipment and weights"
                                className="split-visual__image"
                            />
                            <div className="split-visual__overlay" />
                            <div className="split-visual__overlay--gym" />
                        </div>
                        <div className="split-visual__content">
                            <div className="split-visual__label split-visual__label--gym">
                                <Dumbbell className="split-visual__label-icon" />
                                <span className="split-visual__label-text">The Gym</span>
                            </div>
                            <h3 className="split-visual__title">Train Like a Champion</h3>
                            <p className="split-visual__text">
                                State-of-the-art equipment, expert trainers, and an atmosphere that pushes you to be your best.
                            </p>
                            <Link to="/gym" className="split-visual__link split-visual__link--gym">
                                Explore Classes & Plans
                                <ChevronRight className="split-visual__link-icon" />
                            </Link>
                        </div>
                    </div>

                    {/* Coffee Side */}
                    <div className="split-visual__side">
                        <div className="split-visual__image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop"
                                alt="Artisan coffee preparation"
                                className="split-visual__image"
                            />
                            <div className="split-visual__overlay" />
                            <div className="split-visual__overlay--coffee" />
                        </div>
                        <div className="split-visual__content">
                            <div className="split-visual__label split-visual__label--coffee">
                                <Coffee className="split-visual__label-icon" />
                                <span className="split-visual__label-text">Coffee Bar</span>
                            </div>
                            <h3 className="split-visual__title">Brewed to Perfection</h3>
                            <p className="split-visual__text">
                                Artisan espresso, protein-packed shakes, and healthy bites. Open to everyone, not just members.
                            </p>
                            <Link to="/coffee" className="split-visual__link split-visual__link--coffee">
                                View Full Menu
                                <ChevronRight className="split-visual__link-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="testimonials__container">
                    {/* Section Header */}
                    <div className="testimonials__header">
                        <span className="testimonials__badge">Testimonials</span>
                        <h2 className="testimonials__title">
                            What Our <span className="testimonials__title-gradient">Community</span> Says
                        </h2>
                        <p className="testimonials__subtitle">
                            Real stories from real people who've made Get Fit their go-to destination.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="testimonials__grid">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card">
                                {/* Stars */}
                                <div className="testimonial-card__stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="testimonial-card__star" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="testimonial-card__content">"{testimonial.content}"</p>

                                {/* Author */}
                                <div className="testimonial-card__author">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="testimonial-card__avatar"
                                    />
                                    <div className="testimonial-card__info">
                                        <div className="testimonial-card__name">{testimonial.name}</div>
                                        <div className="testimonial-card__role">{testimonial.role}</div>
                                    </div>
                                    <span className={`testimonial-card__badge testimonial-card__badge--${testimonial.category}`}>
                                        {testimonial.category === 'gym' ? 'Gym Member' : testimonial.category === 'coffee' ? 'Coffee Lover' : 'Both'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                {/* Background */}
                <div className="cta__background">
                    <img
                        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1600&h=800&fit=crop"
                        alt="Gym atmosphere"
                        className="cta__bg-image"
                    />
                    <div className="cta__bg-overlay" />
                </div>

                {/* Glow effects */}
                <div className="cta__glow cta__glow--blue" />
                <div className="cta__glow cta__glow--green" />

                <div className="cta__container">
                    <div className="cta__content">
                        <h2 className="cta__title">
                            Ready to Start Your <span className="cta__title-gradient">Transformation?</span>
                        </h2>
                        <p className="cta__text">
                            Join hundreds of members who've already discovered the perfect blend of fitness and flavor. Your journey starts here.
                        </p>
                        <div className="cta__buttons">
                            <Link to="/contact" className="cta__button-primary">
                                Join Now — Start Today
                            </Link>
                            <Link to="/gym" className="cta__button-secondary">
                                View Membership Plans
                            </Link>
                        </div>

                        {/* Contact info */}
                        <div className="cta__contact">
                            <span>📍 {businessInfo.address}</span>
                            <span className="cta__contact-divider">•</span>
                            <span>📞 {businessInfo.phone}</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
