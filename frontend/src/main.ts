// import './app.css'
import "./assets/style/app.scss";
import * as bootstrap from "bootstrap";
// import App from './App.svelte'
import App from "./views/App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
