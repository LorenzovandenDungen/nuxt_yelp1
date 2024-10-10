<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow bg-gray-100">
      <div class="container mx-auto px-4 py-6">
        <div class="flex">
          <Sidebar class="w-1/4 pr-6" />
          <div class="w-3/4">
            <BusinessList />
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4">
        <p>&copy; 2024 Yelp Clone. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import BusinessList from '~/components/BusinessList.vue'
</script>