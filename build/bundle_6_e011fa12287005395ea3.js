webpackJsonp([6],{344:function(t,exports){"use strict";!function(t){function e(t,e,n){return"string"==typeof t&&("%"==t.slice(-1)?t=parseInt(t.substring(0,t.length-1))/100*e:"vh"==t.slice(-2)?t=parseInt(t.substring(0,t.length-2))/100*n:"px"==t.slice(-2)&&(t=parseInt(t.substring(0,t.length-2)))),t}var n=t(window),i=1,o={};n.on("scroll",function(){var e=n.scrollTop();t.map(o,function(t){window.clearTimeout(t.timeoutId),t.timeoutId=window.setTimeout(function(){t.handler(e)},t.options.delay)})}).on("load",function(){n.trigger("scroll")}),jQuery.fn.scrollex=function(s){var l=t(this);if(0==this.length)return l;if(this.length>1){for(var r=0;r<this.length;r++)t(this[r]).scrollex(s);return l}if(l.data("_scrollexId"))return l;var a,u,h,c,p;switch(a=i++,u=jQuery.extend({top:0,bottom:0,delay:0,mode:"default",enter:null,leave:null,initialize:null,terminate:null,scroll:null},s),u.mode){case"top":h=function(t,e,n,i,o){return t>=i&&o>=t};break;case"bottom":h=function(t,e,n,i,o){return n>=i&&o>=n};break;case"middle":h=function(t,e,n,i,o){return e>=i&&o>=e};break;case"top-only":h=function(t,e,n,i,o){return i>=t&&n>=i};break;case"bottom-only":h=function(t,e,n,i,o){return n>=o&&o>=t};break;default:case"default":h=function(t,e,n,i,o){return n>=i&&o>=t}}return c=function t(i){var o,s,l,r,a,u,h=this.state,c=!1,t=this.$element.offset();o=n.height(),s=i+o/2,l=i+o,r=this.$element.outerHeight(),a=t.top+e(this.options.top,r,o),u=t.top+r-e(this.options.bottom,r,o),c=this.test(i,s,l,a,u),c!=h&&(this.state=c,c?this.options.enter&&this.options.enter.apply(this.element):this.options.leave&&this.options.leave.apply(this.element)),this.options.scroll&&this.options.scroll.apply(this.element,[(s-a)/(u-a)])},p={id:a,options:u,test:h,handler:c,state:null,element:this,$element:l,timeoutId:null},o[a]=p,l.data("_scrollexId",p.id),p.options.initialize&&p.options.initialize.apply(this),l},jQuery.fn.unscrollex=function(){var e=t(this);if(0==this.length)return e;if(this.length>1){for(var n=0;n<this.length;n++)t(this[n]).unscrollex();return e}var i,s;return(i=e.data("_scrollexId"))?(s=o[i],window.clearTimeout(s.timeoutId),delete o[i],e.removeData("_scrollexId"),s.options.terminate&&s.options.terminate.apply(this),e):e}}(jQuery)}});