<template>
  <div class="relative flex flex-col overflow-hidden bg-center bg-cover bg-flag-main place-items-center place-content-center h-[500px] sm:h-[655px] w-full xl:w-full -mt-16">
    <div class="absolute inset-0 bg-[#005fcc] opacity-30" />
    <div class="absolute inset-0 top-12 max-w-[1400px] mx-auto xl:block hidden sm:block">
      <img
        class="absolute left-[30px] w-[200px] top-[20px] xl:w-[380px] xl:top-[150px]"
        src="@/assets/covid_left.png"
        alt=""
      >
      <img
        class="absolute left-[30px] h-[160px] top-[20px] xl:h-[300px] xl:top-[150px]"
        src="@/assets/main_left_bg.png"
        alt=""
      >
      <img
        class="absolute right-[30px] w-[200px] top-[420px] xl:w-[380px] xl:top-[150px]"
        src="@/assets/covid_right.png"
        alt=""
      >
      <img
        class="absolute right-[30px] h-[160px] top-[420px] xl:h-[300px] xl:top-[150px]"
        src="@/assets/main_right_bg.png"
        alt=""
      >
    </div>
    <div class="relative flex flex-col items-center w-full px-10 text-white">
      <header class="text-center">
        <span class="text-[28px] leading-4">넥슨 오픈 API 기반</span>
        <h1 class="my-1 text-[40px] leading-10 break-words whitespace-nowrap">
          카트라이더 <b>전적</b> 검색
        </h1>
        <small class="block my-2 mx-auto px-16 rounded-full w-fit text-lg tracking-widest bg-[rgba(0,0,0,0.3)]">사회적거리두기</small>
      </header>
      <form
        class="relative flex justify-between w-full gap-2 px-6 border-4 border-white rounded-full max-w-[600px] mt-16"
        @submit.prevent="submit"
      >
        <label
          for="main-search-bar"
          class="grow"
        >
          <input
            id="main-search-bar"
            v-model="nickname"
            class="w-full py-3 text-sm bg-transparent placeholder:text-gray-200 placeholder:opacity-80 sm:text-xl"
            type="text"
            placeholder="카트라이더 닉네임을 입력하세요!"
          >
        </label>
        <button type="submit">
          <img
            src="@/assets/tmi_logo_default.svg"
            alt=""
          >
        </button>
        <transition name="shake">
          <span
            v-if="notFoundUser"
            class="absolute inset-x-0 mt-2 text-sm text-center -bottom-10"
          >{{ lastQuery }}와 일치하는 라이더가 없습니다.</span>
        </transition>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Payload } from '@/store';
import { ActionTypes } from '@/store/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const nickname = ref('');
const lastQuery = ref('');
const router = useRouter();
const store = useStore();

const notFoundUser = ref(false);

let timeoutId = -1;
async function submit() {
  lastQuery.value = nickname.value;
  const { accessId } = await store.dispatch(ActionTypes.GET_USER_INFO_BY_NAME, {
    variables: { name: nickname.value },
  } as Payload);
  if (!accessId) {
    notFoundUser.value = true;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      notFoundUser.value = false;
    }, 3000);
    nickname.value = '';
  }
  router.push(`/user/${nickname.value}`);
}
</script>

<style>
.shake-enter-active {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97);
}
.shake-leave-active {
  transition: opacity 0.5s ease;
}

.shake-enter-from,
.shake-leave-to {
  opacity: 0;
}

@keyframes shake {
  10%, 90% {
    transform: translateX(-1px);
  }
  20%, 80% {
    transform: translateX(2px);
  }
  30%, 50%, 70% {
    transform: translateX(-4px);
  }
  40%, 60% {
    transform: translateX(4px);
  }
}
</style>
