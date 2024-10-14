<script setup lang="ts">
import {SwitchButton,} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import FullScreen from "@/components/Header/component/FullScreen.vue";
import {userStore} from "@/store";

const store = userStore();

const router = useRouter(); // 获取路由实例
const logout = () => {
  store.clearUser();
  router.replace({path: '/login'});
}
</script>

<template>
  <div style="flex: 1;display: flex;justify-content: flex-end;align-items: center">
    <div style="display: flex;margin-right: 20px">
      <FullScreen/>
    </div>
    <span class="username">admin</span>
    <el-dropdown trigger="click">
      <div class="avatar">
        <img src="@/assets/images/avatar.svg" alt="avatar"/>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">
            <el-icon>
              <SwitchButton/>
            </el-icon>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>

</style>
