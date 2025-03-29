import { defineStore } from 'pinia'

interface State {
  count: number
}

export const useStore = defineStore('store', {
  state: (): State => {
    return {
      count: 0,
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    doubleCountPlusOne(): number {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
