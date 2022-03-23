<template>
  <nav
    :class="`z-10 w-full max-w-[1300px] bg-${bgColor} text-[${fontSize}px]`"
  >
    <ul
      :class="`flex gap-${gap} text-gray-400`"
    >
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="`hover:text-${textColor}`"
      >
        <router-link
          :class="`inline-block p-5 px-8 ltr-underline after:bg-${textColor}`"
          :to="tab.to"
        >
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
export type Tab = {
  to: string;
  name: string;
};

export type Tabs = Tab[];

withDefaults(defineProps<{
  tabs: Tabs,
  bgColor?: 'transparent' | 'main',
  textColor?: 'white' | 'main',
  fontSize?: number,
  showSearch?: boolean
  gap?: number,
}>(), {
  bgColor: 'transparent',
  textColor: 'main',
  fontSize: 14,
  showSearch: false,
  gap: 8,
});
</script>
