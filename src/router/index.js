import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import WatchLater from '../components/WatchLater'
import Nominations from '../components/Nominations/NominationsTemplate'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Nominations',
            name: 'Nominations',
            component: Nominations,
        },
        {
            path: '/WatchLater',
            name: 'WatchLater',
            component: WatchLater,
        }
    ]
})