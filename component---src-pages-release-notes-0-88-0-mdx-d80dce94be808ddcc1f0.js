(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"+0gY":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,i=a("8o2o"),r=(a("q1tI"),a("7ljp")),s=a("JkCF"),c={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:c},o=s.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(o,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"3rd July 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext.current()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ServiceRequestContext.current()")," have been added so you don't need to downcast ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContext")," to ",Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext")," or ",Object(r.b)("inlineCode",{parentName:"li"},"ServiceRequestContext"),". It also makes sure the current context is client-side (or server-side), preventing a ",Object(r.b)("inlineCode",{parentName:"li"},"ClassCastException"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1869"}),"#1869")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1872"}),"#1872"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ClientRequestContext cctx = ClientRequestContext.current();\nServiceReqiestContext sctx = ServiceRequestContext.current();\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"currentOrNull()")," static method has been added to ",Object(r.b)("inlineCode",{parentName:"li"},"(Client|Service)RequestContext"),", which is similar to ",Object(r.b)("inlineCode",{parentName:"li"},"current()")," but returning ",Object(r.b)("inlineCode",{parentName:"li"},"null")," when there's no current context. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1872"}),"#1872"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"// Before:\nRequestContext ctx = RequestContext.mapCurrent(Function.identity(), null);\n// After:\nServiceRequestContext sctx = ServiceRequestContext.currentOrNull();\n"))),Object(r.b)("li",{parentName:"ul"},"You can now specify different ",Object(r.b)("inlineCode",{parentName:"li"},"AccessLogWriter"),"s for different services. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1866"}),"#1866"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'Server server = new ServerBuilder()\n        .route().path("/svc1")\n                .accessLogWriter(accessLogWriterForService1, true)\n                .build(service1)\n        .route().path("/svc2") // Will use the fallbackAccessLogWriter.\n                .build(service2)\n        .accessLogWriter(fallbackAccessLogWriter, true)\n        .build();\n'))),Object(r.b)("li",{parentName:"ul"},"The metrics of the ",Object(r.b)("inlineCode",{parentName:"li"},"Executor")," specified in ",Object(r.b)("inlineCode",{parentName:"li"},"ServerBuilder.blockingTaskExecutor()")," will be exposed under ",Object(r.b)("inlineCode",{parentName:"li"},"executor{name=armeriaBlockingTaskExecutor}"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1683"}),"#1683")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1841"}),"#1841")),Object(r.b)("li",{parentName:"ul"},"Armeria client will send a DNS query via TCP when a DNS response is truncated due to UDP packet size limitation. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1873"}),"#1873")),Object(r.b)("li",{parentName:"ul"},"You can now specify health check request interval using a ",Object(r.b)("inlineCode",{parentName:"li"},"Backoff"),", which means you can have more flexible delay strategy such as adding jitter. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1846"}),"#1846"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HttpHealthCheckedEndpointGroup group = new HttpHealthCheckedEndpointGroup(...)\n        .retryBackoff(Backoff.fixed(10000).withJitter(0.3))\n        .build();\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"By default, ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," will now add 20% jitter to the health check request interval."))),Object(r.b)("li",{parentName:"ul"},"A new module ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-brave")," has been added to replace the deprecated ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-zipkin"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1840"}),"#1840"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The package name has been changed from ",Object(r.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.{common,client,server}.tracing")," to ",Object(r.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.{common,client,server}.brave"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpTracingClient")," and ",Object(r.b)("inlineCode",{parentName:"li"},"HttpTracingService")," have been renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"BraveClient")," and ",Object(r.b)("inlineCode",{parentName:"li"},"BraveService"),"."))),Object(r.b)("li",{parentName:"ul"},"You can now retrieve the ",Object(r.b)("inlineCode",{parentName:"li"},"retrofit2.Invocation")," object associated with the current Retrofit call via ",Object(r.b)("inlineCode",{parentName:"li"},"InvocationUtil.get(RequestLog)"),", which can be useful when building a meter ID prefix. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1591"}),"#1591")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1845"}),"#1845"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'public class MyRetrofitMeterIdPrefixFunction implements MeterIdPrefixFunction {\n    @Override\n    public MeterIdPrefix apply(MeterRegistry registry, RequestLog log) {\n        final Invocation invocation = InvocationUtil.getInvocation(log);\n        final String service;\n        final String method;\n        if (invocation != null) {\n            service = invocation.method().getDeclaringClass().getSimpleName();\n            method = invocation.method().getName();\n        } else {\n            service = "unknown";\n            method = log.method().name();\n        }\n        return new MeterIdPrefix("call", "service", service, "method", method);\n    }\n}\n')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"We also added ",Object(r.b)("inlineCode",{parentName:"li"},"RetrofitMeterIdPrefixFunction")," which provides the sensible default ",Object(r.b)("inlineCode",{parentName:"li"},"MeterIdPrefixFunction")," for Retrofit calls.")))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The content negotiation logic has been relaxed so that the server falls back to the service with less constraint when content negotiation fails. Previously, it was rejecting the request. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1860"}),"#1860")),Object(r.b)("li",{parentName:"ul"},"More exceptions are now wrapped by ",Object(r.b)("inlineCode",{parentName:"li"},"UnprocessedRequestException")," to indicate whether the request can be safely retried without worrying about sending the request more than once. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1653"}),"#1653")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1848"}),"#1848"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Any exceptions that occurred during a connection attempt."),Object(r.b)("li",{parentName:"ul"},"Any exceptions that occurred during acquiring an existing connection from a connection pool."),Object(r.b)("li",{parentName:"ul"},"We also made ",Object(r.b)("inlineCode",{parentName:"li"},"UnprocessedRequestException.getCause()")," is non-null, so you do not need to worry about the case where there is no cause in ",Object(r.b)("inlineCode",{parentName:"li"},"UnprocessedRequestException"),".")))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Server will now allow specifying a ",Object(r.b)("inlineCode",{parentName:"li"},"@Default")," annotation with ",Object(r.b)("inlineCode",{parentName:"li"},"null")," value. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1858"}),"#1858")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1864"}),"#1864")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"DEBUG")," level log message which occurs when a client sent an ill-formed ",Object(r.b)("inlineCode",{parentName:"li"},"Accept")," header is now easier to understand. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1849"}),"#1849")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"THttpService")," now handles ",Object(r.b)("inlineCode",{parentName:"li"},"HttpStatusException")," and ",Object(r.b)("inlineCode",{parentName:"li"},"HttpResponseException")," correctly, which means they will not be translated into a ",Object(r.b)("inlineCode",{parentName:"li"},"200 OK")," response that contains a ",Object(r.b)("inlineCode",{parentName:"li"},"TApplicationException")," anymore. For example, your Thrift clients will see ",Object(r.b)("inlineCode",{parentName:"li"},"503 Service Unavailable")," response when your service throws an ",Object(r.b)("inlineCode",{parentName:"li"},"HttpStatusException.of(503)")," rather than ",Object(r.b)("inlineCode",{parentName:"li"},"200 OK"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1839"}),"#1839")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1867"}),"#1867")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DocService")," debug form will validate the endpoint path properly now. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1856"}),"#1856")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1857"}),"#1857")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContextCurrentTraceContext")," now calls ",Object(r.b)("inlineCode",{parentName:"li"},"decorateScope()")," when necessary. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1840"}),"#1840")),Object(r.b)("li",{parentName:"ul"},"Spring Web and WebFlux integration do not ignore the ",Object(r.b)("inlineCode",{parentName:"li"},"ssl.keyAlias")," property anymore. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1843"}),"#1843")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1865"}),"#1865")),Object(r.b)("li",{parentName:"ul"},"You will not see an ",Object(r.b)("inlineCode",{parentName:"li"},"ERROR")," log message when a client sends a ",Object(r.b)("inlineCode",{parentName:"li"},"HEAD")," request to your Spring WebFlux endpoint. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1847"}),"#1847")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1859"}),"#1859"))),Object(r.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpHealthCheckedEndpointGroupBuilder.retryInterval(Duration)")," has been deprecated. Use ",Object(r.b)("inlineCode",{parentName:"li"},"retryBackoff(Backoff)"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1846"}),"#1846")),Object(r.b)("li",{parentName:"ul"},"Everything in ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-zipkin")," has been deprecated. Use ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-brave"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1840"}),"#1840"))),Object(r.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"N/A")),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Brave 5.6.3 -> 5.6.6"),Object(r.b)("li",{parentName:"ul"},"FastUtil 8.2.2 -> 8.2.3"),Object(r.b)("li",{parentName:"ul"},"Hibernate Validator 6.0.16 -> 6.0.17"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"javax.annotation-api")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"jakarta.annotation-api")," 1.3.4"),Object(r.b)("li",{parentName:"ul"},"Jetty 9.4.18 -> 9.4.19"),Object(r.b)("li",{parentName:"ul"},"Micrometer 1.1.4 -> 1.2.0"),Object(r.b)("li",{parentName:"ul"},"Netty 4.1.34 -> 4.1.37",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"TCNative BoringSSL 2.0.23 -> 2.0.25"))),Object(r.b)("li",{parentName:"ul"},"protobuf-jackson 0.4.0 -> 1.0.0"),Object(r.b)("li",{parentName:"ul"},"RxJava 2.2.9 -> 2.2.10"),Object(r.b)("li",{parentName:"ul"},"Spring Boot 2.1.5 -> 2.1.6")),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(r.b)(l,{usernames:["Adanz","adriancole","anuraaga","cj848","hyeonjames","ikhoon","imasahiro","kojilin","minwoox","normanmaurer","southernkasaist","tobias-","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0},"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),i=a("q1tI"),r=a.n(i),s=a("2+3N"),c=a("1lec"),l=a("+ejy"),b=a("+9zj"),o=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(c).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var i=Object(b.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(o,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-88-0-mdx-d80dce94be808ddcc1f0.js.map