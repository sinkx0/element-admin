import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../components/CreateArticle.vue'
import ListArticle from '../components/ListArticle.vue'
import EditArticle from '../components/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
