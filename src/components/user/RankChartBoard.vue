<template>
  <board-container>
    <template #header>
      <span class="text-main">순위변동</span> 추이
    </template>
    <template #sub-header>
      <span>지난 {{ rank.total.gameCount }}경기</span>
      <span class="text-main">{{ rank.total.rankRate }}위</span>
      <span>최근 {{ rank.recent.gameCount }}경기</span>
      <span class="text-main">{{ rank.recent.rankRate }}위</span>
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

export type RankType = {
  labels: string[],
  data: number[];
  total: {
    gameCount: number;
    rankRate: number;
  };
  recent: {
    gameCount: number;
    rankRate: number;
  }
};

Chart.register(...registerables);

const canvasRef = ref();

const props = defineProps<{
  rank: RankType;
}>();

const data: ChartData<'line'> = {
  labels: props.rank.labels,
  datasets: [
    {
      fill: false,
      borderColor: colors.main,
      borderWidth: 1,
      pointBackgroundColor: colors.main,
      pointRadius: 2,
      data: props.rank.data,
      tension: 0.2,
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
    y: {
      reverse: true,
      min: 1,
      max: 8,
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
