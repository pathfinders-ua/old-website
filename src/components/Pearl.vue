<script setup lang="ts">
const props = defineProps({
    pearl: {
        type: Object as () => {
            text: string
            location: string
        },
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1">
          <div class="flex items-center justify-between space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">{{ pearl.location }}</h3>
            <span :class="[color, 'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium']">Тиждень {{ week }}</span>
          </div>
          <p class="mt-2 text-sm text-gray-800">{{ pearl.text }}</p>
        </div>
      </div>
    </li>
</template>
