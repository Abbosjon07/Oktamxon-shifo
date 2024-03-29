import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/madia.css'
import './assets/main.css'
import Toast from 'vue-toastification'
import store from './store'


import 'vue-toastification/dist/index.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
app.use(Toast)

