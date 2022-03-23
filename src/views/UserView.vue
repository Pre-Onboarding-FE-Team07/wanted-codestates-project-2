<template>
  <div class="flex flex-col items-center w-full gap-1">
    <user-info />
    <div class="w-full max-w-[1300px] pb-2 flex flex-row gap-2 h-[260px] overflow-x-auto overflow-hidden">
      <total-score-board />
      <rank-chart-board />
      <cheer-up-board class="shrink-0" />
    </div>
    <div class="flex flex-col w-full max-w-[1300px] border-b">
      <tab-navigation
        :tabs="tabs"
        bg-color="transparent"
        text-color="main"
        :font-size="14"
        :gap="0"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserInfo from '@/components/user/UserInfo.vue';
import TotalScoreBoard from '@/components/user/TotalScoreBoard.vue';
import RankChartBoard from '@/components/user/RankChartBoard.vue';
import CheerUpBoard from '@/components/user/CheerUpBoard.vue';
import TabNavigation, { Tabs } from '@/components/shared/TabNavigation.vue';

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
