import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import logined from '@/views/logined'


Vue.use(VueRouter)

const routes = [
	{
		path: '/youping',
		name: 'Youping',
		component: ()=>import('@/views/youping')
	},
	{
		path: '/mijia',
		// name: 'Mijia',
		component: ()=>import('@/views/mijia'),
		children:[
			{
				path: '',
				name: 'Home',
				component: ()=>import('@/views/home')
			},
			{
				path: 'baike',
				component: ()=>import('@/views/baike'),
				children:[
					{
						path:'',
						name:'Baike',
						component: ()=>import('@/components/list')
					},
					{
						path:'list',
						name:'List',
						component: ()=>import('@/components/list2')
					}
					
				]
			},
			{
				path: 'shebei',
				name: 'Shebei',
				component: ()=>import('@/views/shebei'),
			},
			{
				path: 'shebeiopen',
				name: 'ShebeiOpen',
				component: ()=>import('@/views/shebei_open'),
			},
			{
				path: 'zhaoming',
				name: 'Zhaoming',
				component: ()=>import('@/views/zhaoming'),
			},
			{
				path: 'seache',
				name: 'Seache',
				component: ()=>import('@/views/seache'),
			},
			{
				path: 'lanya',
				name: 'Lanya',
				component: ()=>import('@/views/lanya'),
			},
			{
				path: 'shuihu',
				name: 'Shuihu',
				component: ()=>import('@/views/shuihu'),
			},
			{
				path: 'shuihulianjie',
				name: 'Shuihulianjie',
				component: ()=>import('@/views/shuihulianjie'),
			}
		]
	},
	{
	  path: '/logined',
	  name: 'Logined',
	  component: logined
	},
	{
	  path: '/',
	  name: 'Login',
	  component: login
	},
	{
	  path: '/concat',
	  // name: 'Concat',
	  component: ()=>import('@/views/concatst'),
	  children:[
		  {
			  path: '',
			  name: 'Concat',
			  component: ()=>import('@/views/ljst'),
		  },
		  {
			  path: 'ed',
			  name: 'Concat_ed',
			  component: ()=>import('@/views/concated'),
		  },
		  {
			  path: 'rd',
			  name: 'Concat_rd',
			  component: ()=>import('@/views/concatrd'),
		  },
		  {
			  path: 'end',
			  name: 'Concat_end',
			  component: ()=>import('@/views/linksucc'),
		  }
	  ]
	},
	{
		path: '/concated',
		name: 'Concated',
		component: ()=>import('@/views/cocated')
	},
	{
		path: '/goods',
		component: ()=>import('@/views/goods'),
		children:[
			{
				path: '',
				name: 'Goods',
				component: ()=>import('@/views/goodsmain')
			}
		]
	},
	{
		path: '/cart',
		name: 'Cart',
		component: ()=>import('@/views/cart')
	},
	{
		path: '/tuijian',
		name:'Tuijian',
		component:()=>import('@/views/tuijian')
	},
	{
		path: '/wode',
		name:'Wode',
		component:()=>import('@/views/wode')
	},
	{
		path: '/wd',
		name:'Wd',
		component:()=>import('@/views/wd')
	},
	{
		path: '/rz',
		name:'Rz',
		component:()=>import('@/views/rz')
	},
	{
		path: '/ly',
		name:'Ly',
		component:()=>import('@/views/ly')
	}
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
