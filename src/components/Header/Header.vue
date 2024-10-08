<template>
  <div>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item class="no-hover">
        <img
            style="width: 100%;height: 100%"
            src="../../../public/vite.svg"
            alt="Element logo"
        />
      </el-menu-item>
      <el-menu-item class="no-hover">
        <Plus v-if="!isFull" @click="fullScreen" style="width: 40px"/>
        <Minus v-if="isFull" @click="fullScreen" style="width: 40px"/>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>操作</template>
        <el-menu-item @click="logout">注销登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {removeToken} from "@/utils/auth";
import {Minus, Plus} from "@element-plus/icons-vue";
import {ref} from "vue";

const router = useRouter(); // 获取路由实例
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const isFull = ref(false)

const logout = () => {
  removeToken()
  router.replace({path: '/login'});
}
const fullScreen = () => {
  const el = document.documentElement; // 或指定你想全屏的元素
  if (!document.fullscreenElement) {
    isFull.value = true;
    el.requestFullscreen?.().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    isFull.value = false;
    document.exitFullscreen?.();
  }
}
</script>

<style lang="scss" scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu-item.no-hover:hover {
  background-color: transparent !important;
}
</style>
