<script setup lang="ts">

import PieChart from "@/view/profile/component/PieChart.vue";
import Radar from "@/view/profile/component/Radar.vue";
</script>

<template>
  <div style="width: 100%;height:100%;display: flex;flex-direction: column">
    <div style="display: flex;flex: 1">
      <PieChart/>
    </div>
    <div style="display: flex;flex: 1">
      <Radar/>
    </div>
  </div>
</template>

<style scoped>

</style>
