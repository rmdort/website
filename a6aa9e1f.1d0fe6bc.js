(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(132),c=t(136),m=t(141),i=t(133);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),i="/"===a.permalink?n:"Blog";return r.a.createElement(c.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}},137:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),c=t(133),m=t(142),i=t(134),o=t.n(i),s=t(132),d=(t(93),t(94)),h=t.n(d);var u=e=>function({id:a,...t}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(s.a)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",{[h.a.enhancedAnchor]:!n}),id:a}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#"),t.children):l.a.createElement(e,t)},E=t(95),g=t.n(E);a.a={code:e=>{const{children:a}=e;return"string"==typeof a?l.a.createElement(m.a,e):a},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:g.a.mdxCodeBlock},e)),h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}},141:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(134),c=t.n(l),m=t(135),i=t(133),o=t(137),s=t(96),d=t.n(s);const h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:s=!1}=e,{date:u,permalink:E,tags:g,readingTime:v}=n,{author:p,title:_}=t,N=t.author_url||t.authorURL,b=t.author_title||t.authorTitle,f=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:s?void 0:"margin-bottom--xl"},(()=>{const e=s?"h1":"h2",a=u.substring(0,10).split("-"),t=a[0],n=h[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:c()("margin-bottom--sm",d.a.blogPostTitle)},s?_:r.a.createElement(i.a,{to:E},_)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:u,className:d.a.blogPostDate},n," ",l,", ",t," ",v&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},f&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:N,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:f,alt:p})),r.a.createElement("div",{className:"avatar__intro"},p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},p)),r.a.createElement("small",{className:"avatar__subtitle"},b)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},a)),(g.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},g.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),g.map(({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":"Read more about "+_},r.a.createElement("strong",null,"Read More")))))}}}]);