import { defineStore } from "#imports";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    setAuthenticated(value: boolean) {
      this.isAuthenticated = value;
    },
    authenticate() {
      this.setAuthenticated(true);
    },
  },
  getters: {
    isItAuthenticated: (state) => state.isAuthenticated,
  },
})