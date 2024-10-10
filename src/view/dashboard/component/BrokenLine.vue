<script setup lang="ts">
import * as echarts from 'echarts';
import {ref, onMounted, onBeforeUnmount} from 'vue';

const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);

    const option = {
      title: {
        // text: '折线图',
        left: '30',
        top:'20',
        textStyle: {
          color: '#333',
          fontSize: 18,
          fontWeight: 'bold'
        }

      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['数据1', '数据2']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '数据1',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '数据2',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };

    chartInstance.setOption(option);
  }
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', () => {
    chartInstance?.resize();
  });
});

onBeforeUnmount(() => {
  chartInstance?.dispose();
});
</script>

<template>
  <div style="background-color: white;border-radius: 24px">
    <div ref="chartRef" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<style scoped>
</style>
