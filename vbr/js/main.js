!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);a(1);a(2),a(3)},function(e,t,a){},function(e,t,a){
/*! lazysizes - v5.2.0 */
!function(t,a){var n=function(e,t,a){"use strict";var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var o=t.documentElement,r=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],h={},p=Array.prototype.forEach,y=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[l]("class")||"")&&h[t]},C=function(e,t){y(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},g=function(e,t){var a;(a=y(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(a," "))},z=function(e,t,a){var n=a?s:"removeEventListener";a&&z(e,t),v.forEach(function(a){e[n](a,t)})},b=function(e,a,i,o,r){var s=t.createEvent("Event");return i||(i={}),i.instance=n,s.initEvent(a,!o,!r),s.detail=i,e.dispatchEvent(s),s},$=function(t,a){var n;!r&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[l]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},A=function(){var e,a,n=[],i=[],o=n,r=function(){var t=o;for(o=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},s=function(n,i){e&&!i?n.apply(this,arguments):(o.push(n),a||(a=!0,(t.hidden?d:u)(r)))};return s._lsFlush=r,s}(),E=function(e,t){return t?function(){A(e)}:function(){var t=this,a=arguments;A(function(){e.apply(t,a)})}},x=function(e){var t,n=0,o=i.throttleDelay,r=i.ricTimeout,s=function(){t=!1,n=a.now(),e()},l=f&&r>49?function(){f(s,{timeout:r}),r!==i.ricTimeout&&(r=i.ricTimeout)}:E(function(){d(s)},!0);return function(e){var i;(e=!0===e)&&(r=33),t||(t=!0,(i=o-(a.now()-n))<0&&(i=0),e||i<9?l():d(l,i))}},k=function(e){var t,n,i=function(){t=null,e()},o=function(){var e=a.now()-n;e<99?d(o,99-e):(f||i)(i)};return function(){n=a.now(),t||(t=d(o,99))}},T=function(){var r,f,v,h,_,T,S,O,N,P,W,q,L=/^img$/i,B=/^iframe$/i,F="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),D=0,R=0,j=-1,H=function(e){R--,(!e||R<0||!e.target)&&(R=0)},I=function(e){return null==q&&(q="hidden"==w(t.body,"visibility")),q||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},U=function(e,a){var n,i=e,r=I(e);for(O-=a,W+=a,N-=a,P+=a;r&&(i=i.offsetParent)&&i!=t.body&&i!=o;)(r=(w(i,"opacity")||1)>0)&&"visible"!=w(i,"overflow")&&(n=i.getBoundingClientRect(),r=P>n.left&&N<n.right&&W>n.top-1&&O<n.bottom+1);return r},Y=function(){var e,a,s,c,d,u,m,v,p,y,C,g,z=n.elements;if((h=i.loadMode)&&R<8&&(e=z.length)){for(a=0,j++;a<e;a++)if(z[a]&&!z[a]._lazyRace)if(!F||n.prematureUnveil&&n.prematureUnveil(z[a]))Z(z[a]);else if((v=z[a][l]("data-expand"))&&(u=1*v)||(u=D),y||(y=!i.expand||i.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:i.expand,n._defEx=y,C=y*i.expFactor,g=i.hFac,q=null,D<C&&R<1&&j>2&&h>2&&!t.hidden?(D=C,j=0):D=h>1&&j>1&&R<6?y:0),p!==u&&(T=innerWidth+u*g,S=innerHeight+u,m=-1*u,p=u),s=z[a].getBoundingClientRect(),(W=s.bottom)>=m&&(O=s.top)<=S&&(P=s.right)>=m*g&&(N=s.left)<=T&&(W||P||N||O)&&(i.loadHidden||I(z[a]))&&(f&&R<3&&!v&&(h<3||j<4)||U(z[a],u))){if(Z(z[a]),d=!0,R>9)break}else!d&&f&&!c&&R<4&&j<4&&h>2&&(r[0]||i.preloadAfterLoad)&&(r[0]||!v&&(W||P||N||O||"auto"!=z[a][l](i.sizesAttr)))&&(c=r[0]||z[a]);c&&!d&&Z(c)}},G=x(Y),J=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(H(e),C(t,i.loadedClass),g(t,i.loadingClass),z(t,Q),b(t,"lazyloaded"))},K=E(J),Q=function(e){K({target:e.target})},V=function(e){var t,a=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},X=E(function(e,t,a,n,o){var r,s,c,u,f,h;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?C(e,i.autosizesClass):e.setAttribute("sizes",n)),s=e[l](i.srcsetAttr),r=e[l](i.srcAttr),o&&(c=e.parentNode,u=c&&m.test(c.nodeName||"")),h=t.firesLoad||"src"in e&&(s||r||u),f={target:e},C(e,i.loadingClass),h&&(clearTimeout(v),v=d(H,2500),z(e,Q,!0)),u&&p.call(c.getElementsByTagName("source"),V),s?e.setAttribute("srcset",s):r&&!u&&(B.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(a){e.src=t}}(e,r):e.src=r),o&&(s||u)&&$(e,{src:r})),e._lazyRace&&delete e._lazyRace,g(e,i.lazyClass),A(function(){var t=e.complete&&e.naturalWidth>1;h&&!t||(t&&C(e,"ls-is-cached"),J(f),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&R--},!0)}),Z=function(e){if(!e._lazyRace){var t,a=L.test(e.nodeName),n=a&&(e[l](i.sizesAttr)||e[l]("sizes")),o="auto"==n;(!o&&f||!a||!e[l]("src")&&!e.srcset||e.complete||y(e,i.errorClass)||!y(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,o&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,R++,X(e,t,o,n,a))}},ee=k(function(){i.loadMode=3,G()}),te=function(){3==i.loadMode&&(i.loadMode=2),ee()},ae=function(){if(!f){if(a.now()-_<999)return void d(ae,999);f=!0,i.loadMode=3,G(),c("scroll",te,!0)}};return{_:function(){_=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),r=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",G,!0),c("resize",G,!0),c("pageshow",function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&u(function(){a.forEach(function(e){e.complete&&Z(e)})})}}),e.MutationObserver?new MutationObserver(G).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[s]("DOMNodeInserted",G,!0),o[s]("DOMAttrModified",G,!0),setInterval(G,999)),c("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[s](e,G,!0)}),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[s]("DOMContentLoaded",G),d(ae,2e4)),n.elements.length?(Y(),A._lsFlush()):G()},checkElems:G,unveil:Z,_aLSL:te}}(),M=function(){var e,a=E(function(e,t,a,n){var i,o,r;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),o=0,r=i.length;o<r;o++)i[o].setAttribute("sizes",n);a.detail.dataAttr||$(e,a.detail)}),n=function(e,t,n){var i,o=e.parentNode;o&&(n=_(e,o,n),(i=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,o,i,n))},o=k(function(){var t,a=e.length;if(a)for(t=0;t<a;t++)n(e[t])});return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",o)},checkElems:o,updateElem:n}}(),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,M._(),T._())};return d(function(){i.init&&S()}),n={cfg:i,autoSizer:M,loader:T,init:S,uP:$,aC:C,rC:g,hC:y,fire:b,gW:_,rAF:A}}(t,t.document,Date);t.lazySizes=n,e.exports&&(e.exports=n)}("undefined"!=typeof window?window:{})},function(e,t){$(function(){var e=window.location.href.replace("?m=1",""),t=e.substring(e.lastIndexOf("/")+1);switch($(".header-whatsapp li").children().removeClass("active"),t){case"quem-somos":$("#main__about").show(),$(".header-whatsapp li").children().eq(1).addClass("active");break;case"servicos":$("#main__services").show(),AOS.init({offset:200,duration:1200,delay:100,once:!0}),$(".header-whatsapp li").children().eq(2).addClass("active");break;case"contato":$("#main__contact").show(),$(".header-whatsapp li").children().eq(3).addClass("active");break;default:$("#main__home").show(),$(".header-whatsapp li").children().eq(0).addClass("active")}$(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)}),$("#scroll-btn").click(function(){n()});var a=document.querySelector(".ml9 .letters");function i(){$("div.burger").removeClass("open"),$("div.x").removeClass("rotate45").addClass("rotate30"),$("div.z").removeClass("rotate135").addClass("rotate150"),$("div.circle").removeClass("expand"),$(".menu li").removeClass("animate"),setTimeout(function(){$("div.x").removeClass("rotate30"),$("div.z").removeClass("rotate150")},50),setTimeout(function(){$("div.y").show(),$("div.x, div.y, div.z").removeClass("collapse")},70)}a.innerHTML=a.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ml9 .letter",scale:[0,1],duration:1500,elasticity:600,delay:function(e,t){return 45*(t+1)}}).add({targets:".ml9",opacity:1,duration:1e3,easing:"easeOutExpo",delay:1e3}),$(".referrals").not(".slick-initialized").slick({autoplay:!0,autoplaySpeed:4e3}),$("button.slick-arrow").empty(),$(".beliefs-list").not(".slick-initialized").slick({dots:!0,autoplay:!0,autoplaySpeed:8e3}).on("beforeChange",function(e,t,a,n){$(".nav-link").removeClass("active"),$(".nav-"+(n+1)).addClass("active")}),$(".beliefs button.slick-arrow, .slick-dots").hide(),$(".nav-beliefs a").each(function(e){$(this).click(function(){$(".slick-dots button[id$='"+e+"']").click()})}),$("div.burger").on("click",function(){$(this).hasClass("open")?i():($("div.circle").addClass("expand"),$("div.burger").addClass("open"),$("div.x, div.y, div.z").addClass("collapse"),$(".menu li").addClass("animate"),setTimeout(function(){$("div.y").hide(),$("div.x").addClass("rotate30"),$("div.z").addClass("rotate150")},70),setTimeout(function(){$("div.x").addClass("rotate45"),$("div.z").addClass("rotate135")},120))}),$("div.menu ul li a").on("click",function(){i()}),$("#our-packages").magnificPopup({delegate:"a",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0})});var a=$("header").offset().top;function n(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(n),window.scrollTo(0,e-e/8))}window.onscroll=function(){window.pageYOffset>a?$("header h1, header, header .header").addClass("scrolled"):$("header h1, header, header .header").removeClass("scrolled"),document.body.scrollTop>20||document.documentElement.scrollTop>20?$("#scroll-btn").show():$("#scroll-btn").hide()}}]);
//# sourceMappingURL=main.js.map