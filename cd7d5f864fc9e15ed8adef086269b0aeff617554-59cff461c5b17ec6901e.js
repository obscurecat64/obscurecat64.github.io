"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{3723:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return E},P:function(){return w},S:function(){return R},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,p=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=o(e,f);return r.createElement("img",s({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},b=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(y,s({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,a=o(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=b.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;var C,L,x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:x},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],_=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,f=e.onError,h=o(e,S),y=i.width,b=i.height,v=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,b,v),E=w.style,x=w.className,k=o(w,T),O=(0,r.useRef)(),I=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var N=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=O.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(I)):L&&_.has(I)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;O.current&&(O.current.innerHTML=r(s({isLoading:!0,isLoaded:_.has(I),image:i},h)),_.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,I,_,c,g,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){_.has(I)&&L&&(O.current.innerHTML=L(s({isLoading:_.has(I),isLoaded:_.has(I),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},k,{style:s({},E,c,{backgroundColor:u}),className:x+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));I.propTypes=k,I.displayName="GatsbyImage";var N,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:x,width:j,height:j,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(N=I,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,q);return n&&console.warn(n),a?r.createElement(N,s({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=A},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},6470:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(1082),i=a(3723),s=function(){var e,t=null===(e=(0,n.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",{className:"bio-module--bio--7c31e"},r.createElement(i.S,{className:"bio-module--bio-avatar--6a8a1",layout:"fixed",formats:["auto","webp","avif"],src:"../images/me.jpg",width:75,height:75,quality:95,alt:"Me",__imageData:a(8428)}),(null==t?void 0:t.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,t.name),r.createElement("br",null),(null==t?void 0:t.summary)&&r.createElement("small",null,t.summary)))}},2078:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=function(e){switch(e){case"tech":return{border:"1px solid #adc6ff",color:"#1d39c4",backgroundColor:"rgb(240, 245, 255)"};case"life":return{border:"1px solid #d3adf7",color:"#531dab",backgroundColor:"rgb(249, 240, 255)"};default:return{border:"1px solid #ffadd2",color:"#c41d7f",backgroundColor:"rgb(255, 240, 246)"}}},i=function(e){var t=e.title;return r.createElement("span",{className:"tag-module--tag--d6823",style:n(t)},t)}},8428:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#a8c8e8","images":{"fallback":{"src":"/static/ea0ba90b8a82099a9b27c61a6398c110/d8275/me.jpg","srcSet":"/static/ea0ba90b8a82099a9b27c61a6398c110/d8275/me.jpg 75w,\\n/static/ea0ba90b8a82099a9b27c61a6398c110/b5649/me.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/static/ea0ba90b8a82099a9b27c61a6398c110/26941/me.avif 75w,\\n/static/ea0ba90b8a82099a9b27c61a6398c110/95309/me.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/static/ea0ba90b8a82099a9b27c61a6398c110/a18cc/me.webp 75w,\\n/static/ea0ba90b8a82099a9b27c61a6398c110/7ddcc/me.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-59cff461c5b17ec6901e.js.map