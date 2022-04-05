<template>
  <board-container>
    <template #header>
      <span class="text-main">트랙</span> 전적
    </template>
    <template #sub-header>
      <span>평균 상위</span>
      <span class="text-main">4.20</span>%
    </template>
    <template #content>
      <div class="p-2">
        <h3 class="mb-1 text-sm after:content-['기록분포'] after:text-gray-400">
          빌리지 운명의 다리
        </h3>
        <canvas
          ref="canvasRef"
        />
      </div>
      <record-table />
    </template>
  </board-container>
</template>

<script lang="ts" setup>
import BoardContainer from '@/components/user/BoardContainer.vue';
import RecordTable from '@/components/user/RecordTable.vue';
import { colors } from '@/styles/theme';
import Chart from 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';
import { onMounted, ref } from 'vue';
import { lighten } from 'polished';

const canvasRef = ref<HTMLCanvasElement>();

const data: ChartData<'line'> = {
  labels: [...Array(50)].map((_, i) => `Label ${i + 1}`),
  datasets: [
    {
      fill: true,
      borderColor: colors.main,
      borderWidth: 1,
      backgroundColor: lighten(0.4, colors.main),
      data: [...Array(50)].map(() => Math.random() * 10),
    },
  ],
};

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

onMounted(() => {
  const ctx = canvasRef.value?.getContext('2d');
  if (!ctx) return;
  const _ = new Chart(ctx, {
    type: 'line',
    data,
    options,
  });
});
</script>
