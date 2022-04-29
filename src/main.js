import { createApp, use } from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

/* 註冊所有組件為全域 */
use(BootstrapVue)

createApp(App).mount('#app')
