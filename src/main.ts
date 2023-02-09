import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { NSwitch, NSlider, NInputNumber } from 'naive-ui'



import './assets/main.css'


import ColorPicker from '@radial-color-picker/vue-color-picker';
import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.css';
import naive from 'naive-ui/es/preset';


// import VueIroColorPicker from 'vue-iro-color-picker';
import { getStorage, saveStorage, clearStorage, hslToRgb, rgbToHsl } from '@/global/utility.js';



const app = createApp(App)

app.use(Antd)
app.use(createPinia())
app.use(router)
app.use(naive)


app.use(ColorPicker)

// app.use(VueIroColorPicker)


app.mount('#app')
