<template>
  <tab-navigation
    bg-color="main"
    :start-index="-1"
  />
  <div
    v-if="initLoaded"
    class="flex flex-col items-center w-full gap-1"
  >
    <user-info
      :avatar="data.avatarUrl"
      :username="(route.params.nickname as string)"
    />
    <div class="w-full max-w-[1300px] pb-2 flex flex-row gap-2 h-[260px] overflow-x-auto overflow-hidden">
      <total-score-board
        :game="data.rankInfo.totalGame"
        :win="data.rankInfo.count.win"
        :rates="data.rankInfo.rate"
      />
      <rank-chart-board
        :rank="data.rankChartData"
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
    <section class="relative flex flex-col lg:flex-row w-full max-w-[1300px] gap-2">
      <visual-record-board class="lg:sticky top-3 h-fit lg:min-w-[360px]" />
      <record-column
        class="grow"
        :records="data.records"
      />
    </section>
  </div>
  <div
    v-else
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
import { Payload } from '@/types/vuex';
import { MatchRecord, RankChartData, RankInfo } from '@/netlify/types/api';

const store = useStore();
const route = useRoute();

const initLoaded = ref(false);

const data = ref<{
  avatarUrl: string;
  rankInfo: RankInfo;
  rankChartData: RankChartData;
  records: MatchRecord[];
}>({
  avatarUrl: '',
  rankInfo: {
    totalGame: 0,
    count: {
      win: 0,
      goal: 0,
      retire: 0,
    },
    rate: {
      win: 0,
      goal: 0,
      retire: 0,
    },
  },
  rankChartData: {
    labels: [],
    data: [],
    total: {
      gameCount: 0,
      rankRate: 0,
    },
    recent: {
      gameCount: 0,
      rankRate: 0,
    },
  },
  records: [],
});

onMounted(async () => {
  const { userId } = await store.dispatch(ActionTypes.GET_USER_ID, {
    queries: { username: route.params.nickname },
  } as Payload) || {};

  const response = await store.dispatch(ActionTypes.GET_USER_INFO, {
    queries: { userId },
  } as Payload);
  if (!response) return;

  data.value = response;
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
