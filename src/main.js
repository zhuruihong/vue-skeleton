// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import util from 'common/js/util';
import axios from 'axios';
import VueLazyLoad from 'vue-lazyload';
import 'babel-polyfill';

import 'common/stylus/base.styl';
import 'common/css/main.css';

// 系统错误捕获
const errorHandler = (error, vm) => {
  console.error('抛出全局异常');
  vm.$router.push({name: 'errorpage', params: {errors: error.message}});
};

Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error, vm) => errorHandler(error, vm);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueLazyLoad, {
  error: require('./common/image/error.png'),
  loading: require('./common/image/cnpost.png'),
  attempt: 1
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!util.loggedIn()) {
      next({
        name: 'ssofilter',
        params: {redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
