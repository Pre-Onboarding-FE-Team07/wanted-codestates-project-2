<template>
  <div class="flex flex-col items-center gap-3">
    <svg
      :width="size * 2"
      :height="size * 2"
      overflow="visible"
    >
      <circle
        :cx="size"
        :cy="size"
        :r="radius"
        fill="transparent"
        :stroke-width="stroke"
      />
      <circle
        :cx="size"
        :cy="size"
        :r="radius"
        fill="transparent"
        :stroke="colors.main"
        :stroke-width="stroke"
        class="animate-spin origin-center"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference / 3"
      />
    </svg>
    <span
      v-if="desc"
      class="text-xs"
    >{{ desc }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { colors } from '@/styles/theme';

const props = withDefaults(defineProps<{
  size?: number;
  desc?: string;
}>(), {
  size: 30,
  desc: '',
});

const stroke = computed(() => props.size / 5);
const radius = computed(() => props.size - stroke.value);
const circumference = computed(() => 2 * Math.PI * (props.size - stroke.value));
</script>
