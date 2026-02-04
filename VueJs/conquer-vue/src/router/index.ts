import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Login/LoginPage.vue'
import RegisterPage from '@/views/Register/RegisterPage.vue'
import CharactersPage from '@/views/Private/Characters/CharactersPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
    { path: '/characters', name: 'charactersPage', component: CharactersPage },
  ],
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ['login', 'register']
  const authRequired = !publicPages.includes(to.name as string)
  const token = localStorage.getItem('token')

  if (authRequired) {
    // TODO Iniciar un store
    if (!token) {
      return next({ name: 'login' })
    }
  }
  next()
})

export default router
