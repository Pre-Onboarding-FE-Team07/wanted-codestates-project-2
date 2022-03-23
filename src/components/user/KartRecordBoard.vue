<template>
  <board-container>
    <template #header>
      <span class="text-main">카트</span> 전적
    </template>
    <template #content>
      <div class="flex flex-col gap-3 m-3">
        <header class="flex items-center gap-1">
          <div class="px-2 text-xs text-gray-600 border border-gray-600 rounded-full py-[1px] w-fit h-fit">
            일반
          </div>
          <span class="text-sm">어벤저 V1</span>
        </header>
        <div class="flex gap-4">
          <img
            src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/751a4dd7b0e66ba60c3feb72191980bfed2eac7068930521c59171a514fff837.png?v=1648034024"
            alt=""
            class="object-contain w-32"
          >
          <ul class="flex flex-col gap-3 pl-2 border-l-2">
            <li
              v-for="(record, index) in records"
              :key="index"
              class="flex items-center gap-2 text-xs"
            >
              <img
                width="20"
                :src="record.icon"
                alt=""
              >
              <span>{{ record.track }}</span>
              <span>{{ record.lapTime }}</span>
            </li>
          </ul>
        </div>
      </div>
      <kart-table />
    </template>
  </board-container>
</template>

<script lang="ts" setup>
import BoardContainer from '@/components/user/BoardContainer.vue';
import KartTable from '@/components/user/KartTable.vue';

export type Record = {
  icon: string;
  track: string;
  lapTime: string;
}

export type Records = Array<Record>

const records: Records = [
  {
    icon: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png',
    track: '코리아 제주 해오름',
    lapTime: "0'59'99",
  }, {
    icon: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png',
    track: '코리아 제주 해오름',
    lapTime: "1'00'07",
  }, {
    icon: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png',
    track: '코리아 제주 해오름',
    lapTime: "1'00'57",
  }, {
    icon: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png',
    track: '코리아 제주 해오름',
    lapTime: "1'01'30",
  },
];
</script>
