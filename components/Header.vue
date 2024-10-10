<script setup>
const searchQuery = ref('')
const location = ref('')

const search = () => {
  console.log('Searching for:', searchQuery.value, 'in', location.value)
}
</script>

<template>
  <header class="flex items-center p-4 bg-white shadow-md">
    <div class="text-3xl font-bold text-yelp-red mr-4">yelp<span class="text-black">*</span></div>
    <div class="flex flex-1"> 
      <input v-model="searchQuery" placeholder="things to do, nail salons, plumbers" class="flex-1 p-2 border border-gray-300 rounded-l-md" />
      <input v-model="location" placeholder="Enter your Location" class="w-64 p-2 border-t border-b border-gray-300" />
      <button @click="search" class="bg-yelp-red text-white p-2 rounded-r-md">
        <span class="material-icons">search</span>
      </button>
    </div>
    <nav class="flex items-center ml-4">
      <NuxtLink to="#" class="mx-2 text-gray-700">Yelp voor Bedrijven</NuxtLink>
      <NuxtLink to="#" class="mx-2 text-gray-700">Schrijf een review</NuxtLink>
      <NuxtLink to="#" class="mx-2 text-gray-700">Start a Project</NuxtLink>
      <button class="btn btn-secondary mx-2">Inloggen</button>
      <button class="btn btn-primary">Aanmelden</button>
    </nav>
  </header>
</template>