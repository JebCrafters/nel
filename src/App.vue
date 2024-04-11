<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div v-for="res in data" :key="res" class="col text-danger">
      {{ res }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const data = ref([
      'text1', 'text2', 'text3', 'text4', 'text5', 'text6'
    ]);

    return {
      data,
    };
  },
};
</script>

<style>
.row {
  height: 500px;
}
</style>
