import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import Router from 'vue-router'

import Login from '../components/Login.vue'
import TodoList from '../components/TodoList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
