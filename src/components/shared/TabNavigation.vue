<template>
  <div
    class="w-full z-10"
    :class="`bg-${bgColor}`"
  >
    <nav
      :class="[`w-full mx-auto max-w-[1300px] text-[${fontSize}px] `]"
    >
      <ul
        :class="`flex gap-${gap} text-gray-300 whitespace-nowrap`"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="currentTabIndex === index ? `text-${textColor}` : `hover:text-${textColor}`"
        >
          <router-link
            class="inline-block p-4 px-8"
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

export type Tab = {
  to: string;
  name: string;
};

export type Tabs = Tab[];

const props = withDefaults(defineProps<{
  tabs?: Tabs;
  textColor? : 'main' | 'white';
  bgColor?: 'main' | 'transparent';
  fontSize?: number;
  showSearch?: boolean;
  startIndex?: number;
  gap?: number;
}>(), {
  tabs() {
    return [
      { to: '/', name: '홈' },
      { to: '/rank', name: '랭킹' },
    ];
  },
  variant: 'main',
  textColor: 'white',
  bgColor: 'transparent',
  fontSize: 14,
  showSearch: false,
  startIndex: 0,
  gap: 8,
});

const currentTabIndex = ref(props.startIndex);
</script>
