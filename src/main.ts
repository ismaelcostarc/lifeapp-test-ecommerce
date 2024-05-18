import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import HomeLayout from './layouts/HomeLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('HomeLayout', HomeLayout)

app.mount('#app')
