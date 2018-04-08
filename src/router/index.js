import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () => import('../pages/index/index.vue')
const Event = () => import('../pages/index/event/app.vue')
const Product = () => import('../pages/index/product/app.vue')
const Rebate = () => import('../pages/index/rebate/app.vue')
const List = () => import('../pages/index/list/app.vue')
const Article = () => import('../pages/index/article/app.vue')
const ArticleOne = () => import('../pages/index/article/app-one.vue')

if (process.env['vue-router'] !== 'VueRouter') {
	Vue.use(VueRouter)
}

const debug = process.env.NODE_ENV !== 'production'
const router = new VueRouter({
	mode: debug ? '' : 'history',
	routes: [
		{
			path: '/',
			component: Index,
		},
		{
			path: '/mb/event/index(|\.html)',
			component: Event
		},
		{
			path: '/mb/product/index(|\.html)',
			component: Product
		},
		{
			path: '/mb/rebate/index(|\.html)',
			component: Rebate
		},
		{
			path: '/mb/list/index(|\.html)',
			component: List
		},
		{
			path: '/mb/article/index(|\.html)',
			component: Article
		},
		{
			path: '/mb/article/articlelist(.*)',
			component: ArticleOne
		},
		{
			path: '*',
			redirect: '/'
		},
	]
});

export default router;
