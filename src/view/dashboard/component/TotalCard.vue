<script setup lang="ts">

</script>

<template>
  <el-card style="max-width: 480px" shadow="never">
    <p v-for="o in 4" :key="o" class="text item">{{ '统计 ' + o }}</p>
  </el-card>
</template>

<style scoped>

</style>
