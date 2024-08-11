import {writable} from "svelte/store";
import type {OrderConfirmation} from "$lib/types";

export const orderConfirmationStore = writable<OrderConfirmation>(undefined);
