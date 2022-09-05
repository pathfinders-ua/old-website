<script setup lang="ts">
import { pearls } from '@/data/pearls'
</script>

<template>
    <div class="flex flex-col gap-4 px-4 mt-8">
        <router-link v-for="(quarter, index) in pearls.quarters" :to="'/quarters/' + (index + 1)"
            :class="[quarter.button, 'flex justify-center items-center rounded-md border border-transparent px-6 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2']">
            {{ index + 1 }} Квартал
        </router-link>
    </div>
</template>