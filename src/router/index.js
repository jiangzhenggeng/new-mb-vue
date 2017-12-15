import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index/index.vue';

if (process.env['vue-router']!=='VueRouter') {
	Vue.use(Router);
}

const router = new Router({
	mode: 'history',
	// hashbang: false,
	// history: true,
	routes: [
		{
			path: '/',
			component: index
		},
		{
			path: '*',
			redirect: '/'
		},
	]
});

export default router;
