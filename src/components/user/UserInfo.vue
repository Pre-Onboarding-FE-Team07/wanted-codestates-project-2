<template>
  <section class="relative flex flex-col gap-5 xl:gap-0 md:flex-row items-center justify-between w-full max-w-[1300px] border-l-4 border-main bg-flag-w bg-cover bg-right py-6 mt-10">
    <span class="absolute text-xs text-gray-600 -top-6">카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.</span>
    <img
      width="164"
      src="@/assets/sample/avatar.png"
      alt=""
    >
    <div class="grow">
      <div>
        <h1 class="mb-6 text-5xl font-black text-center md:text-left">
          {{ nickname }}
        </h1>
      </div>
      <div class="flex items-center">
        <select-button
          :options="[{
            content: '개인전'
          },{
            content: '팀전'
          }]"
        />
        <div class="mx-3 w-[1px] h-3 bg-gray-400" />
        <round-button>전적갱신</round-button>
      </div>
    </div>
    <div class="flex flex-col mx-10 text-center text-gray-600">
      <span class="text-sm">페이지뷰</span>
      <span class="text-lg">2,130</span>
    </div>
  </section>
  <div>
    <section />
    <section />
    <section />
  </div>
</template>

<script lang="ts" setup>
import SelectButton from '@/components/shared/SelectButton.vue';
import RoundButton from '@/components/user/RoundButton.vue';

withDefaults(defineProps<{
  nickname: string;
}>(), {});
</script>
