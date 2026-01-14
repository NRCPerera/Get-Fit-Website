// Business Information
export const businessInfo = {
    name: "Get Fit",
    tagline: "Fuel Your Workout. Savor the Flavor.",
    description: "Where high-energy fitness meets premium coffee culture. Experience the perfect blend of state-of-the-art gym equipment and artisan coffee.",
    address: "Puttalam - Colombo Rd, Seeduwa 11410",
    phone: "076 393 9790",
    email: "info@getfit.lk",
    hours: {
        gym: "5:00 AM - 11:00 PM",
        coffeeBar: "6:00 AM - 10:00 PM"
    },
    socials: {
        instagram: "https://instagram.com/getfit",
        facebook: "https://facebook.com/getfit",
        twitter: "https://twitter.com/getfit"
    }
};

// Features for home page
export const features = [
    {
        id: 1,
        icon: "Dumbbell",
        title: "State-of-the-art Equipment",
        description: "Premium machines and free weights from leading fitness brands, maintained to perfection for your ultimate workout experience.",
        category: "gym"
    },
    {
        id: 2,
        icon: "Coffee",
        title: "Specialty Coffee Bar",
        description: "Artisan espresso drinks crafted by skilled baristas using locally roasted beans. The perfect pre or post-workout ritual.",
        category: "coffee"
    },
    {
        id: 3,
        icon: "Users",
        title: "Personal Training",
        description: "Certified trainers dedicated to helping you achieve your fitness goals with personalized workout plans and nutrition guidance.",
        category: "gym"
    },
    {
        id: 4,
        icon: "Apple",
        title: "Healthy Snacks",
        description: "Protein-packed bites, fresh smoothie bowls, and nutritious meals designed to fuel your body right.",
        category: "coffee"
    },
    {
        id: 5,
        icon: "Heart",
        title: "Cardio Zone",
        description: "High-tech treadmills, ellipticals, and bikes with integrated entertainment systems for enjoyable cardio sessions.",
        category: "gym"
    },
    {
        id: 6,
        icon: "Timer",
        title: "Open Extended Hours",
        description: "Early bird or night owl? We've got you covered with extended operating hours to fit your schedule.",
        category: "both"
    }
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Fitness Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        content: "Get Fit has completely transformed my morning routine. I start with an intense workout and end with their amazing cold brew. It's the perfect one-stop destination!",
        rating: 5,
        category: "gym"
    },
    {
        id: 2,
        name: "James K.",
        role: "Coffee Connoisseur",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        content: "Even though I don't work out here, their coffee bar is my go-to spot. The espresso is exceptional, and the atmosphere is electric. Love the industrial vibe!",
        rating: 5,
        category: "coffee"
    },
    {
        id: 3,
        name: "Priya D.",
        role: "Personal Trainer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        content: "As a trainer, I appreciate the quality of equipment here. My clients love that they can grab a protein shake right after our sessions. Brilliant concept!",
        rating: 5,
        category: "gym"
    },
    {
        id: 4,
        name: "Nimal R.",
        role: "Regular Member",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        content: "The membership is worth every rupee. Clean facilities, friendly staff, and that post-workout latte hits different. This place understands fitness and fuel!",
        rating: 5,
        category: "both"
    }
];

// Membership Plans
export const membershipPlans = [
    {
        id: 1,
        name: "Day Pass",
        price: "500",
        currency: "Rs.",
        period: "day",
        description: "Perfect for visitors or those wanting to try us out",
        features: [
            "Full gym access for one day",
            "Access to all equipment",
            "Locker room access",
            "Free WiFi",
            "10% off coffee bar"
        ],
        popular: false
    },
    {
        id: 2,
        name: "Monthly Flex",
        price: "4,500",
        currency: "Rs.",
        period: "month",
        description: "Ideal for dedicated fitness enthusiasts",
        features: [
            "Unlimited gym access",
            "All group fitness classes",
            "Locker with key",
            "Free parking",
            "15% off coffee bar",
            "1 free personal training session"
        ],
        popular: true
    },
    {
        id: 3,
        name: "Annual Elite",
        price: "45,000",
        currency: "Rs.",
        period: "year",
        description: "The ultimate commitment to your fitness journey",
        features: [
            "Everything in Monthly",
            "Guest passes (4 per year)",
            "Priority class booking",
            "20% off coffee bar",
            "Monthly body composition analysis",
            "Personalized workout plan",
            "Nutrition consultation"
        ],
        popular: false,
        savings: "Save Rs. 9,000"
    }
];

// Fitness Classes
export const fitnessClasses = [
    {
        id: 1,
        name: "Power Yoga",
        instructor: "Kamala S.",
        duration: "60 min",
        level: "All Levels",
        schedule: "Mon, Wed, Fri - 6:00 AM",
        description: "Dynamic yoga flow that builds strength, flexibility, and mental focus. Perfect for starting your day energized.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        spots: 15
    },
    {
        id: 2,
        name: "HIIT Blast",
        instructor: "Ruwan P.",
        duration: "45 min",
        level: "Intermediate",
        schedule: "Tue, Thu, Sat - 5:30 PM",
        description: "High-intensity interval training that torches calories and boosts metabolism. Get ready to sweat!",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop",
        spots: 20
    },
    {
        id: 3,
        name: "Strength & Sculpt",
        instructor: "Marcus T.",
        duration: "50 min",
        level: "All Levels",
        schedule: "Mon, Wed, Fri - 7:00 PM",
        description: "Full-body strength training using weights and resistance. Build lean muscle and improve overall fitness.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=300&fit=crop",
        spots: 12
    },
    {
        id: 4,
        name: "Spin City",
        instructor: "Dilini M.",
        duration: "45 min",
        level: "All Levels",
        schedule: "Daily - 6:30 AM & 6:00 PM",
        description: "Indoor cycling class with energizing music and varying intensities. Great cardio workout!",
        image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=400&h=300&fit=crop",
        spots: 25
    }
];

// Coffee Menu
export const coffeeMenu = {
    espressoBar: [
        {
            id: 1,
            name: "Classic Espresso",
            description: "Rich, bold single shot of pure energy",
            price: "350",
            image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=200&h=200&fit=crop"
        },
        {
            id: 2,
            name: "Flat White",
            description: "Velvety microfoam over bold espresso",
            price: "500",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&h=200&fit=crop"
        },
        {
            id: 3,
            name: "Caramel Latte",
            description: "Smooth espresso with steamed milk and caramel",
            price: "550",
            image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=200&h=200&fit=crop"
        },
        {
            id: 4,
            name: "Iced Americano",
            description: "Chilled espresso over ice for hot days",
            price: "450",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=200&h=200&fit=crop"
        },
        {
            id: 5,
            name: "Mocha Supreme",
            description: "Espresso meets rich chocolate and cream",
            price: "600",
            image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=200&h=200&fit=crop"
        },
        {
            id: 6,
            name: "Cold Brew",
            description: "Slow-steeped for 18 hours, ultra smooth",
            price: "500",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
        }
    ],
    proteinShakes: [
        {
            id: 7,
            name: "Muscle Builder",
            description: "Whey protein, banana, peanut butter, oats",
            price: "650",
            calories: "450 cal",
            protein: "35g protein",
            image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=200&h=200&fit=crop"
        },
        {
            id: 8,
            name: "Berry Blast",
            description: "Mixed berries, Greek yogurt, whey protein",
            price: "600",
            calories: "320 cal",
            protein: "28g protein",
            image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200&h=200&fit=crop"
        },
        {
            id: 9,
            name: "Green Machine",
            description: "Spinach, banana, almond milk, plant protein",
            price: "580",
            calories: "280 cal",
            protein: "25g protein",
            image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop"
        },
        {
            id: 10,
            name: "Choco Recovery",
            description: "Chocolate whey, banana, almond butter",
            price: "680",
            calories: "420 cal",
            protein: "32g protein",
            image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200&h=200&fit=crop"
        }
    ],
    healthyBites: [
        {
            id: 11,
            name: "Açaí Bowl",
            description: "Fresh açaí with granola, berries, and honey",
            price: "750",
            image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&h=200&fit=crop"
        },
        {
            id: 12,
            name: "Protein Energy Balls",
            description: "Oats, dates, cocoa, and whey (pack of 4)",
            price: "400",
            image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&h=200&fit=crop"
        },
        {
            id: 13,
            name: "Avocado Toast",
            description: "Multigrain toast with fresh avocado and eggs",
            price: "550",
            image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=200&h=200&fit=crop"
        },
        {
            id: 14,
            name: "Greek Yogurt Parfait",
            description: "Layered yogurt with fruits and granola",
            price: "480",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop"
        }
    ]
};

// Navigation Links
export const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Gym", path: "/gym" },
    { name: "Coffee Bar", path: "/coffee" },
    { name: "Contact", path: "/contact" }
];
