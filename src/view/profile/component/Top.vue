<script setup lang="ts">
import {Iphone, Location, OfficeBuilding, Tickets, User} from "@element-plus/icons-vue";
import {computed, ref} from 'vue'

import type {ComponentSize} from 'element-plus'

const size = ref<ComponentSize>('default')

const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const errorHandler = () => true
</script>

<template>
  <div style="width: 100%;display: flex;flex-direction: column;align-items: center;margin-top: 40px">
    <el-avatar :size="120" src="https://empty" @error="errorHandler">
      <img
          src="@/assets/images/avatar.gif"
      />
    </el-avatar>
    <div>
      <el-descriptions
          class="margin-top"
          title="用户信息"
          :column="3"
          :size="size"
          border
      >
        <template #extra>
          <el-button type="primary">修改信息</el-button>
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <user/>
              </el-icon>
              用户名
            </div>
          </template>
          thisdcw
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone/>
              </el-icon>
              手机号
            </div>
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <location/>
              </el-icon>
              所在城市
            </div>
          </template>
          广州
        </el-descriptions-item>
        <!--        <el-descriptions-item>-->
        <!--          <template #label>-->
        <!--            <div class="cell-item">-->
        <!--              <el-icon :style="iconStyle">-->
        <!--                <tickets/>-->
        <!--              </el-icon>-->
        <!--              技能-->
        <!--            </div>-->
        <!--          </template>-->
        <!--          <div style="display: flex;flex-direction: column">-->
        <!--            <el-tag size="small">java</el-tag>-->
        <!--            <el-tag size="small">Web</el-tag>-->
        <!--            <el-tag size="small">SpringBoot</el-tag>-->
        <!--          </div>-->
        <!--        </el-descriptions-item>-->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building/>
              </el-icon>
              地址
            </div>
          </template>
          拉尼亚凯亚超星系团 室女座超星系团 银河系 太阳系 地球村 中国 广州
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>
