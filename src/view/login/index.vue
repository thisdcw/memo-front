<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="../../../public/vite.svg" alt="login"/>
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="../../../public/vite.svg" alt=""/>
          <h2 class="logo-text">Geeker-Admin</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {setToken} from '@/utils/auth';

const router = useRouter();
const route = useRoute();

const form = reactive({
  username: '',
  password: ''
});

const rememberMe = ref(false);

const navigate = () => {
  // 这里可以添加登录逻辑，比如验证用户
  setToken('1111111'); // 设置 token
  router.push({
    path: (route.query.redirect as string) || '/'
  });
};

const goToRegister = () => {
  // router.push('/register'); // 跳转到注册页面
};
</script>

<style scoped>
@import "./index.scss";
</style>
