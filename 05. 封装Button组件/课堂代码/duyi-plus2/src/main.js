import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式文件
import './styles/index.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

// 引入自定义组件
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'

const app = createApp(App)

// 注册fontawesome组件
app.component('font-awesome-icon', FontAwesomeIcon)

// 注册自定义组件
app.component('Duyi-Icon', Icon)
app.component('Duyi-Button', Button)

app.use(router)

app.mount('#app')
