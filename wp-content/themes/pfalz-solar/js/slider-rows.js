function SliderRows(t){"use strict";var e=this,r=navigator.appVersion,a=r.indexOf("MSIE 9.0"),s=r.indexOf("MSIE 8.0"),o=navigator.appName.indexOf("Opera"),i=!1,n={baseParam:'opacity: 0; "filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;',top:"margin-top: -10px;",left:"margin-left: -10px;",bottom:"margin-bottom: -10px;",right:"margin-right: -10px;",resetParam:'-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;margin: 0;opacity: 1; "filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";'},l={baseParam:"-webkit-transition: -webkit-transform 0.3s;-moz-transition: -moz-transform 0.3s;-o-transition: -o-transform 0.3s;-ms-transition: -ms-transform 0.3s;transition: transform 0.3s;",zoom:"-webkit-transform: scale(1.3);-moz-transform: scale(1.3);-o-transform: scale(1.3);-ms-transform: scale(1.3);transform: scale(1.3);",rotate:"-webkit-transform: scale(1.2) rotate(10deg);-moz-transform: scale(1.2) rotate(10deg);-o-transform: scale(1.2) rotate(10deg);-ms-transform: scale(1.2) rotate(10deg);transform: scale(1.2) rotate(10deg);"},m={baseParam:"-webkit-transition: -webkit-transform 0.2s;-moz-transition: -moz-transform 0.2s;-o-transition: -o-transform 0.2s;-ms-transition: -ms-transform 0.2s;transition: transform 0.2s;",zoom:"-webkit-transform: scale(0.9);-moz-transform: scale(0.9);-o-transform: scale(0.9);-ms-transform: scale(0.9);transform: scale(0.9);",rotate:"-webkit-transform: scale(1.2) rotate(10deg);-moz-transform: scale(1.2) rotate(10deg);-o-transform: scale(1.2) rotate(10deg);-ms-transform: scale(1.2) rotate(10deg);transform: scale(1.2) rotate(10deg);"},c="-webkit-transition: -webkit-transform 0.2s;-moz-transition: -moz-transform 0.2s;-o-transition: -o-transform 0.2s;-ms-transition: -ms-transform 0.2s;transition: transform 0.2s;",f=c+"-webkit-transform: scale(0.6);-moz-transform: scale(0.6);-o-transform: scale(0.6);-ms-transform: scale(0.6);transform: scale(0.6);",d=c+"-webkit-transform: skew(10deg);-moz-transform: skew(10deg); -o-transform: skew(10deg); -ms-transform: skew(10deg); transform: skew(10deg);",u=c+"-webkit-transform: skew(-10deg);-moz-transform: skew(-10deg);-o-transform: skew(-10deg);-ms-transform: skew(-10deg);transform: skew(-10deg);",p=c+"-webkit-transform: none; -moz-transform: none;-o-transform: none;-ms-transform: scale(1deg) skew(0deg); rotate(0deg)transform: none; ",h=function(t,e,r){(h=window.addEventListener?function(t,e,r){t.addEventListener(e,r,!1)}:function(t,e,r){t.attachEvent("on"+e,r)})(t,e,r)},g=function(){i||(i=!0,e.move("left"))},w=function(){i||(i=!0,e.move("right"))},v=function(){var t=e.parameters,r=t.hover,s=F(this);if(s){this.style.cssText="position: relative; overflow: hidden; width: "+s.width+"; height: "+s.height+";";var o=this.firstElementChild;switch(o.style.cssText=l.baseParam,r){case"rotate":setTimeout(function(){-1==a?o.style.cssText+=l.rotate:b(o,l.baseParam+l.rotate,!0)},0);break;case"zoom":setTimeout(function(){-1==a?o.style.cssText+=l.zoom:b(o,l.baseParam+l.zoom,!0)},0)}if("none"!==t.text&&t.text.selector){var i=this.querySelector(t.text.selector);-1===a?i.style.cssText=n.resetParam:T(i,{opacity:1,"margin-bottom":0,"margin-top":0,"margin-left":0,"margin-right":0},300)}}},x=function(){var t=e.parameters,r=e.parameters.hover,s=F(this);if(s){this.style.cssText="position: relative; overflow: hidden; width: "+s.width+"; height: "+s.height+";";var o=this.firstElementChild;switch(r){case"rotate":setTimeout(function(){-1==a?o.style.cssText=p:b(o,p,!0)},0);break;case"zoom":setTimeout(function(){-1==a?o.style.cssText=p:b(o,p,!0)},0)}if("none"!==t.text&&t.text.selector){var i=this.querySelector(t.text.selector);if(e.parameters.text.direction)switch(-1===a&&(i.style.cssText=n.baseParam),e.parameters.text.direction){case"top":-1===a?i.style.cssText+=n.top:T(i,{opacity:0,"margin-top":"-10px"},300);break;case"left":-1===a?i.style.cssText+=n.left:T(i,{opacity:0,"margin-left":"-10px"},300);break;case"right":-1===a?i.style.cssText+=n.right:T(i,{opacity:0,"margin-right":"-10px"},300);break;case"bottom":-1===a?i.style.cssText+=n.bottom:T(i,{opacity:0,"margin-bottom":"-10px"},300)}}}},y=function(){var t=F(this);if(t){this.style.cssText="position: relative; overflow: hidden; width: "+t.width+"; height: "+t.height+";";var r=e.parameters.click,s=this.firstElementChild;switch(r){case"zoom":setTimeout(function(){-1==a?(s.style.cssText=m.baseParam+m.zoom,setTimeout(function(){s.style.cssText=m.baseParam},300)):(b(s,m.baseParam+m.zoom,!0),setTimeout(function(){b(s,p)},300))},0)}}},b=function(t,e,r){function a(){var e=(new Date).getTime(),i=(e-s)/n,l="";if(!t.isAnimate)return void cancelRequestAnimationFrame(o);for(var m=0,c=f.length;c>m;m++){var d,u=f[m].valueEnd,h=f[m].valueStart;d=(u-h)*i+h;var g=f[m].effect;"scale"===g&&(l+=" scale("+d+")"),"skew"===g&&(l+=" skew("+d+"deg)"),"rotate"===g&&(l+=" rotate("+d+"deg)")}t.style.msTransform=l,1>i?o=requestAnimationFrame(a):(t.isAnimate=!1,cancelRequestAnimationFrame(o),r||b(t,p,!0))}var s,o,i,n=e.substr(e.indexOf("transition: transform")-20),l=e.indexOf("skew("),m=e.indexOf("rotate("),c=e.indexOf("scale("),f=[];if(t.isAnimate=!1,n=n.substr(1,n.indexOf(";")-2),n=1e3*n.substr(n.indexOf(" ")),i=t.style.cssText,l>-1){var d=i.indexOf("skew(");d=d>-1?parseFloat(i.substr(d+5,i.substr(d+5).indexOf("deg)"))):0,f.push({effect:"skew",valueStart:d,valueEnd:parseFloat(e.substr(l+5,e.substr(l+5).indexOf("deg)")))})}if(c>-1){var u=i.indexOf("scale(");u=u>-1?parseFloat(i.substr(u+6,i.substr(u+6).indexOf(")"))):1,f.push({effect:"scale",valueStart:u,valueEnd:parseFloat(e.substr(c+6,e.substr(c+6).indexOf(")")))})}if(m>-1){var h=i.indexOf("rotate(");h=h>-1?parseFloat(i.substr(h+7,i.substr(h+7).indexOf(")"))):0,f.push({effect:"rotate",valueStart:h,valueEnd:parseFloat(e.substr(m+7,e.substr(m+7).indexOf(")")))})}s=(new Date).getTime(),setTimeout(function(){t.isAnimate=!0,a()},20)},T=function(t,e,r,a){function s(t){return t}function o(){var e,i=(new Date).getTime(),c=(i-l)/r,f=t.style.cssText;if(!t.isAnimate)return void cancelRequestAnimationFrame(n);for(var d=0,u=m.length;u>d;d++){"auto"===m[d].from&&(m[d].from=0);var p=parseFloat(m[d].to),h=parseFloat(m[d].from);e=(p-h)*s(c)+h;var g="; ";(m[d].to.toString().indexOf("px")>-1||m[d].from.toString().indexOf("px")>-1)&&(g="px; "),f+=m[d].name+": "+e+g}t.style.cssText=f,1>c?n=requestAnimationFrame(o):(cancelAnimationFrame(n),a&&a())}function i(e){var r=[],a=F(t);for(var s in e){var o=a[s.toString()];o||(o=t.style[s.toString()]),r.push(JSON.parse('{"name": "'+s.toString()+'", "from": "'+o+'", "to": "'+e[s]+'"}'))}return r}var n,l,m;t.isAnimate=!1,m=i(e),l=(new Date).getTime(),setTimeout(function(){t.isAnimate=!0,o()},10)},k=function(t){T(t[0],{opacity:0},300,function(){T(t[0],{opacity:1},300)})},A=function(t){var e=(new Date).getTime(),r=t[0].clientHeight,a=t[0].clientWidth;!function s(){var o,i=(new Date).getTime()-e,n=i/400>1?1:i/400,l=1-n;.5>n?(o="position: absolute; width: "+parseFloat(a*l)+"px; height: "+parseFloat(r*l)+"px; top: "+parseFloat((r-r*l)/2)+"px; left: "+parseFloat((a-a*l)/2)+"px;",t[0].style.cssText=o,requestAnimationFrame(s)):1>n?(o="position: absolute; width: "+parseFloat(a*n)+"px; height: "+parseFloat(r*n)+"px; top: "+parseFloat((r-r*n)/2)+"px; left: "+parseFloat((a-a*n)/2)+"px;",t[0].style.cssText=o,requestAnimationFrame(s)):t[0].style.cssText=""}()},S=function(t){function r(t){return Math.pow(t,2)}function n(){for(var e=w-1;e>=0;e--)for(var r=h[e].getElementsByTagName("li"),s=r.length-1;s>=0;s--)-1===a&&(r[s].style.cssText=p);t.callback&&t.callback()}function l(){for(var f=(new Date).getTime(),d=(f-m)/t.duration,u=0;w>u;u++){var p=g[u].leftPos,x=g[u].lastPos,y=(p-x)*r(d)+x;p!==x&&(v>0&&y>p&&(y=p),0>v&&p>y&&(y=p),h[u].clientWidth<e.controls.containerWrap.clientWidth||(-1===a&&-1===s&&-1===o?(h[u].style.webkitTransform="translateX("+y+"px)",h[u].style.oTransform="translateX("+y+"px)",h[u].style.transform="translateX("+y+"px)"):h[u].style.left=y+"px"))}1>d?c=requestAnimationFrame(l):(i=!1,cancelAnimationFrame(c),n())}var m,c,h,g,w,v,x;m=(new Date).getTime(),h=t.obj,w=h.length,g=t.style,v=t.direction;var y="";switch(e.parameters.effect){case"zoom":case"zoomGrayScale":y=f;break;case"skew":y=v>0?u:d;break;default:y=""}for(var T=w-1;T>=0;T--){var S=h[T].getElementsByTagName("li");if(!(h[T].clientWidth<e.controls.containerWrap.clientWidth)&&g[T].leftPos!==g[T].lastPos)for(var F=S.length-1;F>=0;F--)a>-1||s>-1?"zoom"===e.parameters.effect||"zoomGrayScale"===e.parameters.effect?(x=S[F].querySelectorAll("img"),A(x)):"grayScale"===e.parameters.effect||"fade"===e.parameters.effect?(x=S[F].querySelectorAll("img"),-1===s?k(x):A(x)):b(S[F],y):"zoom"===e.parameters.effect||"zoomGrayScale"===e.parameters.effect?(x=S[F].querySelectorAll("img"),A(x)):"grayScale"===e.parameters.effect||"fade"===e.parameters.effect?(x=S[F].querySelectorAll("img"),k(x)):S[F].style.cssText=y}l()},F=function(t){return(F=window.getComputedStyle?function(t){return window.getComputedStyle(t,null)}:function(t){return t.currentStyle})(t)},q=function(t){function e(){s++,s===r.length&&o()}for(var r="object"!=typeof t?[t]:t,a=[],s=0,o=function(){},i=function(){e()},n=0;n<r.length;n++)a[n]=new Image,a[n].src=r[n],a[n].complete?setTimeout(function(){e()},0):a[n].onload=i,a[n].onerror=i;return{done:function(t){o=t||o}}},_=function(t,r){function a(){var a,w=e.parameters,x=w.effect,T=e.controls,k=F(w.container),A=w.container.clientWidth-parseInt(k.paddingLeft,10)-parseInt(k.paddingRight,10);for(w.adaptive&&(t&&t.length&&(a=t[0].querySelector("li")),a&&(w.visible=Math.floor(A/a.offsetWidth))),o=0,m=t.length;m>o;o++){if(i=t[o].querySelectorAll("li"),c=F(i[0]),b=i.length,"zoomGrayScale"===x||"grayScale"===x)for(y=0;b>y;y++)p=i[y].querySelector("img"),-1===s&&(u=I(p),p.parentNode.appendChild(u));d=o===m-1?0:parseInt(c.marginTop,10)+parseInt(c.marginBottom,10),f=parseInt(c.marginLeft,10)+parseInt(c.marginRight,10),h.push({itemHeight:i[0].offsetHeight+d,itemWidth:i[0].offsetWidth+f,itemCount:i.length,leftPos:0}),n=h[o],t[o].style.cssText="width: "+n.itemWidth*(n.itemCount+1)+"px; height: "+n.itemHeight+"px; position: absolute; display: table; left: 0; top: "+g+"px",g+=n.itemHeight,l=n.itemWidth;for(var S=0,q=i.length;q>S;S++){var _=F(i[S],{width:0,height:0});i[S].style.cssText="position: relative; overflow: hidden; width: "+_.width+"; height: "+_.height+";"}T.containerWrap.appendChild(t[o].cloneNode(!0)),t[o].style.display="none",v++}for(;t.length;)w.container.removeChild(t[0]);var z=parseFloat(w.visible*l-f);T.containerWrap.style.cssText="position: relative; overflow: hidden; height: "+g+"px; width: "+z+"px; font-size: 0;letter-spacing: -1px;",w.adaptive&&(T.containerWrap.style.cssText+="margin-left: "+parseFloat((A-z)/2)+"px"),w.container.appendChild(T.containerWrap),T.sliderLines=T.containerWrap.getElementsByTagName("ul"),r()}var o,i,n,l,m,c,f,d,u,p,h=(e.controls,e.baseStyle),g=0,w=e.parameters,v=0,x=[];for(o=0,m=t.length;m>o;o++){i=t[o].querySelectorAll("li");for(var y=0,b=i.length;b>y;y++)p=i[y].querySelector("img"),x.push(p.src)}"grayScale"===w.effect&&-1===s?q(x).done(a):a()},z=function(){if(t){if(!t.container)return!1;e.parameters.container=t.container,t.visible&&(e.parameters.visible=t.visible),t.effect&&(e.parameters.effect=t.effect),t.hover&&(e.parameters.hover=t.hover),t.click&&(e.parameters.click=t.click),t.text&&(e.parameters.text=t.text),t.adaptive&&(e.parameters.adaptive=t.adaptive),t.auto&&(e.parameters.auto=t.auto),t.delay&&(e.parameters.delay=t.delay)}return!0},O=function(t,e){for(;t.className.indexOf(e)>-1;)t.className=t.className.replace(e,"")},P=function(t){if("none"!==e.parameters.hover)for(var r=0,a=t.length;a>r;r++)for(var s=t[r].querySelectorAll("li"),o=0,i=s.length;i>o;o++){var n,l=document.createElement("div");l.setAttribute("onmouseenter","return;"),n=typeof l.onmouseenter,"function"===n?(h(s[o],"mouseenter",v),h(s[o],"mouseleave",x)):(s[o].onmouseover=v,s[o].onmouseout=x)}},W=function(t){if("none"!==e.parameters.click)for(var r=0,a=t.length;a>r;r++)for(var s=t[r].querySelectorAll("li"),o=0,i=s.length;i>o;o++)h(s[o],"mousedown",y)},E=function(t){if("none"!==e.parameters.text)for(var r=0,a=t.length;a>r;r++)for(var s=t[r].querySelectorAll(e.parameters.text.selector),o=0,i=s.length;i>o;o++)if(s[o].style.cssText=n.baseParam,e.parameters.text.direction)switch(e.parameters.text.direction){case"top":s[o].style.cssText+=n.top;break;case"left":s[o].style.cssText+=n.left;break;case"right":s[o].style.cssText+=n.right;break;case"bottom":s[o].style.cssText+=n.bottom}},I=function(t){var e=document.createElement("canvas"),r=e.getContext("2d"),a=new Image,s=new Image;a.src=t.src,e.width=t.getAttribute("width"),e.height=t.getAttribute("height"),r.drawImage(a,0,0,e.width,e.height);for(var o=r.getImageData(0,0,e.width,e.height),i=0;i<o.height;i++)for(var n=0;n<o.width;n++){var l=4*i*o.width+4*n,m=(o.data[l]+o.data[l+1]+o.data[l+2])/3;o.data[l]=m,o.data[l+1]=m,o.data[l+2]=m}return r.putImageData(o,0,0,0,0,o.width,o.height),s.src=e.toDataURL(),s.setAttribute("width",e.width),s.setAttribute("height",e.height),s.style.cssText="position: absolute; top: 0; left: 0; z-index: -1",s},R=function(){var t,r=e.parameters,i=e.controls,n=i.containerWrap.style;if(r.adaptive){var l,m,c,f,d=F(r.container),u=r.container.clientWidth-parseInt(d.paddingLeft,10)-parseInt(d.paddingRight,10),p=i.sliderLines;p&&p.length&&(l=p[0].querySelector("li"),m=F(l)),l&&(r.visible=Math.floor(u/l.offsetWidth)),f=parseInt(m.marginLeft,10)+parseInt(m.marginRight,10),c=parseFloat(r.visible*(l.offsetWidth+f)-f),n.width=c+"px",n.marginLeft=(u-c)/2+"px",t=p.length;for(var h=0;t>h;h++)-1===a&&-1===s&&-1===o?(p[h].style.webkitTransform="translateX(0px)",p[h].style.oTransform="translateX(0px)",p[h].style.transform="translateX(0px)"):p[h].style.left=0,e.baseStyle[h].leftPos=0;i.leftButton.className+=" rows-slider__controls_disabled",O(i.rightButton,"rows-slider__controls_disabled")}};return this.parameters={container:null,adaptive:!1,visible:4,ease:"linear",effect:"none",hover:"none",click:"none",text:"none",scroll:!1,delay:1e3,autoDelay:0},this.controls={},this.baseStyle=[],this.move=function(t){var e,r,a,s,o=this.controls,i=this.baseStyle,n=o.sliderLines,l=o.rightButton,m=o.leftButton,c=!1,f=[],d=[];for(a="left"===t?1:-1,s=this.parameters.visible,e=0,r=i.length;r>e;e++){f.push(!1),d.push(!1),i[e].lastPos=i[e].leftPos,i[e].leftPos+=s*i[e].itemWidth*a;var u=i[e].itemWidth*i[e].itemCount-i[e].itemWidth*s;i[e].leftPos>=0?(i[e].leftPos=0,d[e]=!0):Math.abs(i[e].leftPos)>=u?(i[e].leftPos=-u,f[e]=!0):(O(m,"rows-slider__controls_disabled"),O(l,"rows-slider__controls_disabled"))}var p;for(e=0,p=f.length;p>e;e++)f[e]||(c=!0);c||(O(l,"rows-slider__controls_disabled"),l.className+=" rows-slider__controls_disabled"),c=!1;var h;for(e=0,h=d.length;h>e;e++)d[e]||(c=!0);c||(m.className+=" rows-slider__controls_disabled"),S({obj:n,style:i,duration:300,direction:a})},this.addEventList=function(){var t=e.controls;h(t.leftButton,"click",g),h(t.rightButton,"click",w),h(window,"resize",R)},this.createToggleButton=function(){this.parameters.container.innerHTML+='<div class="rows-slider__controls-left rows-slider__controls_disabled"></div><div class="rows-slider__controls-right"></div>'},this.getControls=function(){var t=this.controls,e=this.parameters.container;this.createToggleButton(),t.leftButton=e.querySelectorAll(".rows-slider__controls-left")[0],t.rightButton=e.querySelectorAll(".rows-slider__controls-right")[0],t.sliderLines=e.getElementsByTagName("ul"),t.containerWrap=document.createElement("div"),_(t.sliderLines,function(){P(t.sliderLines),W(t.sliderLines),E(t.sliderLines)})},this.initRequestAnimationFrame=function(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),window.cancelRequestAnimationFrame=function(){return window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||function(t){clearTimeout(t)}}()},this.initAutoScroll=function(){function t(){e.parameters.stop||(e.move(e.parameters.loopDirections),r.rightButton.className.indexOf("rows-slider__controls_disabled")>-1?e.parameters.loopDirections="left":r.leftButton.className.indexOf("rows-slider__controls_disabled")>-1&&(e.parameters.loopDirections="right"))}var r=e.controls;e.parameters.auto&&(e.parameters.stop=!1,h(e.parameters.container,"mouseover",function(){e.parameters.stop=!0}),h(e.parameters.container,"mouseleave",function(){e.parameters.stop=!1}),e.parameters.loopDirections="right",setInterval(t,e.parameters.delay))},this.init=function(){z()&&(this.getControls(),this.addEventList(),this.initRequestAnimationFrame(),this.initAutoScroll())},this.init()}