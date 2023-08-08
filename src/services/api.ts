
export const Api = (function () {

    function getHouseStats() {
        return (
            [
                {
                    id: 1,
                    avatars: ["icon1.png", "icon2.png",],
                    header: "1K+ People",
                    description: "Successfully Getting Home"
                },
                {
                    id: 2,
                    avatars: ["icon4.png"],
                    header: "56 Houses",
                    description: "Sold Monthly"
                },
                {
                    id: 3,
                    avatars: ["icon5.png"],
                    header: "4K+",
                    description: "People Looking for New Homes"
                },
                {
                    id: 4,
                    avatars: ["icon6.png"],
                    header: "5 Apartments",
                    description: "Sold Weekly"
                },
                {
                    id: 5,
                    avatars: ["icon7.png"],
                    header: "2K+ People",
                    description: "People Contact Us Every Month"
                },


            ]
        )
    }

    function getRecommendationCards() {
        return ([
            {
                type: "House",
                id: 1,
                image: "",
                title: "Roselands House",
                price: "$ 35.000.000",
                avatar: "icon1.png",
                name: "Dianne Russel",
                place: "Manchester, Kentucky",
                feature: "Popular",
                icon: "fire.png"
            },
            {
                type: "House",
                id: 2,
                image: "",
                title: "Woodlandside",
                price: "$ 20.000.000",
                avatar: "icon2.png",
                name: "Robert Fox",
                place: "Dr. San Jose, South Dakota",
                feature: "New House",
                icon: "house.png"
            },
            {
                type: "House",
                id: 3,
                image: "",
                title: "The Old Lighthouse",
                price: "$ 44.000.000",
                avatar: "icon3.png",
                name: "Ronald Richards",
                place: "Santa Ana, Illinois",
                feature: "Best Deals",
                icon: "wallet.png"
            },
            {
                type: "House",
                id: 4,
                image: "",
                title: "Cosmo's House",
                price: "$ 22.000.000",
                avatar: "icon1.png",
                name: "Jenny Wilson",
                place: "Preston Rd. Inglewood, Maine 98380",
                feature: "Popular",
                icon: "fire.png"
            },
            {
                type: "Villa",
                id: 5,
                image: "",
                title: "Roselands House",
                price: "$ 35.000.000",
                avatar: "icon1.png",
                name: "Dianne Russel",
                place: "Manchester, Kentucky",
                feature: "Popular",
                icon: "fire.png"
            },
            {
                type: "Villa",
                id: 6,
                image: "",
                title: "Woodlandside",
                price: "$ 20.000.000",
                avatar: "icon2.png",
                name: "Robert Fox",
                place: "Dr. San Jose, South Dakota",
                feature: "New House",
                icon: "house.png"
            },
            {
                type: "Villa",
                id: 7,
                image: "",
                title: "The Old Lighthouse",
                price: "$ 44.000.000",
                avatar: "icon3.png",
                name: "Ronald Richards",
                place: "Santa Ana, Illinois",
                feature: "Best Deals",
                icon: "wallet.png"
            },
            {
                type: "Villa",
                id: 8,
                image: "",
                title: "Cosmo's House",
                price: "$ 22.000.000",
                avatar: "icon1.png",
                name: "Jenny Wilson",
                place: "Preston Rd. Inglewood, Maine 98380",
                feature: "Popular",
                icon: "fire.png"
            },
            {
                type: "Apartment",
                id: 9,
                image: "",
                title: "Roselands House",
                price: "$ 35.000.000",
                avatar: "icon1.png",
                name: "Dianne Russel",
                place: "Manchester, Kentucky",
                feature: "Popular",
                icon: "fire.png"
            },
            {
                type: "Apartment",
                id: 10,
                image: "",
                title: "Woodlandside",
                price: "$ 20.000.000",
                avatar: "icon2.png",
                name: "Robert Fox",
                place: "Dr. San Jose, South Dakota",
                feature: "New House",
                icon: "house.png"
            },
            {
                type: "Apartment",
                id: 11,
                image: "",
                title: "The Old Lighthouse",
                price: "$ 44.000.000",
                avatar: "icon3.png",
                name: "Ronald Richards",
                place: "Santa Ana, Illinois",
                feature: "Best Deals",
                icon: "wallet.png"
            },
            {
                type: "Apartment",
                id: 12,
                image: "",
                title: "Cosmo's House",
                price: "$ 22.000.000",
                avatar: "icon1.png",
                name: "Jenny Wilson",
                place: "Preston Rd. Inglewood, Maine 98380",
                feature: "Popular",
                icon: "fire.png"
            }

        ])

    }
    function getReviewCards() {
        return ([
            {
                id: 1,
                image: "",
                title: "Best! I got the house I wanted through Hounter",
                text: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
                avatar: "",
                name: "Dianne Russel",
                job: "Manager Director",
                rating: 4.6,
            },
            {
                id: 2,
                image: "",
                title: "Through the Hounter, I can get a house for my self",
                text: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
                avatar: "../../assets/images/Recomm-person1.png",
                name: "Esther Howard",
                job: "Head of Marketing",
                rating: 4.7,
            },
            {
                id: 3,
                image: "",
                title: "My house sold out fast!",
                text: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
                avatar: "icon1.png",
                name: "Courtney Henry",
                job: "CEO Andarafish",
                rating: 4.6,
            }

        ])

    }

    function getTipsAndTricksCards() {
        return ([
            {
                id: 1,
                image: "",
                title: "The things we need to check when we want to buy a house",
                text: "I want to buy a house, could you help me",
                icon: "icon1.png",
                name: "Dianne Russel",
                read: "4 min read",
                date: "25 Apr 2021"
            },
            {
                id: 2,
                image: "",
                title: "7 Ways to distinguish the quality of the house we want to buy",
                text: "I want to buy a house, could you help me",
                icon: "icon2.png",
                name: "Courtney Henry",
                read: "6 min read",
                date: "24 Apr 2021"
            },
            {
                id: 3,
                image: "",
                title: "The best way to know the quality of the house we want to buy",
                text: "I want to buy a house, could you help me",
                icon: "icon3.png",
                name: "Darlene Robertson",
                read: "2 min read",
                date: "24 Apr 2021"
            },
            {
                id: 4,
                image: "",
                title: "12 Things to know before buying a house",
                text: "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
                icon: "icon4.png",
                name: "Cameron Williamson",
                read: "8 min read",
                date: "25 Apr 2021"
            },

        ])

    }
    return {
        getHouseStats: getHouseStats,
        getRecommendationCards: getRecommendationCards,
        getReviewCards: getReviewCards,
        getTipsAndTricksCards: getTipsAndTricksCards,
    }


}())