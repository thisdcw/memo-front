<script setup lang="ts">

import Left from "@/view/profile/component/Left.vue";
import Right from "@/view/profile/component/Right.vue";
</script>

<template>
  <div style="display: flex;flex-direction: row;width: 100%">
    <div style="display: flex;flex: 3">
      <Left/>
    </div>
    <el-divider content-position="left" direction="vertical" style="height: 100%">Rabindranath Tagore</el-divider>
    <div style="display:flex;flex: 2">
      <Right/>
    </div>
  </div>
</template>

<style scoped>

</style>
