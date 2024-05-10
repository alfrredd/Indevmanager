<template>
<div class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">Indev Manager</a>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Profile Image" src="/personcircle.svg" />
        </div>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Perfil</a></li>
        <li><a>Ajustes</a></li>
        <li><a @click="logOut">Cerrar sesión</a></li>
      </ul>
      </div>
      <div class="dropdown mb-1">
        <div tabindex="0" role="button" class="btn m-1">
          Tema
          <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Sistema" value="default"/></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Oscuro" value="dark"/></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Claro" value="corporate"/></li>
        </ul>
      </div>
    </div>
</div>
</template>

<script setup>
import { useRouter } from '#app';
import { useAuthStore } from '~/stores/auth';

const router = useRouter()
const authStore = useAuthStore()
const logOut = () => {
  authStore.setAuthenticated(false) // Set state to not authenticated
  router.push('/login') //Send back to Login
}
</script>
