// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')


import './assets/css/style.css'

import { createApp } from 'vue'
import MainVeiw from './MainVeiw.vue'
import router from './router'

const app = createApp(MainVeiw)

app.use(router)

app.mount('#app')
