import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/home-page.vue";
import AboutMePage from "@/components/About-me-page.vue";
import myPortfoliosPage from "@/components/myPortfolios-page.vue";
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutMePage
    },
    {
        path: '/portfolios',
        name: 'Portfolios',
        component: myPortfoliosPage
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
