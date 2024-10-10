<script setup>
const businesses = ref([
  {
    id: 1,
    name: 'The Pantry',
    rating: 4.5,
    reviewCount: 567,
    category: 'Modern Europees',
    price: '€€€',
    location: 'Centrum',
    openUntil: '22:30',
    image: 'https://example.com/the-pantry.jpg'
  },
  {
    id: 2,
    name: 'Café De Klos',
    rating: 4.4,
    reviewCount: 452,
    category: 'Barbecue',
    price: '€€',
    location: 'Centrum',
    openUntil: 'Middernacht',
    image: 'https://example.com/cafe-de-klos.jpg'
  },
  {
    id: 3,
    name: 'Cannibale Royale',
    rating: 4.3,
    reviewCount: 255,
    category: 'Brasserie',
    price: '€€',
    location: 'Centrum',
    openUntil: '03:00',
    image: 'https://example.com/cannibale-royale.jpg'
  }
])

const sortOptions = ref([
  'Aanbevolen',
  'Hoogste beoordeling',
  'Meeste beoordelingen',
  'Afstand'
])

const selectedSort = ref('Aanbevolen')
</script>

<template>
  <div class="flex-1 p-4 overflow-y-auto">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Bekijk bedrijven in Amsterdam, Noord-Holland</h2>
      <div class="flex items-center">
        <span class="mr-2">Sorteren:</span>
        <select v-model="selectedSort" class="p-2 border rounded">
          <option v-for="option in sortOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <div v-for="business in businesses" :key="business.id" class="flex mb-4 pb-4 border-b">
      <img :src="business.image" :alt="business.name" class="w-48 h-48 object-cover mr-4" />
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ business.id }}. {{ business.name }}</h3>
        <div class="mb-2">
          <span class="text-yelp-red mr-2">★★★★☆</span>
          <span>{{ business.rating }} ({{ business.reviewCount }} reviews)</span>
        </div>
        <div class="mb-2">{{ business.category }} • {{ business.price }} • {{ business.location }}</div>
        <div class="text-green-600">Open until {{ business.openUntil }}</div>
      </div>
    </div>

    <div class="flex justify-center mt-4">
      <button v-for="n in 9" :key="n" :class="['mx-1 px-3 py-1 border rounded', n === 1 ? 'bg-yelp-red text-white' : 'bg-white']">
        {{ n }}
      </button>
      <button class="mx-1 px-3 py-1 border rounded bg-white">Next Page</button>
    </div>
  </div>
</template>