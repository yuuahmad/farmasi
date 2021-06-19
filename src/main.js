import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js"
import Embed from 'v-video-embed'

// global register
createApp(App).use(router).use(Embed).mount('#app')
