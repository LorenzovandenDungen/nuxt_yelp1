<script setup>
import { ref } from 'vue'

const priceFilters = ref([])
const suggestedFilters = ref([])
const featureFilters = ref([])
const distanceFilters = ref([])

const filters = {
  price: ['$', '$$', '$$$', '$$$$'],
  suggested: ['Open Now', 'Offers Delivery', 'Good for Dinner', 'Outdoor Seating', 'Good for Lunch', 'Good for Kids'],
  features: ['Offers Takeout', 'Good for Groups', 'Dogs Allowed', 'Full Bar', 'Takes Reservations', 'Good for Brunch'],
  distance: ['Vogelvlucht', 'Met de auto (8 km.)', 'Met de fiets (4 km.)', 'Te voet (2 km)', 'Minder dan 100m']
}
</script>

<template>
  <aside class="w-64 p-4 bg-gray-100 overflow-y-auto">
    <h2 class="text-xl font-bold mb-4">Filters</h2>
    
    <section class="mb-4">
      <h3 class="font-semibold mb-2">Price</h3>
      <div class="flex">
        <button v-for="price in filters.price" :key="price" 
                :class="['mr-2 px-3 py-1 border rounded', priceFilters.includes(price) ? 'bg-yelp-red text-white' : 'bg-white']"
                @click="priceFilters.includes(price) ? priceFilters = priceFilters.filter(p => p !== price) : priceFilters.push(price)">
          {{ price }}
        </button>
      </div>
    </section>

    <section class="mb-4" v-for="(filterList, filterType) in { suggested: filters.suggested, features: filters.features }" :key="filterType">
      <h3 class="font-semibold mb-2">{{ filterType.charAt(0).toUpperCase() + filterType.slice(1) }}</h3>
      <div v-for="filter in filterList" :key="filter" class="mb-1">
        <label class="flex items-center">
          <input type="checkbox" :value="filter" class="mr-2" />
          <span>{{ filter }}</span>
        </label>
      </div>
    </section>

    <section class="mb-4">
      <h3 class="font-semibold mb-2">Distance</h3>
      <div v-for="distance in filters.distance" :key="distance" class="mb-1">
        <label class="flex items-center">
          <input type="radio" :value="distance" name="distance" class="mr-2" />
          <span>{{ distance }}</span>
        </label>
      </div>
    </section>
  </aside>
</template>