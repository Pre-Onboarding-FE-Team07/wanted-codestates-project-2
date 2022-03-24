<template>
  <div class="w-full md:w-[440px] min-w-[350px] mx-auto px-2 bg-white border border-gray-200">
    <header class="flex items-center justify-between p-1 m-1 border-b">
      <h5 class="my-1 font-bold">
        <slot name="header" />
        <!-- <span class="text-main">종합</span> 전적 -->
      </h5>
      <div class="flex items-center gap-1 text-xs">
        <slot name="sub-header" />
      </div>
    </header>
    <slot name="content" />
  </div>
</template>
