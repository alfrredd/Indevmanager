import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if (to.path === '/dashboard' && !authStore.isAuthenticated) {
        return navigateTo('/login')
    }
  })