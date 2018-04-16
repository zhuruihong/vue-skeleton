

document.write("<script type=text/javascript src=http://100.5.8.253:9090/cas/js/jquery-1.9.1.min.js></script>");
document.write("<script type=text/javascript src=http://100.5.8.253:9090/cas/js/json2.js></script>");


var cpsdc_sso = {

	url_local_getInfo: "http://100.5.8.253:9090/cas/gateway/getInfo.do",
	url_local_logout: "http://100.5.8.253:9090/cas/gateway/logout.do",
	url_local_casCallback: "http://100.5.8.253:9090/cas/gateway/casCallback.do",
	url_local_register: "http://100.5.8.253:9090/cas/gateway/reg4Gwt.do",

	url_cas_login_prefix: "https://passport.11185.cn:8001/cas/login",
	url_cas_logout_prefix: "https://passport.11185.cn:8001/cas/logout",

	param_ticket: "ticket",

	logon_state: 0,


	getHrefParam: function(p_name) {
		var reg = new RegExp("(^|&)" + p_name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null) {
			return unescape(r[2]);
		}
		return null; //返回参数值
	},


	getUrlParam: function(p_url, p_name) {
		var reg = new RegExp("(^|&)" + p_name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = p_url.match(reg); //匹配目标参数
		if (r != null) {
			return unescape(r[2]);
		}
		return null; //返回参数值
	},


	getInfo: function(p_type, p_redirect) {
		p_redirect = (p_redirect==null||p_redirect==undefined)?true:p_redirect;
		var v_url = cpsdc_sso.url_local_getInfo + "?type=" + p_type;
		var v_ticket = cpsdc_sso.getHrefParam(cpsdc_sso.param_ticket);
		var v_ret = null;

		jQuery.support.cors = true;
		$.ajax({
			url: v_url + (v_ticket!=null? ("&ticket="+v_ticket):""),
			async : false,
			xhrFields:{
				withCredentials:true
			},
			success: function(data) {
				var jsonObj = JSON.parse(data);
				if( jsonObj.status=="200" ) {
					//回调函数里不能用this引用类
					v_ret = jsonObj.data;
				} else if( jsonObj.status=="302" ) {
					if( p_redirect ) {
						window.location.href = jsonObj.location;
					};
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("cpsdc_sso.getInfo ajax error-> " + errorThrown.message);
			}
		});
		return v_ret;
	},


	callWithToken: function(p_callback) {
		var v_token = this.getInfo("token");
		if( v_token!=null ) {
			p_callback(v_token);
		}
	},


	checkLogon: function(p_proxyPage, p_callback) {
		var v_iframe = document.createElement("iframe");
		v_iframe.src = cpsdc_sso.url_cas_login_prefix + "?service=" +
			encodeURIComponent(
				cpsdc_sso.url_local_casCallback + "?proxyPage=" + p_proxyPage +
				"&callback=" + p_callback
			);
		// v_iframe.style = "width:0px;height:0px;display:none";
		v_iframe.style.width = "0px";
		v_iframe.style.height = "0px";
		v_iframe.style.display = "none";
		document.body.appendChild(v_iframe);
	},


	register: function() {
		var v_gwt = this.getHrefParam("gwt");
		if( v_gwt!=null ) {
			cpsdc_sso.logon_state = 1;
			jQuery.support.cors = true;
			$.ajax({
				xhrFields:{
					withCredentials:true
				},
				url: cpsdc_sso.url_local_register,
				type: "POST",
				data: {
					gwt: v_gwt
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					console.log("cpsdc_sso.register ajax error-> " + errorThrown.message);
				}
			});
		}
	},


	getLoginUrl: function(p_retUrl) {
		return cpsdc_sso.url_cas_login_prefix + "?service=" + encodeURIComponent(p_retUrl);
	},


	logout: function(p_retUrl) {
		jQuery.support.cors = true;
		$.ajax({
			async : false,
			xhrFields:{
				withCredentials:true
			},
			url: cpsdc_sso.url_local_logout,
			type: "get",
			success: function(data) {
				if( p_retUrl!=null ) {
					window.location.href = cpsdc_sso.url_cas_logout_prefix +
					"?service=" + encodeURIComponent(p_retUrl);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("cpsdc_sso.logout ajax error-> " + errorThrown.message);
			}
		});
	}
};
function  test() {
  console.log("HHHHHHHHHh");
}

