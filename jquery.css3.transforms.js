// Generated by CoffeeScript 1.6.3
(function(){var e,t,n;$.vendorPrefix=function(){var e;e=navigator.userAgent;return e.indexOf("Opera")!==-1?"-o-":e.indexOf("MSIE")!==-1?"-ms-":e.indexOf("WebKit")!==-1?"-webkit-":navigator.product==="Gecko"?"-moz-":""};$.browserCode=function(){return $.vendorPrefix().slice(1,-1)};e=$.browserCode();n=$.vendorPrefix();t=function(t,r){var i;i=new RegExp(""+t+"\\((-?\\d+\\.?\\d*)"+r+"\\)","ig");return{get:function(t,n,r){var s,o;o=t.style[""+e+"Transform"];if(o!==""){s=i.exec(o);s||(s=i.exec(t.style.cssText));if(s)return parseFloat(s[1])}return 0},set:function(s,o){var u,a;o=/\d+\.?\d*/.exec(o)[0]||"0";a=""+t+"("+o+r+")";u=s.style[""+e+"Transform"];u.indexOf(t+"(")>-1?u=u.replace(i,a):u+=a;return $(s).css(""+n+"transform",u)}}};$(function(){var e,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m;n=["rotate","rotateX","rotateY","rotateZ"];a=["translateX","translateY","translateZ"];i=["scale","scaleX","scaleY","scaleZ"];o=["skewX","skewY"];for(f=0,p=n.length;f<p;f++){e=n[f];$.cssHooks[e]=t(e,"deg")}for(l=0,d=a.length;l<d;l++){u=a[l];$.cssHooks[u]=t(u,"px")}for(c=0,v=i.length;c<v;c++){r=i[c];$.cssHooks[r]=t(r,"")}for(h=0,m=o.length;h<m;h++){s=o[h];$.cssHooks[s]=t(s,"deg")}return $.cssHooks.perspective=t("perspective","px")})}).call(this);