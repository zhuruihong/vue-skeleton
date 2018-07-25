// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import util from 'common/js/util';
import axios from 'axios';
import VueLazyLoad from 'vue-lazyload';
import 'babel-polyfill';
import ElementUI from 'element-ui';

// import $ from 'jquery';

import VideoPlayer from 'vue-video-player';
// import VueQuillEditor from 'vue-quill-editor';

import 'common/stylus/base.styl';
import 'common/css/main.css';
import 'common/stylus/icon.styl';
// require styles 引入样式
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
import 'element-ui/lib/theme-chalk/index.css';

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

Vue.use(VideoPlayer);
// Vue.use(VueQuillEditor);
Vue.use(ElementUI);

// 系统错误捕获
const errorHandler = (error, vm) => {
  console.error('抛出全局异常');
  console.error(error);
  vm.$router.push({name: 'errorpage', params: {errors: error.message}});
};

Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error, vm) => errorHandler(error, vm);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// Vue.prototype.$echarts = echarts;

Vue.use(VueLazyLoad, {
  error: require('./common/image/error.png'),
  loading: require('./common/image/cnpost.png'),
  attempt: 1
});

// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  methods: {
    printLog: function () {
      console.log('I am from Gloable mixin');
    }
  }
});

Vue.directive('drag', {
  inserted: function(el) {
    el.onmousedown = function(e) {
      let l = e.clientX - el.offsetLeft;
      let t = e.clientY - el.offsetTop;
      document.onmousemove = function(e) {
        el.style.left = e.clientX - l + 'px';
        el.style.top = e.clientY - t + 'px';
      };
      el.onmouseup = function() {
        document.onmousemove = null;
        el.onmouseup = null;
      };
    };
  }
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
