(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var i=t("wFql"),n=t("q1tI"),r=t.n(n),s=t("2+3N"),l=t("1lec"),c=t("+ejy"),b=t("+9zj"),o=i.a.Title;a.a=function(e){var a={},t={},i={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],i=e[1];a[i]=t})),Object.entries(l).forEach((function(e){var a=e[0],i=e[1];t[i]=a}));var n=Object(b.a)(e.location),p=e.version||n.substring(n.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:i,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(o,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},WKhu:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return b}));var i=t("8o2o"),n=(t("q1tI"),t("7ljp")),r=t("JkCF"),s={},l={_frontmatter:s},c=r.a;function b(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(c,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",{className:"date"},"8th March 2019"),Object(n.b)("h2",{id:"new-features",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user now can generate ",Object(n.b)("inlineCode",{parentName:"p"},"cache-control")," header value programmatically. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1615"}),"#1615")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpHeaders headers = HttpHeaders.of();\nHttpFileBuilder fileBuilder = HttpFileBuilder.of(...);\nHttpFileServiceBuilder fileServiceBuilder = HttpFileServiceBuilder.forFileSystem(...);\n\n// Before:\nheaders.set(HttpHeaderNames.CACHE_CONTROL, "no-cache, no-store, must-revalidate"));\nfileBuilder.setHeader(HttpHeaderNames.CACHE_CONTROL,\n                      "max-age=86400, no-cache, must-revalidate");\nfileServiceBuilder.setHeader(HttpHeaderNames.CACHE_CONTROL, "public, max-age=3600");\n\n// After:\nheaders.setObject(HttpHeaderNames.CACHE_CONTROL, ServerCacheControl.DISABLED);\nfileBuilder.cacheControl(new ServerCacheControlBuilder()\n                                 .maxAgeSeconds(86400)\n                                 .noCache()\n                                 .mustRevalidate()\n                                 .build());\nfileServiceBuilder.cacheControl(new ServerCacheControlBuilder()\n                                        .cachePublic()\n                                        .maxAgeSeconds(3600)\n                                        .build());\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Armeria supports ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-java/blob/master/documentation/server-reflection-tutorial.md"}),"gRPC Server Reflection"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1623"}),"#1623")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = new ServerBuilder();\nsb.service(new GrpcServiceBuilder().addService(new MyHelloService())\n                                   .addService(ProtoReflectionService.newInstance())\n                                   .build());\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"StreamMessage.drailAll(...)")," to simply collect all the elements from the ",Object(n.b)("inlineCode",{parentName:"p"},"StreamMessage"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1620"}),"#1620")," "),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpResponse res = HttpResponse.of(HttpHeaders.of(HttpStatus.OK)\n                                              .contentType(PLAIN_TEXT_UTF_8),\n                                   HttpData.ofUtf8("bob"),\n                                   HttpHeaders.of(CONTENT_MD5, "hash"));\n// Simply collect all the elements.\nList<HttpObject> drained = res.drainAll().join();\nassertThat(drained).containsExactly(\n        HttpHeaders.of(HttpStatus.OK)\n                   .contentType(PLAIN_TEXT_UTF_8),\n        HttpData.of(StandardCharsets.UTF_8, "bob"),\n        HttpHeaders.of(CONTENT_MD5, "hash"));\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user is able to see the HTTP trailers in a ",Object(n.b)("inlineCode",{parentName:"p"},"RequestLog"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1614"}),"#1614")," "))),Object(n.b)("h2",{id:"improvements",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added more logging to ",Object(n.b)("inlineCode",{parentName:"li"},"SamlService")," to inform the reasons of the failure. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1629"}),"#1629")," "),Object(n.b)("li",{parentName:"ul"},"Various documentation updates. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1604"}),"#1604"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1607"}),"#1607"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1610"}),"#1610"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1611"}),"#1611"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1613"}),"#1613"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1618"}),"#1618"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1626"}),"#1626"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1627"}),"#1627"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1628"}),"#1628"),"  ")),Object(n.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed a bug where HTTP trailers is added to message headers. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1620"}),"#1620")),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where the TLS handshake exception pollutes the log message. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1612"}),"#1612")," "),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where Server-Sent Events messages miss the ",Object(n.b)("inlineCode",{parentName:"li"},"end-of-line")," character. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1610"}),"#1610")),Object(n.b)("li",{parentName:"ul"},"Fixed an API design flaw where a user cannot specify more than one decorator when adding a ",Object(n.b)("inlineCode",{parentName:"li"},"ServiceWithPathMappings"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1627"}),"#1627")," "),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(n.b)("inlineCode",{parentName:"li"},"contentPreview")," is not working correctly. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1624"}),"#1624")," "),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where a ",Object(n.b)("inlineCode",{parentName:"li"},"StackOverFlowError")," is raised while finding annotations in ",Object(n.b)("inlineCode",{parentName:"li"},"AnnotationUtil"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1635"}),"#1635")," "),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where the Armeria actuator sends the response with the incorrect media type. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1641"}),"#1641")," ")),Object(n.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking Change"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"HttpHeaders")," is added to ",Object(n.b)("inlineCode",{parentName:"li"},"get()")," in ",Object(n.b)("inlineCode",{parentName:"li"},"HttpVfs")," as a parameter. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1615"}),"#1615")," ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A user can easily add the ",Object(n.b)("inlineCode",{parentName:"li"},"HttpHeaders")," when building an ",Object(n.b)("inlineCode",{parentName:"li"},"HttpFile"),". ")))),Object(n.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Caffeine 2.6.2 -> 2.7.0"),Object(n.b)("li",{parentName:"ul"},"Curator 4.1.0 -> 4.2.0"),Object(n.b)("li",{parentName:"ul"},"gRPC 1.18.0 -> 1.19.0"),Object(n.b)("li",{parentName:"ul"},"Hibernate Validator 6.0.14 -> 6.0.15"),Object(n.b)("li",{parentName:"ul"},"Jetty 9.4.14 -> 9.4.15"),Object(n.b)("li",{parentName:"ul"},"protobuf-java 3.5.1 -> 3.6.1"),Object(n.b)("li",{parentName:"ul"},"RxJava 2.2.6 -> 2.2.7"),Object(n.b)("li",{parentName:"ul"},"SLF4J 1.7.25 -> 1.7.26"),Object(n.b)("li",{parentName:"ul"},"Spring Boot 2.1.2 -> 2.1.3")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-81-0-mdx-9dc739a989a8e4b35935.js.map