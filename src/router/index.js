import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import aboutme from '@/components/aboutme.vue'
import projects from '@/components/projects.vue'
import tips from '@/components/tips.vue'
import contact from '@/components/contact.vue'

Vue.use(Router)

export default new Router({
	routes:[{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: home
	},{
		path: '/aboutme',
		component: aboutme,
		beforeEnter: (to,from,next) => {
			console.log('被点到了')
			next()
			//next({path: '/contact'})
		}
	},{
		path: '/projects',
		component: projects
	},{
		path: '/tips',
		component: tips
	},{
		path: '/contact',
		component: contact
	}]
})
