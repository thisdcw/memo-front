<template>
  <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';

const chartRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    const myChart = echarts.init(chartRef.value);

    // 设置图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用配置项设置图表
    myChart.setOption(option);
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
