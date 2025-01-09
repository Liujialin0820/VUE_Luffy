import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import settings from "./settings";
import "../static/css/reset.css";

const app = createApp(App);

app.config.globalProperties.$settings = settings;

app.use(createPinia());
app.use(router);

app.mount("#app");
