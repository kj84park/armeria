(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),s=a("q1tI"),r=a.n(s),i=a("2+3N"),c=a("1lec"),l=a("+ejy"),o=a("+9zj"),b=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(i).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(c).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var s=Object(o.a)(e.location),h=e.version||s.substring(s.lastIndexOf("/")+1);return h.match(/^[0-9]/)||(h=void 0),r.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:h?h+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),h?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),h," release notes"):"",e.children)}},mtj2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n,s=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("JkCF"),c={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:c},b=i.a;function h(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)(b,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"21st August 2019"),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," does not report healthy endpoints as unhealthy anymore. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2004"}),"#2004")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UnaryGrpcClient")," now handles gRPC status in HTTP trailer correctly. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1998"}),"#1998")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"byte[]")," or ",Object(r.b)("inlineCode",{parentName:"li"},"HttpData")," returned by an annotated service method is now handled correctly when ",Object(r.b)("inlineCode",{parentName:"li"},"@Produces")," annotation is used with certain media types. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1999"}),"#1999")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2005"}),"#2005"))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"java-jwt 3.8.1 -> 3.8.2"),Object(r.b)("li",{parentName:"ul"},"Jetty 9.4.19 -> 9.4.20"),Object(r.b)("li",{parentName:"ul"},"Tomcat 9.0.22 -> 9.0.24")),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(r.b)(l,{usernames:["adriancole","anuraaga","elefeint","ikhoon","imasahiro","mauhiz","minwoox","tobias-","trustin"],mdxType:"ThankYou"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-90-3-mdx-c05c456bf1937c547765.js.map