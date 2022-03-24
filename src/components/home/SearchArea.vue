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
    <div class="relative flex flex-col items-center w-full gap-16 px-10 text-white">
      <header class="text-center">
        <span class="text-[28px] leading-4">넥슨 오픈 API 기반</span>
        <h1 class="mb-2 text-[40px] leading-10 break-words whitespace-nowrap">
          카트라이더 <b>전적</b> 검색
        </h1>
        <small class="px-16 py-0.5 rounded-full text-lg tracking-widest bg-[rgba(0,0,0,0.3)]">사회적거리두기</small>
      </header>
      <form
        class="flex justify-between w-full gap-2 px-6 border-4 border-white rounded-full max-w-[670px]"
        @submit.prevent=""
      >
        <label
          for="main-search-bar"
          class="grow"
        >
          <input
            id="main-search-bar"
            class="py-3 bg-transparent placeholder:text-gray-200 placeholder:opacity-80  text-sm sm:text-[20px] w-full"
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
      </form>
    </div>
  </div>
</template>
