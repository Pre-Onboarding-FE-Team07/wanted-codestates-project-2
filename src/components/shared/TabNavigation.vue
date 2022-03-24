<template>
  <nav
    :class="[`z-10 w-full max-w-[1300px] text-[${fontSize}px] bg-${bgColor}`]"
  >
    <ul
      :class="`flex gap-${gap} text-gray-300`"
    >
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="currentTabIndex === index ? `text-${textColor}` : ''"
      >
        <router-link
          class="inline-block p-5 px-8"
          :class="[
            textColor === 'main' ? 'after:bg-main' : 'after:bg-white' ,
            currentTabIndex === index ? 'after-underline' : 'ltr-underline',
          ]"
          :to="tab.to"
          @click="currentTabIndex = index"
        >
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

export type Tab = {
  to: string;
  name: string;
};

export type Tabs = Tab[];

const props = withDefaults(defineProps<{
  tabs: Tabs;
  textColor? : 'main' | 'white';
  bgColor?: 'main' | 'transparent';
  fontSize?: number;
  showSearch?: boolean;
  startIndex?: number;
  gap?: number;
}>(), {
  variant: 'main',
  textColor: 'main',
  bgColor: 'transparent',
  fontSize: 14,
  showSearch: false,
  startIndex: 0,
  gap: 8,
});

const currentTabIndex = ref(props.startIndex);
</script>
