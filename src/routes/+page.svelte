<script lang="ts">
	import ComboBox from "$lib/components/custom/ComboBox.svelte";
	import DateRangeCalendar from "$lib/components/custom/DateRangeCalendar.svelte";
	import { Button } from "$lib/components/ui/button/index";
	import FlightsTable from "$lib/components/custom/FlightsTable.svelte";
	import HotelCards from "$lib/components/custom/HotelCards.svelte";
	import CarCards from "$lib/components/custom/CarCards.svelte";
	import type {Flight, Hotel, Car} from "$lib/types"
	import OrderDetailsSmall from "$lib/components/custom/OrderDetailsSmall.svelte";
	import type {   DateRange } from "bits-ui";
	import {Skeleton} from "$lib/components/ui/skeleton/index";

	const arrivalLocations = [
		{
			value: "oslo",
			label: "Oslo Lufthavn (OSL)"
		},
	];

	const departureLocations = [
		{
			value: "LHR",
			label: "London Heathrow (LHR)"
		},
		{
			value: "CDG",
			label: "Charles de Gaulle (CDG)"
		}
	];

	let selectedFlight: Flight | undefined = undefined;
	let selectedHotel: Hotel | undefined = undefined;
	let selectedCar: Car | undefined = undefined;
	let isLoading = false;

	function selectFlight(flight: Flight) {
		selectedFlight = flight;
	}

	function selectHotel(hotel: Hotel) {
		selectedHotel = hotel;
	}

	function selectCar(car: Car) {
		selectedCar = car;
	}

	let selectedDepartureLocation = ""
	let selectedArrivalLocation = ""
	let selectedDateRange: DateRange | undefined;

	let _selectedDepartureLocation = ""
	let _selectedArrivalLocation = ""
	let _selectedDateRange: DateRange | undefined;

	$: flights = [];
	$: hotels = [];
	$: cars = [];

	$: searchEnabled = _selectedDepartureLocation && _selectedArrivalLocation && _selectedDateRange && _selectedDateRange.start && _selectedDateRange.end;

	async function handleSearch() {
		if (searchEnabled) {
			isLoading = true;

			selectedFlight = undefined;
			selectedHotel = undefined;
			selectedCar = undefined;

			selectedDepartureLocation = _selectedDepartureLocation
			selectedArrivalLocation = _selectedArrivalLocation
			selectedDateRange = _selectedDateRange

			setTimeout(async () => {

			const flightsResponse = await fetch("/api/flights/search");
			const flightsData = await flightsResponse.json();

			flights = flightsData.flights;

			const hotelsResponse = await fetch("/api/hotels/search");
			const hotelsData = await hotelsResponse.json();

			hotels = hotelsData.hotels;

			const carsResponse = await fetch("/api/cars/search");
			const carsData = await carsResponse.json();

			cars = carsData.cars;

			isLoading = false;
			}, 1000)
		}
	}

</script>

<div class="flex flex-row gap-4 pb-4 justify-start">
	<ComboBox bind:value={_selectedDepartureLocation} label="Hvor vil du reise fra?" options={departureLocations}/>
	<ComboBox bind:value={_selectedArrivalLocation} label="Hvor vil du reise til?" options={arrivalLocations}/>
	<DateRangeCalendar bind:value={_selectedDateRange}/>
	<Button class={`ml-auto w-[100px] ${searchEnabled ? "cursor-pointer" : "cursor-not-allowed"}`} on:click={handleSearch}>Søk</Button>
</div>

{#if isLoading}
	<div class="grid grid-cols-3 gap-2 mb-[50px]">
		<div class="grid col-span-2">
			<div class="flex flex-col gap-4 w-full">
				<Skeleton class="h-[200px] w-[700px]" />
				<div class="flex flex-row gap-2">
					<Skeleton class="h-[300px] w-[230px]" />
					<Skeleton class="h-[300px] w-[230px]" />
					<Skeleton class="h-[300px] w-[230px]" />
				</div>
				<div class="flex flex-row gap-2">
					<Skeleton class="h-[300px] w-[230px]" />
					<Skeleton class="h-[300px] w-[230px]" />
				</div>
			</div>
		</div>
		<div class="grid col-span-1">

		</div>
	</div>
	{:else if flights && flights.length > 0}
	<div class="grid grid-cols-3 gap-2 mb-[50px]">
		<div class="grid col-span-2">
			<div class="flex flex-col gap-4 w-full">
				<FlightsTable {selectedDateRange} {selectedDepartureLocation} {selectedFlight} {selectFlight} flights={flights}/>
				<HotelCards {selectedHotel} {selectHotel} hotels={hotels} />
				<CarCards {selectedCar} {selectCar} cars={cars} />
			</div>
		</div>
		<div class="grid col-span-1">
			<OrderDetailsSmall {selectedDateRange} {selectedFlight} {selectedHotel} {selectedCar}/>
		</div>
	</div>
{/if}