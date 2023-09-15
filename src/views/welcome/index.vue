<script setup lang="ts">
import { onMounted, ref } from "vue";
import { autoCompute } from "@/views/other/compute";
import { useHook } from "./hook";
import { type OriginDataItem } from "../other/data";
import { useResizeObserver } from "@vueuse/core";

defineOptions({
  name: "Welcome"
});

const currentData = ref<OriginDataItem[]>([]);

const { comps } = useHook();

// listen on resize events
const listenEl = () => {
  const el = document.getElementById("app");
  useResizeObserver(el, (entries: any) => {
    const { width, height } = entries[0].contentRect;
    currentData.value = autoCompute(width, height);
  });
};
onMounted(() => {
  listenEl();
});
</script>

<template>
  <div class="relative w-full h-full overflow-hidden box">
    <Widget
      class="bg-slate-600"
      v-for="item in currentData"
      :key="item.name"
      v-bind="item"
    >
      <component :is="comps[item.name] || null" />
    </Widget>
  </div>
</template>
