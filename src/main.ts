import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import {router} from './routes';
import BookmarkAdd from './components/BookmarkAdd.vue';
import TestComp from './components/TestComp.vue';


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component('TestComp', TestComp )
app.mount('#app');
