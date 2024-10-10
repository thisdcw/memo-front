<script setup lang="ts">
import * as echarts from 'echarts';
import 'echarts-gl';
import {ref, onMounted, onBeforeUnmount} from 'vue';

const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);

    const option = {
      // title: {
      //   text: '3D 饼图示例',
      //   left: 'center',
      //   textStyle: {
      //     color: '#333',
      //     fontSize: 18,
      //     fontWeight: 'bold'
      //   }
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#FF6F61'],
      legend: {
        orient: 'vertical',
        left: 'right',
        top: 'center',
        textStyle: {
          fontSize: 12,
          color: '#333'
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          roseType: 'radius',
          label: {
            show: false // 隐藏标签
          },
          labelLine: {
            show: false // 隐藏标签线
          },
          data: [
            {value: 1048, name: 'A'},
            {value: 735, name: 'B'},
            {value: 580, name: 'C'},
            {value: 484, name: 'D'},
            {value: 300, name: 'E'}
          ],
          itemStyle: {
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 20,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
  <div class="pie-container">
    <div ref="chartRef" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<style scoped>
.pie-container {
  background-color: white;
  width: 100%;
}
</style>
