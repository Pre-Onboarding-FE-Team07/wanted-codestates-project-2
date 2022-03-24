<template>
  <div class="flex flex-col items-center w-full gap-1">
    <user-info />
    <div class="w-full max-w-[1300px] pb-2 flex flex-row gap-2 h-[260px] overflow-x-auto overflow-hidden">
      <total-score-board />
      <rank-chart-board />
      <cheer-up-board />
    </div>
    <div class="flex flex-col w-full max-w-[1300px] border-b mb-2">
      <tab-navigation
        class="sticky top-0"
        :tabs="tabs"
        :start-index="0"
        :font-size="14"
        :gap="0"
      />
    </div>
    <section class="relative flex flex-col md:flex-row w-full max-w-[1300px] gap-2">
      <visual-record-board class="xl:sticky top-3 h-fit" />
      <record-column class="grow" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import UserInfo from '@/components/user/UserInfo.vue';
import TotalScoreBoard from '@/components/user/TotalScoreBoard.vue';
import RankChartBoard from '@/components/user/RankChartBoard.vue';
import CheerUpBoard from '@/components/user/CheerUpBoard.vue';
import VisualRecordBoard from '@/components/user/VisualRecordBoard.vue';
import RecordColumn from '@/components/user/RecordColumn.vue';
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
