import { Link } from 'react-router-dom';
import {
    Dumbbell,
    Check,
    Clock,
    Users,
    Zap,
    ArrowRight,
    Star,
    Calendar
} from 'lucide-react';
import { membershipPlans, fitnessClasses } from '../data/siteData';

const Gym = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop"
                        alt="Get Fit Gym interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/70 to-[#121212]" />
                </div>

                {/* Content */}
                <div className="relative container-custom py-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#00D4FF] mb-4">
                            <Dumbbell className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wider">The Gym</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Train Harder, <span className="gradient-text">Get Stronger</span>
                        </h1>
                        <p className="text-lg text-white/70 mb-8 max-w-xl">
                            State-of-the-art equipment, expert trainers, and an energizing atmosphere.
                            Everything you need to crush your fitness goals.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#membership" className="btn-primary">
                                View Membership Plans
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#classes" className="btn-secondary">
                                Explore Classes
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="relative -mt-12 z-10">
                <div className="container-custom">
                    <div className="glass-effect-dark rounded-2xl p-6 md:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">50+</div>
                                <div className="text-sm text-white/60">Modern Equipment</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">6</div>
                                <div className="text-sm text-white/60">Expert Trainers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">18</div>
                                <div className="text-sm text-white/60">Hours Open Daily</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">4</div>
                                <div className="text-sm text-white/60">Training Zones</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Plans */}
            <section id="membership" className="section-padding">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-medium mb-4">
                            Membership
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Choose Your <span className="gradient-text">Plan</span>
                        </h2>
                        <p className="text-white/60">
                            Flexible options to fit your lifestyle and fitness goals. All plans include access to our premium facilities.
                        </p>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {membershipPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${plan.popular
                                        ? 'bg-gradient-to-b from-[#00D4FF]/20 to-[#39FF14]/10 border-2 border-[#00D4FF]/50'
                                        : 'bg-white/5 border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#39FF14] text-[#121212] text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                {/* Savings Badge */}
                                {plan.savings && (
                                    <div className="absolute -top-4 right-4 px-3 py-1 rounded-full bg-[#39FF14]/20 text-[#39FF14] text-xs font-medium">
                                        {plan.savings}
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                    <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-white/60 text-lg">{plan.currency}</span>
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-white/60">/{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#00D4FF]' : 'text-[#39FF14]'
                                                }`} />
                                            <span className="text-sm text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    to="/contact"
                                    className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${plan.popular
                                            ? 'bg-gradient-to-r from-[#00D4FF] to-[#39FF14] text-[#121212] hover:shadow-lg hover:shadow-[#00D4FF]/30'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Classes Section */}
            <section id="classes" className="section-padding bg-[#0a0a0a]">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm font-medium mb-4">
                            Group Classes
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Train With the <span className="gradient-text">Best</span>
                        </h2>
                        <p className="text-white/60">
                            Join our dynamic group classes led by certified instructors. All classes are included with Monthly and Annual memberships.
                        </p>
                    </div>

                    {/* Classes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fitnessClasses.map((cls) => (
                            <div
                                key={cls.id}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image */}
                                    <div className="relative lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden">
                                        <img
                                            src={cls.image}
                                            alt={cls.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#00D4FF]/20 backdrop-blur-sm text-[#00D4FF] text-xs font-medium">
                                            {cls.level}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="lg:w-3/5 p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                                            {cls.name}
                                        </h3>
                                        <p className="text-sm text-white/60 mb-4">{cls.description}</p>

                                        <div className="flex flex-wrap gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-white/70">
                                                <Users className="w-4 h-4" />
                                                <span className="text-sm">{cls.instructor}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/70">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm">{cls.duration}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-[#39FF14]">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">{cls.schedule}</span>
                                            </div>
                                            <div className="text-xs text-white/50">{cls.spots} spots</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12">
                        <p className="text-white/60 mb-4">
                            Can't find a class that fits your schedule?
                        </p>
                        <Link to="/contact" className="btn-secondary">
                            Request a Custom Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-medium mb-4">
                                Our Facilities
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Premium Equipment for <span className="gradient-text">Premium Results</span>
                            </h2>
                            <p className="text-white/60 mb-8">
                                Our gym features the latest equipment from leading fitness brands, maintained to the highest standards for your safety and performance.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: 'Cardio Zone', desc: 'Treadmills, ellipticals, bikes with integrated entertainment' },
                                    { title: 'Free Weights Area', desc: 'Dumbbells up to 50kg, barbells, and squat racks' },
                                    { title: 'Functional Training', desc: 'Kettlebells, battle ropes, TRX, and plyometric boxes' },
                                    { title: 'Stretching & Recovery', desc: 'Foam rollers, yoga mats, and massage chairs' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-[#00D4FF]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                            <p className="text-sm text-white/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                                    <img
                                        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=500&fit=crop"
                                        alt="Gym cardio zone"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop"
                                        alt="Free weights"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="rounded-2xl overflow-hidden aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1598971639058-60b5c63f1f17?w=400&h=400&fit=crop"
                                        alt="Training area"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                                    <img
                                        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=500&fit=crop"
                                        alt="Gym equipment"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-r from-[#00D4FF]/10 to-[#39FF14]/10 border-t border-b border-white/10">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Body?
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Join Get Fit today and start your journey to a healthier, stronger you. First-timers get a free consultation!
                    </p>
                    <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                        Start Your Free Trial
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Gym;
