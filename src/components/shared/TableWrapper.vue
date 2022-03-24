<template>
  <div class="max-h-[150px] md:max-h-[300px] overflow-auto mb-2">
    <table class="w-full border">
      <thead class="top-0 text-sm bg-gray-100">
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            class="p-1"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="text-sm text-gray-700">
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  headers: string[],
}>();
</script>
