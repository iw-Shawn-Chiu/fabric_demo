// import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

/* 註冊所有組件為全域 */
Vue.use(BootstrapVue);

// createApp(App).mount('#app')
Vue.createApp(App).mount('#app');