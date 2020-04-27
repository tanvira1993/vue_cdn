import { About } from './components/about.js'
import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/about',
		component: About,
		name: "About Us Page"
	}]
})
export {router}