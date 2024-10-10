<script setup lang="ts">
import * as echarts from 'echarts';
import {ref, onMounted, onBeforeUnmount} from 'vue';

const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;
let currentIndex = 0;

// 数据
const categories = ['go', 'typescript', 'javascript', 'python', 'java'];
const data = [
  [10, 15, 35, 50, 80],
  [20, 30, 25, 45, 90],
  [30, 25, 20, 65, 100],
  [50, 35, 10, 85, 110],
  [60, 55, 30, 105, 130]
];

const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);

    const option = {
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: categories
      },
      series: [
        {
          type: 'bar',
          data: data[currentIndex],
          itemStyle: {
            color: '#5b8ff9'
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ],
      animationDuration: 1000
    };

    chartInstance.setOption(option);

    setInterval(() => {
      currentIndex = (currentIndex + 1) % data.length;
      chartInstance?.setOption({
        series: [
          {
            data: data[currentIndex]
          }
        ]
      });
    }, 2000); // 每2秒更新数据
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
  <div class="bar-container">
    <div style="margin-top: 10px">
      <span>热门语言</span>
    </div>
    <div>
      <div ref="chartRef" style="width: 100%; height: 350px;"></div>
    </div>
  </div>
</template>

<style scoped>
.bar-container {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background-color: white;
}
</style>
