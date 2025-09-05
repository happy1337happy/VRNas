import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AboutUs from "../pages/AboutUs.vue";
import Service from "../pages/Service.vue";
import DetailService from "../pages/DetailService.vue";
import PricingPlan from "../pages/PricingPlan.vue";
import Blog from "../pages/Blog.vue";
import BlogContent from "../pages/BlogContent.vue";
import Team from "../pages/Team.vue";
import ContactUs from "../pages/ContactUs.vue";
import FAQ from "../pages/FAQ.vue";
import TemsConditions from "../pages/TemsConditions.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/service',
        name: 'Service',
        component: Service,
    },
    {
        path: '/detail-service',
        name: 'DetailService',
        component: DetailService,
    },
    {
        path: '/pricing-plan',
        name: 'PricingPlan',
        component: PricingPlan,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/blog/:id',
        name: 'BlogContent',
        component: BlogContent,
        props: true,
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
    },
    {
        path: '/tems-conditions',
        name: 'TemsConditions',
        component: TemsConditions,
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
    },
]

const router = createRouter({
    history:createWebHistory('/VRNas/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
})

export default router