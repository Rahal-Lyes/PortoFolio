import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index'
import './style.css'
const app=createApp(App)
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app') 
