<template>
  <section class="flex gap-8">
    <div
      v-for="(ranker, index) in rankers"
      :key="index"
      class="relative text-black bg-right shadow-xl rounded-xl bg-flag"
    >
      <img
        :src="medals[index]"
        alt=""
        class="absolute -top-3 left-3 w-[30px]"
      >
      <img
        :src="ranker.avatar"
        alt=""
        class="absolute -right-6 -top-12 w-[180px]"
      >
      <div class="flex flex-col p-8 pb-4 text-sm">
        <h3 class="mb-3 text-lg font-bold text-main">
          {{ ranker.name }}
        </h3>
        <span>순위 <b class="font-bold">{{ index + 1 }}위</b></span>
        <span>누적 포인트 <b>{{ ranker.point.toLocaleString() }}PT</b></span>
      </div>
      <div class="flex gap-5 px-6 mb-2 border-t border-main justify-evenly">
        <circle-progress
          title="승률"
          :radius="36"
          :stroke="6"
          :value="ranker.winPer"
          :color="colors.main"
        />
        <div class="w-[1px] bg-gray-300 my-4" />
        <circle-progress
          title="리타이어율"
          :radius="36"
          :stroke="6"
          :value="ranker.retirePer"
          :color="colors.red"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CircleProgress from '@/components/shared/CircleProgress.vue';
import { colors } from '@/styles/theme';

const medals = [
  'https://tmi.nexon.com/img/assets/icon_goldmedal.png',
  'https://tmi.nexon.com/img/assets/icon_silvermedal.png',
  'https://tmi.nexon.com/img/assets/icon_bronzemedal.png',
];

const rankers = [
  {
    name: '법사케피',
    point: 6991,
    avatar: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/95de437771bb1e094b4f3ef1c1a81574093a01e8d3be037c5a9fe0834dfbffa0.png',
    winPer: 65,
    retirePer: 2,
  },
  {
    name: '헤드리강',
    point: 5279,
    avatar: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/201c61527a04d85cd2de0dad75ab0878ee4125129e57aabe47b3d3ac06df8d67.png',
    winPer: 37,
    retirePer: 5,
  },
  {
    name: 'S1주행',
    point: 4678,
    avatar: 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png',
    winPer: 43,
    retirePer: 17,
  },
];
</script>
