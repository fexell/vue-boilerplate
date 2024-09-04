import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/main.css'

library.add(fas)
library.add(fab)
library.add(far)

const app = createApp(App)

app.component('font-awesome-icons', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#App')
