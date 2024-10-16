<script setup lang="ts">
import {reactive, ref} from 'vue';
import {CircleClose, Lock, User, UserFilled} from '@element-plus/icons-vue';
import {ElForm, ElMessage} from 'element-plus';
import {useRoute, useRouter} from 'vue-router';
import {UserService} from '@/api/user';

const router = useRouter();
const route = useRoute();

type FormInstance = InstanceType<typeof ElForm>;

const loading = ref(false);
const loginFormRef = ref<FormInstance>();


const loginRules = reactive({
  username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  password: [{required: true, message: '请输入密码', trigger: 'blur'}]
});
const loginForm = reactive({
  username: '',
  password: ''
});
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  // 这里可以添加登录逻辑，比如验证用户
  UserService.login(loginForm.username, loginForm.password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        ElMessage.success('欢迎回来 ~~~ ' + res.username);
        router.push({
          path: (route.query.redirect as string) || '/'
        });
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error('登录失败');
      });
};

</script>

<template>
  <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      size="large"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <User/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码：123456"
          show-password
          autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button
        :icon="CircleClose"
        round
        size="large"
        @click="resetForm(loginFormRef)"
    >
      重置
    </el-button
    >
    <el-button
        :icon="UserFilled"
        round
        size="large"
        type="primary"
        :loading="loading"
        @click="login(loginFormRef)"
    >
      登录
    </el-button>
  </div>
</template>

<style scoped></style>
