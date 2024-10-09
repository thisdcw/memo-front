<template>
  <div style="height: 100vh;">
    <el-menu :default-active="defaultActive" :collapse="isCollapse" class="el-menu-vertical-demo" router>
      <!--      <div @click="isCollapse = !isCollapse">-->
      <!--        <div v-if="isCollapse" style="width:63px ">-->
      <!--          <Expand style="height: 20px;"/>-->
      <!--        </div>-->
      <!--        <div v-if="!isCollapse" style="width: 100%;display: flex;justify-content: flex-end;">-->
      <!--          <Fold style="height: 20px;margin-right: 15px"/>-->
      <!--        </div>-->
      <!--      </div>-->
      <div style="display: flex;justify-content: center;align-items: center;height: 60px;">
        <span style="font-weight: bolder;font-size: 16px">memo管理系统</span>
      </div>
      <el-menu-item index="/welcome">
        <el-icon>
          <House/>
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/dashboard">
        <el-icon>
          <DataAnalysis/>
        </el-icon>
        <template #title>数据看板</template>
      </el-menu-item>
      <el-sub-menu index="/1">
        <template #title>
          <el-icon>
            <Star/>
          </el-icon>
          <span>管理模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">
            <el-icon>
              <User/>
            </el-icon>
            <span> 用户管理</span>
          </el-menu-item>
          <el-menu-item index="/device">
            <el-icon>
              <Operation/>
            </el-icon>
            <span>设备管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/other">
        <el-icon>
          <Collection/>
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
import {Collection, DataAnalysis, House, Operation, Setting, Star, User} from "@element-plus/icons-vue";
import {ref, watch} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const isCollapse = ref(false)
const defaultActive = ref(route.path ?? '/')

// 监听路由变化
watch(
    () => route.path,
    (newPath) => {
      defaultActive.value = newPath
    }
)
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
}

// 覆盖激活样式
:deep(.el-menu-item.is-active) {
  background-color: #409EFF !important; // 激活背景色
  color: #fff !important; // 激活字体颜色
}

// 覆盖未激活样式
:deep(.el-menu-item) {
  background-color: #ffffff; // 未激活背景色
  color: #606266; // 未激活字体颜色
}

:deep(.el-menu-item:hover) {
  background-color: #78b6f6 !important; // 鼠标悬浮背景色
  color: white;
}
</style>
