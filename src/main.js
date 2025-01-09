import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import settings from "./settings";
import "../static/css/reset.css";
import axios from "axios"; // 从node_modules目录中导入包

const app = createApp(App);

// 配置全局属性
app.config.globalProperties.$settings = settings;

// 配置 axios
axios.defaults.withCredentials = false; // 阻止 ajax 附带 cookie
app.config.globalProperties.$axios = axios; // 把 axios 挂载到全局属性

// 使用 Pinia 和路由
app.use(createPinia());
app.use(router);

// 挂载应用
app.mount("#app");
