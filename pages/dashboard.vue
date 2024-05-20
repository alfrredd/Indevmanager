<template>
<Navbar/>
  <div class="container flex flex-col items-stretch gap-1 w-full max-w-full">
    <ul class="menu bg-base-200 lg:menu-horizontal rounded-box w-full justify-center">
    <li>
      <a :class="{ active: activeTab === 'devices' }" @click="selectedTab('devices')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>
        Equipos
      </a>
    </li>
    <li>
      <a :class="{ active: activeTab === 'users' }" @click="selectedTab('users')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
        Usuarios
        <span class="badge badge-sm badge-warning">Nuevo</span>
      </a>
    </li>
    <li>
      <a :class="{ active: activeTab === 'incidents' }" @click="selectedTab('incidents')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
        Incidencias
        <span class="badge badge-sm">99+</span>
      </a>
    </li>
    </ul>
    <component :is="selectedTabComponent" />
  </div>
  <footer class="footer footer-center p-4 bg-neutral text-neutral-content">
  <aside>
    <p>Copyright © 2024 - All rights reserved</p>
  </aside>
  </footer>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
definePageMeta({
  middleware: [function(to, from){
    const authStore = useAuthStore();
    if (!authStore.isItAuthenticated && to.path !== '/login') {
      return navigateTo('/login')
    }
  },]
})

import { ref } from 'vue';
import Users from '~/components/users.vue';
import Devices from '~/components/devices.vue';
import Incidents from '~/components/incidents.vue';

const activeTab = ref('devices')
const selectedTabComponent = computed(()=>{
 switch (activeTab.value){
  case 'devices':
    return Devices
  case 'users':
    return Users
  case 'incidents':
    return Incidents
  default:
    return null
  } 
})
const selectedTab = (tab: string) => {
  activeTab.value = tab
}

</script>
