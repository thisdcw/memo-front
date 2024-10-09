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
        text: '我的技能',
        // left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 'bottom'
      // },
      series: [
        {
          name: '技能',
          type: 'pie',
          radius: [50, 100],
          center: ['50%', '50%'],
          roseType: 'area', // 设置为南丁格尔玫瑰图
          data: [
            {value: 20, name: 'Python'},
            {value: 60, name: 'web'},
            {value: 90, name: 'java'},
            {value: 15, name: 'C语言'},
            {value: 65, name: '小程序'},
            {value: 75, name: 'Android'}
          ],
          itemStyle: {
            borderRadius: 8
          },
          animationType: 'scale',
          animationEasing: 'elasticOut'
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
