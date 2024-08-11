<script lang="ts">

    import * as Card from "$lib/components/ui/card/index"
    import { Separator } from "$lib/components/ui/separator";


    import {orderConfirmationStore} from "$lib/store";
    import {Button} from "$lib/components/ui/button";

    let {flight, hotel, car, booking_id, status, total_price, currency, duration} = $orderConfirmationStore;


</script>
<Card.Root
        class="h-min w-[600px]  "
        data-x-chunk-name="dashboard-05-chunk-4"
        data-x-chunk-description="Order details small"
>
    <Card.Header class="bg-muted/50 flex flex-row items-start">
        <div class="grid gap-2">
            <Card.Title class="group flex flex-col text-3xl text-center">
                Booking fullført
            </Card.Title>
            <Card.Description class="flex flex-col">
                <span>Ordernr: {booking_id}</span>
                <span>Status: {status}</span>
                <span>Fra: {flight.departure_time}</span>
                <span>Til: {flight.arrival_time}</span>

            </Card.Description>
        </div>
        <div class="ml-auto flex items-center gap-1">

        </div>
    </Card.Header>
    <Card.Content class="p-4 text-sm">
        <div class="grid gap-3">
            <div class="font-semibold">Fly</div>
            <ul class="grid gap-1">
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                    Avgang
                  </span>
                    <span>{flight.departure_time}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Ankomst
                  </span>
                    <span>{flight.arrival_time}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Passasjer
                  </span>
                    <span>{flight.passenger_info.name}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Sete
                  </span>
                    <span>{flight.passenger_info.seat}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                    Flight
                  </span>
                    <span>{flight.airline} {flight.flight_id}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Subtotal
                  </span>
                    <span>{flight.price} {currency}</span>
                </li>
            </ul>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
            <div class="font-semibold">Hotell</div>
            <ul class="grid gap-1">
                <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
              </span>
                    <span>{hotel.name}, {hotel.location}</span>
                </li>
                <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
                Insjekk
              </span>
                    <span>{hotel.check_in_date}</span>
                </li>
                <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
               Utsjekk
              </span>
                    <span>{hotel.check_out_date}</span>
                </li>
                <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
               Antall netter
              </span>
                    <span>{duration}</span>
                </li>
                <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
               Pris per natt
              </span>
                    <span>{hotel.price_per_night} {currency}</span>
                </li>
                <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
               Subtotal
              </span>
                    <span>{hotel.total_price} {currency}</span>
                </li>
            </ul>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
            <div class="font-semibold">Leie av bil</div>
            <ul class="grid gap-1">
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">

                  </span>
                    <span>{car.brand} {car.model}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Hentested
                  </span>
                    <span>{car.rental_company}, {car.pickup_location}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                    Hentes
                  </span>
                    <span>{car.pickup_date}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Returneres
                  </span>
                    <span>{car.return_date}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Antall dager
                  </span>
                    <span>{duration}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Pris per dag
                  </span>
                    <span>{car.price_per_day} {currency}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Subtotal
                  </span>
                    <span>{car.total_price} {currency}</span>
                </li>
            </ul>
        </div>
    </Card.Content>
    <Separator class="my-4" />
    <div class="grid gap-3 p-2">
        <ul class="grid gap-1">
            <li class="flex items-center justify-between">
                <span class="font-semibold">Total</span>
                <span>{total_price} {currency}</span>
            </li>
        </ul>
    </div>
    <Card.Footer class="bg-muted/50 flex flex-row justify-center border-t px-6 py-3 align-middle">
        <a href="/">
            <Button class="w-[200px]"> Book en ny reise </Button>
        </a>
    </Card.Footer>
</Card.Root>