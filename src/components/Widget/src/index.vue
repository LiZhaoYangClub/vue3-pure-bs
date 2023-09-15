<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "Widget"
});

type Props = {
  name?: string;
  w?: number;
  h?: number;
  left?: number;
  top?: number;
  zoom?: [number, number, number];
};

const props = withDefaults(defineProps<Props>(), {
  w: 200,
  h: 120,
  left: 0,
  top: 0,
  zoom: () => [1, 1, 1]
});

const styleCss = computed(() => ({
  width: `${props.w}px`,
  height: `${props.h}px`,
  left: `${props.left}px`,
  top: `${props.top}px`,
  transform: `scale3d(${props.zoom[0]}, ${props.zoom[1]}, ${props.zoom[2]})`
}));
</script>

<template>
  <div
    class="absolute inline-block origin-top-left widget text-[14px] leading-[18px]"
    :style="styleCss"
  >
    <div class="relative w-full h-full overflow-hidden inner-widget">
      <slot />
    </div>
  </div>
</template>
