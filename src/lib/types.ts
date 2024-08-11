export interface Hotel {
    hotel_id: string
    name: string
    location: string
    check_in_date: string
    check_out_date: string
    price_per_night: number
    currency: string
    available_rooms: number
    amenities: string[]
    img: string
}

export interface Flight {
    flight_id: string
    airline: string
    departure_airport: string
    arrival_airport: string
    departure_time: string
    arrival_time: string
    price: number
    currency: string
    img: string
}

export interface Car {
    rental_id: string
    brand: string
    model: string
    rental_company: string
    pickup_location: string
    pickup_date: string
    return_date: string
    price_per_day: number
    currency: string
    availability: boolean
    img: string
}

export interface OrderConfirmation {
    booking_id: string
    status: string
    total_price: number
    currency: string
    duration: number
    flight: {
        flight_id: string
        airline: string
        departure_airport: string
        arrival_airport: string
        departure_time: string
        arrival_time: string
        price: number
        passenger_info: PassengerInfo
    }
    hotel: {
        hotel_id: string
        name: string
        location: string
        check_in_date: string
        check_out_date: string
        price_per_night: number
        total_price: number
        guest_info: GuestInfo
    }
    car: {
        rental_id: string
        brand: string
        model: string
        rental_company: string
        pickup_location: string
        pickup_date: string
        return_date: string
        price_per_day: number
        total_price: number
        driver_info: DriverInfo
    }
}

export interface PassengerInfo {
    name: string
    seat: string
}

export interface GuestInfo {
    name: string
    room_number: string
}

export interface DriverInfo {
    name: string
}