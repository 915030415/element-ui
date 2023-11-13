// import "./assets/main.css";

import { createApp } from "vue";

import duyiplus2 from "duyi-plus2";
import "duyi-plus2/style.css";

import App from "./App.vue";

const app = createApp(App);

app.use(duyiplus2);

app.mount("#app");
