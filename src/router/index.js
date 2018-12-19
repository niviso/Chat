import Vue from 'vue'
import Router from 'vue-router'
import ChatView from '@/components/ChatView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatView',
      component: ChatView
    }
  ]
})
