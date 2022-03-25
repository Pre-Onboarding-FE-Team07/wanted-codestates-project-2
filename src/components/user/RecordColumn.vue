<template>
  <ul
    class="flex flex-col w-full gap-2 whitespace-nowrap"
  >
    <li
      v-for="record in records"
      :key="record.matchId"
      class="flex flex-col"
    >
      <div
        class="flex items-center justify-between py-3 overflow-x-auto text-sm border-l-4 border-r border-y xl:text-base"
        :class="record.win
          ? 'bg-sky-50 border-sky-200 border-l-main'
          : record.retire ? 'bg-red-50 border-red-200 border-l-red-600' : 'bg-white border-gray-300'"
      >
        <span class="mx-3 text-xs">{{ record.diffTime }}</span>
        <div
          class="min-w-[120px]"
          :class="record.win ? 'text-main' : record.retire ? 'text-red-500' : 'text-gray-500'"
        >
          <span
            class="before:content-['#']  italic text-2xl xl:text-3xl"
          >{{ record.retire ? '리타이어' : record.rank }}</span>
          <span
            v-if="!record.retire"
            class="before:content-['/'] italic text-base xl:text-xl self-end"
          >{{ record.playerCount }}</span>
        </div>
        <span class="mx-5 xl:mx-12 grow">{{ record.track.trackName }}</span>
        <span class="mx-2 xl:mx-4">{{ record.kart.kartName }}</span>
        <span class="text-center mx-1 xl:mx-3 min-w-[50px]">{{ record.matchTime }}</span>
        <button class="flex items-center justify-center h-full px-5 border-l">
          <span class="border-[6px] border-transparent border-t-gray-500 mt-1" />
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

export type MatchRecord = {
  matchId: string;
  playerCount: number;
  rank: number;
  matchTime: string;
  kart: {
    hash: string;
    kartName: string;
    kartImg: string;
  };
  track: {
    hash: string;
    trackName: string;
    trackImg: string;
  };
  win: boolean;
  retire: boolean;
  diffTime: string;
}

defineProps<{
  records: MatchRecord[];
}>();
</script>
