<template>
  <tab-navigation
    bg-color="main"
    :start-index="-1"
  />
  <div
    v-if="initLoaded"
    class="flex flex-col items-center w-full gap-1"
  >
    <user-info :nickname="(route.params.nickname as string)" />
    <div class="w-full max-w-[1300px] pb-2 flex flex-row gap-2 h-[260px] overflow-x-auto overflow-hidden">
      <total-score-board
        :game="game"
        :win="count.win"
        :rates="rates"
      />
      <rank-chart-board
        :labels="rankRecords.labels.slice().reverse()"
        :data="rankRecords.data.slice().reverse()"
      />
      <cheer-up-board />
    </div>
    <div class="flex flex-col w-full max-w-[1300px] border-b mb-2">
      <tab-navigation
        class="sticky top-0"
        :tabs="tabs"
        text-color="main"
        :start-index="0"
        :font-size="14"
        :gap="0"
      />
    </div>
    <section class="relative flex flex-col md:flex-row w-full max-w-[1300px] gap-2">
      <visual-record-board class="md:sticky top-3 h-fit" />
      <record-column class="grow" />
    </section>
  </div>
  <div
    else
    class="flex items-center justify-center h-[90vh]"
  >
    <loading-indicator
      :size="25"
      desc="데이터를 집계 중입니다."
    />
  </div>
</template>

<script lang="ts" setup>
import TabNavigation, { Tabs } from '@/components/shared/TabNavigation.vue';
import UserInfo from '@/components/user/UserInfo.vue';
import TotalScoreBoard from '@/components/user/TotalScoreBoard.vue';
import RankChartBoard from '@/components/user/RankChartBoard.vue';
import CheerUpBoard from '@/components/user/CheerUpBoard.vue';
import VisualRecordBoard from '@/components/user/VisualRecordBoard.vue';
import RecordColumn from '@/components/user/RecordColumn.vue';
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { ActionTypes } from '@/store/types';
import { Payload } from '@/store';
import { MatchResponse } from '@/types/api.d';
import { MatchType } from '@/constants/hash';

const store = useStore();
const route = useRoute();

const game = 200;

const initLoaded = ref(false);

const rates = ref({
  win: 0,
  goal: 0,
  retire: 0,
});

const count = ref({
  win: 0,
  goal: 0,
  retire: 0,
});

const rank = ref({
  within200: 0,
  within50: 0,
});

const rankRecords = ref({
  labels: Array.from({ length: 50 }, (_, i) => `이전 ${i + 1}경기`),
  data: [] as number[],
});

const games = ref<Array<{
  playerCount: number;
  rank: number;
  matchTime: number;
  kart: string;
}>>([]);

onMounted(async () => {
  const { accessId } = await store.dispatch(ActionTypes.GET_USER_INFO_BY_NAME, {
    variables: { name: route.params.nickname },
  } as Payload) || {};
  if (!accessId) return;

  const res: MatchResponse = await store.dispatch(ActionTypes.GET_MATCH_LIST_BY_ID, {
    variables: {
      id: accessId,
    },
    queries: {
      offset: 0,
      limit: game,
      matchTypes: MatchType.INDI,
    },
  } as Payload) || {};

  const { matches: [{ matches }] } = res;

  let totalRankWithin200 = 0;
  let totalRankWithin50 = 0;
  matches.forEach(({ playerCount, player }, i) => {
    count.value.win += +player.matchWin;
    count.value.retire += +player.matchRetired;
    count.value.goal += +!(+player.matchRetired);
    totalRankWithin200 += +player.matchRank;
    if (i < 50) {
      rankRecords.value.data.push(+player.matchRank);
      totalRankWithin50 += +player.matchRank;
    }
    games.value.push({
      playerCount,
      rank: +player.matchRank,
      matchTime: +player.matchTime,
      kart: player.kart,
    });
  });

  rates.value.win = Math.round((count.value.win / 200) * 100);
  rates.value.retire = Math.round((count.value.retire / 200) * 100);
  rates.value.goal = 100 - rates.value.retire;

  rank.value.within200 = +(totalRankWithin200 / game).toFixed(2);
  rank.value.within50 = +(totalRankWithin50 / 50).toFixed(2);

  initLoaded.value = true;
});

const tabs: Tabs = [
  {
    to: '',
    name: '통합',
  },
  {
    to: '',
    name: '매우빠름',
  },
  {
    to: '',
    name: '무한부스터',
  },
];
</script>
