<template>
  <board-container>
    <template #header>
      <span class="text-main">순위변동</span> 추이
    </template>
    <template #sub-header>
      <span>지난 {{ rank.last.game }}경기</span>
      <span class="text-main">{{ rank.last.rate }}위</span>
      <span>최근 {{ rank.recent.game }}경기</span>
      <span class="text-main">{{ rank.recent.rate }}위</span>
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
import { computed, onMounted, ref } from 'vue';

export type RankType = {
  data: number[];
  last: {
    game: number;
    rate: number;
  };
  recent: {
    game: number;
    rate: number;
  }
};

Chart.register(...registerables);

const canvasRef = ref();

const props = defineProps<{
  rank: RankType;
}>();

const labels = computed(() => Array.from(
  { length: props.rank.data.length },
  (_, i) => `이전 ${i + 1}경기`,
));

console.log(labels.value);

const data: ChartData<'line'> = {
  labels: labels.value.slice().reverse(),
  datasets: [
    {
      fill: false,
      borderColor: colors.main,
      borderWidth: 1,
      pointBackgroundColor: colors.main,
      pointRadius: 2,
      data: props.rank.data.slice().reverse(),
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
