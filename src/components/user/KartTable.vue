<template>
  <table-wrapper :headers="headers">
    <tr
      v-for="(kart, index) in karts"
      :key="index"
      class="text-center"
    >
      <td class="py-1">
        <label for="select-kart">
          <input
            id="select-kart"
            type="radio"
            name="select-kart"
            :checked="selectedIndex === index"
            @change="selectedIndex = index"
          >
        </label>
      </td>
      <td class="text-left">
        {{ kart.name }}
      </td>
      <td>{{ kart.count }}</td>
      <td>{{ kart.win }}</td>
      <td>{{ kart.retire }}</td>
    </tr>
  </table-wrapper>
</template>

<script lang="ts" setup>
import TableWrapper from '@/components/shared/TableWrapper.vue';
import { ref } from 'vue';

const selectedIndex = ref(0);

const headers = ['선택', '카트', '횟수', '승률', '리타이어율'];

const karts = [
  {
    name: '어벤저 V1', count: '129', win: '70%', retire: '1%',
  },
  {
    name: '마라톤 V1', count: '52', win: '56%', retire: '2%',
  },
  {
    name: '스팅레이 X', count: '10', win: '70%', retire: '0%',
  },
  {
    name: '그믐 산군 V1', count: '9', win: '89%', retire: '0%',
  },
];
</script>
