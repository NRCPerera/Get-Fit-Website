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
    Zap,
    Play
} from 'lucide-react';
import { features, testimonials, businessInfo } from '../data/siteData';

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
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    {/* Left side - Gym */}
                    <div className="absolute inset-0 lg:w-1/2 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop"
                            alt="Modern gym with equipment"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-[#121212]/60" />
                    </div>

                    {/* Right side - Coffee (visible on lg+) */}
                    <div className="hidden lg:block absolute inset-0 left-1/2 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop"
                            alt="Cozy coffee bar atmosphere"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-[#121212] via-[#121212]/80 to-[#121212]/60" />
                    </div>

                    {/* Center gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/40 to-[#121212]" />
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-[#00D4FF]/10 blur-xl animate-float" />
                <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-[#39FF14]/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />

                {/* Content */}
                <div className="relative container-custom pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
                            <Zap className="w-4 h-4 text-[#39FF14]" />
                            <span className="text-sm text-white/80">Where Fitness Meets Flavor</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
                            <span className="text-white">Fuel Your </span>
                            <span className="gradient-text">Workout.</span>
                            <br />
                            <span className="text-white">Savor the </span>
                            <span className="text-[#C8A882]">Flavor.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Experience the perfect blend of high-energy fitness and artisan coffee culture.
                            Your new favorite destination for strength, stamina, and specialty brews.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <Link to="/gym" className="btn-primary group">
                                <Dumbbell className="w-5 h-5" />
                                Explore The Gym
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/coffee" className="btn-secondary group">
                                <Coffee className="w-5 h-5" />
                                View Menu
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
                                <div className="text-sm text-white/50 mt-1">Active Members</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#C8A882]">15+</div>
                                <div className="text-sm text-white/50 mt-1">Coffee Varieties</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold gradient-text">4.9</div>
                                <div className="text-sm text-white/50 mt-1">Star Rating</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 rounded-full bg-[#00D4FF] animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-[#0a0a0a]">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-medium mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Everything You Need in <span className="gradient-text">One Place</span>
                        </h2>
                        <p className="text-white/60">
                            From high-intensity workouts to handcrafted lattes, we've got your entire wellness routine covered.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon];
                            return (
                                <div
                                    key={feature.id}
                                    className="group card hover-lift"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.category === 'gym'
                                            ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                                            : feature.category === 'coffee'
                                                ? 'bg-[#C8A882]/10 text-[#C8A882]'
                                                : 'bg-gradient-to-br from-[#00D4FF]/10 to-[#C8A882]/10 text-white'
                                        }`}>
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Split Visual Section */}
            <section className="relative overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    {/* Gym Side */}
                    <div className="relative group">
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop"
                                alt="Gym equipment and weights"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-2 text-[#00D4FF] mb-2">
                                <Dumbbell className="w-5 h-5" />
                                <span className="text-sm font-medium uppercase tracking-wider">The Gym</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Train Like a Champion
                            </h3>
                            <p className="text-white/70 text-sm mb-4 max-w-sm">
                                State-of-the-art equipment, expert trainers, and an atmosphere that pushes you to be your best.
                            </p>
                            <Link
                                to="/gym"
                                className="inline-flex items-center gap-2 text-[#00D4FF] hover:gap-3 transition-all duration-300"
                            >
                                Explore Classes & Plans
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Coffee Side */}
                    <div className="relative group">
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop"
                                alt="Artisan coffee preparation"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-[#C8A882]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-2 text-[#C8A882] mb-2">
                                <Coffee className="w-5 h-5" />
                                <span className="text-sm font-medium uppercase tracking-wider">Coffee Bar</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Brewed to Perfection
                            </h3>
                            <p className="text-white/70 text-sm mb-4 max-w-sm">
                                Artisan espresso, protein-packed shakes, and healthy bites. Open to everyone, not just members.
                            </p>
                            <Link
                                to="/coffee"
                                className="inline-flex items-center gap-2 text-[#C8A882] hover:gap-3 transition-all duration-300"
                            >
                                View Full Menu
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm font-medium mb-4">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            What Our <span className="gradient-text">Community</span> Says
                        </h2>
                        <p className="text-white/60">
                            Real stories from real people who've made Get Fit their go-to destination.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="card hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#39FF14] text-[#39FF14]" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-white/80 text-sm leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                                    />
                                    <div>
                                        <div className="text-white font-medium">{testimonial.name}</div>
                                        <div className="text-white/50 text-sm">{testimonial.role}</div>
                                    </div>
                                    <div className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${testimonial.category === 'gym'
                                            ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                                            : testimonial.category === 'coffee'
                                                ? 'bg-[#C8A882]/10 text-[#C8A882]'
                                                : 'bg-[#39FF14]/10 text-[#39FF14]'
                                        }`}>
                                        {testimonial.category === 'gym' ? 'Gym Member' : testimonial.category === 'coffee' ? 'Coffee Lover' : 'Both'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative section-padding overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1600&h=800&fit=crop"
                        alt="Gym atmosphere"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]" />
                </div>

                {/* Glow effects */}
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#00D4FF]/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#39FF14]/10 blur-3xl" />

                <div className="relative container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Start Your <span className="gradient-text">Transformation?</span>
                        </h2>
                        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Join hundreds of members who've already discovered the perfect blend of fitness and flavor. Your journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                                Join Now — Start Today
                            </Link>
                            <Link to="/gym" className="btn-secondary text-lg px-8 py-4">
                                View Membership Plans
                            </Link>
                        </div>

                        {/* Contact info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/50">
                            <span>📍 {businessInfo.address}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>📞 {businessInfo.phone}</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
