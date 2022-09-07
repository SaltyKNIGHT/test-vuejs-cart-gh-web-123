import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import './assets/styles/style.scss' // for side-effects only

const app = createApp(App)
app.use(router)
app.mount('#app')
