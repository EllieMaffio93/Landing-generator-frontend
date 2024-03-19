import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CallToAction from './layouts/CallToAction.vue'
import Banner from './layouts/Banner.vue'

const myApp = createApp(App);
myApp.component("CallToAction", CallToAction);
myApp.component("Banner", Banner);
myApp.mount('#app')
