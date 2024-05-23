<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink to="/dashboard"><a class="btn btn-ghost text-xl">Indev Manager</a></NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from '#app';
import { useAuthStore } from '~/stores/auth';

const router = useRouter()
const authStore = useAuthStore()

if(authStore.isItAuthenticated){
  router.push('/dashboard')
}else{
  router.push('/login')
}
</script>
