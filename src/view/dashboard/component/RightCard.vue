<script setup lang="ts">
import PieChart from "@/view/dashboard/component/PieChart.vue";
import Progress from "@/view/dashboard/component/Progress.vue";
import TotalCard from "@/view/dashboard/component/TotalCard.vue";
import Calendar from "@/view/dashboard/component/Calendar.vue";
</script>

<template>
  <div class="right-card-container">
    <PieChart class="card"/>
    <TotalCard class="card"/>
    <Progress class="card"/>
  </div>
</template>

<style scoped>
.right-card-container {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 24px;
  padding: 0 10px;
  display: flex;
  flex-direction: column; /* 设置为行方向 */
  justify-content: space-between; /* 使其均匀分布 */
}

.card {
  flex: 1; /* 每个卡片组件占据相同的空间 */
  margin: 10px 0; /* 添加间距 */
}
</style>
