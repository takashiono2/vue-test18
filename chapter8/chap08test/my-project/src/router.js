import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './components/Article.vue'
import Page from './components/Page.vue'
//必要なものをimport 
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')//必要な時にAboutページをつなぐ
    },
    {
      path: '/article/:aid',
      name: 'article',
      component: Article,
      props: true,
        children:[{
          path: 'pages/:page_num',
          name: 'page',
          component: Page,
          props: true
        }]
    }
  ]
});
