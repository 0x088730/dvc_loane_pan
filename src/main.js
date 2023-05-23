import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router/router.js';
import './data/projects.js';
import './style/home.css';
import './style/tailwind.css';
import { MotionPlugin } from '@vueuse/motion'
import twElements from 'tw-elements';
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
const app = createApp(App);
app.use(MotionPlugin);
app.use(router);
app.use(twElements)
app.mount("#app");