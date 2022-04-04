<template>
  <div class="relative flex flex-col overflow-hidden bg-center bg-cover bg-flag-main place-items-center place-content-center h-[500px] sm:h-[655px] w-full xl:w-full -mt-14">
    <div class="absolute inset-0 bg-[#005fcc] opacity-30" />
    <div class="absolute inset-0 top-12 max-w-[1400px] mx-auto xl:block hidden sm:block">
      <transition
        name="ch-mv-r"
        appear
      >
        <img
          class="absolute left-[30px] w-[200px] top-[20px] xl:w-[380px] xl:top-[150px]"
          src="@/assets/covid_left.png"
          alt=""
        >
      </transition>
      <transition
        name="bg-mv-r"
        appear
      >
        <img
          class="absolute left-[30px] h-[160px] top-[20px] xl:h-[300px] xl:top-[150px]"
          src="@/assets/main_left_bg.png"
          alt=""
        >
      </transition>
      <transition
        name="ch-mv-l"
        appear
      >
        <img
          class="absolute right-[30px] w-[200px] top-[420px] xl:w-[380px] xl:top-[150px]"
          src="@/assets/covid_right.png"
          alt=""
        >
      </transition>
      <transition
        name="bg-mv-l"
        appear
      >
        <img
          class="absolute right-[30px] h-[160px] top-[420px] xl:h-[300px] xl:top-[150px]"
          src="@/assets/main_right_bg.png"
          alt=""
        >
      </transition>
    </div>
    <div class="relative flex flex-col items-center w-full px-10 text-white">
      <transition
        name="header"
        appear
      >
        <header class="text-center">
          <span class="text-[28px] leading-4">넥슨 오픈 API 기반</span>
          <h1 class="my-1 text-[40px] leading-10 break-words whitespace-nowrap">
            카트라이더 <b>전적</b> 검색
          </h1>
          <small class="block my-2 mx-auto px-16 rounded-full w-fit text-lg tracking-widest bg-[rgba(0,0,0,0.3)]">사회적거리두기</small>
        </header>
      </transition>
      <transition
        name="form"
        appear
      >
        <form
          class="relative flex justify-between gap-2 w-full px-6 border-4 border-white rounded-full max-w-[600px] min-w-[90px] mt-16"
          @submit.prevent="submit"
        >
          <label
            for="main-search-bar"
            class="grow"
          >
            <input
              id="main-search-bar"
              v-model="nickname"
              class="w-full py-3 pr-14 text-sm bg-transparent placeholder:text-gray-200 placeholder:opacity-80 sm:text-xl"
              type="text"
              placeholder="카트라이더 닉네임을 입력하세요!"
            >
          </label>
          <button
            type="submit"
            class="absolute right-5 top-1/2 -translate-y-1/2"
          >
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
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Payload } from '@/types/vuex';
import { ActionTypes } from '@/store/types';

const nickname = ref('');
const lastQuery = ref('');
const router = useRouter();
const store = useStore();

const notFoundUser = ref(false);

let timeoutId = -1;
async function submit() {
  notFoundUser.value = false;
  lastQuery.value = nickname.value;
  const { userId } = await store.dispatch(ActionTypes.GET_USER_ID, {
    queries: { username: nickname.value },
  } as Payload) || {};
  if (!userId) {
    notFoundUser.value = true;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      notFoundUser.value = false;
    }, 3000);
    nickname.value = '';
  } else {
    router.push(`/user/${lastQuery.value}`);
  }
}
</script>

<style lang="postcss" scoped>
.shake-enter-active {
  @apply animate-shake;
}
.shake-leave-active {
  @apply transition-opacity duration-150 ease-out;
}

.shake-enter-from,
.shake-leave-to {
  @apply opacity-0;
}

.ch-mv-r-enter-from,
.bg-mv-r-enter-from {
  @apply -translate-x-full opacity-0;
}

.ch-mv-l-enter-from,
.bg-mv-l-enter-from {
  @apply translate-x-full opacity-0;
}

.ch-mv-r-enter-to,
.bg-mv-r-enter-to,
.ch-mv-l-enter-to,
.bg-mv-l-enter-to {
  @apply translate-x-0 opacity-100;
}

.ch-mv-r-enter-active,
.bg-mv-r-enter-active,
.ch-mv-l-enter-active,
.bg-mv-l-enter-active,
.header-enter-active {
  @apply transition-all duration-500 ease-out;
}

.bg-mv-r-enter-active,
.bg-mv-l-enter-active {
  @apply delay-150;
}

.header-enter-from {
  @apply opacity-0 translate-y-10;
}

.header-enter-to {
  @apply opacity-100 translate-y-0;
}

.form-enter-active {
  @apply transition-width duration-500 md:duration-1000 lg:duration-[1.5s] ease-in-out delay-[25ms];
}

.form-enter-from {
  @apply w-[93px];
}

.form-enter-to {
  @apply w-full;
}
</style>
