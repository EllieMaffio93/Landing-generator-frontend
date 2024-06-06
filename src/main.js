import { createApp } from 'vue'
import 'vue3-toastify/dist/index.css';
import './style.css'
import App from './App.vue'
import CTA from './layouts/CTA.vue'
import Hero from './layouts/Hero.vue'
import Features from './layouts/Features.vue'
import { router } from './router'
import Vue3Toastify from 'vue3-toastify';



const myApp = createApp(App);
myApp.component("CTA", CTA);
myApp.component("Hero", Hero);
myApp.component("Features", Features)
myApp.use(router);
myApp.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
    theme: 'light',
    transition: 'slide'
});
myApp.mount('#app')
