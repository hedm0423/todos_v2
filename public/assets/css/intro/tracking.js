!function t(e,n,r){function i(o,s){if(!n[o]){if(!e[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[o]={exports:{}};e[o][0].call(f.exports,function(t){var n=e[o][1][t];return i(n?n:t)},f,f.exports,t,e,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(t,e,n){!function(){function t(t,e){return t.href=e}function e(t,e){return t.name=e}function n(t){ut.set(t)}function r(t){if(100!=t.get(Ln)&&k(Kt(t,mn))%1e4>=100*Yt(t,Ln))throw"abort"}function i(t){if(Lt(Kt(t,yn)))throw"abort"}function a(){var t=xt[U][M];if("http:"!=t&&"https:"!=t)throw"abort"}function o(t){try{Nt.XMLHttpRequest&&"withCredentials"in new Nt.XMLHttpRequest?n(40):Nt.XDomainRequest&&n(41),Nt[at].sendBeacon&&n(42)}catch(e){}t.set(ge,Yt(t,ge)+1);var r=[];Wt.map(function(e,n){if(n.p){var i=t.get(e);void 0!=i&&i!=n[Y]&&("boolean"==typeof i&&(i*=1),r[H](n.p+"="+mt(""+i)))}}),r[H]("z="+Ft()),t.set(ve,r[st]("&"),!0)}function s(t){var e=Kt(t,Cn)||Ot()+"/collect";Vt(e,Kt(t,ve),t.get(le),t.get(de)),t.set(le,pt,!0)}function c(t){var e=Nt.gaData;e&&(e.expId&&t.set(He,e.expId),e.expVar&&t.set(Fe,e.expVar))}function u(){if(Nt[at]&&"preview"==Nt[at].loadPurpose)throw"abort"}function f(t){var e=Nt.gaDevIds;lt(e)&&0!=e[Q]&&t.set("&did",e[st](","),!0)}function l(t){if(!t.get(yn))throw"abort"}function v(t){var e=Yt(t,Ke);e>=500&&n(15);var r=Kt(t,fe);if("transaction"!=r&&"item"!=r){var r=Yt(t,Je),i=(new Date)[R](),a=Yt(t,Ye);if(0==a&&t.set(Ye,i),a=N.round(2*(i-a)/1e3),a>0&&(r=N.min(r+a,20),t.set(Ye,i)),0>=r)throw"abort";t.set(Je,--r)}t.set(Ke,++e)}function d(t,e,r,i){e[t]=function(){try{return i&&n(i),r[B](this,arguments)}catch(e){var a=e&&e[J];if(!(1<=100*N.random()||Lt("?"))){var o=["t=error","_e=exc","_v=j31","sr=1"];t&&o[H]("_f="+t),a&&o[H]("_m="+mt(a[it](0,100))),o[H]("aip=1"),o[H]("z="+Ht()),Vt(Ot()+"/collect",o[st]("&"))}throw e}}}function g(){var t,e,n;if((n=(n=Nt[at])?n.plugins:null)&&n[Q])for(var r=0;r<n[Q]&&!e;r++){var i=n[r];-1<i[J][K]("Shockwave Flash")&&(e=i.description)}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version")}catch(a){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version")}catch(o){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=t.GetVariable("$version")}catch(s){}return e&&(t=e[I](/[\d]+/g))&&3<=t[Q]&&(e=t[0]+"."+t[1]+" r"+t[2]),e||void 0}function h(t,e,n){"none"==e&&(e="");var r=[],i=jt(t);t="__utma"==t?6:2;for(var a=0;a<i[Q];a++){var o=(""+i[a])[O](".");o[Q]>=t&&r[H]({hash:o[0],R:i[a],O:o})}return 0==r[Q]?void 0:1==r[Q]?r[0]:p(e,r)||p(n,r)||p(null,r)||r[0]}function p(t,e){var n,r;null==t?n=r=1:(n=k(t),r=k(dt(t,".")?t[it](1):"."+t));for(var i=0;i<e[Q];i++)if(e[i][F]==n||e[i][F]==r)return e[i]}function m(t){t=t.get(mn);var e=w(t,0);return"_ga=1."+mt(e+"."+t)}function w(t,e){for(var n=new Date,r=Nt[at],i=r.plugins||[],n=[t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],r=0;r<i[Q];++r)n[H](i[r].description);return k(n[st]("."))}function y(t,e){if(e==xt[U][V])return!1;for(var n=0;n<t[Q];n++)if(t[n]instanceof RegExp){if(t[n][X](e))return!0}else if(0<=e[K](t[n]))return!0;return!1}function b(t){return 0<=t[K](".")||0<=t[K](":")}function k(t){var e,n=1,r=0;if(t)for(n=0,e=t[Q]-1;e>=0;e--)r=t.charCodeAt(e),n=(n<<6&268435455)+r+(r<<14),r=266338304&n,n=0!=r?n^r>>21:n;return n}var _=encodeURIComponent,S=window,E=setTimeout,N=Math,x="replace",T="data",I="match",L="send",j="port",A="createElement",C="setAttribute",R="getTime",D="host",O="split",U="location",P="hasOwnProperty",V="hostname",q="search",M="protocol",$="href",G="action",B="apply",H="push",F="hash",X="test",W="slice",z="cookie",K="indexOf",Y="defaultValue",J="name",Q="length",Z="prototype",tt="clientWidth",et="target",nt="call",rt="clientHeight",it="substring",at="navigator",ot="parentNode",st="join",ct="toLowerCase",ut=new function(){var t=[];this.set=function(e){t[e]=!0},this.M=function(){for(var e=[],n=0;n<t[Q];n++)t[n]&&(e[N.floor(n/6)]=e[N.floor(n/6)]^1<<n%6);for(n=0;n<e[Q];n++)e[n]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[n]||0);return e[st]("")+"~"}},ft=function(t){return"function"==typeof t},lt=function(t){return"[object Array]"==Object[Z].toString[nt](Object(t))},vt=function(t){return void 0!=t&&-1<(t.constructor+"")[K]("String")},dt=function(t,e){return 0==t[K](e)},gt=function(t){return t?t[x](/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ht=function(t){var e=xt[A]("img");return e.width=1,e.height=1,e.src=t,e},pt=function(){},mt=function(t){return _ instanceof Function?_(t):(n(28),t)},wt=function(t,e,r,i){try{t.addEventListener?t.addEventListener(e,r,!!i):t.attachEvent&&t.attachEvent("on"+e,r)}catch(a){n(27)}},yt=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&t.detachEvent("on"+e,n)},bt=function(t,e){if(t){var n=xt[A]("script");n.type="text/javascript",n.async=!0,n.src=t,e&&(n.id=e);var r=xt.getElementsByTagName("script")[0];r[ot].insertBefore(n,r)}},kt=function(){var t=""+xt[U][V];return 0==t[K]("www.")?t[it](4):t},_t=function(t){var e=xt.referrer;if(/^https?:\/\//i[X](e)){if(t)return e;t="//"+xt[U][V];var n=e[K](t);if((5==n||6==n)&&(t=e.charAt(n+t[Q]),"/"==t||"?"==t||""==t||":"==t))return;return e}},St=function(t,e){if(1==e[Q]&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},r=N.min(t[Q]+1,e[Q]),i=0;r>i;i++){if("object"==typeof e[i]){for(var a in e[i])e[i][P](a)&&(n[a]=e[i][a]);break}i<t[Q]&&(n[t[i]]=e[i])}return n},Et=function(){this.keys=[],this.w={},this.m={}};Et[Z].set=function(t,e,n){this.keys[H](t),n?this.m[":"+t]=e:this.w[":"+t]=e},Et[Z].get=function(t){return this.m[P](":"+t)?this.m[":"+t]:this.w[":"+t]},Et[Z].map=function(t){for(var e=0;e<this.keys[Q];e++){var n=this.keys[e],r=this.get(n);r&&t(n,r)}};var Nt=S,xt=document,Tt=function(t){E(t,100)},It=function(){for(var t=Nt[at].userAgent+(xt[z]?xt[z]:"")+(xt.referrer?xt.referrer:""),e=t[Q],n=Nt.history[Q];n>0;)t+=n--^e++;return k(t)},Lt=function(t){var e=Nt._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===Nt["ga-disable-"+t])return!0;try{var n=Nt.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(r){}return!1},jt=function(t){var e=[],n=xt[z][O](";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var r=0;r<n[Q];r++){var i=n[r][I](t);i&&e[H](i[1])}return e},At=function(t,e,r,i,a,o){if(a=Lt(a)?!1:Dt[X](xt[U][V])||"/"==r&&Rt[X](i)?!1:!0,!a)return!1;if(e&&1200<e[Q]&&(e=e[it](0,1200),n(24)),r=t+"="+e+"; path="+r+"; ",o&&(r+="expires="+new Date((new Date)[R]()+o).toGMTString()+"; "),i&&"none"!=i&&(r+="domain="+i+";"),i=xt[z],xt.cookie=r,!(i=i!=xt[z]))t:{for(t=jt(t),i=0;i<t[Q];i++)if(e==t[i]){i=!0;break t}i=!1}return i},Ct=function(t){return mt(t)[x](/\(/g,"%28")[x](/\)/g,"%29")},Rt=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Dt=/(^|\.)doubleclick\.net$/i,Ot=function(){return(oe||"https:"==xt[U][M]?"https:":"http:")+"//www.google-analytics.com"},Ut=function(t){e(this,"len"),this.message=t+"-8192"},Pt=function(t){e(this,"ff2post"),this.message=t+"-2036"},Vt=function(t,e,n,r){if(n=n||pt,r&&(r=n,Nt[at].sendBeacon&&Nt[at].sendBeacon(t,e)?(r(),r=!0):r=!1),!r)if(2036>=e[Q])qt(t,e,n);else{if(!(8192>=e[Q]))throw new Ut(e[Q]);if(0<=Nt[at].userAgent[K]("Firefox")&&![].reduce)throw new Pt(e[Q]);$t(t,e,n)||Mt(t,e,n)||Gt(e,n)||n()}},qt=function(t,e,n){var r=ht(t+"?"+e);r.onload=r.onerror=function(){r.onload=null,r.onerror=null,n()}},Mt=function(t,e,n){var r;return(r=Nt.XDomainRequest)?(r=new r,r.open("POST",t),r.onerror=function(){n()},r.onload=n,r[L](e),!0):!1},$t=function(t,e,n){var r=Nt.XMLHttpRequest;if(!r)return!1;var i=new r;return"withCredentials"in i?(i.open("POST",t,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onreadystatechange=function(){4==i.readyState&&(n(),i=null)},i[L](e),!0):!1},Gt=function(t,n){if(!xt.body)return Tt(function(){Gt(t,n)}),!0;t=_(t);try{var r=xt[A]('<iframe name="'+t+'"></iframe>')}catch(i){r=xt[A]("iframe"),e(r,t)}r.height="0",r.width="0",r.style.display="none",r.style.visibility="hidden";var a=xt[U],a=Ot()+"/analytics_iframe.html#"+_(a[M]+"//"+a[D]+"/favicon.ico"),o=function(){r.src="",r[ot]&&r[ot].removeChild(r)};wt(Nt,"beforeunload",o);var s=!1,c=0,u=function(){if(!s){try{if(c>9||r.contentWindow[U][D]==xt[U][D])return s=!0,o(),yt(Nt,"beforeunload",o),void n()}catch(t){}c++,E(u,200)}};return wt(r,"load",u),xt.body.appendChild(r),r.src=a,!0},Bt=function(){this.t=[]};Bt[Z].add=function(t){this.t[H](t)},Bt[Z].D=function(t){try{for(var e=0;e<this.t[Q];e++){var n=t.get(this.t[e]);n&&ft(n)&&n[nt](Nt,t)}}catch(r){}e=t.get(le),e!=pt&&ft(e)&&(t.set(le,pt,!0),E(e,10))};var Ht=function(){return N.round(2147483647*N.random())},Ft=function(){try{var t=new Uint32Array(1);return Nt.crypto.getRandomValues(t),2147483647&t[0]}catch(e){return Ht()}},Xt=function(){this.data=new Et},Wt=new Et,zt=[];Xt[Z].get=function(t){var e=Zt(t),n=this[T].get(t);return e&&void 0==n&&(n=ft(e[Y])?e[Y]():e[Y]),e&&e.n?e.n(this,t,n):n};var Kt=function(t,e){var n=t.get(e);return void 0==n?"":""+n},Yt=function(t,e){var n=t.get(e);return void 0==n||""===n?0:1*n};Xt[Z].set=function(t,e,n){if(t)if("object"==typeof t)for(var r in t)t[P](r)&&Jt(this,r,t[r],n);else Jt(this,t,e,n)};var Jt=function(t,e,n,r){if(void 0!=n)switch(e){case yn:gr[X](n)}var i=Zt(e);i&&i.o?i.o(t,e,n,r):t[T].set(e,n,r)},Qt=function(t,n,r,i,a){e(this,t),this.p=n,this.n=i,this.o=a,this.defaultValue=r},Zt=function(t){var e=Wt.get(t);if(!e)for(var n=0;n<zt[Q];n++){var r=zt[n],i=r[0].exec(t);if(i){e=r[1](i),Wt.set(e[J],e);break}}return e},te=function(t){var e;return Wt.map(function(n,r){r.p==t&&(e=r)}),e&&e[J]},ee=function(t,e,n,r,i){return t=new Qt(t,e,n,r,i),Wt.set(t[J],t),t[J]},ne=function(t,e){zt[H]([new RegExp("^"+t+"$"),e])},re=function(t,e,n){return ee(t,e,n,void 0,ie)},ie=function(){},ae=vt(S.GoogleAnalyticsObject)&&gt(S.GoogleAnalyticsObject)||"ga",oe=!1,se=re("apiVersion","v"),ce=re("clientVersion","_v");ee("anonymizeIp","aip");var ue=ee("adSenseId","a"),fe=ee("hitType","t"),le=ee("hitCallback"),ve=ee("hitPayload");ee("nonInteraction","ni"),ee("currencyCode","cu");var de=ee("useBeacon",void 0,!1);ee("dataSource","ds"),ee("sessionControl","sc",""),ee("sessionGroup","sg"),ee("queueTime","qt");var ge=ee("_s","_s");ee("screenName","cd");var he=ee("location","dl",""),pe=ee("referrer","dr"),me=ee("page","dp","");ee("hostname","dh");var we=ee("language","ul"),ye=ee("encoding","de");ee("title","dt",function(){return xt.title||void 0}),ne("contentGroup([0-9]+)",function(t){return new Qt(t[0],"cg"+t[1])});var be=ee("screenColors","sd"),ke=ee("screenResolution","sr"),_e=ee("viewportSize","vp"),Se=ee("javaEnabled","je"),Ee=ee("flashVersion","fl");ee("campaignId","ci"),ee("campaignName","cn"),ee("campaignSource","cs"),ee("campaignMedium","cm"),ee("campaignKeyword","ck"),ee("campaignContent","cc");var Ne=ee("eventCategory","ec"),xe=ee("eventAction","ea"),Te=ee("eventLabel","el"),Ie=ee("eventValue","ev"),Le=ee("socialNetwork","sn"),je=ee("socialAction","sa"),Ae=ee("socialTarget","st"),Ce=ee("l1","plt"),Re=ee("l2","pdt"),De=ee("l3","dns"),Oe=ee("l4","rrt"),Ue=ee("l5","srt"),Pe=ee("l6","tcp"),Ve=ee("l7","dit"),qe=ee("l8","clt"),Me=ee("timingCategory","utc"),$e=ee("timingVar","utv"),Ge=ee("timingLabel","utl"),Be=ee("timingValue","utt");ee("appName","an"),ee("appVersion","av",""),ee("appId","aid",""),ee("appInstallerId","aiid",""),ee("exDescription","exd"),ee("exFatal","exf");var He=ee("expId","xid"),Fe=ee("expVar","xvar"),Xe=ee("_utma","_utma"),We=ee("_utmz","_utmz"),ze=ee("_utmht","_utmht"),Ke=ee("_hc",void 0,0),Ye=ee("_ti",void 0,0),Je=ee("_to",void 0,20);ne("dimension([0-9]+)",function(t){return new Qt(t[0],"cd"+t[1])}),ne("metric([0-9]+)",function(t){return new Qt(t[0],"cm"+t[1])}),ee("linkerParam",void 0,void 0,m,ie);var Qe=ee("usage","_u",void 0,function(){return ut.M()},ie);ee("forceSSL",void 0,void 0,function(){return oe},function(t,e,r){n(34),oe=!!r});var Ze=ee("_j1","jid"),tn=ee("_j2","gjid");ne("\\&(.*)",function(t){var e=new Qt(t[0],t[1]),n=te(t[0][it](1));return n&&(e.n=function(t){return t.get(n)},e.o=function(t,e,r,i){t.set(n,r,i)},e.p=void 0),e});var en=re("_oot"),nn=ee("previewTask"),rn=ee("checkProtocolTask"),an=ee("validationTask"),on=ee("checkStorageTask"),sn=ee("historyImportTask"),cn=ee("samplerTask"),un=re("_rlt"),fn=ee("buildHitTask"),ln=ee("sendHitTask"),vn=ee("ceTask"),dn=ee("devIdTask"),gn=ee("timingTask"),hn=ee("displayFeaturesTask"),pn=re("name"),mn=re("clientId","cid"),wn=ee("userId","uid"),yn=re("trackingId","tid"),bn=re("cookieName",void 0,"_ga"),kn=re("cookieDomain"),_n=re("cookiePath",void 0,"/"),Sn=re("cookieExpires",void 0,63072e3),En=re("legacyCookieDomain"),Nn=re("legacyHistoryImport",void 0,!0),xn=re("storage",void 0,"cookie"),Tn=re("allowLinker",void 0,!1),In=re("allowAnchor",void 0,!0),Ln=re("sampleRate","sf",100),jn=re("siteSpeedSampleRate",void 0,1),An=re("alwaysSendReferrer",void 0,!1),Cn=ee("transportUrl"),Rn=ee("_r","_r"),Dn=function(){this.V=1e4,this.fa=void 0,this.$=!1,this.ea=1},On=function(){var t,e=new Dn;return e.fa&&e.$?0:(e.$=!0,0==e.V?0:(void 0===t&&(t=Ft()),0==t%e.V?N.floor(t/e.V)%e.ea+1:0))},Un=function(t,e){var n=N.min(Yt(t,jn),100);if(!(k(Kt(t,mn))%100>=n)&&(n={},Pn(n)||Vn(n))){var r=n[Ce];void 0==r||1/0==r||isNaN(r)||(r>0?(qn(n,De),qn(n,Pe),qn(n,Ue),qn(n,Re),qn(n,Oe),qn(n,Ve),qn(n,qe),e(n)):wt(Nt,"load",function(){Un(t,e)},!1))}},Pn=function(t){var e=Nt.performance||Nt.webkitPerformance,e=e&&e.timing;if(!e)return!1;var n=e.navigationStart;return 0==n?!1:(t[Ce]=e.loadEventStart-n,t[De]=e.domainLookupEnd-e.domainLookupStart,t[Pe]=e.connectEnd-e.connectStart,t[Ue]=e.responseStart-e.requestStart,t[Re]=e.responseEnd-e.responseStart,t[Oe]=e.fetchStart-n,t[Ve]=e.domInteractive-n,t[qe]=e.domContentLoadedEventStart-n,!0)},Vn=function(t){if(Nt.top!=Nt)return!1;var e=Nt.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),n>2147483648&&(n=void 0),n>0&&e.setPageReadyTime(),void 0==n?!1:(t[Ce]=n,!0)},qn=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},Mn=function(t){return function(e){"pageview"!=e.get(fe)||t.I||(t.I=!0,Un(e,function(e){t[L]("timing",e)}))}},$n=!1,Gn=function(t){if("cookie"==Kt(t,xn)){var e=Kt(t,bn),r=Fn(t),i=Kn(Kt(t,_n)),a=Wn(Kt(t,kn)),o=1e3*Yt(t,Sn),s=Kt(t,yn);if("auto"!=a)At(e,r,i,a,s,o)&&($n=!0);else{n(32);var c;if(r=[],a=kt()[O]("."),4!=a[Q]||(c=a[a[Q]-1],parseInt(c,10)!=c)){for(c=a[Q]-2;c>=0;c--)r[H](a[W](c)[st]("."));r[H]("none"),c=r}else c=["none"];for(var u=0;u<c[Q];u++)if(a=c[u],t[T].set(kn,a),r=Fn(t),At(e,r,i,a,s,o))return void($n=!0);t[T].set(kn,"auto")}}},Bn=function(t){if("cookie"==Kt(t,xn)&&!$n&&(Gn(t),!$n))throw"abort"},Hn=function(t){if(t.get(Nn)){var e=Kt(t,kn),r=Kt(t,En)||kt(),i=h("__utma",r,e);i&&(n(19),t.set(ze,(new Date)[R](),!0),t.set(Xe,i.R),(e=h("__utmz",r,e))&&i[F]==e[F]&&t.set(We,e.R))}},Fn=function(t){var e=Ct(Kt(t,mn)),n=zn(Kt(t,kn));return t=Yn(Kt(t,_n)),t>1&&(n+="-"+t),["GA1",n,e][st](".")},Xn=function(t,e,n){for(var r,i=[],a=[],o=0;o<t[Q];o++){var s=t[o];s.r[n]==e?i[H](s):void 0==r||s.r[n]<r?(a=[s],r=s.r[n]):s.r[n]==r&&a[H](s)}return 0<i[Q]?i:a},Wn=function(t){return 0==t[K](".")?t.substr(1):t},zn=function(t){return Wn(t)[O](".")[Q]},Kn=function(t){return t?(1<t[Q]&&t.lastIndexOf("/")==t[Q]-1&&(t=t.substr(0,t[Q]-1)),0!=t[K]("/")&&(t="/"+t),t):"/"},Yn=function(t){return t=Kn(t),"/"==t?1:t[O]("/")[Q]},Jn=new RegExp(/^https?:\/\/([^\/:]+)/),Qn=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,Zn=function(t){n(48),this.target=t,this.T=!1};Zn[Z].Q=function(e,n){if(e.tagName){if("a"==e.tagName[ct]())return void(e[$]&&t(e,tr(this,e[$],n)));if("form"==e.tagName[ct]())return er(this,e)}return"string"==typeof e?tr(this,e,n):void 0};var tr=function(t,e,n){var r=Qn.exec(e);r&&3<=r[Q]&&(e=r[1]+(r[3]?r[2]+r[3]:"")),t=t[et].get("linkerParam");var i=e[K]("?"),r=e[K]("#");return n?e+=(-1==r?"#":"&")+t:(n=-1==i?"?":"&",e=-1==r?e+(n+t):e[it](0,r)+n+t+e[it](r)),e},er=function(t,e){if(e&&e[G]){var n=t[et].get("linkerParam")[O]("=")[1];if("get"==e.method[ct]()){for(var r=e.childNodes||[],i=0;i<r[Q];i++)if("_ga"==r[i][J])return void r[i][C]("value",n);r=xt[A]("input"),r[C]("type","hidden"),r[C]("name","_ga"),r[C]("value",n),e.appendChild(r)}else"post"==e.method[ct]()&&(e.action=tr(t,e[G]))}};Zn[Z].S=function(e,r,i){function a(i){try{i=i||Nt.event;var a;t:{var s=i[et]||i.srcElement;for(i=100;s&&i>0;){if(s[$]&&s.nodeName[I](/^a(?:rea)?$/i)){a=s;break t}s=s[ot],i--}a={}}("http:"==a[M]||"https:"==a[M])&&y(e,a[V]||"")&&a[$]&&t(a,tr(o,a[$],r))}catch(c){n(26)}}var o=this;if(this.T||(this.T=!0,wt(xt,"mousedown",a,!1),wt(xt,"touchstart",a,!1),wt(xt,"keyup",a,!1)),i){i=function(t){if(t=t||Nt.event,(t=t[et]||t.srcElement)&&t[G]){var n=t[G][I](Jn);n&&y(e,n[1])&&er(o,t)}};for(var s=0;s<xt.forms[Q];s++)wt(xt.forms[s],"submit",i)}};var nr,rr=function(t,e,n,r){this.U=e,this.aa=n,(e=r)||(e=(e=Kt(t,pn))&&"t0"!=e?cr[X](e)?"_gat_"+Ct(Kt(t,yn)):"_gat_"+Ct(e):"_gat"),this.Y=e},ir=function(t,e){var n=e.get(fn);e.set(fn,function(e){ar(t,e);var r=n(e);return or(t,e),r});var r=e.get(ln);e.set(ln,function(e){var n=r(e);return sr(t,e),n})},ar=function(t,e){e.get(t.U)||("1"==jt(t.Y)[0]?e.set(t.U,"",!0):e.set(t.U,""+Ht(),!0))},or=function(t,e){e.get(t.U)&&At(t.Y,"1",e.get(_n),e.get(kn),e.get(yn),6e5)},sr=function(t,e){if(e.get(t.U)){var n=new Et,r=function(t){n.set(Zt(t).p,e.get(t))};r(se),r(ce),r(yn),r(mn),r(t.U),r(Qe);var i=t.aa;n.map(function(t,e){i+=mt(t)+"=",i+=mt(""+e)+"&"}),i+="z="+Ht(),ht(i),e.set(t.U,"",!0)}},cr=/^gtm\d+$/,ur=function(t,e){var r=t.b;if(!r.get("dcLoaded")){n(29),Nt._gaq&&n(52),e=e||{};var i;e[bn]&&(i=Ct(e[bn])),i=new rr(r,Ze,"https://stats.g.doubleclick.net/collect?t=dc&aip=1&",i),ir(i,r),r.set("dcLoaded",!0)}},fr=function(t){var e;e=t.get("dcLoaded")?!1:"cookie"!=t.get(xn)?!1:!0,e&&(n(51),e=new rr(t,Ze),ar(e,t),or(e,t),t.get(e.U)&&(t.set(Rn,1,!0),t.set(Cn,Ot()+"/r/collect",!0)))},lr=function(t,e){var r=t.b;if(!r.get("_rlsaLoaded")){if(n(38),e=e||{},e[bn])var i=Ct(e[bn]);i=new rr(r,tn,"https://www.google.com/ads/ga-audiences?t=sr&aip=1&",i),ir(i,r),r.set("_rlsaLoaded",!0),Nr("displayfeatures",t,e)}},vr=function(){var t=Nt.gaGlobal=Nt.gaGlobal||{};return t.hid=t.hid||Ht()},dr=function(t,e,n){if(!nr){var r;r=xt[U][F];var i=Nt[J],a=/^#?gaso=([^&]*)/;(i=(r=(r=r&&r[I](a)||i&&i[I](a))?r[1]:jt("GASO")[0]||"")&&r[I](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(At("GASO",""+r,n,e,t,0),S._udo||(S._udo=e),S._utcp||(S._utcp=n),t=i[1],bt("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+Ht(),"_gasojs")),nr=!0}},gr=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,hr=function(t){function e(t,e){d.b[T].set(t,e)}function n(t,n){e(t,n),d.filters.add(t)}var d=this;this.b=new Xt,this.filters=new Bt,e(pn,t[pn]),e(yn,gt(t[yn])),e(bn,t[bn]),e(kn,t[kn]||kt()),e(_n,t[_n]),e(Sn,t[Sn]),e(En,t[En]),e(Nn,t[Nn]),e(Tn,t[Tn]),e(In,t[In]),e(Ln,t[Ln]),e(jn,t[jn]),e(An,t[An]),e(xn,t[xn]),e(wn,t[wn]),e(se,1),e(ce,"j31"),n(en,i),n(nn,u),n(rn,a),n(an,l),n(on,Bn),n(sn,Hn),n(cn,r),n(un,v),n(vn,c),n(dn,f),n(hn,fr),n(fn,o),n(ln,s),n(gn,Mn(this)),pr(this.b,t[mn]),mr(this.b),this.b.set(ue,vr()),dr(this.b.get(yn),this.b.get(kn),this.b.get(_n))},pr=function(t,e){if("cookie"==Kt(t,xn)){$n=!1;var r;t:{var i=jt(Kt(t,bn));if(i&&!(1>i[Q])){r=[];for(var a=0;a<i[Q];a++){var o;o=i[a][O](".");var s=o.shift();("GA1"==s||"1"==s)&&1<o[Q]?(s=o.shift()[O]("-"),1==s[Q]&&(s[1]="1"),s[0]*=1,s[1]*=1,o={r:s,s:o[st](".")}):o=void 0,o&&r[H](o)}if(1==r[Q]){n(13),r=r[0].s;break t}if(0!=r[Q]){if(n(14),i=zn(Kt(t,kn)),r=Xn(r,i,0),1==r[Q]){r=r[0].s;break t}i=Yn(Kt(t,_n)),r=Xn(r,i,1),r=r[0]&&r[0].s;break t}n(12)}r=void 0}r||(r=Kt(t,kn),i=Kt(t,En)||kt(),r=h("__utma",i,r),(r=void 0==r?void 0:r.O[1]+"."+r.O[2])&&n(10)),r&&(t[T].set(mn,r),$n=!0)}r=t.get(In),(a=(r=xt[U][r?"href":"search"][I]("(?:&|#|\\?)"+mt("_ga")[x](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==r[Q]?r[1]:"")&&(t.get(Tn)?(r=a[K]("."),-1==r?n(22):(i=a[it](r+1),"1"!=a[it](0,r)?n(22):(r=i[K]("."),-1==r?n(22):(a=i[it](0,r),r=i[it](r+1),a!=w(r,0)&&a!=w(r,-1)&&a!=w(r,-2)?n(23):(n(11),t[T].set(mn,r)))))):n(21)),e&&(n(9),t[T].set(mn,mt(e))),t.get(mn)||((r=(r=Nt.gaGlobal&&Nt.gaGlobal.vid)&&-1!=r[q](/^(?:utma\.)?\d+\.\d+$/)?r:void 0)?(n(17),t[T].set(mn,r)):(n(8),t[T].set(mn,[Ht()^2147483647&It(),N.round((new Date)[R]()/1e3)][st](".")))),Gn(t)},mr=function(t){var e=Nt[at],r=Nt.screen,i=xt[U];if(t.set(pe,_t(t.get(An))),i){var a=i.pathname||"";"/"!=a.charAt(0)&&(n(31),a="/"+a),t.set(he,i[M]+"//"+i[V]+a+i[q])}r&&t.set(ke,r.width+"x"+r.height),r&&t.set(be,r.colorDepth+"-bit");var r=xt.documentElement,o=(a=xt.body)&&a[tt]&&a[rt],s=[];if(r&&r[tt]&&r[rt]&&("CSS1Compat"===xt.compatMode||!o)?s=[r[tt],r[rt]]:o&&(s=[a[tt],a[rt]]),r=0>=s[0]||0>=s[1]?"":s[st]("x"),t.set(_e,r),t.set(Ee,g()),t.set(ye,xt.characterSet||xt.charset),t.set(Se,e&&"function"==typeof e.javaEnabled&&e.javaEnabled()||!1),t.set(we,(e&&(e.language||e.browserLanguage)||"")[ct]()),i&&t.get(In)&&(e=xt[U][F])){for(e=e[O](/[?&#]+/),i=[],r=0;r<e[Q];++r)(dt(e[r],"utm_id")||dt(e[r],"utm_campaign")||dt(e[r],"utm_source")||dt(e[r],"utm_medium")||dt(e[r],"utm_term")||dt(e[r],"utm_content")||dt(e[r],"gclid")||dt(e[r],"dclid")||dt(e[r],"gclsrc"))&&i[H](e[r]);0<i[Q]&&(e="#"+i[st]("&"),t.set(he,t.get(he)+e))}};hr[Z].get=function(t){return this.b.get(t)},hr[Z].set=function(t,e){this.b.set(t,e)};var wr={pageview:[me],event:[Ne,xe,Te,Ie],social:[Le,je,Ae],timing:[Me,$e,Be,Ge]};hr[Z].send=function(t){if(!(1>arguments[Q])){var e,r;"string"==typeof arguments[0]?(e=arguments[0],r=[][W][nt](arguments,1)):(e=arguments[0]&&arguments[0][fe],r=arguments),e&&(r=St(wr[e]||[],r),r[fe]=e,this.b.set(r,void 0,!0),this.filters.D(this.b),this.b[T].m={},n(44))}};var yr,br,kr,_r=function(t){return"prerender"==xt.visibilityState?!1:(t(),!0)},Sr=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Er=function(t){if(ft(t[0]))this.u=t[0];else{var e=Sr.exec(t[0]);if(null!=e&&4==e[Q]&&(this.c=e[1]||"t0",this.e=e[2]||"",this.d=e[3],this.a=[][W][nt](t,1),this.e||(this.A="create"==this.d,this.i="require"==this.d,this.g="provide"==this.d,this.ba="remove"==this.d),this.i&&(3<=this.a[Q]?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(vt(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.d)throw"abort";if(this.i&&(!vt(e)||""==e))throw"abort";if(this.g&&(!vt(e)||""==e||!ft(t)))throw"abort";if(b(this.c)||b(this.e))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};yr=new Et,kr=new Et,br={ec:45,ecommerce:46,linkid:47};var Nr=function(t,e,r){e==Ir?n(35):e.get(pn);var i=yr.get(t);return ft(i)?(e.plugins_=e.plugins_||new Et,e.plugins_.get(t)?!0:(e.plugins_.set(t,new i(e,r||{})),!0)):!1},xr=function(e){function n(t){var e=(t[V]||"")[O](":")[0][ct](),n=(t[M]||"")[ct](),n=1*t[j]||("http:"==n?80:"https:"==n?443:"");return t=t.pathname||"",dt(t,"/")||(t="/"+t),[e,""+n,t]}var r=xt[A]("a");t(r,xt[U][$]);var i=(r[M]||"")[ct](),a=n(r),o=r[q]||"",s=i+"//"+a[0]+(a[1]?":"+a[1]:"");return dt(e,"//")?e=i+e:dt(e,"/")?e=s+e:!e||dt(e,"?")?e=s+a[2]+(e||o):0>e[O]("/")[0][K](":")&&(e=s+a[2][it](0,a[2].lastIndexOf("/"))+"/"+e),t(r,e),i=n(r),{protocol:(r[M]||"")[ct](),host:i[0],port:i[1],path:i[2],G:r[q]||"",url:e||""}},Tr={ga:function(){Tr.f=[]}};Tr.ga(),Tr.D=function(t){var e=Tr.J[B](Tr,arguments),e=Tr.f.concat(e);for(Tr.f=[];0<e[Q]&&!Tr.v(e[0])&&(e.shift(),!(0<Tr.f[Q])););Tr.f=Tr.f.concat(e)},Tr.J=function(t){for(var e=[],r=0;r<arguments[Q];r++)try{var i=new Er(arguments[r]);if(i.g)yr.set(i.a[0],i.a[1]);else{if(i.i){var a=i,o=a.a[0];if(!ft(yr.get(o))&&!kr.get(o)){br[P](o)&&n(br[o]);var s=a.X;if(!s&&br[P](o)?(n(39),s=o+".js"):n(43),s){s&&0<=s[K]("/")||(s=(oe||"https:"==xt[U][M]?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+s);var c,u=xr(s),a=void 0,f=u[M],l=xt[U][M],a="https:"==f||f==l?!0:"http:"!=f?!1:"http:"==l;if(c=a){var a=u,v=xr(xt[U][$]);if(a.G||0<=a.url[K]("?")||0<=a.path[K]("://"))c=!1;else if(a[D]==v[D]&&a[j]==v[j])c=!0;else{var d="http:"==a[M]?80:443;c="www.google-analytics.com"==a[D]&&(a[j]||d)==d&&dt(a.path,"/plugins/")?!0:!1}}c&&(bt(u.url),kr.set(o,!0))}}}e[H](i)}}catch(g){}return e},Tr.v=function(t){try{if(t.u)t.u[nt](Nt,Ir.j("t0"));else{var e=t.c==ae?Ir:Ir.j(t.c);if(t.A)"t0"==t.c&&Ir.create[B](Ir,t.a);else if(t.ba)Ir.remove(t.c);else if(e)if(t.i){if(!Nr(t.a[0],e,t.W))return!0}else if(t.e){var n=t.d,r=t.a,i=e.plugins_.get(t.e);i[n][B](i,r)}else e[t.d][B](e,t.a)}}catch(a){}};var Ir=function(t){n(1),Tr.D[B](Tr,[arguments])};Ir.h={},Ir.P=[],Ir.L=0,Ir.answer=42;var Lr=[yn,kn,pn];Ir.create=function(t){var e=St(Lr,[][W][nt](arguments));e[pn]||(e[pn]="t0");var n=""+e[pn];return Ir.h[n]?Ir.h[n]:(e=new hr(e),Ir.h[n]=e,Ir.P[H](e),e)},Ir.remove=function(t){for(var e=0;e<Ir.P[Q];e++)if(Ir.P[e].get(pn)==t){Ir.P.splice(e,1),Ir.h[t]=null;break}},Ir.j=function(t){return Ir.h[t]},Ir.K=function(){return Ir.P[W](0)},Ir.N=function(){"ga"!=ae&&n(49);var t=Nt[ae];if(!t||42!=t.answer){Ir.L=t&&t.l,Ir.loaded=!0;var e=Nt[ae]=Ir;d("create",e,e.create,3),d("remove",e,e.remove),d("getByName",e,e.j,5),d("getAll",e,e.K,6),e=hr[Z],d("get",e,e.get,7),d("set",e,e.set,4),d("send",e,e[L],2),e=Xt[Z],d("get",e,e.get),d("set",e,e.set);t:for(var e=xt.getElementsByTagName("script"),r=0;r<e[Q]&&100>r;r++){var i;if(i=(i=e[r].src)?0!=i[K]("https://www.google-analytics.com/analytics")?!1:!0:!1){n(33);break t}}"https:"!=xt[U][M]&&!oe&&On()&&(n(36),oe=!0),(Nt.gaplugins=Nt.gaplugins||{}).Linker=Zn,e=Zn[Z],yr.set("linker",Zn),d("decorate",e,e.Q,20),d("autoLink",e,e.S,25),yr.set("displayfeatures",ur),yr.set("adfeatures",lr),t=t&&t.q,lt(t)?Tr.D[B](Ir,t):n(50)}},Ir.k=function(){for(var t=Ir.K(),e=0;e<t[Q];e++)t[e].get(pn)},function(){var t=Ir.N;if(!_r(t)){n(16);var e=!1,r=function(){!e&&_r(t)&&(e=!0,yt(xt,"visibilitychange",r))};wt(xt,"visibilitychange",r)}}()}(window)},{}],2:[function(t,e,n){!function(e,n,r,i,a,o,s){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,t("./ga")}(window,document,"script","/lib/scripts/ga.js","ga"),ga("create","UA-3239969-36","auto"),ga("send","pageview")},{"./ga":1}],3:[function(t,e,n){var r,i=(t("./googleAnalytics"),t("./vendor/bugsnag"),window.location.hostname||""),a=i.split(".")[0];switch(a){case"nightly":r="nightly";break;case"www":r="production";break;default:r="development"}"development"!=r&&(Bugsnag.apiKey="142bbeaf0a1bf2f089e0233e0e9adefb"),Bugsnag.releaseStage=r},{"./googleAnalytics":2,"./vendor/bugsnag":4}],4:[function(t,e,n){!function(t,n){function r(t,e){try{if("function"!=typeof t)return t;if(!t.bugsnag){var n=a();t.bugsnag=function(r){if(e&&e.eventHandler&&(k=r),_=n,!N){var i=t.apply(this,arguments);return _=null,i}try{return t.apply(this,arguments)}catch(a){throw v("autoNotify",!0)&&(E.notifyException(a,null,null,"error"),y()),a}finally{_=null}},t.bugsnag.bugsnag=t.bugsnag}return t.bugsnag}catch(r){return t}}function i(){I=!1}function a(){var t=document.currentScript||_;if(!t&&I){var e=document.scripts||document.getElementsByTagName("script");t=e[e.length-1]}return t}function o(t){var e=a();e&&(t.script={src:e.src,content:v("inlineScript",!0)?e.innerHTML:""})}function s(e){var n=t.console;void 0!==n&&void 0!==n.log&&n.log("[Bugsnag] "+e)}function c(e,n,r){if(r>=5)return encodeURIComponent(n)+"=[RECURSIVE]";r=r+1||1;try{if(t.Node&&e instanceof t.Node)return encodeURIComponent(n)+"="+encodeURIComponent(w(e));var i=[];for(var a in e)if(e.hasOwnProperty(a)&&null!=a&&null!=e[a]){var o=n?n+"["+a+"]":a,s=e[a];i.push("object"==typeof s?c(s,o,r):encodeURIComponent(o)+"="+encodeURIComponent(s))}return i.join("&")}catch(u){return encodeURIComponent(n)+"="+encodeURIComponent(""+u)}}function u(t,e){if(null==e)return t;t=t||{};for(var n in e)if(e.hasOwnProperty(n))try{t[n]=e[n].constructor===Object?u(t[n],e[n]):e[n]}catch(r){t[n]=e[n]}return t}function f(t,e){t+="?"+c(e)+"&ct=img&cb="+(new Date).getTime();var n=new Image;n.src=t}function l(t){for(var e={},n=/^data\-([\w\-]+)$/,r=t.attributes,i=0;i<r.length;i++){var a=r[i];if(n.test(a.nodeName)){var o=a.nodeName.match(n)[1];e[o]=a.value||a.nodeValue}}return e}function v(t,e){L=L||l(U);var n=void 0!==E[t]?E[t]:L[t.toLowerCase()];return"false"===n&&(n=!1),void 0!==n?n:e}function d(t){return null!=t&&t.match(j)?!0:(s("Invalid API key '"+t+"'"),!1)}function g(e,n){var r=v("apiKey");if(d(r)&&T){T-=1;var i=v("releaseStage"),a=v("notifyReleaseStages");if(a){for(var o=!1,c=0;c<a.length;c++)if(i===a[c]){o=!0;break}if(!o)return}var l=[e.name,e.message,e.stacktrace].join("|");if(l!==S){S=l,k&&(n=n||{},n["Last Event"]=m(k));var g={notifierVersion:D,apiKey:r,projectRoot:v("projectRoot")||t.location.protocol+"//"+t.location.host,context:v("context")||t.location.pathname,userId:v("userId"),user:v("user"),metaData:u(u({},v("metaData")),n),releaseStage:i,appVersion:v("appVersion"),url:t.location.href,userAgent:navigator.userAgent,language:navigator.language||navigator.userLanguage,severity:e.severity,name:e.name,message:e.message,stacktrace:e.stacktrace,file:e.file,lineNumber:e.lineNumber,columnNumber:e.columnNumber,payloadVersion:"2"},h=E.beforeNotify;if("function"==typeof h){var p=h(g,g.metaData);if(p===!1)return}return 0===g.lineNumber&&/Script error\.?/.test(g.message)?s("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors"):void f(v("endpoint")||R,g)}}}function h(){var t,e,n=10,r="[anonymous]";try{throw new Error("")}catch(i){t="<generated>\n",e=p(i)}if(!e){t="<generated-ie>\n";var a=[];try{for(var o=arguments.callee.caller.caller;o&&a.length<n;){var c=A.test(o.toString())?RegExp.$1||r:r;a.push(c),o=o.caller}}catch(u){s(u)}e=a.join("\n")}return t+e}function p(t){return t.stack||t.backtrace||t.stacktrace}function m(t){var e={millisecondsAgo:new Date-t.timeStamp,type:t.type,which:t.which,target:w(t.target)};return e}function w(t){if(t){var e=t.attributes;if(e){for(var n="<"+t.nodeName.toLowerCase(),r=0;r<e.length;r++)e[r].value&&"null"!=e[r].value.toString()&&(n+=" "+e[r].name+'="'+e[r].value+'"');return n+">"}return t.nodeName}}function y(){x+=1,t.setTimeout(function(){x-=1})}function b(t,e,n){var r=t[e],i=n(r);t[e]=i}var k,_,S,E={},N=!0,x=0,T=10;E.noConflict=function(){return t.Bugsnag=n,E},E.refresh=function(){T=10},E.notifyException=function(t,e,n,r){e&&"string"!=typeof e&&(n=e,e=void 0),n||(n={}),o(n),g({name:e||t.name,message:t.message||t.description,stacktrace:p(t)||h(),file:t.fileName||t.sourceURL,lineNumber:t.lineNumber||t.line,columnNumber:t.columnNumber?t.columnNumber+1:void 0,severity:r||"warning"},n)},E.notify=function(e,n,r,i){g({name:e,message:n,stacktrace:h(),file:t.location.toString(),lineNumber:1,severity:i||"warning"},r)};var I="complete"!==document.readyState;document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!0),t.addEventListener("load",i,!0)):t.attachEvent("onload",i);var L,j=/^[0-9a-f]{32}$/i,A=/function\s*([\w\-$]+)?\s*\(/i,C="https://notify.bugsnag.com/",R=C+"js",D="2.4.6",O=document.getElementsByTagName("script"),U=O[O.length-1];if(t.atob){if(t.ErrorEvent)try{0===new t.ErrorEvent("test").colno&&(N=!1)}catch(P){}}else N=!1;if(v("autoNotify",!0)){b(t,"onerror",function(e){return function(n,r,i,a,s){var c=v("autoNotify",!0),u={};!a&&t.event&&(a=t.event.errorCharacter),o(u),_=null,c&&!x&&g({name:s&&s.name||"window.onerror",message:n,file:r,lineNumber:i,columnNumber:a,stacktrace:s&&p(s)||h(),severity:"error"},u),e&&e(n,r,i,a,s)}});var V=function(t){return function(e,n){if("function"==typeof e){e=r(e);var i=Array.prototype.slice.call(arguments,2);return t(function(){e.apply(this,i)},n)}return t(e,n)}};b(t,"setTimeout",V),b(t,"setInterval",V),t.requestAnimationFrame&&b(t,"requestAnimationFrame",function(t){return function(e){return t(r(e))}}),t.setImmediate&&b(t,"setImmediate",function(t){return function(){var e=Array.prototype.slice.call(arguments);return e[0]=r(e[0]),t.apply(this,e)}}),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(e){
var n=t[e]&&t[e].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(b(n,"addEventListener",function(t){return function(e,n,i,a){return n&&n.handleEvent&&(n.handleEvent=r(n.handleEvent,{eventHandler:!0})),t.call(this,e,r(n,{eventHandler:!0}),i,a)}}),b(n,"removeEventListener",function(t){return function(e,n,i,a){return t.call(this,e,n,i,a),t.call(this,e,r(n),i,a)}}))})}t.Bugsnag=E,"function"==typeof define&&define.amd?define([],function(){return E}):"object"==typeof e&&"object"==typeof e.exports&&(e.exports=E)}(window,window.Bugsnag)},{}]},{},[3]);