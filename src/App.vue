<template>
  <div class="contain row d-flex justify-content-center align-items-center">
    <div class="input col col-4 text-center d-flex justify-content-center align-items-center">
      <div class="row">
        <label>INPUT WORD</label>
        <textarea name="" id="" cols="30" rows="10" v-model="input1"></textarea>
        <button>Load word file</button>
      </div>
    </div>
    <div class="col col-2 text-center">
      INTERFACE
    </div>
    <div class="input col col-4 text-center d-flex justify-content-center align-items-center">
      <div class="row">
        <label>INPUT CITY</label>
        <textarea name="" id="" cols="30" rows="10" v-model="input2"></textarea>
        <button>Load city file</button>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="row">
    <textarea  cols="50" rows="10" readonly v-model="output"></textarea>
    <button>Load word file</button>
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
      input1: ref(''),
      input2: ref('')
    };
  },
  computed: {
    output() {
      return `${this.input1},${this.input2}`
    }
  }
};
</script>

<style>
.input {
  padding: 0.5em;
}
.contain {
  margin: 2rem 0 !important;
}
html {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100dvh;

  textarea {
    resize: none;
  }
}
</style>
