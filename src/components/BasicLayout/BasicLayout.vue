<script setup lang="ts">
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!--侧边栏-->
      <el-aside style="width: calc(14vw - 2rem)">
        <cs-aside/>
      </el-aside>
      <!--主要内容-->
      <el-container>
        <el-header style="width: calc(86vw - 2rem)">
          <cs-header/>
        </el-header>
        <el-main style="background-color: #EFF0F2; margin: 0; padding: 8px; flex: 1; display: flex; flex-direction: column;">
          <el-watermark :content="['']" style="flex: 1; display: flex;">
            <app-main style="flex: 1; display: flex;"></app-main>
          </el-watermark>
        </el-main>
        <el-footer style="height: 31px">
          <cs-footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
</style>
