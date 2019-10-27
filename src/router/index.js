import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Home from '@/pages/Home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/home',
      name: 'homePage',
      component: Home
    }
  ]
})
