// import App from './App.vue'
// import { createApp } from 'vue'
// import router from './router/index'
// import './style.css'
// import vuetify from './plugins/vuetify'
// const app=createApp(App)
// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { fas } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(fas)
// app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(router).use(vuetify)
// app.mount('#app') 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(vuetify)

app.mount('#app')
