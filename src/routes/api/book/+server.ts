export async function POST({request}) {

    const {flight, hotel, car, totalPrice, duration} = await request.json();

    const payload = {
        "booking_id": "TRIP12345",
        "status": "confirmed",
        "total_price": totalPrice,
        "currency": "NOK",
        "duration": duration,
        "flight": {
            "flight_id": flight.flight_id,
            "airline": flight.airline,
            "departure_airport": flight.departure_airport,
            "arrival_airport": flight.arrival_airport,
            "departure_time": flight.departure_time,
            "arrival_time": flight.arrival_time,
            "price": flight.price,
            "passenger_info": {
                "name": "Ola Nordmann",
                "seat": "12A"
            }
        },
        "hotel": {
            "hotel_id": "HTL001",
            "name": hotel.name,
            "location": hotel.location,
            "check_in_date": hotel.check_in_date,
            "check_out_date": hotel.check_out_date,
            "price_per_night": hotel.price_per_night,
            "total_price": hotel.price_per_night * duration,
            "guest_info": {
                "name": "Ola Nordmann",
                "room_number": "101"
            }
        },
        "car": {
            "rental_id": "CAR123",
            "brand": car.brand,
            "model": car.model,
            "rental_company": car.rental_company,
            "pickup_location": car.pickup_location,
            "pickup_date": car.pickup_date,
            "return_date": car.return_date,
            "price_per_day": car.price_per_day,
            "total_price": car.price_per_day * duration,
            "driver_info": {
                "name": "Ola Nordmann"
            }
        }
    }

    return new Response(JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}