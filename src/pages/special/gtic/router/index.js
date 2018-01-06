import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index.vue';
import detail from '../pages/detail.vue';
import type from '../pages/type.vue';

if (process.env['vue-router']!=='VueRouter') {
	Vue.use(VueRouter);
}

const router = new VueRouter({
	mode: 'history',
	// hashbang: false,
	// history: true,
	routes: [
		{
			path: 'mb/type(.*)',
			component: type
		},
		{
			path: 'mb/detail(.*)',
			component: detail
		},
		{
			path: 'mb(.*)',
			component: index
		},
		{
			path: '*',
			redirect: 'mb'
		},
	]
});

export default router;
