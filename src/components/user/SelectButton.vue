<template>
  <div class="rounded-md bg-white border-[1px] border-main text-main text-xs overflow-hidden w-fit h-fit">
    <button
      v-for="(option, index) in options"
      :key="index"
      class="py-[2px] px-7 border-r-[1px] border-main last:border-r-[0px] h-full"
      :class="{'bg-main text-white' : currentIndex === index}"
      @click="currentIndex = index"
    >
      {{ option.content }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Options = {
  icon?: string;
  content: string;
}

export default defineComponent({
  props: {
    options: {
      type: Array as () => Options[],
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
});
</script>
