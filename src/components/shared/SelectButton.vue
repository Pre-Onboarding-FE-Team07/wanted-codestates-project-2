<template>
  <div
    class="overflow-hidden text-xs border rounded-md text-main w-fit h-fit"
    :class="mode === 'main' ? 'bg-white border-main' : 'bg-main border-white'"
  >
    <button
      v-for="(option, index) in options"
      :key="index"
      class="py-[2px] px-7 border-r last:border-r-[0px] h-full font-semibold"
      :class="[
        currentIndex === index
          ? mode === 'main' ? 'bg-main text-white' : 'bg-white text-main'
          : mode === 'main' ? 'bg-white text-main' : 'bg-main text-white'
      ]"
      @click="currentIndex = index"
    >
      {{ option.content }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type Option = {
  icon?: string;
  content: string;
}

withDefaults(defineProps<{
  options: Option[];
  mode?: 'white' | 'main';
}>(), {
  mode: 'main',
});

const currentIndex = ref(0);
</script>
