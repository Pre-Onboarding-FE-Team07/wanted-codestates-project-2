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
import { colors } from '@/styles/theme';
import {
  Chart, ChartData, ChartOptions, registerables,
} from 'chart.js';
import { onMounted, ref } from 'vue';

Chart.register(...registerables);

const canvasRef = ref();

const data: ChartData<'line'> = {
  labels: [...Array(20)].map((_, i) => `Label ${i + 1}`),
  datasets: [
    {
      fill: false,
      borderColor: colors.main,
      borderWidth: 1,
      pointBackgroundColor: colors.main,
      pointRadius: 2,
      data: [...Array(20)].map(() => Math.random() * 10),
    },
  ],
};

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      position: 'top',
      display: false,
    },
  },
};

onMounted(() => {
  const ctx = canvasRef.value.getContext('2d');
  const _ = new Chart(ctx, {
    type: 'line',
    data,
    options,
  });
});

</script>
