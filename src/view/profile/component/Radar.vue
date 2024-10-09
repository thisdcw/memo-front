<template>
  <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue';
import * as echarts from 'echarts';

const chartRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    const myChart = echarts.init(chartRef.value);

    // 设置图表的配置项和数据
    const option = {
      title: {
        text: '框架',
        // left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      radar: {
        indicator: [
          {name: 'SpringBoot', max: 100},
          {name: 'Vue3', max: 100},
          {name: 'Vite', max: 100},
          {name: 'mvvm', max: 100},
          {name: 'SSM', max: 100},
          {name: 'element-plus', max: 100}
        ],
        shape: 'circle'
      },
      series: [
        {
          name: '技能分布',
          type: 'radar',
          data: [
            {
              value: [90, 60, 50, 70, 60, 50],
              name: '框架'
            }
          ],
          areaStyle: {}
        }
      ]
    };

    // 使用配置项设置图表
    myChart.setOption(option);

    // 监听窗口调整事件
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    // 清理事件监听
    onUnmounted(() => {
      window.removeEventListener('resize', () => {
        myChart.resize();
      });
    });
  }
});
</script>

<style scoped>
/* 添加样式以确保容器有固定尺寸 */
div {
  width: 100%;
  height: 400px;
}
</style>
