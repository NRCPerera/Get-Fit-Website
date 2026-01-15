import { Link } from 'react-router-dom';
import {
    Dumbbell,
    Check,
    Clock,
    Users,
    Zap,
    ArrowRight,
    Calendar
} from 'lucide-react';
import { membershipPlans, fitnessClasses } from '../data/siteData';
import './Gym.css';

const Gym = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="gym-hero">
                {/* Background */}
                <div className="gym-hero__background">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop"
                        alt="Get Fit Gym interior"
                        className="gym-hero__image"
                    />
                    <div className="gym-hero__overlay" />
                </div>

                {/* Content */}
                <div className="gym-hero__container">
                    <div className="gym-hero__content">
                        <div className="gym-hero__label">
                            <Dumbbell className="gym-hero__label-icon" />
                            <span className="gym-hero__label-text">The Gym</span>
                        </div>
                        <h1 className="gym-hero__title">
                            Train Harder, <span className="gym-hero__title-gradient">Get Stronger</span>
                        </h1>
                        <p className="gym-hero__description">
                            State-of-the-art equipment, expert trainers, and an energizing atmosphere.
                            Everything you need to crush your fitness goals.
                        </p>
                        <div className="gym-hero__buttons">
                            <a href="#membership" className="gym-hero__cta-primary">
                                View Membership Plans
                                <ArrowRight className="gym-hero__cta-icon" />
                            </a>
                            <a href="#classes" className="gym-hero__cta-secondary">
                                Explore Classes
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="gym-stats">
                <div className="gym-stats__container">
                    <div className="gym-stats__card">
                        <div className="gym-stats__grid">
                            <div className="gym-stats__item">
                                <div className="gym-stats__value">50+</div>
                                <div className="gym-stats__label">Modern Equipment</div>
                            </div>
                            <div className="gym-stats__item">
                                <div className="gym-stats__value">6</div>
                                <div className="gym-stats__label">Expert Trainers</div>
                            </div>
                            <div className="gym-stats__item">
                                <div className="gym-stats__value">18</div>
                                <div className="gym-stats__label">Hours Open Daily</div>
                            </div>
                            <div className="gym-stats__item">
                                <div className="gym-stats__value">4</div>
                                <div className="gym-stats__label">Training Zones</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Plans */}
            <section id="membership" className="membership">
                <div className="membership__container">
                    {/* Section Header */}
                    <div className="membership__header">
                        <span className="membership__badge">Membership</span>
                        <h2 className="membership__title">
                            Choose Your <span className="membership__title-gradient">Plan</span>
                        </h2>
                        <p className="membership__subtitle">
                            Flexible options to fit your lifestyle and fitness goals. All plans include access to our premium facilities.
                        </p>
                    </div>

                    {/* Plans Grid */}
                    <div className="membership__grid">
                        {membershipPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`plan-card ${plan.popular ? 'plan-card--popular' : 'plan-card--default'}`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="plan-card__popular-badge">Most Popular</div>
                                )}

                                {/* Savings Badge */}
                                {plan.savings && (
                                    <div className="plan-card__savings-badge">{plan.savings}</div>
                                )}

                                {/* Plan Header */}
                                <div className="plan-card__header">
                                    <h3 className="plan-card__name">{plan.name}</h3>
                                    <p className="plan-card__description">{plan.description}</p>
                                    <div className="plan-card__price">
                                        <span className="plan-card__currency">{plan.currency}</span>
                                        <span className="plan-card__amount">{plan.price}</span>
                                        <span className="plan-card__period">/{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="plan-card__features">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="plan-card__feature">
                                            <Check
                                                className={`plan-card__feature-icon ${plan.popular ? 'plan-card__feature-icon--primary' : 'plan-card__feature-icon--accent'}`}
                                            />
                                            <span className="plan-card__feature-text">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    to="/contact"
                                    className={`plan-card__cta ${plan.popular ? 'plan-card__cta--primary' : 'plan-card__cta--secondary'}`}
                                >
                                    Get Started
                                    <ArrowRight className="plan-card__cta-icon" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Classes Section */}
            <section id="classes" className="classes">
                <div className="classes__container">
                    {/* Section Header */}
                    <div className="classes__header">
                        <span className="classes__badge">Group Classes</span>
                        <h2 className="classes__title">
                            Train With the <span className="classes__title-gradient">Best</span>
                        </h2>
                        <p className="classes__subtitle">
                            Join our dynamic group classes led by certified instructors. All classes are included with Monthly and Annual memberships.
                        </p>
                    </div>

                    {/* Classes Grid */}
                    <div className="classes__grid">
                        {fitnessClasses.map((cls) => (
                            <div key={cls.id} className="class-card">
                                <div className="class-card__layout">
                                    {/* Image */}
                                    <div className="class-card__image-wrapper">
                                        <img
                                            src={cls.image}
                                            alt={cls.name}
                                            className="class-card__image"
                                        />
                                        <div className="class-card__overlay" />
                                        <div className="class-card__level">{cls.level}</div>
                                    </div>

                                    {/* Content */}
                                    <div className="class-card__content">
                                        <h3 className="class-card__name">{cls.name}</h3>
                                        <p className="class-card__description">{cls.description}</p>

                                        <div className="class-card__meta">
                                            <div className="class-card__meta-item">
                                                <Users className="class-card__meta-icon" />
                                                <span className="class-card__meta-text">{cls.instructor}</span>
                                            </div>
                                            <div className="class-card__meta-item">
                                                <Clock className="class-card__meta-icon" />
                                                <span className="class-card__meta-text">{cls.duration}</span>
                                            </div>
                                        </div>

                                        <div className="class-card__footer">
                                            <div className="class-card__schedule">
                                                <Calendar className="class-card__schedule-icon" />
                                                <span className="class-card__schedule-text">{cls.schedule}</span>
                                            </div>
                                            <div className="class-card__spots">{cls.spots} spots</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="classes__cta">
                        <p className="classes__cta-text">
                            Can't find a class that fits your schedule?
                        </p>
                        <Link to="/contact" className="classes__cta-button">
                            Request a Custom Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="facilities">
                <div className="facilities__container">
                    <div className="facilities__grid">
                        {/* Content */}
                        <div>
                            <span className="facilities__badge">Our Facilities</span>
                            <h2 className="facilities__title">
                                Premium Equipment for <span className="facilities__title-gradient">Premium Results</span>
                            </h2>
                            <p className="facilities__description">
                                Our gym features the latest equipment from leading fitness brands, maintained to the highest standards for your safety and performance.
                            </p>

                            <div className="facilities__list">
                                {[
                                    { title: 'Cardio Zone', desc: 'Treadmills, ellipticals, bikes with integrated entertainment' },
                                    { title: 'Free Weights Area', desc: 'Dumbbells up to 50kg, barbells, and squat racks' },
                                    { title: 'Functional Training', desc: 'Kettlebells, battle ropes, TRX, and plyometric boxes' },
                                    { title: 'Stretching & Recovery', desc: 'Foam rollers, yoga mats, and massage chairs' }
                                ].map((item, index) => (
                                    <div key={index} className="facilities__item">
                                        <div className="facilities__item-icon-wrapper">
                                            <Zap className="facilities__item-icon" />
                                        </div>
                                        <div>
                                            <h4 className="facilities__item-title">{item.title}</h4>
                                            <p className="facilities__item-text">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="facilities__images">
                            <div className="facilities__image-col">
                                <div className="facilities__image-wrapper facilities__image-wrapper--portrait">
                                    <img
                                        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=500&fit=crop"
                                        alt="Gym cardio zone"
                                        className="facilities__image"
                                    />
                                </div>
                                <div className="facilities__image-wrapper facilities__image-wrapper--square">
                                    <img
                                        src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop"
                                        alt="Free weights"
                                        className="facilities__image"
                                    />
                                </div>
                            </div>
                            <div className="facilities__image-col facilities__image-col--offset">
                                <div className="facilities__image-wrapper facilities__image-wrapper--square">
                                    <img
                                        src="https://images.unsplash.com/photo-1598971639058-60b5c63f1f17?w=400&h=400&fit=crop"
                                        alt="Training area"
                                        className="facilities__image"
                                    />
                                </div>
                                <div className="facilities__image-wrapper facilities__image-wrapper--portrait">
                                    <img
                                        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=500&fit=crop"
                                        alt="Gym equipment"
                                        className="facilities__image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="gym-cta">
                <div className="gym-cta__container">
                    <h2 className="gym-cta__title">Ready to Transform Your Body?</h2>
                    <p className="gym-cta__text">
                        Join Get Fit today and start your journey to a healthier, stronger you. First-timers get a free consultation!
                    </p>
                    <Link to="/contact" className="gym-cta__button">
                        Start Your Free Trial
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Gym;
