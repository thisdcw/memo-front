<template>
  <div class="calendar-container">
    <el-calendar v-model="value" class="square-calendar"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>

<style scoped>
.calendar-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.square-calendar {
  width: 100%; /* 确保日历在容器内 */
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transform: scale(0.8); /* 根据需要调整缩放比例 */
  transform-origin: top left;
}
</style>
