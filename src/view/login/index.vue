<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="../../assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/vite.svg"  alt="" />
          <h2 class="logo-text">Memo-Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/view/login/component/LoginForm.vue";

</script>

<style scoped>
@import "./index.scss";
</style>
