<template>
  <nav class="z-10 w-full max-w-[1400px]">
    <ul class="flex mx-3 text-sm text-white">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="mr-8"
      >
        <router-link
          class="inline-block p-5 px-8 ltr-underline after:bg-white"
          :to="tab.to"
        >
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export type Tab = {
  to: string;
  name: string;
};

export default defineComponent({
  props: {
    tabs: {
      type: Array as () => Tab[],
      required: true,
    },
  },
});
</script>
