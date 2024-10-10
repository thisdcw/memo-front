<script setup lang="ts">

</script>

<template>
  <div style="display: flex;flex-direction: column;text-align: left;background-color: white;border-radius: 24px;padding: 20px 6px">
    <span>热门事件</span>
    <el-card style="max-width: 480px;margin-top: 10px;height: 100%" shadow="never" border="false">
      <p v-for="o in 4" :key="o" class="text item">{{ '热门事件 ' + o }}</p>
    </el-card>
  </div>
</template>

<style scoped>
</style>
