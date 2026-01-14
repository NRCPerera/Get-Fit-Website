import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Coffee,
    Flame,
    Apple,
    Leaf,
    Clock,
    MapPin,
    ChevronRight
} from 'lucide-react';
import { coffeeMenu, businessInfo } from '../data/siteData';

const CoffeeBar = () => {
    const [activeCategory, setActiveCategory] = useState('espresso');

    const categories = [
        { id: 'espresso', name: 'Espresso Bar', icon: Coffee, data: coffeeMenu.espressoBar },
        { id: 'shakes', name: 'Protein Shakes', icon: Flame, data: coffeeMenu.proteinShakes },
        { id: 'bites', name: 'Healthy Bites', icon: Apple, data: coffeeMenu.healthyBites }
    ];

    const activeData = categories.find(c => c.id === activeCategory)?.data || [];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop"
                        alt="Coffee bar ambiance"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/70 to-[#121212]" />
                </div>

                {/* Content */}
                <div className="relative container-custom py-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#C8A882] mb-4">
                            <Coffee className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wider">The Coffee Bar</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Fuel Your Day with <span className="text-[#C8A882]">Premium Brews</span>
                        </h1>
                        <p className="text-lg text-white/70 mb-8 max-w-xl">
                            Artisan espresso drinks, protein-packed shakes, and wholesome snacks.
                            The perfect pit stop before or after your workout.
                        </p>

                        {/* Open to Public Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 mb-8">
                            <Leaf className="w-5 h-5 text-[#39FF14]" />
                            <span className="text-[#39FF14] font-medium">Open to the public — No membership required!</span>
                        </div>

                        <div className="flex flex-wrap gap-6 text-white/70">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#C8A882]" />
                                <span>{businessInfo.hours.coffeeBar}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#C8A882]" />
                                <span>Seeduwa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#C8A882]/10 text-[#C8A882] text-sm font-medium mb-4">
                            Our Menu
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Crafted with <span className="text-[#C8A882]">Passion</span>
                        </h2>
                        <p className="text-white/60">
                            From bold espresso shots to nutrient-rich protein shakes, every item is made fresh with premium ingredients.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                            ? 'bg-gradient-to-r from-[#C8A882] to-[#8B7355] text-[#121212]'
                                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                        }`}
                                    aria-pressed={activeCategory === category.id}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeData.map((item, index) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8A882]/30 transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                                    {/* Price Tag */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#C8A882] text-[#121212] font-semibold text-sm">
                                        Rs. {item.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C8A882] transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-white/60 mb-3">{item.description}</p>

                                    {/* Nutrition info for shakes */}
                                    {item.calories && (
                                        <div className="flex items-center gap-3 text-xs">
                                            <span className="px-2 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF]">
                                                {item.calories}
                                            </span>
                                            <span className="px-2 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14]">
                                                {item.protein}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty Highlight */}
            <section className="section-padding bg-[#0a0a0a]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop"
                                    alt="Barista preparing specialty coffee"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 p-6 rounded-2xl bg-[#C8A882]/10 backdrop-blur-lg border border-[#C8A882]/20 max-w-[200px]">
                                <Coffee className="w-8 h-8 text-[#C8A882] mb-3" />
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-white/60">Arabica Beans</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                The Art of <span className="text-[#C8A882]">Great Coffee</span>
                            </h2>
                            <p className="text-white/70 mb-8 leading-relaxed">
                                Our coffee bar isn't just an afterthought — it's a destination. We source premium
                                single-origin beans from Sri Lanka's finest estates and roast them locally to bring
                                out their unique characteristics.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'Locally Roasted Beans',
                                        desc: 'Fresh-roasted weekly from Sri Lankan highland estates'
                                    },
                                    {
                                        title: 'Skilled Baristas',
                                        desc: 'Certified professionals crafting each drink with care'
                                    },
                                    {
                                        title: 'Perfect for Fitness',
                                        desc: 'Sugar-free options and protein-enhanced drinks available'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#C8A882]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <ChevronRight className="w-4 h-4 text-[#C8A882]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                            <p className="text-sm text-white/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protein Shake Highlight */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=1400&h=600&fit=crop"
                                alt="Protein shake preparation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative p-8 md:p-12 lg:p-16">
                            <div className="max-w-xl">
                                <div className="flex items-center gap-2 text-[#39FF14] mb-4">
                                    <Flame className="w-5 h-5" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Post-Workout Fuel</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Protein Shakes That <span className="gradient-text">Deliver Results</span>
                                </h2>
                                <p className="text-white/70 mb-8">
                                    Our protein shakes are designed with athletes in mind. Made with premium whey protein,
                                    fresh fruits, and superfoods — they taste amazing and support your fitness goals.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                                        25-35g Protein
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                                        No Added Sugar
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                                        Fresh Ingredients
                                    </div>
                                </div>

                                <button
                                    onClick={() => setActiveCategory('shakes')}
                                    className="btn-primary"
                                >
                                    View Protein Shakes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Healthy Bites Gallery */}
            <section className="section-padding bg-[#0a0a0a]">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Wholesome <span className="text-[#39FF14]">Healthy Bites</span>
                        </h2>
                        <p className="text-white/60">
                            Fuel your body with nutritious snacks that taste as good as they make you feel.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {coffeeMenu.healthyBites.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl overflow-hidden aspect-square"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-white font-medium text-sm mb-1">{item.name}</h4>
                                    <div className="text-[#C8A882] text-sm font-semibold">Rs. {item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative section-padding overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A2C2A]/30 to-[#2C1810]/30" />
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C8A882]/10 blur-3xl" />

                <div className="relative container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stop By for a Cup
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Whether you're a gym member or just passing through, our coffee bar welcomes everyone.
                        Come experience the perfect blend of fitness and flavor.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact" className="btn-primary">
                            Visit Us Today
                        </Link>
                        <a
                            href={`tel:${businessInfo.phone}`}
                            className="btn-secondary"
                        >
                            Call to Order: {businessInfo.phone}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CoffeeBar;
