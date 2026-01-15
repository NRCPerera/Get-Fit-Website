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
    // Rice Menu - Healthy steamed rice dishes
    riceMenu: [
        {
            id: 1,
            name: "Steam Rice with Chicken Breast",
            description: "100g Rice, 100g Chicken, Broccoli, 50g salad",
            price: "1150",
            nutrition: "Protein 30g, Carb 65g, Fat 8g, Cal 480 approx",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&h=200&fit=crop"
        },
        {
            id: 2,
            name: "Steam Rice with Seer Fish",
            description: "100g Rice, 100g Seer Fish, Broccoli, 50g salad",
            price: "1350",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=200&fit=crop"
        },
        {
            id: 3,
            name: "Steam Rice with White Fish",
            description: "100g Rice, 100g White Fish, Broccoli, 50g salad",
            price: "1200",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&h=200&fit=crop"
        },
        {
            id: 4,
            name: "Steam Rice with Boiled/Fried Eggs",
            description: "100g Rice, 3 Eggs, Broccoli, 50g salad",
            price: "1100",
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=200&fit=crop"
        },
        {
            id: 5,
            name: "Steam Rice with Mix Seafood",
            description: "100g Rice, 150g Mixed Seafood, Broccoli, 50g salad",
            price: "1550",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop"
        },
        {
            id: 6,
            name: "Steam Rice with Prawns",
            description: "100g Rice, 100g Prawns, Broccoli, 50g salad",
            price: "1450",
            image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=200&h=200&fit=crop"
        }
    ],
    // Salad Menu - Fresh & Healthy
    saladMenu: [
        {
            id: 7,
            name: "Egg Salad",
            description: "5 eggs, broccoli, olive, tomato, corn, cucumber",
            price: "1000",
            nutrition: "Protein 30g, Carb 8-10g, Fat 25g, Cal 380-400 approx",
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop"
        },
        {
            id: 8,
            name: "Roasted Veg Salad",
            description: "Onion, bell pepper, broccoli, carrot, corn, cucumber, tomato",
            price: "900",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop"
        },
        {
            id: 9,
            name: "Roasted Beef Salad",
            description: "Roasted beef, broccoli, olive, salad leaf, carrot, chili, cucumber, tomato",
            price: "1550",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop"
        },
        {
            id: 10,
            name: "Grilled Chicken Salad",
            description: "Grilled chicken, broccoli, olive, salad leaf, carrot, chili, cucumber, tomato",
            price: "1250",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop"
        },
        {
            id: 11,
            name: "Grilled Fish Salad",
            description: "Grilled fish, broccoli, olive, salad leaf, carrot, chili, cucumber, tomato",
            price: "1350",
            image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=200&h=200&fit=crop"
        },
        {
            id: 12,
            name: "Prawn Salad",
            description: "Prawns, broccoli, olive, salad leaf, carrot, chili, cucumber, tomato",
            price: "1450",
            image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=200&h=200&fit=crop"
        }
    ],
    // Healthy Food Menu - Breakfast & Sides
    healthyFood: [
        {
            id: 13,
            name: "Protein Pancake",
            description: "Whey protein 30g, egg, oats, milk",
            price: "950",
            nutrition: "Cal 336, Protein 36.4g, Carb 31.5g, Fat 10g",
            image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=200&h=200&fit=crop"
        },
        {
            id: 14,
            name: "Egg White Omelet",
            description: "2 egg whites, light and protein-rich",
            price: "350",
            nutrition: "Cal 57, Protein 10g, Carb 6g, Fat 0.9g",
            image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=200&h=200&fit=crop"
        },
        {
            id: 15,
            name: "Scrambled Eggs with Vegetable",
            description: "Fluffy scrambled eggs with fresh vegetables",
            price: "900",
            nutrition: "Cal 180-200, Protein 14g, Carb 5-7g, Fat 12g",
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=200&fit=crop"
        },
        {
            id: 16,
            name: "Healthy Thai Chicken",
            description: "150g chicken, Thai-style preparation",
            price: "900",
            image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=200&h=200&fit=crop"
        },
        {
            id: 17,
            name: "Mashed Potato",
            description: "Creamy mashed potato side dish",
            price: "450",
            nutrition: "Cal 160, Protein 4g, Carb 35g, Fat 4g",
            image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=200&h=200&fit=crop"
        },
        {
            id: 18,
            name: "Oats",
            description: "Healthy oats bowl, perfect for breakfast",
            price: "750",
            nutrition: "Cal 150, Protein 5g, Carb 27g, Fat 2.5g",
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=200&h=200&fit=crop"
        }
    ],
    // Pasta Menu
    pastaMenu: [
        {
            id: 19,
            name: "Mushroom Pasta",
            description: "Creamy pasta with fresh mushrooms",
            price: "1300",
            image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&h=200&fit=crop"
        },
        {
            id: 20,
            name: "Chicken Pasta",
            description: "Pasta with grilled chicken pieces",
            price: "1500",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop"
        },
        {
            id: 21,
            name: "Prawns Pasta",
            description: "Pasta with succulent prawns",
            price: "1700",
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=200&h=200&fit=crop"
        },
        {
            id: 22,
            name: "Beef Pasta",
            description: "Hearty pasta with tender beef",
            price: "1900",
            image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=200&h=200&fit=crop"
        }
    ],
    // Sandwich Menu
    sandwichMenu: [
        {
            id: 23,
            name: "Chicken Breast Sandwich",
            description: "Grilled chicken breast in fresh bread",
            price: "750",
            image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=200&h=200&fit=crop"
        },
        {
            id: 24,
            name: "Beef Sandwich",
            description: "Tender beef with fresh vegetables",
            price: "900",
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop"
        },
        {
            id: 25,
            name: "Tuna Sandwich",
            description: "Fresh tuna salad sandwich",
            price: "850",
            image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=200&h=200&fit=crop"
        },
        {
            id: 26,
            name: "Club Sandwich",
            description: "Triple-decker classic club sandwich",
            price: "1250",
            image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=200&h=200&fit=crop"
        }
    ],
    // Wraps Menu
    wrapsMenu: [
        {
            id: 27,
            name: "Beef Wrap",
            description: "100g beef, vegetables wrapped in tortilla",
            price: "990",
            nutrition: "Cal 415, Protein 35g, Carb 28g, Fat 18g",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop"
        },
        {
            id: 28,
            name: "Chicken Avocado Wrap",
            description: "80g chicken, 50g avocado in a fresh wrap",
            price: "990",
            nutrition: "Cal 410, Protein 28g, Carb 24g, Fat 22g",
            image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=200&h=200&fit=crop"
        }
    ],
    // Coffee Bar - Hot Coffee
    hotCoffee: [
        {
            id: 29,
            name: "Espresso",
            description: "Rich, bold single shot",
            price: "350",
            image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=200&h=200&fit=crop"
        },
        {
            id: 30,
            name: "Doppio",
            description: "Double shot espresso",
            price: "500",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop"
        },
        {
            id: 31,
            name: "Americano",
            description: "Espresso with hot water",
            price: "450",
            image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=200&h=200&fit=crop"
        },
        {
            id: 32,
            name: "Cappuccino",
            description: "Espresso with steamed milk foam",
            price: "550",
            image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=200&h=200&fit=crop"
        },
        {
            id: 33,
            name: "Long Black",
            description: "Double espresso over hot water",
            price: "550",
            image: "https://images.unsplash.com/photo-1497515114889-1f074bfaab3b?w=200&h=200&fit=crop"
        },
        {
            id: 34,
            name: "Flat White",
            description: "Velvety microfoam over bold espresso",
            price: "550",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&h=200&fit=crop"
        },
        {
            id: 35,
            name: "Macchiato",
            description: "Espresso marked with milk foam",
            price: "450",
            image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=200&h=200&fit=crop"
        },
        {
            id: 36,
            name: "Mocha Latte",
            description: "Espresso with chocolate and steamed milk",
            price: "650",
            image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=200&h=200&fit=crop"
        },
        {
            id: 37,
            name: "Cafe Latte",
            description: "Smooth espresso with steamed milk",
            price: "650",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
        },
        {
            id: 38,
            name: "Black Coffee",
            description: "Classic brewed black coffee",
            price: "550",
            image: "https://images.unsplash.com/photo-1494314671902-399b18174975?w=200&h=200&fit=crop"
        },
        {
            id: 39,
            name: "Orange Black Coffee",
            description: "Unique blend of orange and coffee",
            price: "550",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop"
        },
        {
            id: 40,
            name: "Hot Chocolate",
            description: "Rich, creamy hot chocolate",
            price: "800",
            image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=200&h=200&fit=crop"
        }
    ],
    // Coffee Bar - Cold Coffee
    coldCoffee: [
        {
            id: 41,
            name: "Iced Americano",
            description: "Chilled espresso over ice",
            price: "550",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=200&h=200&fit=crop"
        },
        {
            id: 42,
            name: "Iced Tea",
            description: "Refreshing cold tea",
            price: "400",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop"
        },
        {
            id: 43,
            name: "Iced Latte",
            description: "Cold milk with espresso over ice",
            price: "700",
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=200&h=200&fit=crop"
        },
        {
            id: 44,
            name: "Iced Coffee",
            description: "Classic iced coffee",
            price: "650",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
        },
        {
            id: 45,
            name: "Affogato",
            description: "Vanilla ice cream with hot espresso",
            price: "600",
            image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=200&h=200&fit=crop"
        },
        {
            id: 46,
            name: "Iced Cappuccino",
            description: "Cold cappuccino over ice",
            price: "650",
            image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=200&h=200&fit=crop"
        }
    ],
    // Protein & Recovery Drinks
    proteinDrinks: [
        {
            id: 47,
            name: "Whey Protein",
            description: "Milk-based whey protein shake",
            price: "950",
            image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=200&h=200&fit=crop"
        },
        {
            id: 48,
            name: "Mass Gainer",
            description: "Milk-based mass gainer shake",
            price: "950",
            image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200&h=200&fit=crop"
        },
        {
            id: 49,
            name: "Pre Workouts (C4/Bull)",
            description: "Energy boost before your workout",
            price: "350",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&h=200&fit=crop"
        },
        {
            id: 50,
            name: "No Explode (P6/Bull)",
            description: "Advanced pre-workout formula",
            price: "450",
            image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop"
        },
        {
            id: 51,
            name: "Diet Protein Smoothie - Banana",
            description: "Whey protein with fresh banana",
            price: "950",
            image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200&h=200&fit=crop"
        },
        {
            id: 52,
            name: "Diet Protein Smoothie - Strawberry",
            description: "Whey protein with fresh strawberry",
            price: "950",
            image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=200&h=200&fit=crop"
        },
        {
            id: 53,
            name: "Diet Protein Smoothie - Spinach",
            description: "Whey protein with fresh spinach",
            price: "950",
            image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop"
        }
    ],
    // Smoothies & Milkshakes
    smoothiesAndShakes: [
        {
            id: 54,
            name: "Mango Smoothie",
            description: "Fresh mango fruit smoothie",
            price: "950",
            image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=200&h=200&fit=crop"
        },
        {
            id: 55,
            name: "Apple Smoothie",
            description: "Fresh apple fruit smoothie",
            price: "950",
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop"
        },
        {
            id: 56,
            name: "Avocado Smoothie",
            description: "Creamy avocado smoothie",
            price: "950",
            image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=200&h=200&fit=crop"
        },
        {
            id: 57,
            name: "Watermelon Smoothie",
            description: "Refreshing watermelon smoothie",
            price: "950",
            image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=200&h=200&fit=crop"
        },
        {
            id: 58,
            name: "Pineapple Smoothie",
            description: "Tropical pineapple smoothie",
            price: "950",
            image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=200&h=200&fit=crop"
        },
        {
            id: 59,
            name: "Banana Smoothie",
            description: "Classic banana smoothie",
            price: "950",
            image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200&h=200&fit=crop"
        },
        {
            id: 60,
            name: "Vanilla Milkshake",
            description: "Classic vanilla milkshake",
            price: "800",
            image: "https://images.unsplash.com/photo-1568901839119-631418a3910d?w=200&h=200&fit=crop"
        },
        {
            id: 61,
            name: "Chocolate Milkshake",
            description: "Rich chocolate milkshake",
            price: "800",
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop"
        },
        {
            id: 62,
            name: "Strawberry Milkshake",
            description: "Fresh strawberry milkshake",
            price: "800",
            image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop"
        },
        {
            id: 63,
            name: "Faluda Milkshake",
            description: "Traditional faluda milkshake",
            price: "800",
            image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=200&h=200&fit=crop"
        },
        {
            id: 64,
            name: "Banana Milkshake",
            description: "Creamy banana milkshake",
            price: "800",
            image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=200&h=200&fit=crop"
        },
        {
            id: 65,
            name: "Avocado Milkshake",
            description: "Rich and creamy avocado milkshake",
            price: "850",
            image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=200&h=200&fit=crop"
        },
        {
            id: 66,
            name: "Mango Milkshake",
            description: "Tropical mango milkshake",
            price: "850",
            image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=200&h=200&fit=crop"
        },
        {
            id: 67,
            name: "Oreo Coffee Shake",
            description: "Coffee shake with Oreo cookies",
            price: "950",
            image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=200&h=200&fit=crop"
        },
        {
            id: 68,
            name: "Oreo Mud Shake",
            description: "Chocolate shake with Oreo cookies",
            price: "950",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop"
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
