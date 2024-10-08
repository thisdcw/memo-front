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
        <el-header>
          <cs-header/>
        </el-header>
        <el-main>
          <el-watermark :content="['thisdcw']">
            <app-main/>
          </el-watermark>
        </el-main>
        <el-footer>
          <cs-footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  padding: 2rem;
}
</style>
