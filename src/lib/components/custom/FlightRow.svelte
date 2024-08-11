<script lang="ts">

    import * as Card from '$lib/components/ui/card/index'
    import * as Table from '$lib/components/ui/table/index'
    import * as Avatar from "$lib/components/ui/avatar/index";
    import { Progress } from "$lib/components/ui/progress/index";
    import {formatTimeFromDate} from "$lib/utils";
    import type {Flight} from "$lib/types";

    export let flight: Flight;
    export let selectFlight: Function
    export let selectedFlight: Flight | undefined;

    const departureDateAndTime = new Date(flight.departure_time)
    const arrivalDateAndTime = new Date(flight.arrival_time)

    const departureTime = formatTimeFromDate(departureDateAndTime)
    const arrivalTime = formatTimeFromDate(arrivalDateAndTime)

    const diff = Math.abs(arrivalDateAndTime.valueOf() - departureDateAndTime.valueOf()) / (60 * 60 * 1000);

    $: bgClass = flight.flight_id === selectedFlight?.flight_id ? "bg-gray-200" : "bg-white"

</script>

<Table.Row on:click={() => selectFlight(flight) } class={`cursor-pointer hover:bg-gray-200 ${bgClass}`}>
    <Table.Cell class="hidden sm:table-cell align-top">
        <Avatar.Root>
            <Avatar.Image src={flight.img} />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </Table.Cell>
    <Table.Cell class="">
        {departureTime} - {arrivalTime}
    </Table.Cell>
    <Table.Cell class="w-[300px] px-8">
        <div class="flex flex-col">
            <div class="align-middle">
                <Progress value={(diff / 6) * 100} max={100} />
            </div>
            <div class="flex flex-row justify-between text-muted-foreground">
                {flight.departure_airport}
                <div class="text-xs">
                    {diff} timer
                </div>
                {flight.arrival_airport}
            </div>
        </div>
    </Table.Cell>
    <Table.Cell class="font-medium">
        {flight.price} {flight.currency}
    </Table.Cell>
</Table.Row>
