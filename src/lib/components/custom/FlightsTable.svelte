<script lang="ts">

    import * as Card from '$lib/components/ui/card/index'
    import * as Table from '$lib/components/ui/table/index'
    import * as Avatar from "$lib/components/ui/avatar/index";
    import { Progress } from "$lib/components/ui/progress/index";
    import {formatTimeFromDate} from "$lib/utils";
    import type {Flight} from "$lib/types";
    import FlightRow from "$lib/components/custom/FlightRow.svelte";
    import type {DateRange} from "bits-ui";

    export let flights: Array<Flight>;
    export let selectFlight: Function;
    export let selectedFlight: Flight | undefined;
    export let selectedDepartureLocation: string | undefined;
    export let selectedDateRange: DateRange | undefined;

</script>


{#if flights && flights.length > 0}
<Card.Root
        data-x-chunk-name="flights-table"
        data-x-chunk-description="Velg ønsket avgang"
>
    <Card.Header>
        <Card.Title>Avganger</Card.Title>
        <Card.Description>
            Velg ønsket avgang den {selectedDateRange?.start ? selectedDateRange.start?.toString() : ""} fra {selectedDepartureLocation}
        </Card.Description>
    </Card.Header>
    <Card.Content>
        <Table.Root>
            <Table.Body>

                {#each flights as flight (flight.flight_id)}
                    <FlightRow {selectedFlight} {selectFlight} flight={flight}/>
                {/each}

            </Table.Body>
        </Table.Root>
    </Card.Content>
    <Card.Footer>
        <div class="text-muted-foreground text-xs">
            Viser <strong>1-{flights.length}</strong> av <strong>{flights.length}</strong> avganger
        </div>
    </Card.Footer>
</Card.Root>
{/if}