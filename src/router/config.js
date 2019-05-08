export default [
  // 首页
  {
    path: '/',
    name: 'index',
    meta: { needLogin: false },
    component: () => import('@/views/index.vue')
  },{
		path: '/pageOne',
		name: 'pageOne',
		component: () => import('@/views/pageOne.vue')
	}, {
		path: '/pageTwo',
		name: 'pageTwo',
		component: () => import('@/views/pageTwo.vue')
	}
];
