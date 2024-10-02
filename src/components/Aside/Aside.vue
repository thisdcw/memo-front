<template>
  <div style="height: 100vh">
    <div>Memo 后台管理系统</div>
    <el-radio-group style="margin-bottom: 20px">
      <!-- <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button> -->
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span @click="getCurrent">管理模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item route="/111" index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">设备管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>其他功能</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>个人中心</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentUser } from './../../api/user';

const getCurrent = async () => {
  await getCurrentUser().then((res: any) => {
    console.log(res);
  });
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
