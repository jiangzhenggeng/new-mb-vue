import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index/index.vue';

if (process.env['vue-router']!=='VueRouter') {
	Vue.use(VueRouter);
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
