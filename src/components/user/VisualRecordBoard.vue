<template>
  <div class="flex flex-col">
    <div class="flex justify-between w-full text-gray-500 bg-gray-200">
      <button
        v-for="(tab, index) in ['트랙', '카트']"
        :key="index"
        class="flex items-center justify-center p-2 grow"
        :class="{ 'text-main bg-white border-b-2 border-main' : currentIndex === index}"
        @click="currentIndex = index"
      >
        {{ tab }}
      </button>
    </div>
    <track-record-board v-if="currentIndex === 0" />
    <kart-record-board v-if="currentIndex === 1" />
  </div>
</template>

<script lang="ts" setup>
import TrackRecordBoard from '@/components/user/TrackRecordBoard.vue';
import KartRecordBoard from '@/components/user/KartRecordBoard.vue';
import { ref } from 'vue';

const currentIndex = ref(0);

</script>
