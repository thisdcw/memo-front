<template>
  <div style="display: flex;align-items: center">
    <el-image :src="imageSrc" style="width: 40px" @click="handleFullScreen"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";

// 导入图片
import fangdaImg from '@/assets/images/fangda.png';
import suoxiaoImg from '@/assets/images/suoxiao.png';

// 创建 ref 来控制是否全屏
const isFullscreen = ref(screenfull.isFullscreen);

// 默认图像
const imageSrc = ref(fangdaImg);

onMounted(() => {
  screenfull.on("change", () => {
    isFullscreen.value = screenfull.isFullscreen;
    // 更新图像源
    imageSrc.value = isFullscreen.value ? suoxiaoImg : fangdaImg;
  });
});

// 处理全屏逻辑
const handleFullScreen = () => {
  if (!screenfull.isEnabled) {
    ElMessage.warning("当前您的浏览器不支持全屏 ❌");
    return;
  }
  screenfull.toggle();
};
</script>

<style scoped>
</style>
