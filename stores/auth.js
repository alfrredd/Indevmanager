import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false, // Default state
  }),
  actions: {
    setAuthenticated(value) {
      this.isAuthenticated = value;
    },
    authenticate() {
      this.setAuthenticated(true); // Action to set to true when authenticated
    },
  },
  getters: {
    isItAuthenticated: (state) => state.isAuthenticated,
  },
})