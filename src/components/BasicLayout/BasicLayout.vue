<script setup lang="ts">
</script>

<template>
  <div class="common-layout">
    <el-container style="width: 100%; height: 100vh">
      <el-aside width="200px">
        <cs-aside />
      </el-aside>
      <el-container>
        <el-header>
          <cs-header />
        </el-header>
        <el-main>
          <el-watermark :font="111">
            <div style="height: 800px; width: 100px">
              <router-view></router-view>
            </div>
          </el-watermark>
        </el-main>
        <el-footer>
          <cs-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
