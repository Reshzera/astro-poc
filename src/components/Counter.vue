<template>
  <div style="display: flex; gap: 20px">
    Vue Counter Component
    <button @click="counter.set(counterValue + 1)">
      Clicked {{ counterValue }} times
    </button>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { counter } from "../stores/counterStore";

const counterValue = useStore(counter);
</script>
