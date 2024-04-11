import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'

import App from './App.vue'
// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.mount('#app')