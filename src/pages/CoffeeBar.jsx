import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Coffee,
    Flame,
    Apple,
    Leaf,
    Clock,
    MapPin,
    ChevronRight,
    UtensilsCrossed,
    Salad,
    Sandwich,
    IceCream,
    Dumbbell
} from 'lucide-react';
import { coffeeMenu, businessInfo } from '../data/siteData';
import './CoffeeBar.css';

const CoffeeBar = () => {
    const [activeCategory, setActiveCategory] = useState('riceMenu');

    const categories = [
        { id: 'riceMenu', name: 'Rice Menu', icon: UtensilsCrossed, data: coffeeMenu.riceMenu },
        { id: 'saladMenu', name: 'Salads', icon: Salad, data: coffeeMenu.saladMenu },
        { id: 'healthyFood', name: 'Healthy Food', icon: Apple, data: coffeeMenu.healthyFood },
        { id: 'pastaMenu', name: 'Pasta', icon: UtensilsCrossed, data: coffeeMenu.pastaMenu },
        { id: 'sandwichMenu', name: 'Sandwiches', icon: Sandwich, data: coffeeMenu.sandwichMenu },
        { id: 'wrapsMenu', name: 'Wraps', icon: UtensilsCrossed, data: coffeeMenu.wrapsMenu },
        { id: 'hotCoffee', name: 'Hot Coffee', icon: Coffee, data: coffeeMenu.hotCoffee },
        { id: 'coldCoffee', name: 'Cold Coffee', icon: IceCream, data: coffeeMenu.coldCoffee },
        { id: 'proteinDrinks', name: 'Protein Drinks', icon: Dumbbell, data: coffeeMenu.proteinDrinks },
        { id: 'smoothiesAndShakes', name: 'Smoothies & Shakes', icon: Flame, data: coffeeMenu.smoothiesAndShakes }
    ];

    const activeData = categories.find(c => c.id === activeCategory)?.data || [];

    return (
        <main>
            {/* Hero Section */}
            <section className="coffee-hero">
                {/* Background */}
                <div className="coffee-hero__background">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop"
                        alt="Coffee bar ambiance"
                        className="coffee-hero__image"
                    />
                    <div className="coffee-hero__overlay" />
                </div>

                {/* Content */}
                <div className="coffee-hero__container">
                    <div className="coffee-hero__content">
                        <div className="coffee-hero__label">
                            <Coffee className="coffee-hero__label-icon" />
                            <span className="coffee-hero__label-text">The Coffee Bar</span>
                        </div>
                        <h1 className="coffee-hero__title">
                            Fuel Your Day with <span className="coffee-hero__title-latte">Premium Food & Brews</span>
                        </h1>
                        <p className="coffee-hero__description">
                            Healthy meals, artisan espresso drinks, protein-packed shakes, and wholesome snacks.
                            The perfect pit stop before or after your workout.
                        </p>

                        {/* Open to Public Badge */}
                        <div className="coffee-hero__badge">
                            <Leaf className="coffee-hero__badge-icon" />
                            <span className="coffee-hero__badge-text">Open to the public — No membership required!</span>
                        </div>

                        <div className="coffee-hero__info">
                            <div className="coffee-hero__info-item">
                                <Clock className="coffee-hero__info-icon" />
                                <span>{businessInfo.hours.coffeeBar}</span>
                            </div>
                            <div className="coffee-hero__info-item">
                                <MapPin className="coffee-hero__info-icon" />
                                <span>Seeduwa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="menu-section">
                <div className="menu-section__container">
                    {/* Section Header */}
                    <div className="menu-section__header">
                        <span className="menu-section__badge">Our Full Menu</span>
                        <h2 className="menu-section__title">
                            Crafted with <span className="menu-section__title-latte">Passion</span>
                        </h2>
                        <p className="menu-section__subtitle">
                            From healthy rice bowls to bold espresso shots and nutrient-rich protein shakes, every item is made fresh with premium ingredients.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="category-tabs">
                        <div className="category-tabs__list">
                            {categories.map((category) => {
                                const IconComponent = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`category-tab ${activeCategory === category.id ? 'category-tab--active' : 'category-tab--inactive'}`}
                                        aria-pressed={activeCategory === category.id}
                                    >
                                        <IconComponent className="category-tab__icon" />
                                        {category.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Category Title */}
                    <div className="category-title">
                        <h3 className="category-title__heading">
                            {categories.find(c => c.id === activeCategory)?.name}
                            <span className="category-title__count">
                                ({activeData.length} items)
                            </span>
                        </h3>
                    </div>

                    {/* Menu Grid */}
                    <div className="menu-grid">
                        {activeData.map((item) => (
                            <div key={item.id} className="menu-card">
                                {/* Image */}
                                <div className="menu-card__image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="menu-card__image"
                                    />
                                    <div className="menu-card__image-overlay" />
                                    <div className="menu-card__price">Rs. {item.price}</div>
                                </div>

                                {/* Content */}
                                <div className="menu-card__content">
                                    <h3 className="menu-card__name">{item.name}</h3>
                                    <p className="menu-card__description">{item.description}</p>

                                    {/* Nutrition info */}
                                    {item.nutrition && (
                                        <div className="menu-card__nutrition">{item.nutrition}</div>
                                    )}

                                    {/* Legacy nutrition info for shakes */}
                                    {item.calories && (
                                        <div className="menu-card__badges">
                                            <span className="menu-card__badge menu-card__badge--calories">
                                                {item.calories}
                                            </span>
                                            {item.protein && (
                                                <span className="menu-card__badge menu-card__badge--protein">
                                                    {item.protein}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty Highlight */}
            <section className="specialty-section">
                <div className="specialty-section__container">
                    <div className="specialty-section__grid">
                        {/* Image */}
                        <div className="specialty-section__image-wrapper">
                            <div className="specialty-section__image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop"
                                    alt="Barista preparing specialty coffee"
                                    className="specialty-section__image"
                                />
                                <div className="specialty-section__image-overlay" />
                            </div>

                            {/* Floating card */}
                            <div className="specialty-section__floating-card">
                                <Coffee className="specialty-section__floating-icon" />
                                <div className="specialty-section__floating-value">100%</div>
                                <div className="specialty-section__floating-label">Fresh Ingredients</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="specialty-section__title">
                                Healthy Food & <span className="specialty-section__title-latte">Great Coffee</span>
                            </h2>
                            <p className="specialty-section__text">
                                Our kitchen isn't just an afterthought — it's a destination. We prepare healthy meals
                                with fresh ingredients, perfect for fitness enthusiasts. From steam rice bowls to
                                protein-packed salads and wraps, every dish is designed to fuel your body right.
                            </p>

                            <div className="specialty-section__features">
                                {[
                                    { title: 'Healthy Rice Bowls', desc: 'Steam rice with lean proteins like chicken, fish, and prawns' },
                                    { title: 'Fresh Salads & Wraps', desc: 'Protein-rich salads and wraps with detailed nutrition info' },
                                    { title: 'Premium Coffee & Shakes', desc: 'Artisan coffee and protein shakes to fuel your workout' }
                                ].map((item, index) => (
                                    <div key={index} className="specialty-section__feature">
                                        <div className="specialty-section__feature-icon">
                                            <ChevronRight className="specialty-section__feature-arrow" />
                                        </div>
                                        <div>
                                            <h4 className="specialty-section__feature-title">{item.title}</h4>
                                            <p className="specialty-section__feature-text">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protein Shake Highlight */}
            <section className="protein-section">
                <div className="protein-section__container">
                    <div className="protein-section__card">
                        {/* Background */}
                        <div className="protein-section__background">
                            <img
                                src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=1400&h=600&fit=crop"
                                alt="Protein shake preparation"
                                className="protein-section__image"
                            />
                            <div className="protein-section__overlay" />
                        </div>

                        {/* Content */}
                        <div className="protein-section__content">
                            <div className="protein-section__inner">
                                <div className="protein-section__label">
                                    <Flame className="protein-section__label-icon" />
                                    <span className="protein-section__label-text">Post-Workout Fuel</span>
                                </div>
                                <h2 className="protein-section__title">
                                    Protein Drinks That <span className="protein-section__title-gradient">Deliver Results</span>
                                </h2>
                                <p className="protein-section__text">
                                    Our protein drinks are designed with athletes in mind. Whey protein, mass gainers,
                                    pre-workouts, and diet protein smoothies — they taste amazing and support your fitness goals.
                                </p>

                                <div className="protein-section__tags">
                                    <div className="protein-section__tag">Whey Protein</div>
                                    <div className="protein-section__tag">Mass Gainers</div>
                                    <div className="protein-section__tag">Pre-Workouts</div>
                                </div>

                                <button
                                    onClick={() => setActiveCategory('proteinDrinks')}
                                    className="protein-section__button"
                                >
                                    View Protein Drinks
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Healthy Food Gallery */}
            <section className="gallery-section">
                <div className="gallery-section__container">
                    <div className="gallery-section__header">
                        <h2 className="gallery-section__title">
                            Fresh <span className="gallery-section__title-accent">Smoothies & Shakes</span>
                        </h2>
                        <p className="gallery-section__subtitle">
                            Refresh yourself with our range of fresh fruit smoothies and creamy milkshakes.
                        </p>
                    </div>

                    <div className="gallery-section__grid">
                        {coffeeMenu.smoothiesAndShakes.slice(0, 8).map((item) => (
                            <div key={item.id} className="gallery-card">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="gallery-card__image"
                                />
                                <div className="gallery-card__overlay" />
                                <div className="gallery-card__content">
                                    <h4 className="gallery-card__name">{item.name}</h4>
                                    <div className="gallery-card__price">Rs. {item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-section__cta">
                        <button
                            onClick={() => setActiveCategory('smoothiesAndShakes')}
                            className="gallery-section__button"
                        >
                            View All Smoothies & Shakes
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="coffee-cta">
                <div className="coffee-cta__background" />
                <div className="coffee-cta__glow" />

                <div className="coffee-cta__container">
                    <h2 className="coffee-cta__title">Stop By for a Meal</h2>
                    <p className="coffee-cta__text">
                        Whether you're a gym member or just passing through, our kitchen and coffee bar welcomes everyone.
                        Come experience the perfect blend of fitness and flavor.
                    </p>
                    <div className="coffee-cta__buttons">
                        <Link to="/contact" className="coffee-cta__button-primary">
                            Visit Us Today
                        </Link>
                        <a href={`tel:${businessInfo.phone}`} className="coffee-cta__button-secondary">
                            Call to Order: {businessInfo.phone}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CoffeeBar;
