import Vue from 'vue';
import Router from 'vue-router';
// import modulehome from 'components/modulehome/modulehome';
// import example2 from 'components/example2/example2';
// import example1 from 'components/example1/example1';
// import ssofilter from 'components/common/ssofilter/ssofilter';
// import ssocatcher from 'components/common/ssocatcher/ssocatcher';

const modulehome = () => import('components/modulehome/modulehome');
const example2 = () => import('components/example2/example2');
const example1 = () => import('components/example1/example1');
const ssofilter = () => import('components/common/ssofilter/ssofilter');
const ssocatcher = () => import('components/common/ssocatcher/ssocatcher');
const errorpage = () => import('components/common/errorpage/errorpage');
const myPlayer = () => import('components/myPlayer/myPlayer');
const myQuilleditor = () => import('components/myquilleditor/myquilleditor.vue');
const myDirective = () => import('components/mydirective/mydirective.vue');

// const modulehome = () => import(/* webpackChunkName: "group-exam" */ 'components/modulehome/modulehome');
// const example2 = () => import(/* webpackChunkName: "group-exam" */ 'components/example2/example2');
// const example1 = () => import(/* webpackChunkName: "group-exam" */ 'components/example1/example1');
// const ssofilter = () => import(/* webpackChunkName: "group-ssofilter" */ 'components/common/ssofilter/ssofilter');
// const ssocatcher = () => import(/* webpackChunkName: "group-ssofilter" */ 'components/common/ssocatcher/ssocatcher');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/modulehome/example1'
    },
    {
      path: '/modulehome',
      name: 'modulehome',
      component: modulehome,
      children: [
        {
          path: 'example1',
          name: 'example1',
          component: example1
          // ,
          // meta: {requiresAuth: true}
        },
        {
          path: 'myDirective',
          name: 'myDirective',
          component: myDirective
          // ,
          // meta: {requiresAuth: true}
        },
        {
          path: 'example2',
          name: 'example2',
          component: example2
          // ,
          // meta: {requiresAuth: true}
        },
        {
          path: 'myPlayer',
          name: 'myPlayer',
          component: myPlayer
          // ,
          // meta: {requiresAuth: true}
        },
        {
          path: 'myQuilleditor',
          name: 'myQuilleditor',
          component: myQuilleditor
          // ,
          // meta: {requiresAuth: true}
        },
        {
          path: 'ssocatcher',
          name: 'ssocatcher',
          component: ssocatcher
        },
        {
          path: 'errorpage',
          name: 'errorpage',
          component: errorpage
        }
      ]
    },
    {
      path: '/ssofilter',
      name: 'ssofilter',
      component: ssofilter
    }
  ]
});
