import Vue from 'vue;
import VueRouter from 'vue-router';
import loginPage from '@/views/loginPage'
import SignupPage from '@/views/SignupPage'
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: ' /login',
            component: loginPage,
        },
        {
            path: '/signup',
            component: SignupPage,
            
        },
    ],
});