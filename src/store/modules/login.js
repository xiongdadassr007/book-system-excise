import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserloginData = defineStore(
  'userloginData',
  () => {
    const token = ref('')
    const setToken = () => {
      token.value = '123443dcv'
    }
    const clearToken = () => {
      token.value = ''
    }
    return {
      token,
      setToken,
      clearToken
    }
  },
  { persist: true }
)
