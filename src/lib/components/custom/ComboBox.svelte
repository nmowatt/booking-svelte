<script lang="ts">
    import Check from "svelte-radix/Check.svelte";
    import CaretSort from "svelte-radix/CaretSort.svelte";
    import { tick } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()


    export let label = ""
    export let options = []


    let open = false;
    export let value = "";

    $: selectedValue =
        options.find((f) => f.value === value)?.label ?? label;

    // We want to refocus the trigger button when the user selects
    // an item from the list so users can continue navigating the
    // rest of the form with the keyboard.
    function closeAndFocusTrigger(triggerId: string) {
        open = false;
        tick().then(() => {
            document.getElementById(triggerId)?.focus();
        });
    }
</script>

<Popover.Root bind:open let:ids>
    <Popover.Trigger asChild let:builder>
        <Button
                builders={[builder]}
                variant="outline"
                role="combobox"
                aria-expanded={open}
                class="w-[200px] justify-between"
        >
            {selectedValue}
            <CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
    </Popover.Trigger>
    <Popover.Content class="w-[300px] p-0">
        <Command.Root>
            <Command.Input placeholder={label} class="h-9" />
            <Command.Empty>No airport found.</Command.Empty>
            <Command.Group>
                {#each options as framework}
                    <Command.Item
                            value={framework.value}
                            onSelect={(currentValue) => {
              value = currentValue;
              closeAndFocusTrigger(ids.trigger);
            }}
                    >
                        <Check
                                class={cn(
                "mr-2 h-4 w-4",
                value !== framework.value && "text-transparent"
              )}
                        />
                        {framework.label}
                    </Command.Item>
                {/each}
            </Command.Group>
        </Command.Root>
    </Popover.Content>
</Popover.Root>