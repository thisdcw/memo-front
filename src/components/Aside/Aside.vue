<template>
  <div style="height: calc(100vh - 4rem);">
    <el-menu default-active="/dashboard" :collapse="isCollapse" class="el-menu-vertical-demo" router>
      <div @click="isCollapse = !isCollapse">
        <div v-if="isCollapse" style="width:63px ">
          <Expand style="height: 20px;"/>
        </div>
        <div v-if="!isCollapse" style="width: 100%;display: flex;justify-content: flex-end;">
          <Fold style="height: 20px;margin-right: 15px"/>
        </div>
      </div>
      <el-menu-item index="/dashboard">
        <el-icon>
          <DataAnalysis/>
        </el-icon>
        <template #title>数据看板</template>
      </el-menu-item>
      <el-sub-menu index="/1">
        <template #title>
          <el-icon>
            <Management/>
          </el-icon>
          <span>管理模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/device">设备管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/other">
        <el-icon>
          <Menu/>
        </el-icon>
        <template #title>其他功能</template>
      </el-menu-item>
      <el-menu-item index="/profile">
        <el-icon>
          <Setting/>
        </el-icon>
        <template #title>个人中心</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {DataAnalysis, Expand, Fold, Management, Menu, Setting} from "@element-plus/icons-vue";
import {ref} from "vue";

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: calc(90vh - 4rem);
}
</style>
