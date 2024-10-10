<script setup lang="ts">

</script>

<template>
  <div class="todo-container">
    <div style="margin-bottom: 6px">
      <span>待办事件</span>
    </div>
    <el-card style="max-width: 480px;width: 100%;height: 100%" shadow="never">
      <p v-for="o in 4" :key="o" class="text item">{{ '待办事件 ' + o }}</p>
    </el-card>
  </div>
</template>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;
  padding: 2% 1%;
}
</style>
