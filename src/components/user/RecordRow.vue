<template>
  <div
    class="flex items-center justify-between py-3 overflow-x-auto text-sm border-l-4 border-r border-y xl:text-base"
    :class="record.win
      ? 'bg-sky-50 border-sky-200 border-l-main'
      : record.retire ? 'bg-red-50 border-red-200 border-l-red-600' : 'bg-white border-gray-300'"
  >
    <span class="mx-3 text-xs">{{ record.relTime }}</span>
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
    <span class="mx-5 xl:mx-12 grow">{{ record.track.name }}</span>
    <span class="mx-2 xl:mx-4">{{ record.kart.name }}</span>
    <span class="text-center mx-1 xl:mx-3 min-w-[50px]">{{ record.matchTime }}</span>
    <button
      class="flex items-center justify-center h-full px-5 border-l"
      @click="opened = !opened"
    >
      <span class="border-[6px] border-transparent border-t-gray-500 mt-1" />
    </button>
  </div>
  <div v-if="opened">
    <ul class="flex bg-white text-center shadow-sm justify-between">
      <li
        v-for="match in matchDetails"
        :key="match.rank"
        class="flex flex-col w-[11.11%] text-xs"
        :class="{ 'bg-[#f2f3f4] text-main' : match.userId === record.userId }"
      >
        <div
          class="h-10 flex justify-center items-center"
          :class="match.userId === record.userId ? 'bg-[#e5ecf5]' : 'bg-[#f2f3f4]'"
        >
          <span
            :class="{ 'text-red-500' : match.retire }"
          >{{ match.retire ? '리타이어' : match.rank }}</span>
        </div>
        <div class="grow py-4 flex justify-center items-center">
          <span v-if="match.kart.name === 'legend'">카트</span>
          <img
            v-else-if="match.kart.name !== 'empty'"
            :src="match.kart.img"
            alt="kart"
            class="w-1/2"
            @error="fallbackEmptyKartImg"
          >
        </div>
        <div class="py-2">
          <span>{{ match.username }}</span>
        </div>
        <div class="pb-3">
          <span>{{ match.lapTime }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { MatchDetailInfo, MatchRecord } from '@/netlify/types/api';
import { ActionTypes } from '@/store/types';
import { Payload } from '@/types/vuex';
import { onUpdated, ref } from 'vue';
import { useStore } from 'vuex';
import EmptyKartImg from '@/assets/empty_kart.png';

const store = useStore();

const props = defineProps<{
  record: MatchRecord;
}>();

const matchDetails = ref<Array<MatchDetailInfo>>([{
  userId: '',
  username: '유저',
  rank: '#',
  kart: {
    hash: '',
    name: 'legend',
    img: '',
  },
  lapTime: '기록',
  retire: false,
}]);

const emptyInfo: MatchDetailInfo = {
  userId: '',
  username: '',
  rank: '',
  kart: {
    hash: '',
    name: 'empty',
    img: '',
  },
  lapTime: '',
  retire: false,
};

const opened = ref(false);
const loading = ref(false);

function fallbackEmptyKartImg(event: Event) {
  /* eslint-disable-next-line no-param-reassign */
  (event.target as HTMLImageElement).src = EmptyKartImg;
}

onUpdated(async () => {
  if (opened.value) {
    if (matchDetails.value.length > 1) return;
    loading.value = true;
    const response = await store.dispatch(ActionTypes.GET_MATCH_DETAILS, {
      queries: { matchId: props.record.matchId },
    } as Payload);

    matchDetails.value.push(...Object.assign(Array(8).fill(emptyInfo), response));
    loading.value = false;
  }
});
</script>
