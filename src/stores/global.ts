import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    today: new Date()
  }),
  actions: {
    setDate() {
      this.today = new Date()
    }
  }
})
