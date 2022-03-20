import { createWebHistory, createRouter } from 'vue-router';
import Home from './Home.vue';
import Covid from './components/GetCovid.vue';
import Detail from './components/Detail.vue';
const routes = [
    {
		path: '/',
		name: 'dashboard',
		component: Covid,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
    {
		path: '/detail/:id',
		name: 'detail',
		component: Detail,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;