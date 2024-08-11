<script lang="ts">
    import * as Card from '$lib/components/ui/card/index'
    import { Skeleton } from "$lib/components/ui/skeleton/index";

    import { Badge } from "$lib/components/ui/badge/index";
    import type {Hotel} from "$lib/types";

    export let hotels: Array<Hotel>;
    export let selectHotel: Function;
    export let selectedHotel: Hotel | undefined;

</script>

{#if hotels && hotels.length > 0}
    <p class="text-lg">Velg foretrukket hotell</p>
    <div class="flex flex-row gap-4">
        {#each hotels as hotel (hotel.hotel_id)}
            {@const bgClass = hotel.hotel_id === selectedHotel?.hotel_id ? "bg-gray-200" : "bg-white"}

            <Card.Root
                    on:click={() => selectHotel(hotel)}
                    class={`overflow-hidden w-[256px] hover:bg-gray-200 cursor-pointer ${bgClass}`}
                    data-x-chunk-name="dashboard-07-chunk-4"
                    data-x-chunk-description="A card with a form to upload product images"
            >
                <Card.Content class="px-0 py-0">
                    <div class="">
                        <img
                                alt="hotel"
                                class="rounded-md object-cover"
                                height="256"
                                src={hotel.img}
                                width="256"
                        />
                    </div>
                    <div class="px-2 py-2 flex flex-col gap-1">
                        <div class="text-muted-foreground">
                            {hotel.name}
                        </div>
                        <span>{hotel.price_per_night},- / natt</span>
                        <span class="text-muted-foreground">{hotel.available_rooms} ledige rom</span>
                        <div class="mt-4 mb-0">
                            {#each hotel.amenities as amenity (amenity)}
                            <Badge class="m-1" >{amenity}</Badge>
                            {/each}
                        </div>
                    </div>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
{/if}