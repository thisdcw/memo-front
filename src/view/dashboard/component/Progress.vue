<template>
  <div class="demo-progress">
    <span></span>
    <el-progress :percentage="50" :stroke-width="15" striped/>
    <el-progress
        :percentage="90"
        :stroke-width="15"
        striped
        striped-flow
        :duration="10"
    />
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
