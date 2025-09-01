import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'
import router from './router/index.js'
import AOS from 'aos'
import 'aos/dist/aos.css';

    AOS.init({
        duration: 1000,
        once: true
    })


createApp(App).use(router).mount('#app')
