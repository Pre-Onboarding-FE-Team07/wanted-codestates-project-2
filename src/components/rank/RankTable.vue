<template>
  <table
    class="w-full max-w-[1000px] border-separate"
    style="border-spacing: 0 6px;"
  >
    <thead
      ref="theadRef"
      class="sticky top-0 z-10"
      :class="{ 'bg-darken' : theadSticky}"
    >
      <tr class="text-sm text-white whitespace-nowrap">
        <th class="px-3 py-5">
          #
        </th>
        <th>닉네임 (순위변동)</th>
        <th>누적포인트 (전일대비)</th>
        <th>주행횟수</th>
        <th>평균순위</th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const theadRef = ref<HTMLTableSectionElement>();
const theadSticky = ref(false);

function handleScrollEvent() {
  const { y } = theadRef.value?.getBoundingClientRect() || {};
  if (y === 0) theadSticky.value = true;
  else theadSticky.value = false;
}

onMounted(() => {
  window.addEventListener('scroll', handleScrollEvent);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollEvent);
});

</script>
