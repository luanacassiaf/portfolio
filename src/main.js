import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./assets/styles.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab, far)

const app = createApp(App)

app.use(router)

app
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')
