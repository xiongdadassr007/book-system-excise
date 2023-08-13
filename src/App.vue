<script setup>
import { useUserloginData, useCounterData } from '@/store'
const userloginData = useUserloginData()
const counterData = useCounterData()
</script>

<template>
  <div>App</div>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <h2>{{ userloginData.token }}</h2>
  <el-button @click="userloginData.setToken" type="success">登录</el-button>
  <el-button @click="userloginData.clearToken" type="info">注销</el-button>
  <h2>{{ counterData.counter }}</h2>
  <el-button @click="counterData.addCounter" type="success">+2</el-button>
  <el-button @click="counterData.reduceCounter" type="info">-2</el-button>
  <test-need-component></test-need-component>
</template>

<style scoped></style>
