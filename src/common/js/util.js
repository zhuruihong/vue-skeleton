export default {
  urlParse: function() {
    let url = window.location.href;
    // let url = window.location.search;
    let obj = {};
    // let reg = /[?&]+[^?&]+=[^?&]+/g;
    let reg = /[?&#]+[^?&#]+=[^?&#]+/g;
    let arr = url.match(reg);
    // ['?id=12345', '&a=b']
    if (arr) {
      arr.forEach((item) => {
        let tempArr = item.substring(1).split('=');
        let key = decodeURIComponent(tempArr[0]);
        let val = decodeURIComponent(tempArr[1]);
        obj[key] = val;
      });
    }
    return obj;
  },
  getRedirectUrl: function() {
    let url = window.location.href;
    let redirectUrl;
    if (url.indexOf('/#/') > 0) {
      redirectUrl = window.location.hash.replace('#', '');
    } else {
      redirectUrl = window.location.pathname;
    }
    return redirectUrl;
  },
  getSsoService: function(paraName, paraValue, catcher) {
    // let url = window.location.href;
    // let hostPath;
    // if (url.indexOf('/#/') > 0) {
    //   hostPath = url.split('/#/')[0] + '/#/';
    // } else {
    //   hostPath = window.location.origin + '/';
    // }
    // return hostPath;
    let ssoService;
    if (this.isBlank(window.location.hash)) {
      ssoService = window.location.origin + '/' + catcher + '?' + paraName + '=' + paraValue;
    } else {
      ssoService = window.location.origin + '/' + '?' + paraName + '=' + paraValue + '#' + catcher;
    }
    return ssoService;
  },
  isBlank: function (str) {
    if (str === null || str === '' || str === 'undefined' || typeof str === 'undefined') {
      return true;
    }
    return false;
  },
  loggedIn: function () {
    let userId = this.getCookie('userId');
    if (this.isBlank(userId)) {
      return false;
    }
    return true;
  },
  getCookie: function (name) {
    // TODO need validate cookie expire
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    let arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  setCookie: function (key, value) {
    if (!this.isBlank(value)) {
      document.cookie = key + '=' + value;
    }
  },
  setCookieExpires: function () {
      let exdate = new Date();
      exdate.setDate(exdate.getDate() + 1);
      document.cookie = 'expires=' + exdate.toGMTString(); // + ';path=/' + ';domain=post.com';
  }
};
