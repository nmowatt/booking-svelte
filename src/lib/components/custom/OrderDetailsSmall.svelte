<script lang="ts">

    import { Button } from "$lib/components/ui/button/index";
    import * as Card from "$lib/components/ui/card/index"
    import { Separator } from "$lib/components/ui/separator";
    import {CreditCard} from "lucide-svelte";
    import type {Car, Flight, Hotel} from "$lib/types";
    import type {DateRange} from "bits-ui";
    import {goto} from "$app/navigation";
    import {orderConfirmationStore} from "$lib/store";

    export let selectedFlight: Flight | undefined;
    export let selectedHotel: Hotel | undefined;
    export let selectedCar: Car | undefined;
    export let selectedDateRange: DateRange | undefined;


    function calculateDuration(selectedDateRange: DateRange | undefined) {
        if (selectedDateRange && selectedDateRange.start && selectedDateRange.end) {
            return (selectedDateRange.end.toDate('Europe/Paris').getTime() - selectedDateRange.start.toDate('Europe/Paris').getTime()) / (1000 * 60 * 60 * 24)
        }
        return undefined;
    }

    function calculateTotal(selectedFlight: Flight | undefined, selectedHotel: Hotel | undefined, selectedCar: Car | undefined) {
        let _total = 0;
        if (duration) {
            if (selectedFlight) {
                _total += selectedFlight.price;
            }

            if (selectedCar) {
                _total += selectedCar.price_per_day * duration;
            }

            if (selectedHotel) {
                _total += selectedHotel.price_per_night * duration;
            }
        }
        return _total;
    }

    $: duration = calculateDuration(selectedDateRange);
    $: total = calculateTotal(selectedFlight, selectedHotel, selectedCar);

    async function handleOrder() {

        const payload = {
            flight: selectedFlight,
            hotel: selectedHotel,
            car: selectedCar,
            totalPrice: total,
            duration: duration
        }


        const response = await fetch("/api/book", {
            method: "POST",
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        orderConfirmationStore.set(data);

        goto("/confirmation")
    }

</script>
<Card.Root
        class="h-min"
        data-x-chunk-name="dashboard-05-chunk-4"
        data-x-chunk-description="Order details small"
>
    <Card.Header class="bg-muted/50 flex flex-row items-start">
        <div class="grid gap-0.5">
            <Card.Title class="group flex items-center gap-2 text-lg">
                Din bestilling for reise
            </Card.Title>
            <Card.Description class="flex flex-col">

                <span>Fra: {selectedDateRange?.start?.toString()}</span>
                <span>Til: {selectedDateRange?.end?.toString()}</span>

            </Card.Description>
        </div>
        <div class="ml-auto flex items-center gap-1">

        </div>
    </Card.Header>
    <Card.Content class="p-4 text-sm">
        {#if selectedFlight}
            <div class="grid gap-3">
                <div class="font-semibold">Fly</div>
                <ul class="grid gap-1">
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                        Avgang
                      </span>
                        <span>{selectedFlight.departure_time}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Ankomst
                      </span>
                        <span>{selectedFlight.arrival_time}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                        Flight
                      </span>
                        <span>{selectedFlight.airline} {selectedFlight.flight_id}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Subtotal
                      </span>
                        <span>{selectedFlight.price} {selectedFlight.currency}</span>
                    </li>
                </ul>
            </div>
            <Separator class="my-4" />
        {/if}
        {#if selectedHotel}
        <div class="grid gap-3">
            <div class="font-semibold">Hotell</div>
            <ul class="grid gap-1">
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                  </span>
                    <span>{selectedHotel.name}, {selectedHotel.location}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                    Insjekk
                  </span>
                    <span>{selectedHotel.check_in_date}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Utsjekk
                  </span>
                    <span>{selectedHotel.check_out_date}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Antall netter
                  </span>
                    <span>{duration || ''}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Pris per natt
                  </span>
                    <span>{selectedHotel.price_per_night} {selectedHotel.currency}</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-muted-foreground">
                   Subtotal
                  </span>
                    <span>{(duration || 1) * selectedHotel.price_per_night} {selectedHotel.currency}</span>
                </li>
            </ul>
        </div>
        <Separator class="my-4" />
        {/if}
        {#if selectedCar}
            <div class="grid gap-3">
                <div class="font-semibold">Leie av bil</div>
                <ul class="grid gap-1">
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">

                      </span>
                        <span>{selectedCar.brand} {selectedCar.model}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Hentested
                      </span>
                        <span>{selectedCar.rental_company}, {selectedCar.pickup_location}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                        Hentes
                      </span>
                        <span>{selectedCar.pickup_date}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Returneres
                      </span>
                        <span>{selectedCar.return_date}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Antall dager
                      </span>
                        <span>{duration || ''}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Pris per dag
                      </span>
                        <span>{selectedCar.price_per_day} {selectedCar.currency}</span>
                    </li>
                    <li class="flex items-center justify-between">
                      <span class="text-muted-foreground">
                       Subtotal
                      </span>
                        <span>{(duration || 1) * selectedCar.price_per_day} {selectedCar.currency}</span>
                    </li>
                </ul>
            </div>
        {/if}
    </Card.Content>
    {#if selectedFlight && selectedHotel && selectedCar}
        <Separator class="my-4" />
        <div class="grid gap-3 p-2">
            <ul class="grid gap-1">
                <li class="flex items-center justify-between">
                    <span class="font-semibold">Total</span>
                    <span>{total} NOK</span>
                </li>
            </ul>
        </div>

        <Card.Footer class="bg-muted/50 flex flex-row justify-center border-t px-6 py-3 align-middle">
            <Button on:click={handleOrder} class="w-[100px]"> Bestill </Button>
        </Card.Footer>
    {/if}
</Card.Root>