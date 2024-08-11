<script lang="ts">
    import { onMount } from "svelte";
    import { Progress } from "$lib/components/ui/progress/index.js";
    import {orderConfirmationStore} from "$lib/store";
    import OrderDetails from "$lib/components/custom/OrderConfirmation.svelte";

    let value = 13;

    onMount(() => {
        setTimeout(() => (value = 35), 500);
        setTimeout(() => (value = 70), 1500);
        setTimeout(() => (value = 100), 3000);
    });

    console.log($orderConfirmationStore)

</script>

{#if value < 100}
    <div class="h-screen flex justify-center items-center">
        <Progress {value} max={100} class="w-[60%]" />
    </div>

    {:else}
    <div class="flex justify-center items-center">
        <OrderDetails />
    </div>

{/if}

