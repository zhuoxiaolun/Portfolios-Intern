import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/home-page.vue";
import AboutMePage from "@/components/About-me-page.vue";
import myPortfoliosPage from "@/components/myPortfolios-page.vue";
import AttackAction from "@/components/Portfolios/attack-action.vue";
import ElvesLand from "@/components/Portfolios/elves-land.vue";
import FragrantPaddy from "@/components/Portfolios/fragrant-paddy.vue";
import paintSip from "@/components/Portfolios/paint-sip.vue";
import peaceLove from "@/components/Portfolios/peace-love.vue";
import taiwanCulture from "@/components/Portfolios/taiwan-culture.vue";
import BlenderArt from "@/components/Portfolios/BlenderArt.vue";
const routes = [
    {
        path:'/',
        name:'index',
        component: HomePage
    },
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
    },
    {
        path: '/blender-art',
        name: 'Blender',
        component: BlenderArt
    },
    {
        path: '/attack',
        name: 'Attack',
        component: AttackAction
    },
    {
        path: '/elves',
        name: 'Elves',
        component:ElvesLand
    },
    {
        path: '/fragrant',
        name: 'Fragrant',
        component:FragrantPaddy
    },
    {
        path: '/paint-slip',
        name: 'Paint-slip',
        component:paintSip
    },
    {
        path: '/peace-love',
        name: 'Peace-love',
        component:peaceLove
    },
    {
        path: '/taiwan-culture',
        name: 'taiwan-culture',
        component: taiwanCulture
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
