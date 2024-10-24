<template>
  <div style="height: 100vh">
    <el-menu
      :collapse-transition="false"
      :default-active="defaultActive"
      :collapse="isCollapsed"
      :unique-opened="true"
      router
      class="el-menu-vertical-demo"
    >
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
        "
      >
        <span style="font-weight: bolder; font-size: 16px">{{
          isCollapsed ? 'memo' : 'memo后台'
        }}</span>
      </div>
      <el-menu-item index="/welcome">
        <el-icon>
          <House />
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/dashboard">
        <el-icon>
          <DataAnalysis />
        </el-icon>
        <template #title>数据看板</template>
      </el-menu-item>
      <el-sub-menu index="/1">
        <template #title>
          <el-icon>
            <Star />
          </el-icon>
          <span>管理模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">
            <el-icon>
              <User />
            </el-icon>
            <span> 用户管理</span>
          </el-menu-item>
          <el-menu-item index="/device">
            <el-icon>
              <Operation />
            </el-icon>
            <span>设备管理</span>
          </el-menu-item>
          <el-menu-item index="/oss">
            <el-icon>
              <Document />
            </el-icon>
            <span>文件管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/other">
        <el-icon>
          <Collection />
        </el-icon>
        <template #title>其他功能</template>
      </el-menu-item>
      <el-menu-item index="/profile">
        <el-icon>
          <Setting />
        </el-icon>
        <template #title>个人中心</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Collection,
  DataAnalysis,
  Document,
  Expand,
  Fold,
  House,
  Operation,
  Setting,
  Star,
  User
} from '@element-plus/icons-vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { eventBus } from '@/store/event/eventBus';

const myRoutes = router.getRoutes();
console.log('所有路由', myRoutes);
const route = useRoute();
const isCollapsed = ref(false);
const defaultActive = ref(route.path ?? '/');

eventBus.on('collapse-changed', (isCollapse: boolean) => {
  console.log('菜单折叠状态:', isCollapse);
  isCollapsed.value = isCollapse;
});
watch(
  () => route.path,
  (newPath) => {
    defaultActive.value = newPath;
  }
);
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: calc(100vh);
}

:deep(.el-menu--collapse-transition) {
  transition: width 0.3s ease !important; // 更短的动画时间
}

:deep(.el-menu) {
  width: 100%;
  overflow-x: hidden;
}

// 覆盖激活样式
:deep(.el-menu-item.is-active) {
  background-color: #409eff !important; // 激活背景色
  color: #fff !important; // 激活字体颜色
}

// 覆盖未激活样式
:deep(.el-menu-item) {
  background-color: #ffffff; // 未激活背景色
  color: #606266; // 未激活字体颜色
}

:deep(.el-menu-item:hover) {
  background-color: #c2ddfa !important; // 鼠标悬浮背景色
  color: white;
}

:deep(.el-menu-item.is-active) {
  background-color: #4ea1fa !important; // 激活背景色
  color: #fff !important; // 激活字体颜色
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px; // 调整为你想要的宽度
    background-color: #027bfb; // 设置长条的颜色
    border-radius: 2px; // 可选，为长条加上圆角
  }
}
</style>
