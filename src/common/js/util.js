export default {
  urlParse: function() {
    let url = window.location.href;
    // let url = window.location.search;
    let obj = {};
    let reg = /[?&]+[^?&]+=[^?&]+/g;
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
  getHostPath: function() {
    let url = window.location.href;
    let hostPath;
    if (url.indexOf('/#/') > 0) {
      hostPath = url.split('/#/')[0] + '/#/';
    } else {
      hostPath = window.location.host + window.location.pathname;
    }
    return hostPath;
  },
  isBlank: function (str) {
    if (str === null || str === '' || typeof str === 'undefined') {
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
  }
};
