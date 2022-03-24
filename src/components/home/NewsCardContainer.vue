<template>
  <section class="relative z-10 flex flex-col w-full gap-3 m-5 xl:-mt-5 xl:flex-row max-w-[1000px]">
    <news-card title="TMI 업데이트 로그">
      <table class="h-[85%] w-full leading-9 table-fixed text-[#1f334a]">
        <thead class="text-sm bg-gray-50">
          <tr>
            <th class="relative font-normal after:absolute after:right-0 after:top-1 after:bg-[#ccc] after:w-[1px] after:h-4 grow py-1 w-[80%]">
              내용
            </th>
            <th class="font-normal">
              날짜
            </th>
          </tr>
        </thead>
        <tbody class="text-xs">
          <tr
            v-for="(item, index) in news"
            :key="index"
          >
            <td
              class="pl-3"
            >
              <a href="javascript:">{{ item.title }}</a>
            </td>
            <td
              class="text-center"
            >
              {{ item.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </news-card>
    <news-card title="카트라이더 TMI 영상">
      <div class="flex h-[90%] justify-center items-center gap-8">
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="flex flex-col gap-3"
        >
          <div class="max-w-[200px] h-[100px] overflow-hidden">
            <img
              class="object-cover w-full h-full cursor-pointer zoom-in"
              :src="video.thumbnail"
              alt=""
            >
          </div>
          <h6 class="text-sm font-medium">
            {{ video.title }}
          </h6>
          <small class="text-xs text-gray-400">{{ video.company }}</small>
        </div>
      </div>
    </news-card>
  </section>
</template>

<script lang="ts" setup>
import NewsCard from '@/components/home/NewsCard.vue';

export type News = Array<{
  title: string;
  date: string;
}>

export type Videos = Array<{
  thumbnail: string;
  title: string;
  company: string;
}>

const news: News = [
  { title: '[안내] TMI 1대1 매칭 시뮬레이터, 기록 상위분포 오류 관련 - 수정 완료', date: '2020.02.24' },
  { title: '[기록실] 11월 TMI 탑랭커 발표', date: '2019.12.02' },
  { title: '[공지] 카트라이더 open api 공개 및 TMI 업데이트', date: '2019.11.20' },
  { title: '[안내] TMI 1대1 매칭 시뮬레이터 오류 관련 - 수정 완료', date: '2019.11.18' },
  { title: '[기록실] 10월 TMI 탑랭커 발표', date: '2019.11.04' },
  { title: '[기록실] 9월 TMI 탑랭커 발표', date: '2019.10.01' },
];

const videos: Videos = [
  {
    thumbnail: 'https://img.youtube.com/vi/7r55ajA4nOE/1.jpg',
    title: '[카트라이더: 드리프트] 게임플레이',
    company: '넥슨',
  }, {
    thumbnail: 'https://img.youtube.com/vi/IgIzFjm_EC8/1.jpg',
    title: '7월에서야 공개된 TMI의 진짜 목적',
    company: '리버스',
  },
];
</script>
