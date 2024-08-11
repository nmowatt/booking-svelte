export function GET() {
    const payload = {
        "cars": [
            {
                "rental_id": "CAR123",
                "brand": "Toyota",
                "model": "Yaris",
                "rental_company": "Hertz",
                "pickup_location": "Oslo Airport",
                "pickup_date": "2024-08-15T09:00:00Z", "return_date": "2024-08-20T09:00:00Z", "price_per_day": 400,
                "currency": "NOK",
                "availability": true,
                "img": "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2021-toyota-yaris-index.png"
            },
            {
                "rental_id": "CAR456",
                "brand": "BMW",
                "model": "X5",
                "rental_company": "Avis",
                "pickup_location": "Oslo City Center", "pickup_date": "2024-08-15T10:00:00Z", "return_date": "2024-08-20T10:00:00Z", "price_per_day": 1200,
                "currency": "NOK",
                "availability": true,
                "img": "https://finn.bmw.no/_next/image?url=https%3A%2F%2Fprod.cosy.bmw.cloud%2Fministorene%2FcosySec%3FCOSY-EU-100-7331c9Nv2Z7d5yKlHS9P3AKWL2JeiXlMGgpn23HGfvQFz%2525eJE47UAzLekjnW9ZThJPLZf1EoKGZdpkeGhNS4ctE6LVP2KVZb6989RkBzcSktaJJE47BdqfoUwWptvXhFUwkEaagdE7raFx6RCzIhtE6BmudhSId4k9VTCrm7AaCil6JTKGwgYXcjnWqVskbNDOBeagdIhceJnTNB9uo8O2kOHUtWPfbYfvNsd10t9gP050y0rNbHi4TmR29%2525wc3yHMiftxdTCyw178z3lAtECUkdXt7slGAM9QCrXpFhiDlZQ6Kov6XRaYWH2qQ5nmP%2525l1agOybfWunvIT9ahyO2B3inPVIjedwOb3BDMztI9jeqhk7Bn4MLoACeOqhJHFlMspou%2525KXhn8HSfWQoO0%2525V1PaHcsfNEbn%2525HP10s9OfUvE4riI1l3scZwBEXnrxRtesCZZ857Mr2IRUgChZjM5GvloRUCgp2XHBpmv6jQ%2525eEq2YDafM3Yjmqn1hvwDyLOEVtpqTJIsNAgL3uBr0NMJdSeZ4btuzVMRcp9SkNh5x6zVA0og92YNF1KGsiJn65e8I&w=1920&q=90"
            }
        ]
    }


    return new Response(JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}