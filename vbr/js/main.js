!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);a(1);a(2),a(3)},function(e,t,a){},function(e,t,a){
/*! lazysizes - v5.3.2 */
!function(t){var a=function(e,t,a){"use strict";var n,o;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in o=e.lazySizesConfig||e.lazysizesConfig||{},a)t in o||(o[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:o,noSupport:!0};var i=t.documentElement,s=e.HTMLPictureElement,r="addEventListener",l="getAttribute",c=e[r].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],p={},h=Array.prototype.forEach,y=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[l]("class")||"")&&p[t]},b=function(e,t){y(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},g=function(e,t){var a;(a=y(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(a," "))},C=function(e,t,a){var n=a?r:"removeEventListener";a&&C(e,t),v.forEach(function(a){e[n](a,t)})},z=function(e,a,o,i,s){var r=t.createEvent("Event");return o||(o={}),o.instance=n,r.initEvent(a,!i,!s),r.detail=o,e.dispatchEvent(r),r},$=function(t,a){var n;!s&&(n=e.picturefill||o.pf)?(a&&a.src&&!t[l]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,a){for(a=a||e.offsetWidth;a<o.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},k=function(){var e,a,n=[],o=[],i=n,s=function(){var t=i;for(i=n.length?o:n,e=!0,a=!1;t.length;)t.shift()();e=!1},r=function(n,o){e&&!o?n.apply(this,arguments):(i.push(n),a||(a=!0,(t.hidden?d:u)(s)))};return r._lsFlush=s,r}(),x=function(e,t){return t?function(){k(e)}:function(){var t=this,a=arguments;k(function(){e.apply(t,a)})}},A=function(e){var t,n=0,i=o.throttleDelay,s=o.ricTimeout,r=function(){t=!1,n=a.now(),e()},l=f&&s>49?function(){f(r,{timeout:s}),s!==o.ricTimeout&&(s=o.ricTimeout)}:x(function(){d(r)},!0);return function(e){var o;(e=!0===e)&&(s=33),t||(t=!0,(o=i-(a.now()-n))<0&&(o=0),e||o<9?l():d(l,o))}},E=function(e){var t,n,o=function(){t=null,e()},i=function(){var e=a.now()-n;e<99?d(i,99-e):(f||o)(o)};return function(){n=a.now(),t||(t=d(i,99))}},M=function(){var s,f,v,p,_,M,S,N,O,L,P,W,B=/^img$/i,F=/^iframe$/i,q="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),D=0,R=0,j=-1,H=function(e){R--,(!e||R<0||!e.target)&&(R=0)},I=function(e){return null==W&&(W="hidden"==w(t.body,"visibility")),W||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},U=function(e,a){var n,o=e,s=I(e);for(N-=a,P+=a,O-=a,L+=a;s&&(o=o.offsetParent)&&o!=t.body&&o!=i;)(s=(w(o,"opacity")||1)>0)&&"visible"!=w(o,"overflow")&&(n=o.getBoundingClientRect(),s=L>n.left&&O<n.right&&P>n.top-1&&N<n.bottom+1);return s},Y=function(){var e,a,r,c,d,u,m,v,h,y,b,g,C=n.elements;if((p=o.loadMode)&&R<8&&(e=C.length)){for(a=0,j++;a<e;a++)if(C[a]&&!C[a]._lazyRace)if(!q||n.prematureUnveil&&n.prematureUnveil(C[a]))Z(C[a]);else if((v=C[a][l]("data-expand"))&&(u=1*v)||(u=D),y||(y=!o.expand||o.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:o.expand,n._defEx=y,b=y*o.expFactor,g=o.hFac,W=null,D<b&&R<1&&j>2&&p>2&&!t.hidden?(D=b,j=0):D=p>1&&j>1&&R<6?y:0),h!==u&&(M=innerWidth+u*g,S=innerHeight+u,m=-1*u,h=u),r=C[a].getBoundingClientRect(),(P=r.bottom)>=m&&(N=r.top)<=S&&(L=r.right)>=m*g&&(O=r.left)<=M&&(P||L||O||N)&&(o.loadHidden||I(C[a]))&&(f&&R<3&&!v&&(p<3||j<4)||U(C[a],u))){if(Z(C[a]),d=!0,R>9)break}else!d&&f&&!c&&R<4&&j<4&&p>2&&(s[0]||o.preloadAfterLoad)&&(s[0]||!v&&(P||L||O||N||"auto"!=C[a][l](o.sizesAttr)))&&(c=s[0]||C[a]);c&&!d&&Z(c)}},G=A(Y),J=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(H(e),b(t,o.loadedClass),g(t,o.loadingClass),C(t,Q),z(t,"lazyloaded"))},K=x(J),Q=function(e){K({target:e.target})},V=function(e){var t,a=e[l](o.srcsetAttr);(t=o.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},X=x(function(e,t,a,n,i){var s,r,c,u,f,p;(f=z(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?b(e,o.autosizesClass):e.setAttribute("sizes",n)),r=e[l](o.srcsetAttr),s=e[l](o.srcAttr),i&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),p=t.firesLoad||"src"in e&&(r||s||u),f={target:e},b(e,o.loadingClass),p&&(clearTimeout(v),v=d(H,2500),C(e,Q,!0)),u&&h.call(c.getElementsByTagName("source"),V),r?e.setAttribute("srcset",r):s&&!u&&(F.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||o.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,s):e.src=s),i&&(r||u)&&$(e,{src:s})),e._lazyRace&&delete e._lazyRace,g(e,o.lazyClass),k(function(){var t=e.complete&&e.naturalWidth>1;p&&!t||(t&&b(e,o.fastLoadedClass),J(f),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&R--},!0)}),Z=function(e){if(!e._lazyRace){var t,a=B.test(e.nodeName),n=a&&(e[l](o.sizesAttr)||e[l]("sizes")),i="auto"==n;(!i&&f||!a||!e[l]("src")&&!e.srcset||e.complete||y(e,o.errorClass)||!y(e,o.lazyClass))&&(t=z(e,"lazyunveilread").detail,i&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,R++,X(e,t,i,n,a))}},ee=E(function(){o.loadMode=3,G()}),te=function(){3==o.loadMode&&(o.loadMode=2),ee()},ae=function(){f||(a.now()-_<999?d(ae,999):(f=!0,o.loadMode=3,G(),c("scroll",te,!0)))};return{_:function(){_=a.now(),n.elements=t.getElementsByClassName(o.lazyClass),s=t.getElementsByClassName(o.lazyClass+" "+o.preloadClass),c("scroll",G,!0),c("resize",G,!0),c("pageshow",function(e){if(e.persisted){var a=t.querySelectorAll("."+o.loadingClass);a.length&&a.forEach&&u(function(){a.forEach(function(e){e.complete&&Z(e)})})}}),e.MutationObserver?new MutationObserver(G).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[r]("DOMNodeInserted",G,!0),i[r]("DOMAttrModified",G,!0),setInterval(G,999)),c("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[r](e,G,!0)}),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[r]("DOMContentLoaded",G),d(ae,2e4)),n.elements.length?(Y(),k._lsFlush()):G()},checkElems:G,unveil:Z,_aLSL:te}}(),T=function(){var e,a=x(function(e,t,a,n){var o,i,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),m.test(t.nodeName||""))for(i=0,s=(o=t.getElementsByTagName("source")).length;i<s;i++)o[i].setAttribute("sizes",n);a.detail.dataAttr||$(e,a.detail)}),n=function(e,t,n){var o,i=e.parentNode;i&&(n=_(e,i,n),(o=z(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=o.detail.width)&&n!==e._lazysizesWidth&&a(e,i,o,n))},i=E(function(){var t,a=e.length;if(a)for(t=0;t<a;t++)n(e[t])});return{_:function(){e=t.getElementsByClassName(o.autosizesClass),c("resize",i)},checkElems:i,updateElem:n}}(),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,T._(),M._())};return d(function(){o.init&&S()}),n={cfg:o,autoSizer:T,loader:M,init:S,uP:$,aC:b,rC:g,hC:y,fire:z,gW:_,rAF:k}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})},function(e,t){$(window).on("load",function(){$(".se-pre-con").fadeOut("slow")}),$(document).ready(function(){var e=window.location.href.replace("?m=1",""),t=e.substring(e.lastIndexOf("/")+1);switch(t){case"quem-somos":case"p/quem-somos.html":$("#main__about").show(),$("."+t).addClass("active");break;case"servicos":$("#main__services").show();break;case"contato":$("#main__contact").show();break;case"casamento":$("#main__casamento").show();break;default:$("#main__home").show()}switch(t){case"quem-somos":case"contato":$("."+t).addClass("active");break;case"servicos":case"casamento":$(".servicos").addClass("active");break;default:$(".home").addClass("active")}$('a[href^="#"].scrollable').on("click",function(e){e.preventDefault();var t=$.attr(this,"href");$("html, body").animate({scrollTop:$(t).offset().top-120},1e3)}),$("#scroll-btn").on("click",function(){n()});var a=document.querySelector(".ml9 .letters");function o(){$("div.burger").removeClass("open"),$("div.x").removeClass("rotate45").addClass("rotate30"),$("div.z").removeClass("rotate135").addClass("rotate150"),$("div.circle").removeClass("expand"),$(".menu li").removeClass("animate"),setTimeout(function(){$("div.x").removeClass("rotate30"),$("div.z").removeClass("rotate150")},50),setTimeout(function(){$("div.y").show(),$("div.x, div.y, div.z").removeClass("collapse")},70)}a.innerHTML=a.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ml9 .letter",scale:[0,1],duration:1500,elasticity:600,delay:function(e,t){return 45*(t+1)}}).add({targets:".ml9",opacity:1,duration:1e3,easing:"easeOutExpo",delay:1e3}),$(".referrals:not(.slick-initialized)").slick({autoplay:!0,autoplaySpeed:4e3}),$("button.slick-arrow").empty(),$("#swiper-casamento").not(".slick-initialized").slick({arrows:!0,autoplay:!1,prevArrow:$(".pagination .swiper-button-prev"),nextArrow:$(".pagination .swiper-button-next")}),$('.tab_container input[name="tabs"]').on("change",function(){$(".tab_container .tab-content").hide();var e=$(this).data("target");$(".tab_container #"+e).css("display","flex")}),$(".beliefs-list").not(".slick-initialized").slick({dots:!0,autoplay:!0,autoplaySpeed:8e3}).on("beforeChange",function(e,t,a,n){$(".nav-link").removeClass("active"),$(".nav-"+(n+1)).addClass("active")}),$(".beliefs button.slick-arrow, .slick-dots").hide(),$(".nav-beliefs a").each(function(e){$(this).click(function(){$(".slick-dots button[id$='"+e+"']").click()})}),$("div.burger").on("click",function(){$(this).hasClass("open")?o():($("div.circle").addClass("expand"),$("div.burger").addClass("open"),$("div.x, div.y, div.z").addClass("collapse"),$(".menu li").addClass("animate"),setTimeout(function(){$("div.y").hide(),$("div.x").addClass("rotate30"),$("div.z").addClass("rotate150")},70),setTimeout(function(){$("div.x").addClass("rotate45"),$("div.z").addClass("rotate135")},120))}),$("div.menu ul li a").on("click",function(){o()}),$("#our-packages").magnificPopup({delegate:"a.see-more",removalDelay:100,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},fixedContentPos:!0,midClick:!0})});var a=$("header").offset().top;function n(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(n),window.scrollTo(0,e-e/8))}window.onscroll=function(){window.scrollY>a?$("header h1, header, header .header").addClass("scrolled"):$("header h1, header, header .header").removeClass("scrolled"),document.body.scrollTop>20||document.documentElement.scrollTop>20?$("#scroll-btn").show():$("#scroll-btn").hide()}}]);
//# sourceMappingURL=main.js.map