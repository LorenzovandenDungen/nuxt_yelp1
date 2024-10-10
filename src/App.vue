<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import BusinessList from './components/BusinessList.vue'
import MapView from './components/MapView.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <div class="flex flex-1 overflow-hidden">
        <BusinessList />
        <MapView />
      </div>
    </div>
  </div>
</template>