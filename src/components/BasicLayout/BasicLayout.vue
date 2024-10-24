<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserService} from "@/api/user";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import {userStore} from "@/store";
import {eventBus} from "@/store/event/eventBus";

const router = useRouter();
const store = userStore();
const asideIsCollapse = ref(false);

const fetchUserInfo = () => {
  UserService.getCurrentUser().then(data => {
    store.setUser(data)
    ElMessage.success('获取用户信息成功')
  }).catch(err => {
    store.clearUser()
    localStorage.removeItem('token');
    router.replace('/login')
    ElMessage.error('获取用户失败,请重新登录')
  })
}
eventBus.on('collapse-changed', (isCollapse: boolean) => {
  asideIsCollapse.value = isCollapse;
});
onMounted(() => {
  fetchUserInfo()
})
</script>

<template>
  <div class="common-layout">
    <el-watermark :content="['']" style="flex: 1; display: flex;">
      <el-container>
        <!--侧边栏-->
        <el-aside>
          <div class="aside-box" :style="{ width: asideIsCollapse ? '65px' : '210px' }">
            <el-scrollbar>
              <cs-aside/>
            </el-scrollbar>
          </div>
        </el-aside>
        <!--主要内容-->
        <el-container style=" height: 100%;">
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
.el-container {
  :deep(.el-aside) {
    width: auto;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);

    .aside-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: width 0.3s ease;

    }
  }
}

.el-aside-transition {
  transition: width 0.3s ease; /* 调整时间和效果 */
}

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
  height: 100%;
}

@media (max-width: 768px) {
  .common-layout {
    flex-direction: column;

    .el-main {
      padding: 4px;
    }
  }
}
</style>
