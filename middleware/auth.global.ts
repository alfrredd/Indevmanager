import { useAuthStore } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if (to.path === '/dashboard' && !authStore.isAuthenticated) {
        return navigateTo('/login')
    }
  })