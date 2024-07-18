// 样式初始化
import "normalize.css/normalize.css";

// 颜色选择器
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(Vue3ColorPicker).mount("#app");
