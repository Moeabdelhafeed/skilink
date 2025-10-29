<template>
  <div
    :class="cn('w-full h-full', $props.class)"
    style="transform-style: preserve-3d"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps({
  class: String,
});
</script>
