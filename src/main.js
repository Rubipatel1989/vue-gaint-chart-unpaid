import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS

const app = createApp(App);
app.use(router); // Use the router
app.mount("#app");
