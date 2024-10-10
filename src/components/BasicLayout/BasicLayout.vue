<script setup lang="ts">
</script>

<template>
  <div class="common-layout">
    <el-watermark :content="['']" style="flex: 1; display: flex;">
      <el-container>
        <!--侧边栏-->
        <el-aside style="width: 12%; min-width: 150px;">
          <cs-aside/>
        </el-aside>
        <!--主要内容-->
        <el-container style="width: 88%; height: 100%;">
          <el-header>
            <cs-header/>
          </el-header>
          <el-main class="el-main">
            <app-main class="app-main"></app-main>
          </el-main>
          <el-footer style="height: 31px">
            <cs-footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-watermark>
  </div>
</template>

<style lang="scss" scoped>
.el-main {
  background-color: #EFF0F2;
  margin: 0;
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
}

.common-layout {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .common-layout {
    flex-direction: column;

    .el-aside {
      width: 100%;
      min-width: auto;
    }

    .el-main {
      padding: 4px;
    }
  }
}
</style>
