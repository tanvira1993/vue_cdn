import { About } from './components/about.js'
import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

Vue.use(VueRouter)

const routing = 
[
	{
		path: '/about',
		component: About,
		name: "About Us Page"
	},














































































































































	//rotu for tanvir

























































	//route for hashmi

]



const router = new VueRouter({
	routes: routing
})
export {router}