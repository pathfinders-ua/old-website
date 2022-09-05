<script setup lang="ts">
import { BookmarkIcon, HomeIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    home: {
        type: Boolean,
        default: false
    },
    text: String
})
</script>

<template>
    <div class="bg-sky-600 text-white p-4 flex items-center justify-between">
        <div v-if="!text || text.length < 1" class="flex gap-2 items-center">
            <span>Пам'ятні перлини</span>
            <BookmarkIcon class="w-4 h-4" />
        </div>
        <div v-else-if="text && text.length > 0">
            {{text}}
        </div>
        <router-link v-if="props.home === true" to="/">
            <HomeIcon class="w-6 h-6" />
        </router-link>
    </div>
</template>
