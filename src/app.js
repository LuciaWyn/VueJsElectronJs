import { createApp } from 'vue'
// import the root component App from a single-file component.
import HelloWord from './HelloWorld.vue'

const app = createApp(HelloWord)
app.mount('#app')