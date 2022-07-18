"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4648],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(r),d=i,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var n=r(3117),i=(r(7294),r(3905));const o={id:"ratelimit",title:"\u9650\u6d41\u5668",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},a=void 0,l={unversionedId:"component/middleware/ratelimit",id:"component/middleware/ratelimit",title:"\u9650\u6d41\u5668",description:"\u9650\u6d41\u5668\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u670d\u52a1\u7aef\u6d41\u91cf\u63a7\u5236\uff0c\u9ed8\u8ba4\u4f7f\u7528bbr limiter\u7b97\u6cd5\u3002",source:"@site/docs/component/middleware/06-ratelimit.md",sourceDirName:"component/middleware",slug:"/component/middleware/ratelimit",permalink:"/docs/component/middleware/ratelimit",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/06-ratelimit.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"ratelimit",title:"\u9650\u6d41\u5668",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u76d1\u63a7",permalink:"/docs/component/middleware/metrics"},next:{title:"\u5f02\u5e38\u6062\u590d",permalink:"/docs/component/middleware/recovery"}},c={},m=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"<code>WithLimiter</code>",id:"withlimiter",level:4},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u5728 Server \u4e2d\u914d\u7f6e\u4f7f\u7528\u9650\u6d41\u5668",id:"\u5728-server-\u4e2d\u914d\u7f6e\u4f7f\u7528\u9650\u6d41\u5668",level:4},{value:"\u89e6\u53d1\u9650\u6d41",id:"\u89e6\u53d1\u9650\u6d41",level:4}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9650\u6d41\u5668\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u670d\u52a1\u7aef\u6d41\u91cf\u63a7\u5236\uff0c\u9ed8\u8ba4\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/tree/main/ratelimit/bbr"},"bbr limiter"),"\u7b97\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("h4",{id:"withlimiter"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithLimiter")),(0,i.kt)("p",null,"\u66ff\u6362\u9ed8\u8ba4\u7684\u9650\u6d41\u7b97\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// WithLimiter set Limiter implementation,\n// default is bbr limiter\nfunc WithLimiter(limiter ratelimit.Limiter) Option {\n    return func(o *options) {\n        o.limiter = limiter\n    }\n}\n")),(0,i.kt)("p",null,"\u6240\u63d0\u4f9b\u7684\u9650\u6d41\u5668\u9700\u8981\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"aegis")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Limiter")," \u63a5\u53e3\uff0c\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/blob/main/ratelimit/ratelimit.go"},"aegis/ratelimit"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Limiter is a rate limiter.\ntype Limiter interface {\n    Allow() (DoneFunc, error)\n}\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"\u5728-server-\u4e2d\u914d\u7f6e\u4f7f\u7528\u9650\u6d41\u5668"},"\u5728 Server \u4e2d\u914d\u7f6e\u4f7f\u7528\u9650\u6d41\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n    http.Middleware(\n        // \u9ed8\u8ba4 bbr limiter\n        ratelimit.Server(),\n        // \u81ea\u5b9a\u4e49 limiter\n        //ratelimit.Server(ratelimit.WithLimiter(limiter)),\n    ),\n}\n\nsrv := http.NewServer(opts...)\n")),(0,i.kt)("h4",{id:"\u89e6\u53d1\u9650\u6d41"},"\u89e6\u53d1\u9650\u6d41"),(0,i.kt)("p",null,"\u5f53\u89e6\u53d1\u9650\u6d41\u5668\u65f6\uff0c\u4f1a\u76f4\u63a5\u62d2\u7edd\u5f53\u524d\u8bf7\u6c42\uff0c\u5e76\u8fd4\u56de\u9519\u8bef",(0,i.kt)("inlineCode",{parentName:"p"},"ErrLimitExceed"),"\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// ErrLimitExceed is service unavailable due to rate limit exceeded.\nvar ErrLimitExceed = errors.New(429, "RATELIMIT", "service unavailable due to rate limit exceeded")\n')))}u.isMDXComponent=!0}}]);