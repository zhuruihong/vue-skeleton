import Vue from 'vue';
import Router from 'vue-router';
import modulehome from 'components/modulehome/modulehome';
import example2 from 'components/example2/example2';
import example1 from 'components/example1/example1';
import sso from 'components/common/sso/sso';
// import ssocatcher from '../components/common/ssocatcher/ssocatcher';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
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
          path: 'example2',
          name: 'example2',
          component: example2
        }
      ]
    },
    {
      path: '/sso',
      name: 'sso',
      component: sso
    // },
    // {
    //   path: '/ssocatcher',
    //   name: 'ssocatcher',
    //   component: sso
    }
  ]
});
