<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import {pearls} from '@/data/pearls'
import {getWeekNumber} from '@/plugins/weekNumber'

const store = useGlobalStore()

const quarter = Math.floor((store.today.getMonth() + 3) / 3)

const week = getWeekNumber(store.today, quarter - 1)

const pearl = {
    week: { name: `Тиждень ${week}`, color: pearls.weeks.colors[week - 1] },
    quarter: { name: `Квартал ${quarter}`, color: pearls.quarters[quarter - 1].badge },
    title: 'Перлина тижня',
    text: pearls.quarters[quarter - 1].pearls[week - 1].text,
    location: pearls.quarters[quarter - 1].pearls[week - 1].location
}
</script>

<template>
    <div class="m-4 mt-6">
        <div>
            <div class="inline-flex gap-2">
                <span :class="[pearl.quarter.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">{{ pearl.quarter.name }}</span>
                <span :class="[pearl.week.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">{{ pearl.week.name }}</span>
            </div>
        </div>
        <div class="mt-4 block">
            <p class="text-xl font-semibold text-gray-900">{{ pearl.title }}</p>
            <p class="mt-3 text-base text-gray-800">{{ pearl.text }}</p>
        </div>
        <div class="mt-3 flex items-center justify-end">
            <div>
                <p class="text-sm font-medium text-gray-900">
                    {{ pearl.location }}
                </p>
            </div>
        </div>
    </div>
</template>
