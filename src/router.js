import { createRouter, createWebHashHistory } from 'vue-router'
import { ref, computed } from 'vue'

import HomePage from './views/home-page.vue'
import AboutPage from './views/about-page.vue'
import ServicesPage from './views/services-page.vue'
import ServicesSinglePage from './views/services-single-page.vue'
import TeamPage from './views/team-page.vue'
import TeamSinglePage from './views/team-single-page.vue'
import ContactPage from './views/contact-page.vue'
import BlogPage from './views/blog-page.vue'
import LocationsPage from './views/locations-page.vue'
import ErrorPage from './views/error-page.vue'

const routes = [
	{ name: 'Home', path: '/', component: HomePage },
  { name: 'About', path: '/about', component: AboutPage },
  { name: 'Services', path: '/services', component: ServicesPage },
  { name: 'Services-Single', path: '/services/single', component: ServicesSinglePage },
  { name: 'Team', path: '/team', component: TeamPage },
  { name: 'Team-Single', path: '/team/single', component: TeamSinglePage },
  { name: 'Contact', path: '/contact', component: ContactPage },
	{ name: 'Blog', path: '/blog', component: BlogPage },
  { name: 'Locations', path: '/locations', component: LocationsPage },
  { path: '/:catchAll(.*)', component: ErrorPage },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
	currentPath.value = window.location.hash
})

const currentView = computed(() => {
	return routes[currentPath.value.slice(1) || '/'] || ErrorPage
})

export default router