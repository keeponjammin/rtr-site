// Import our custom CSS
import "../scss/styles.scss";

//Import our custom JS
import "./custom.js";

//Import vue components
import { createApp } from "vue";
import App from "../App.vue";

// Create a new Vue instance
createApp(App).mount("#app");