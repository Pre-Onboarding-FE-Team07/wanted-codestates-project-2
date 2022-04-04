<template>
  <ul
    class="flex flex-col w-full gap-2 whitespace-nowrap"
  >
    <li
      v-for="record in records"
      :key="record.matchId"
      class="flex flex-col"
    >
      <record-row :record="record" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import RecordRow from '@/components/user/RecordRow.vue';
import { MatchRecord } from '@/netlify/types/api';

defineProps<{
  records: MatchRecord[];
}>();
</script>
