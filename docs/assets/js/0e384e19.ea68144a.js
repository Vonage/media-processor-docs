"use strict";(self.webpackChunkmedia_processor_docs=self.webpackChunkmedia_processor_docs||[]).push([[671],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},s="Vonage Media Processor",i={unversionedId:"intro",id:"intro",title:"Vonage Media Processor",description:"Intro",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MediaProcessorInterface",permalink:"/docs/api/interfaces/MediaProcessorInterface"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"Insertable Streams",id:"insertable-streams",level:3},{value:"Sample applications",id:"sample-applications",level:2},{value:"Library usage",id:"library-usage",level:2},{value:"Create Transformer",id:"create-transformer",level:3},{value:"Using the transformer on the application main thread",id:"using-the-transformer-on-the-application-main-thread",level:3},{value:"Main code:",id:"main-code",level:4},{value:"Using the transformer on a Web worker thread",id:"using-the-transformer-on-a-web-worker-thread",level:3},{value:"MediaProcessor bridge code:",id:"mediaprocessor-bridge-code",level:4},{value:"Web worker code:",id:"web-worker-code",level:4},{value:"Main code:",id:"main-code-1",level:4},{value:"Errors,  Warnings and Statistics",id:"errors--warnings-and-statistics",level:3},{value:"isSupported",id:"issupported",level:4},{value:"Errors and Warnings Listener",id:"errors-and-warnings-listener",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Turn statistics on:",id:"turn-statistics-on",level:5},{value:"Turn statistics off: (by default the statistics are off)",id:"turn-statistics-off-by-default-the-statistics-are-off",level:5}],p={toc:c};function m(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vonage-media-processor"},"Vonage Media Processor"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Vonage media processor is a helper library for web developers that want to implement ",(0,a.kt)("em",{parentName:"p"},"insertable streams (a.k.a Breakout box)")," on chrome based browsers using any Vonage JS SDK (voice and video)."),(0,a.kt)("h3",{id:"insertable-streams"},"Insertable Streams"),(0,a.kt)("p",null,"Insertable streams (aka Breakout Box) allow developers to get access to the raw media data (audio data and video frames) before it gets encoded by WebRTC and after it gets decoded by WebRTC by using the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream"},"TransformStream Transformers")," API.\n",(0,a.kt)("strong",{parentName:"p"},"By using media processor you can use as many transformers as you like.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"insertable streams",src:t(7486).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"As you can see in the image above media from the camera/microphone is getting inside WebRTC directly when following the regular flow."),(0,a.kt)("p",null,"When using insertable streams media will go through the transformers (your code) before it gets into WebRTC or before it gets into the renderer process. In those transformers you can do anything you want with the data, change it, take some inputs from it etc. Once you are done in one transformer you pipe the data to your next transformer if that exists, and if not it will go into WebRTC or the renderer process."),(0,a.kt)("p",null,"The advantages of using insertable streams are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows the processing to be specified by the user, not the browser."),(0,a.kt)("li",{parentName:"ul"},"Allows the processed data to be handled by the browser as if it came through the normal pipeline."),(0,a.kt)("li",{parentName:"ul"},"Allows the use of techniques like WASM to achieve effective processing."),(0,a.kt)("li",{parentName:"ul"},"Allows the use of techniques like Web workers to avoid blocking on the application main thread."),(0,a.kt)("li",{parentName:"ul"},"It does not negatively impact on security or privacy of current communications.")),(0,a.kt)("p",null,"More information can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/w3c/mediacapture-transform/blob/main/explainer.md"},"here"),"."),(0,a.kt)("h2",{id:"sample-applications"},"Sample applications"),(0,a.kt)("p",null,"Sample applications can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Vonage/vonage-media-transformers-samples"},"here"),"."),(0,a.kt)("h2",{id:"library-usage"},"Library usage"),(0,a.kt)("p",null,"In this sample we will use ",(0,a.kt)("a",{parentName:"p",href:"https://tokbox.com/developer/guides/vonage-media-processor/js/#publisher-setvideomediaprocessorconnector-method"},"OT.Publisher API")," for the integration of this library."),(0,a.kt)("h3",{id:"create-transformer"},"Create Transformer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class  SimpleTransformer  implements  Transformer {\n    startCanvas_: OffscreenCanvas;\n    startCtx_: CanvasRenderingContext2D;\n    message_: string\n    constructor(message: string) {\n        this.startCanvas_ = new  OffscreenCanvas(1, 1)\n        this.startCtx_ = this.startCanvas_.getContext('2d')\n        this.message_ = message\n        if (!this.startCtx_) {\n            throw  new  Error('Unable to create CanvasRenderingContext2D');\n        }\n    }\n    \n    //start function is optional.\n    start(controller:TransformStreamDefaultController) {\n        //In this sample nothing needs to be done.\n    }\n    \n    //transform function must be implemented.\n    transform(frame:any, controller:TransformStreamDefaultController) {\n        this.startCanvas_.width = frame.displayWidth\n        this.startCanvas_.height = frame.displayHeight\n        let  timestamp: number = frame.timestamp\n        this.startCtx_.drawImage(frame, 0, 0, frame.displayWidth, frame.displayHeight)\n        this.startCtx_.font = \"30px Arial\";\n        this.startCtx_.fillStyle = \"black\";\n        this.startCtx_.fillText(this.message_, 50, 150);\n        frame.close()\n        controller.enqueue(new  VideoFrame(this.startCanvas_, {timestamp, alpha:  'discard'}));\n    }\n    \n    //flush function is optional.\n    flush(controller:TransformStreamDefaultController) {\n        //In this sample nothing needs to be done.\n    }\n}\nexport  default  SimpleTransformer;\n")),(0,a.kt)("h3",{id:"using-the-transformer-on-the-application-main-thread"},"Using the transformer on the application main thread"),(0,a.kt)("h4",{id:"main-code"},"Main code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'...\nimport { MediaProcessor, MediaProcessorConnector } from  \'@vonage/media-processor\'; \n...\nconst transformer1: SimpleTransformer = new SimpleTransformer("hello")\nconst transformer2: SimpleTransformer = new SimpleTransformer("world")\nconst mediaProcessor: MediaProcessor = new MediaProcessor()\nconst transformers = [ transformer1, transformer2]\nmediaProcessor.setTransformers(transformers)\nconst connector: MediaProcessorConnector = new MediaProcessorConnector(mediaProcessor)\n...\npublisher.setVideoMediaProcessorConnector(connector)\n...\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create two transformer instances. One will print ",(0,a.kt)("em",{parentName:"li"},"hello")," and the other one will print ",(0,a.kt)("em",{parentName:"li"},"world"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a new MediaProcessor instance (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"new MediaProcessor()"),")."),(0,a.kt)("li",{parentName:"ol"},"Set the array of transformers previously created to the MediaProcessor instance (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"mediaProcessor.setTransformers(transformers)"),")."),(0,a.kt)("li",{parentName:"ol"},"Create MediaProcessorConnector instance by using the MediaProcessor instance previously created (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"new MediaProcessorConnector(mediaProcessor)"),")."),(0,a.kt)("li",{parentName:"ol"},"The final step would be setting the MediaProcessorConnector instance to one of Vonage SDKs (in this example we used OT.Publisher) (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"publisher.setVideoMediaProcessorConnector(connector)"),").")),(0,a.kt)("h3",{id:"using-the-transformer-on-a-web-worker-thread"},"Using the transformer on a Web worker thread"),(0,a.kt)("p",null,"Using the library along with Web workers represents the best combination in terms of performance.\nWorker helper class (it will run on the application main thread):"),(0,a.kt)("h4",{id:"mediaprocessor-bridge-code"},"MediaProcessor bridge code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class  MediaProcessorHelperWorker implements MediaProcessorInterface{\n    worker_: any\n    const workerUrl_: string = \"https://some-worker.com/worker.js\"\n    constructor() {\n        this.worker_ = new Worker(this.workerUrl_);\n        this.worker_.addEventListener('message', ((msg: any) => {\n            if(msg.data.message === 'transform'){\n                ...\n            } else if(msg.data.message === 'destroy'){\n                ...\n                //release the worker!!!\n                this.worker_.terminate()\n            }\n        }))\n    }\n    //override function\n    transform(readable, writable) \n    { \n        this.worker_.postMessage({ \n            operation: 'transform', \n            readable, \n            writable}, \n            [readable, writable]); \n    }       \n    //override function\n    destroy() { \n        this.worker_.postMessage({ \n            operation: 'destroy'}); \n    }\n}\n")),(0,a.kt)("h4",{id:"web-worker-code"},"Web worker code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"...\nimport { MediaProcessor, MediaProcessorConnector } from  '@vonage/media-processor'; \n...\nconst transformer1: SimpleTransformer = new SimpleTransformer(\"hello\")\nconst transformer2: SimpleTransformer = new SimpleTransformer(\"world\")\nconst mediaProcessor: MediaProcessor = new MediaProcessor()\nconst transformers = [ transformer1, transformer2]\nmediaProcessor.setTransformers(transformers)\nonmessage = async (event) => { \n    const { operation } = event.data; \n    switch (operation) {\n        case  'transform':\n            mediaProcessor.transform(readable, writable).then(() => { \n                const msg = {callbackType: 'success', message: 'transform'}; \n                postMessage(JSON.stringify(msg)); \n            })\n            break;\n        case 'destroy':\n            const msg = {callbackType: 'success', message: 'destroy'}; \n            postMessage(JSON.stringify(msg)); \n            break;\n    }\n}\n")),(0,a.kt)("h4",{id:"main-code-1"},"Main code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"...\nconst mediaProcessor = new MediaProcessorHelperWorker(worker); \nconst connector = new MediaProcessorConnector(mediaProcessor);\n...\npublisher.setVideoMediaProcessorConnector(connector)\n")),(0,a.kt)("p",null,"The main difference between running these bits on the application main thread or on a Web worker is that you should provide the bridging bits between the application main thread and Web worker. This bridge class should implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"MediaProcessorInterface")," interface."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"In case of wondering why the library does not provide an easy and simpler way to implement or support this communication please note that this is application specific so the library can not help there as it depends on the use case implemented.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It is very important that the ",(0,a.kt)("inlineCode",{parentName:"strong"},"mediaProcessor")," and the ",(0,a.kt)("inlineCode",{parentName:"strong"},"Transformers")," instances must be created on the Web worker and not on the application main thread.")),(0,a.kt)("h3",{id:"errors--warnings-and-statistics"},"Errors,  Warnings and Statistics"),(0,a.kt)("h4",{id:"issupported"},"isSupported"),(0,a.kt)("p",null,"This is a check to make sure that the insertable streams API is supported by the browser. (",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=MediaStreamTrackProcessor"},"supported browsers"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    await  isSupported();\n} catch(e) {\n    console.error(e);\n}\n")),(0,a.kt)("h4",{id:"errors-and-warnings-listener"},"Errors and Warnings Listener"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mediaProcessor")," instances include ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/emittery"},"Emittery")," notifications."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"mediaProcessor.on('error', ((eventData: ErrorData) => {\n    console.error(eventData);\n}))\nmediaProcessor.on('warn', ((eventData: WarnData) => {\n    console.warn(eventData);\n}))\nmediaProcessor.on('pipelineInfo', ( (eventData: PipelineInfoData) => {\n    console.info(eventData)\n}))\n")),(0,a.kt)("h4",{id:"statistics"},"Statistics"),(0,a.kt)("p",null,"The API collects statistics for usage and debugging purposes. However, it is up to the developer to activate it."),(0,a.kt)("h5",{id:"turn-statistics-on"},"Turn statistics on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const  metadata: VonageMetadata = {\n    appId:  'vonage app id',\n    sourceType:  'video' | 'voice',\n    proxyUrl: 'https://some-proxy.com' //optional\n};\nsetVonageMetadata(metadata)\n")),(0,a.kt)("h5",{id:"turn-statistics-off-by-default-the-statistics-are-off"},"Turn statistics off: (by default the statistics are off)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"setVonageMetadata(null)\n")))}m.isMDXComponent=!0},7486:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/insertableStreams-1f0cbae74814dcaadcc6d5f43101511c.png"}}]);