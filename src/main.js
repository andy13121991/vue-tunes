import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

window.eventBus = mitt()

createApp(App).mount('#app')
