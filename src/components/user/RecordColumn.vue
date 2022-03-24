<template>
  <ul
    class="flex flex-col w-full gap-2 whitespace-nowrap"
  >
    <li
      v-for="(record, index) in records"
      :key="index"
      class="flex flex-col"
    >
      <div class="flex items-center justify-between py-3 overflow-x-auto text-sm border-l-4 border-main bg-sky-50 xl:text-base">
        <span class="mx-3">{{ record.time }}</span>
        <span class="before:content-['#'] text-main italic text-2xl xl:text-4xl">{{ record.rank }}</span>
        <span class="before:content-['/'] text-main italic text-base xl:text-xl self-end">{{ record.participants }}</span>
        <span class="mx-5 xl:mx-12 grow">{{ record.track }}</span>
        <span class="mx-2 xl:mx-4">{{ record.kart }}</span>
        <span class="mx-1 xl:mx-3">{{ record.lap }}</span>
        <button class="flex items-center justify-center h-full px-5 border-l">
          <span class="border-[6px] border-transparent border-t-gray-500" />
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
export type RankRecord = {
  rank: number;
  participants: number;
  track: string;
  kart: string;
  time: string;
  lap: string;
};

const records: RankRecord[] = Array(50).fill(
  {
    time: '11시간 전', rank: 1, participants: 8, track: '차이나 서안 병마용', kart: '마라톤 V1', lap: "1'45'45",
  },
);

</script>
