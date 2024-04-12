<template>
  <div class="contain row d-flex justify-content-around align-items-center">
    <div class="input col col-4 text-center d-flex justify-content-center align-items-center">
      <div class="row">
        <label>INPUT WORD</label>
        <textarea name="" id="" cols="30" rows="10" v-model="input2"></textarea>
        <input type="file" @change="wordLoad">
      </div>
    </div>
    <div class="col col-2 text-center d-flex justify-content-center align-items-center">
      <div class="row">
        <div>
          <label>How much city?</label>
          <div class="row">
            <input v-model="howMuchCity" type="range" min="1" max="10" step="1">
            <span> {{ howMuchCity }} </span>
          </div>
        </div>
        <div class="mt-5">
          <label>Spec symbol</label>
          <div class="row">
            <textarea name="" id="" cols="5" rows="5" v-model="prefix"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="input col col-4 text-center d-flex justify-content-center align-items-center">
      <div class="row">
        <label>INPUT CITY</label>
        <textarea name="" id="" cols="30" rows="10" v-model="input1"></textarea>
        <input type="file" @change="cityLoad">
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="row d-flex justify-content-center align-items-center">
      <textarea cols="50" rows="10" readonly v-model="output"></textarea>
      <div class="row d-flex justify-content-center align-items-center">
        <button class="col-6" @click="convertInput">Create</button>
        <button class="col-6" @click="loadResultFile">Load result file</button>
      </div>
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
      input2: ref(''),
      output: ref(''),
      howMuchCity: ref(null),
      prefix: ref(''),
      cityLoadFile: ref(null),
      wordLoadFile: ref(null)
    };
  },
  computed: {
    trimInput1() {
      return this.input1.trim().split('\n')
    },
    trimInput2() {
      return this.input2.trim().split('\n')
    }
  },
  methods: {
    convertInput() {
      if (!this.trimInput1.length || !this.trimInput2.length || !this.howMuchCity || !this.prefix) {
        alert('Please fill in all fields');
        return;
      }

      const output = [];
      for (let i = 0; i < this.trimInput1.length; i += Number(this.howMuchCity)) {
        this.trimInput2.forEach((word) => {
          const trimmedWord = word.trim();
          const trimText = this.createTrimText(i)
          const wordsArrayPrefix = this.prefix.split(/\n/);
          wordsArrayPrefix.push('')
          const outputLines = this.addPrefixAndJoin(trimText, wordsArrayPrefix)
          if (!outputLines) return
          const resWithWord = this.addWordAndJoin(outputLines, trimmedWord)
          output.push(resWithWord)
        })
      }
      const flatOutputLines = output.flat();
      this.output = flatOutputLines.filter((line) => line.trim() !== '').join('\n');
    },
    createTrimText(i) {
      const trimArrays = [];
      for (let k = 0; k < this.howMuchCity; k++) {
        trimArrays.push(this.trimInput1[i + k]);
      }
      return trimArrays;
    },
    addPrefixAndJoin(array, prefixes) {
      const filteredArray = array.filter(item => item !== undefined);
      let result = [];
      console.log(filteredArray)
      console.log(filteredArray.length < Number(this.howMuchCity))
      if (filteredArray.length < Number(this.howMuchCity)) {
        alert('Not enough input for last field');
        return;
      }
      // Для каждого префикса
      for (let i = 0; i < prefixes.length; i++) {
        const prefix = prefixes[i];
        let tempResult = [];

        // Добавляем префикс к каждой строке
        for (const str of filteredArray) {
          // Удаляем символы новой строки и другие пробельные символы с начала и конца строки
          const trimmedStr = str.trim();
          // Проверяем, определена ли строка и не пуста ли она, прежде чем добавлять префикс
          if (trimmedStr) {
            tempResult.push(prefix + trimmedStr);
          }
        }

        // Добавляем массив строк с префиксом в общий результат
        result.push(tempResult);
      }
      return result;
    },

    addWordAndJoin(arrays, word) {
      let result = [];

      // Пробегаем по каждому массиву строк
      for (const arr of arrays) {
        // Преобразуем массив строк в одну строку, добавляя пробелы между словами
        const str = arr.join(' ');

        // Добавляем слово в начало строки
        const stringWithWord = word + ' ' + str;

        // Добавляем строку в общий результат
        result.push(stringWithWord);
      }

      return result.join('\n');
    },
    cityLoad(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const nonEmptyLines = reader.result.split('\n').filter((line) => line.trim() !== '');
        const filteredContent = nonEmptyLines.join('\n');
        this.cityLoadFile = filteredContent
        console.log(this.cityLoadFile)
        this.input1 = this.cityLoadFile
      };
      reader.onerror = () => {
        console.error('Ошибка чтения файла');
      };
      reader.readAsText(file);
    },
    wordLoad(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const nonEmptyLines = reader.result.split('\n').filter((line) => line.trim() !== '');
        const filteredContent = nonEmptyLines.join('\n');
        this.wordLoadFile = filteredContent
        console.log(this.wordLoadFile)
        this.input2 = this.wordLoadFile
      };
      reader.onerror = () => {
        console.error('Ошибка чтения файла');
      };
      reader.readAsText(file);
    },
    loadResultFile() {
      if (!this.output) {
        alert('You dont has any result');
        return;
      }
      // Создаем Blob из текста
      const blob = new Blob([this.output], { type: 'text/plain' });

      // Создаем ссылку для скачивания файла
      const url = URL.createObjectURL(blob);

      // Создаем ссылку на элемент <a> для скачивания
      const link = document.createElement('a');
      link.href = url;
      link.download = 'output.txt';

      // Добавляем элемент в документ и эмулируем щелчок для скачивания файла
      document.body.appendChild(link);
      link.click();

      // Очищаем ресурсы
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }
  }
}
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
