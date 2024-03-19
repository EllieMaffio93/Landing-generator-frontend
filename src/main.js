import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CTA from './layouts/CTA.vue'
import Banner from './layouts/Banner.vue'

const myApp = createApp(App);
myApp.component("CTA", CTA);
myApp.component("Banner", Banner);
myApp.mount('#app')
