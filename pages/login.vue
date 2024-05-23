<template>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <NuxtLink to="/dashboard"><a class="btn btn-ghost text-xl">Indev Manager</a></NuxtLink>
      </div>
    </div>
    <div class="hero bg-base-200 py-10">
      <div class="hero-content text-center">
        <div class="max-w-md g flex flex-col gap-7">
          <label class="input input-bordered flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" class="grow" placeholder="Usuario" />
          </label>
          <label class="input input-bordered flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
          <input type="password" class="grow" placeholder="Contraseña"/>
          </label>
          <button class="btn btn-primary" @click="authenticate">Iniciar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '~/stores/auth';
  import { useRouter } from '#app';
  export default {
    setup() {
      const router = useRouter()
      const authStore = useAuthStore() // Get auth store

      const authenticate = () => {
        authStore.authenticate() // Authenticate user
        router.push('/dashboard') //Send to Dashboard 
      }

      return {
        authenticate,
      }
    },
  }
  </script>