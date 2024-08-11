<script lang="ts">
    import * as Card from '$lib/components/ui/card/index'
    import {MapPin} from "lucide-svelte";
    import { Badge } from "$lib/components/ui/badge/index";
    import type {Car} from "$lib/types";

    export let cars: Array<Car>;
    export let selectCar: Function;
    export let selectedCar: Car | undefined;

</script>
{#if cars && cars.length > 0}

    <p class="text-lg">Velg din leiebil</p>
    <div class="flex flex-row gap-4">

        {#each cars as car (car.rental_id)}
            {@const bgClass = car.rental_id === selectedCar?.rental_id ? "bg-gray-200" : "bg-white"}
            <Card.Root
                    on:click={() => selectCar(car)}
                    class={`overflow-hidden w-[256px] hover:bg-gray-200 cursor-pointer ${bgClass}`}
                    data-x-chunk-name="dashboard-07-chunk-4"
                    data-x-chunk-description="A card with a form to upload product images"
            >
                <Card.Content class="px-0 py-0">
                    <div class="">
                        <img
                                alt="hotel"
                                class=" rounded-md object-cover"
                                height="256"
                                src={car.img}
                                width="256"
                        />
                    </div>
                    <div class="px-2 py-2 flex flex-col gap-1">
                        <div class="text-muted-foreground">
                            {car.brand} {car.model}
                        </div>

                        {car.price_per_day},- / dag
                        <div class="w-min">
                        <Badge >{car.availability === true ? "Tilgjengelig" : "Ikke tilgjengelig"}</Badge>
                        </div>
                    </div>
                </Card.Content>
            </Card.Root>
        {/each}

    </div>
{/if}