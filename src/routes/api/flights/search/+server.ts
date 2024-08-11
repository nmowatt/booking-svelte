export function GET() {
    const payload = {
        "flights": [
            {
                "flight_id": "FL1234",
                "airline": "Norwegian",
                "departure_airport": "LHR",
                "arrival_airport": "OSL",
                "departure_time": "2024-08-15T10:00:00Z",
                "arrival_time": "2024-08-15T12:00:00Z",
                "price": 1200,
                "currency": "NOK",
                "img": "https://resources.mynewsdesk.com/image/upload/f_auto,t_limit_1000/oek7gnkd8oz95bgb3fxv.jpg"
            },
            {
                "flight_id": "FL5678",
                "airline": "SAS",
                "departure_airport": "CDG",
                "arrival_airport": "OSL",
                "departure_time": "2024-08-15T14:00:00Z",
                "arrival_time": "2024-08-15T16:30:00Z",
                "price": 1500,
                "currency": "NOK",
                "img": "https://ms-f7-sites-prod-cdn.akamaized.net/docs/stories/1431763554334987166-scandinavian-airlines-speeds-app-development-lowers-costs-azure-database-postgresql/resources/a86b9cf0-dde8-49a9-9600-31ad0f66998b/1431764322584465089_1431764322584465089"
            }
        ]
    }

    return new Response(JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}