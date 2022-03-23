<template>
  <div class="overflow-hidden text-xs bg-white border rounded-md border-main text-main w-fit h-fit">
    <button
      v-for="(option, index) in options"
      :key="index"
      class="py-[2px] px-7 border-r border-main last:border-r-[0px] h-full"
      :class="{'bg-main text-white' : currentIndex === index}"
      @click="currentIndex = index"
    >
      {{ option.content }}
    </button>
  </div>
</template>

<script lang="ts" setup>import { ref } from 'vue';

type Options = {
  icon?: string;
  content: string;
}

defineProps({
  options: {
    type: Array as () => Options[],
    default: () => [],
  },
});

const currentIndex = ref(0);
</script>
