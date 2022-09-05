<script setup lang="ts">
import Header from "../components/Header.vue";
import { pearls } from "@/data/pearls";
import Pearl from "../components/Pearl.vue";
</script>

<template>
  <div>
    <Header :home="true" :text="pearls.quarters[Number($route.params.id) - 1].name" />
    <ul role="list" class="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Pearl v-for="(pearl, index) in pearls.quarters[Number($route.params.id) - 1].pearls" :pearl="pearl" :week="index + 1" :color="pearls.weeks.colors[index]" :key="index" />
    </ul>
  </div>
</template>
