<script setup lang="ts">
import Left from "@/view/profile/component/Left.vue";
import Right from "@/view/profile/component/Right.vue";
</script>

<template>
  <div class="container">
    <div class="left-section">
      <Left />
    </div>
    <div class="right-section">
      <Right />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 1%;
  width: 98%;
  height: 98%;
  background-color: white;
}

.left-section {
  flex: 3;
  display: flex;
}

.right-section {
  flex: 2;
  display: flex;
}

.divider {
  height: 100%;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .divider {
    width: 100%;
    height: auto;
    margin: 20px 0;
    direction: horizontal;
  }

  .left-section,
  .right-section {
    width: 100%;
  }
}
</style>
