<template>
  <table-wrapper :headers="headers">
    <tr
      v-for="(track, index) in tracks"
      :key="index"
      class="text-center"
    >
      <td class="p-1">
        <label for="track">
          <input
            id="track"
            type="radio"
            name="select-track"
            :checked="selectedIndex === index"
            @change="selectedIndex = index"
          >
        </label>
      </td>
      <td class="text-left">
        {{ track.name }}
      </td>
      <td>{{ track.count }}</td>
      <td>{{ track.win }}</td>
      <td>
        {{ track.lapTime }}
      </td>
      <td>
        {{ track.top }}
      </td>
    </tr>
  </table-wrapper>
</template>

<script lang="ts" setup>
import TableWrapper from '@/components/shared/TableWrapper.vue';
import { ref } from 'vue';

const selectedIndex = ref(0);

const headers = ['선택', '트랙', '횟수', '승률', '기록', '상위'];

const tracks = [
  {
    name: '빌리지 운명의 다리', count: '13', win: '77%', lapTime: "2'02'72", top: '2%',
  },
  {
    name: '브로디 비밀의 연구', count: '12', win: '100%', lapTime: "2'08'24", top: '1%',
  },
  {
    name: '차이나 서안 병마용', count: '10', win: '70%', lapTime: "1'44'27", top: '3%',
  },
  {
    name: '월드 이탈리아 피사', count: '10', win: '90%', lapTime: "1'06'75", top: '3%',
  },
  {
    name: '마비노기 티르 코네', count: '9', win: '67%', lapTime: "1'01'53", top: '-',
  },
  {
    name: '빌리지 남산 9', win: '44%', lapTime: "1'33'25", top: '1%',
  },
  {
    name: '마비노기 티르 코네', count: '9', win: '67%', lapTime: "1'01'53", top: '-',
  },
  {
    name: '빌리지 남산 9', win: '44%', lapTime: "1'33'25", top: '1%',
  },
  {
    name: '빌리지 운명의 다리', count: '13', win: '77%', lapTime: "2'02'72", top: '2%',
  },
  {
    name: '브로디 비밀의 연구', count: '12', win: '100%', lapTime: "2'08'24", top: '1%',
  },
  {
    name: '차이나 서안 병마용', count: '10', win: '70%', lapTime: "1'44'27", top: '3%',
  },
  {
    name: '월드 이탈리아 피사', count: '10', win: '90%', lapTime: "1'06'75", top: '3%',
  },
  {
    name: '마비노기 티르 코네', count: '9', win: '67%', lapTime: "1'01'53", top: '-',
  },
  {
    name: '빌리지 남산 9', win: '44%', lapTime: "1'33'25", top: '1%',
  },
  {
    name: '마비노기 티르 코네', count: '9', win: '67%', lapTime: "1'01'53", top: '-',
  },
  {
    name: '빌리지 남산 9', win: '44%', lapTime: "1'33'25", top: '1%',
  },
];
</script>
