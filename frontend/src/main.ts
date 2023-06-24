import "./assets/style/app.scss";
import App from "./views/App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
