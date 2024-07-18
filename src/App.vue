<template>
  <div class="container">
    <div class="picker">
      <color-picker
        pickerType="fk"
        :isWidget="true"
        :roundHistory="true"
        v-model:pureColor="pureColor"
      />
    </div>

    <div class="picker-button">
      <button @click="handlePicker">picker</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pureColor = ref("red");

async function handlePicker() {
  // @ts-ignore
  const eyeDropper = new EyeDropper();
  const result = await eyeDropper.open();
  pureColor.value = result.sRGBHex;
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

.container {
  width: 400px;
  height: 400px;

  text-align: center;
}

.picker {
  display: inline-block;
  margin: 20px 0;
}

.picker-button {
  margin: 0 auto;
  width: 80px;
  height: 20px;
}

.picker-button button {
}
</style>
