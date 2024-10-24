<template>
  <div style="display: flex;flex-direction: row;height: 100%">
    <Left/>
    <Right/>
  </div>
</template>

<script lang="ts" setup>

import Left from "@/components/Header/component/Left.vue";
import Right from "@/components/Header/component/Right.vue";


</script>

<style lang="scss" scoped>

.el-menu-item.no-hover:hover {
  background-color: transparent !important;
}
</style>
