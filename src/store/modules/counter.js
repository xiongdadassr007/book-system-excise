import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterData = defineStore(
  'counterData',
  () => {
    const counter = ref('')
    const addCounter = () => {
      counter.value += 2
    }
    const reduceCounter = () => {
      counter.value -= 2
    }
    return {
      counter,
      addCounter,
      reduceCounter
    }
  },
  { persist: true }
)
