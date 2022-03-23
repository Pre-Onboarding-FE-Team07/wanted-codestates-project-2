<template>
  <board-container>
    <template #header>
      <span class="text-main">응원</span> 한마디
    </template>
    <template #sub-header>
      <span>오늘</span>
      <span>1개</span>
      <span>전체</span>
      <span>2개</span>
    </template>
    <template #content>
      <div class="flex flex-col h-[190px]">
        <div
          ref="messageBox"
          class="flex flex-col-reverse my-2 overflow-y-auto grow"
        >
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex items-center gap-2 px-2"
          >
            <span class="text-sm text-main whitespace-nowrap">{{ message.nickname }}</span>
            <div class="p-1 px-2 m-1 leading-5 border border-gray-300 rounded-lg grow">
              <p>{{ message.content }}</p>
            </div>
          </div>
        </div>
        <form
          class="flex items-center justify-between gap-2 py-3 text-sm border-t"
          @submit.prevent="submit"
        >
          <label
            for="nickname"
          >
            <input
              id="nickname"
              v-model="nickname"
              class="w-20 p-1 border-b"
              type="text"
              placeholder="닉네임"
              maxlength="5"
            >
          </label>
          <input
            v-model="content"
            type="text"
            class="p-1 border-b grow"
            placeholder="최대 30글자"
            maxlength="30"
          >
          <button
            type="submit"
            class="px-2 py-1 bg-white border rounded-lg hover:bg-main hover:text-white border-main text-main whitespace-nowrap"
          >
            남기기
          </button>
        </form>
      </div>
    </template>
  </board-container>
</template>

<script lang="ts" setup>
import BoardContainer from '@/components/user/BoardContainer.vue';
import { onMounted, ref, watch } from 'vue';

const nickname = ref('');
const content = ref('');
const messageBox = ref<HTMLDivElement>();

function scrollTop() {
  if (messageBox.value) {
    const { scrollHeight } = messageBox.value;
    messageBox.value.scrollTop = -scrollHeight;
  }
}

onMounted(() => {
  scrollTop();
});

type Message = {
  nickname: string;
  content: string;
}

const messages = ref<Message[]>([
  {
    nickname: '응원',
    content: '합니다',
  },
  {
    nickname: '긴 닉네임',
    content: '긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 긴 메시지 ',
  },
]);

watch(messages, () => {
  setTimeout(scrollTop, 0);
}, { deep: true });

function submit() {
  messages.value.push({
    nickname: nickname.value,
    content: content.value,
  });
  nickname.value = '';
  content.value = '';
}
</script>
