// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/index.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)


axios.interceptors.request.use(function(config){  
    store.dispatch('showloader')  
    return config  
},function(err){  
    return Promise.reject(err)  
});  
axios.interceptors.response.use(function(response){  
    store.dispatch('hideloader')  
    return response  
},function(err){  
    return Promise.reject(err)  
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
