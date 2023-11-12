import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式文件
import './styles/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
