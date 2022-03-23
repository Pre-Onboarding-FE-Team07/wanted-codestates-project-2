<template>
  <board-container>
    <template #header>
      <span class="text-main">순위변동</span> 추이
    </template>
    <template #sub-header>
      <span>지난 200경기</span>
      <span class="text-main">1.58위</span>
      <span>최근 50경기</span>
      <span class="text-main">1.6위</span>
    </template>
    <template #content>
      <canvas
        ref="canvasRef"
        class="mb-4"
      />
    </template>
  </board-container>
</template>

<script lang="ts" setup>
import BoardContainer from '@/components/user/BoardContainer.vue';
import {
  Chart, ChartData, ChartOptions, registerables,
} from 'chart.js';
import { onMounted, ref } from 'vue';

Chart.register(...registerables);

const canvasRef = ref();

const data: ChartData<'line'> = {
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
  }],
};

const options: ChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

onMounted(() => {
  const ctx = canvasRef.value.getContext('2d');
  const lineChart = new Chart(ctx, {
    type: 'line',
    data,
    options,
  });
});

</script>
