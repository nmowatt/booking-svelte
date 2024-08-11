export function GET() {
    const payload = {
        "hotels": [
            {
                "hotel_id": "HTL001",
                "name": "Grand Hotel Oslo",
                "location": "Oslo",
                "check_in_date": "2024-08-15",
                "check_out_date": "2024-08-20",
                "price_per_night": 2000,
                "currency": "NOK",
                "available_rooms": 5,
                "amenities": ["Wi-Fi", "Breakfast", "Pool"],
                "img": "https://www.scandichotels.no/imageVault/publishedmedia/irwm1k79r0735sugifj8/Grand-Hotel-Oslo-by-Scandic-outdoor-facade.jpg"
            },
            {
                "hotel_id": "HTL002",
                "name": "The Thief",
                "location": "Oslo",
                "check_in_date": "2024-08-15",
                "check_out_date": "2024-08-20",
                "price_per_night": 3500,
                "currency": "NOK",
                "available_rooms": 3,
                "amenities": ["Wi-Fi", "Breakfast", "Spa", "Gym"],
                "img": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/19172201.jpg?k=d734cd705997f9b1ab595ad7d6aec97f7b15754e031747576e850c9af62ef079&o=&hp=1"
            }
        ]
    }


    return new Response(JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}