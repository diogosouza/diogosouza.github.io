!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);a(1);a(2),a(3)},function(e,t,a){},function(e,t,a){
/*! lazysizes - v5.3.2 */
!function(t){var a=function(e,t,a){"use strict";var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var o=t.documentElement,s=e.HTMLPictureElement,r="addEventListener",l="getAttribute",c=e[r].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],p={},h=Array.prototype.forEach,y=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[l]("class")||"")&&p[t]},g=function(e,t){y(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},b=function(e,t){var a;(a=y(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(a," "))},C=function(e,t,a){var n=a?r:"removeEventListener";a&&C(e,t),v.forEach(function(a){e[n](a,t)})},$=function(e,a,i,o,s){var r=t.createEvent("Event");return i||(i={}),i.instance=n,r.initEvent(a,!o,!s),r.detail=i,e.dispatchEvent(r),r},z=function(t,a){var n;!s&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[l]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},A=function(){var e,a,n=[],i=[],o=n,s=function(){var t=o;for(o=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},r=function(n,i){e&&!i?n.apply(this,arguments):(o.push(n),a||(a=!0,(t.hidden?d:u)(s)))};return r._lsFlush=s,r}(),E=function(e,t){return t?function(){A(e)}:function(){var t=this,a=arguments;A(function(){e.apply(t,a)})}},x=function(e){var t,n=0,o=i.throttleDelay,s=i.ricTimeout,r=function(){t=!1,n=a.now(),e()},l=f&&s>49?function(){f(r,{timeout:s}),s!==i.ricTimeout&&(s=i.ricTimeout)}:E(function(){d(r)},!0);return function(e){var i;(e=!0===e)&&(s=33),t||(t=!0,(i=o-(a.now()-n))<0&&(i=0),e||i<9?l():d(l,i))}},k=function(e){var t,n,i=function(){t=null,e()},o=function(){var e=a.now()-n;e<99?d(o,99-e):(f||i)(i)};return function(){n=a.now(),t||(t=d(o,99))}},M=function(){var s,f,v,p,_,M,S,O,N,L,P,W,B=/^img$/i,F=/^iframe$/i,D="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),R=0,j=0,q=-1,H=function(e){j--,(!e||j<0||!e.target)&&(j=0)},I=function(e){return null==W&&(W="hidden"==w(t.body,"visibility")),W||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},U=function(e,a){var n,i=e,s=I(e);for(O-=a,P+=a,N-=a,L+=a;s&&(i=i.offsetParent)&&i!=t.body&&i!=o;)(s=(w(i,"opacity")||1)>0)&&"visible"!=w(i,"overflow")&&(n=i.getBoundingClientRect(),s=L>n.left&&N<n.right&&P>n.top-1&&O<n.bottom+1);return s},Y=function(){var e,a,r,c,d,u,m,v,h,y,g,b,C=n.elements;if((p=i.loadMode)&&j<8&&(e=C.length)){for(a=0,q++;a<e;a++)if(C[a]&&!C[a]._lazyRace)if(!D||n.prematureUnveil&&n.prematureUnveil(C[a]))Z(C[a]);else if((v=C[a][l]("data-expand"))&&(u=1*v)||(u=R),y||(y=!i.expand||i.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:i.expand,n._defEx=y,g=y*i.expFactor,b=i.hFac,W=null,R<g&&j<1&&q>2&&p>2&&!t.hidden?(R=g,q=0):R=p>1&&q>1&&j<6?y:0),h!==u&&(M=innerWidth+u*b,S=innerHeight+u,m=-1*u,h=u),r=C[a].getBoundingClientRect(),(P=r.bottom)>=m&&(O=r.top)<=S&&(L=r.right)>=m*b&&(N=r.left)<=M&&(P||L||N||O)&&(i.loadHidden||I(C[a]))&&(f&&j<3&&!v&&(p<3||q<4)||U(C[a],u))){if(Z(C[a]),d=!0,j>9)break}else!d&&f&&!c&&j<4&&q<4&&p>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!v&&(P||L||N||O||"auto"!=C[a][l](i.sizesAttr)))&&(c=s[0]||C[a]);c&&!d&&Z(c)}},G=x(Y),J=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(H(e),g(t,i.loadedClass),b(t,i.loadingClass),C(t,Q),$(t,"lazyloaded"))},K=E(J),Q=function(e){K({target:e.target})},V=function(e){var t,a=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},X=E(function(e,t,a,n,o){var s,r,c,u,f,p;(f=$(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?g(e,i.autosizesClass):e.setAttribute("sizes",n)),r=e[l](i.srcsetAttr),s=e[l](i.srcAttr),o&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),p=t.firesLoad||"src"in e&&(r||s||u),f={target:e},g(e,i.loadingClass),p&&(clearTimeout(v),v=d(H,2500),C(e,Q,!0)),u&&h.call(c.getElementsByTagName("source"),V),r?e.setAttribute("srcset",r):s&&!u&&(F.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,s):e.src=s),o&&(r||u)&&z(e,{src:s})),e._lazyRace&&delete e._lazyRace,b(e,i.lazyClass),A(function(){var t=e.complete&&e.naturalWidth>1;p&&!t||(t&&g(e,i.fastLoadedClass),J(f),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&j--},!0)}),Z=function(e){if(!e._lazyRace){var t,a=B.test(e.nodeName),n=a&&(e[l](i.sizesAttr)||e[l]("sizes")),o="auto"==n;(!o&&f||!a||!e[l]("src")&&!e.srcset||e.complete||y(e,i.errorClass)||!y(e,i.lazyClass))&&(t=$(e,"lazyunveilread").detail,o&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,X(e,t,o,n,a))}},ee=k(function(){i.loadMode=3,G()}),te=function(){3==i.loadMode&&(i.loadMode=2),ee()},ae=function(){f||(a.now()-_<999?d(ae,999):(f=!0,i.loadMode=3,G(),c("scroll",te,!0)))};return{_:function(){_=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),s=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",G,!0),c("resize",G,!0),c("pageshow",function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&u(function(){a.forEach(function(e){e.complete&&Z(e)})})}}),e.MutationObserver?new MutationObserver(G).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[r]("DOMNodeInserted",G,!0),o[r]("DOMAttrModified",G,!0),setInterval(G,999)),c("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[r](e,G,!0)}),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[r]("DOMContentLoaded",G),d(ae,2e4)),n.elements.length?(Y(),A._lsFlush()):G()},checkElems:G,unveil:Z,_aLSL:te}}(),T=function(){var e,a=E(function(e,t,a,n){var i,o,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),m.test(t.nodeName||""))for(o=0,s=(i=t.getElementsByTagName("source")).length;o<s;o++)i[o].setAttribute("sizes",n);a.detail.dataAttr||z(e,a.detail)}),n=function(e,t,n){var i,o=e.parentNode;o&&(n=_(e,o,n),(i=$(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,o,i,n))},o=k(function(){var t,a=e.length;if(a)for(t=0;t<a;t++)n(e[t])});return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",o)},checkElems:o,updateElem:n}}(),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,T._(),M._())};return d(function(){i.init&&S()}),n={cfg:i,autoSizer:T,loader:M,init:S,uP:z,aC:g,rC:b,hC:y,fire:$,gW:_,rAF:A}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})},function(e,t){$(window).on("load",function(){$(".se-pre-con").fadeOut("slow")}),$(document).ready(function(){var e=window.location.href.replace("?m=1",""),t=e.substring(e.lastIndexOf("/")+1);switch(t){case"quem-somos":$("#main__about").show(),$("."+t).addClass("active");break;case"servicos":$("#main__services").show();break;case"contato":$("#main__contact").show();break;default:$("#main__home").show()}switch(t){case"quem-somos":case"servicos":case"contato":$("."+t).addClass("active");break;default:$(".home").addClass("active")}$('a[href^="#"].scrollable').on("click",function(e){e.preventDefault();var t=$.attr(this,"href");$("html, body").animate({scrollTop:$(t).offset().top-120},1e3)}),$("#scroll-btn").on("click",function(){n()});var a=document.querySelector(".ml9 .letters");function i(){$("div.burger").removeClass("open"),$("div.x").removeClass("rotate45").addClass("rotate30"),$("div.z").removeClass("rotate135").addClass("rotate150"),$("div.circle").removeClass("expand"),$(".menu li").removeClass("animate"),setTimeout(function(){$("div.x").removeClass("rotate30"),$("div.z").removeClass("rotate150")},50),setTimeout(function(){$("div.y").show(),$("div.x, div.y, div.z").removeClass("collapse")},70)}a.innerHTML=a.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ml9 .letter",scale:[0,1],duration:1500,elasticity:600,delay:function(e,t){return 45*(t+1)}}).add({targets:".ml9",opacity:1,duration:1e3,easing:"easeOutExpo",delay:1e3}),$(".referrals:not(.slick-initialized)").slick({autoplay:!0,autoplaySpeed:4e3}),$("button.slick-arrow").empty(),$(".beliefs-list").not(".slick-initialized").slick({dots:!0,autoplay:!0,autoplaySpeed:8e3}).on("beforeChange",function(e,t,a,n){$(".nav-link").removeClass("active"),$(".nav-"+(n+1)).addClass("active")}),$(".beliefs button.slick-arrow, .slick-dots").hide(),$(".nav-beliefs a").each(function(e){$(this).click(function(){$(".slick-dots button[id$='"+e+"']").click()})}),$("div.burger").on("click",function(){$(this).hasClass("open")?i():($("div.circle").addClass("expand"),$("div.burger").addClass("open"),$("div.x, div.y, div.z").addClass("collapse"),$(".menu li").addClass("animate"),setTimeout(function(){$("div.y").hide(),$("div.x").addClass("rotate30"),$("div.z").addClass("rotate150")},70),setTimeout(function(){$("div.x").addClass("rotate45"),$("div.z").addClass("rotate135")},120))}),$("div.menu ul li a").on("click",function(){i()}),$("#our-packages").magnificPopup({delegate:"a",removalDelay:100,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},fixedContentPos:!0,midClick:!0})});var a=$("header").offset().top;function n(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(n),window.scrollTo(0,e-e/8))}window.onscroll=function(){window.pageYOffset>a?$("header h1, header, header .header").addClass("scrolled"):$("header h1, header, header .header").removeClass("scrolled"),document.body.scrollTop>20||document.documentElement.scrollTop>20?$("#scroll-btn").show():$("#scroll-btn").hide()},$.each($("span.tag img"),function(e,t){var a=$(t).siblings('source[type="image/webp"]'),n=$(t).siblings('source[type="image/png"]');$(t).hover(function(){var e=$(a).attr("srcset").replace(".webp","2.webp"),t=$(n).attr("srcset").replace(".png","2.png");$(a).attr("srcset",e),$(n).attr("srcset",t)},function(){var e=$(a).attr("srcset").replace("2.webp",".webp"),t=$(n).attr("srcset").replace("2.png",".png");$(a).attr("srcset",e),$(n).attr("srcset",t)})})}]);
//# sourceMappingURL=main.js.map