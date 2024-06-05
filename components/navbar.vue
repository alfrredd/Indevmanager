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
        <li><a @click="goToUsers">Perfil</a></li>
        <li><a onclick="settings.showModal()">Ajustes</a></li>
        <li><a @click="logOut">Cerrar sesión</a></li>
      </ul>
      </div>
    </div>
</div>
<dialog id="settings" class="modal modal-top sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-3">Ajustes</h3>
    <div class="flex flex-row">
      <p class="py-4 mr-4">Tema </p>
      <div class="join join-horizontal items-center">
        <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Sistema" value="default"/>
        <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Oscuro" value="dark"/>
        <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Claro" value="corporate"/>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Cerrar</button>
      </form>
    </div>   
  </div>
</dialog>
</template>

<script setup>
import { useRouter } from '#app';
import { useAuthStore } from '#imports';

const router = useRouter()
const authStore = useAuthStore()

const goToUsers = () => {
  router.push({ path: '/dashboard', query: {tab: 'users'}})
}

const logOut = () => {
  authStore.setAuthenticated(false) // Set state to not authenticated
  router.push('/login') //Send back to Login
}
</script>
