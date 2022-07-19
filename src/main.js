import { createApp } from 'vue'
import App from './App.vue'
import LoadScript from "vue-plugin-load-script"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).mount('#app')
App.use(LoadScript)
