<script setup lang="ts">

import {ref} from "vue";
import {Expand, Fold} from "@element-plus/icons-vue";
import {eventBus} from "@/store/event/eventBus";

const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
  eventBus.emit('collapse-changed', isCollapse.value);
};

</script>

<template>
  <div style="flex: 1;">
    <div @click="toggleCollapse" style="display: flex;flex-direction: row;align-items: center;height: 100%">
      <div v-if="isCollapse">
        <Expand style="height: 20px;"/>
      </div>
      <div v-if="!isCollapse">
        <Fold style="height: 20px;"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
