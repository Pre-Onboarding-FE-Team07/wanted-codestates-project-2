<template>
  <div class="text-center">
    <h3
      v-if="title"
      class="mb-3 text-sm"
    >
      {{ title }}
    </h3>
    <svg
      :width="radius * 2"
      :height="radius * 2"
      overflow="visible"
    >
      <circle
        :cx="radius"
        :cy="radius"
        fill="transparent"
      />
      <circle
        :cx="radius"
        :cy="radius"
        :r="radius - stroke"
        fill="transparent"
        stroke="#ddd"
        :stroke-width="stroke"
      />
      <circle
        id="circle-progress"
        :cx="radius"
        :cy="radius"
        :r="radius - stroke"
        fill="transparent"
        :stroke="color"
        :stroke-width="stroke"
        class="origin-center -rotate-90"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="progress"
      />
      <text
        :x="radius"
        :y="radius"
        text-anchor="middle"
        dominant-baseline="middle"
        :fill="color"
        :font-size="radius / 2.2"
      >{{ value }}%</text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  radius: {
    type: Number,
    default: 50,
  },
  stroke: {
    type: Number,
    default: 10,
  },
  color: {
    type: String,
    default: 'black',
  },
  value: {
    type: Number,
    default: 0,
  },
});

const circumference = 2 * Math.PI * (props.radius - props.stroke);
const progress = circumference * (1 - (props.value / 100));
</script>

<style scoped>
#circle-progress {
  animation: circle 1s ease;
}

@keyframes circle {
  from {
    stroke-dashoffset: v-bind(circumference) ;
  }
  to {
    stroke-dashoffset: v-bind(progress)
  }
}

</style>
