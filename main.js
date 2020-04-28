import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'
import {router} from './routes.js'
import {
    Navbar
} from './components/navbar.js'

import {
    MainTemplate
} from './templates/main-template.js'


new Vue({
    el: '#app', // This should be the same as your <div id=""> from earlier.
    components: {
        'navbar': Navbar
    },
    mode : 'history',
    router,
    template: MainTemplate,

    mounted:function (){
        console.log("gua gua from main");
        
    }
})
