(()=>{var e={};e.id=2086,e.ids=[2086],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},9981:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>A,routeModule:()=>x,tree:()=>d});var r=s(73137),i=s(54647),a=s(4183),l=s.n(a),n=s(71775),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=r.AppPageRouteModule,d=["",{children:["(main)",{children:["therapists",{children:["[name]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,56300)),"D:\\Work\\consciousleap\\ConsciousLeap\\app\\(main)\\therapists\\[name]\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,52846)),"D:\\Work\\consciousleap\\ConsciousLeap\\app\\(main)\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,66289)),"D:\\Work\\consciousleap\\ConsciousLeap\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],A=["D:\\Work\\consciousleap\\ConsciousLeap\\app\\(main)\\therapists\\[name]\\page.jsx"],u="/(main)/therapists/[name]/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:i.x.APP_PAGE,page:"/(main)/therapists/[name]/page",pathname:"/therapists/[name]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8571:(e,t,s)=>{Promise.resolve().then(s.bind(s,55809))},55809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(60080),i=s(52451),a=s.n(i),l=s(57114),n=s(9885);s(53376);var o=s(60930),c=s(32695),d=s(72279),A=s(19991);let Table=({data:e})=>r.jsx("div",{className:"rounded-lg w-full h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]",children:(0,r.jsxs)("div",{className:"h-full w-full rounded-lg items-center justify-center bg-white flex flex-col",children:[r.jsx("div",{className:"w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen pb-[2px]",children:r.jsx("div",{className:"h-full w-full items-center justify-center bg-white flex flex-col rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-websiteBlue text-xl font-light my-1.5",children:e?.name})})}),r.jsx("div",{className:"py-3",children:e?.items?.map(e=>r.jsx("li",{className:"font-light",children:e},e))})]})}),__WEBPACK_DEFAULT_EXPORT__=({params:e})=>{let t=(0,l.useRouter)(),s=e.name,[i,u]=(0,n.useState)(),{therapistFilter:p}=(0,n.useContext)(A.Z);return(0,n.useEffect)(()=>{let e=p?.therapistsData?.find(e=>e?._id==s);u(e)},[p?.therapistsData]),(0,r.jsxs)("div",{className:"flex py-[3vw] px-[10vw] md:py-[0.75vw] md:px-[8vw] justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-col w-3/12 mr-[2vw]",children:[r.jsx("div",{className:"rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]",children:r.jsx("div",{className:"flex items-start py-[3vw] px-[4vw] md:p-[5px] h-full w-full rounded-full justify-between bg-white",children:r.jsx(a(),{src:i?.photo,alt:"User profile",width:1e3,height:1e3,className:"w-full h-[19vw] object-cover object-center rounded-full"})})}),r.jsx("h1",{className:"text-websiteBlue text-xl text-center mt-4",children:i?.name}),r.jsx("p",{className:"text-center text-sm text-darkGrey",children:i?.desc}),(0,r.jsxs)("div",{className:"flex justify-center items-center mt-5",children:[r.jsx(o.gts,{className:"text-websiteBlue border-websiteBlue p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all",size:40}),r.jsx(d.Ty1,{className:"text-pinkishRed border-pinkishRed p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all",size:40}),r.jsx(c.Dij,{size:40,className:"text-oceanGreen border-oceanGreen p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"})]}),r.jsx("button",{onClick:e=>{t.push("/therapists/sagrika/schedule/select-meet")},className:"bg-websiteBlue px-9 text-sm mt-7 py-2 rounded-lg text-white mx-auto block",children:"Schedule Session"})]}),(0,r.jsxs)("div",{className:"w-9/12 flex flex-col",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-5 w-full",children:[r.jsx("div",{children:r.jsx(Table,{data:{name:"Experience",items:[i?.experience]}})}),r.jsx("div",{children:r.jsx(Table,{data:{name:"Qualifications",items:i?.qualifications}})}),r.jsx("div",{children:r.jsx(Table,{data:{name:"Speaks",items:i?.speaks}})})]}),(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-websiteBlue text-2xl font-light mt-[5vh]",children:"Expertise"}),r.jsx("div",{className:"grid grid-cols-3 gap-5 mt-4",children:i?.expertise?.map((e,t)=>r.jsx("div",{className:"cursor-pointer rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]",children:r.jsx("div",{className:"py-[3vw] text-center px-[4vw] text-darkGrey font-light mobile:py-2 md:px-6 h-full w-full rounded-xl flex items-center justify-center bg-white",children:e})},t))})]}),(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-websiteBlue text-2xl mt-[5vh] font-light",children:"About the Therapist"}),r.jsx("p",{className:"text-darkGrey text-sm tracking-wider",children:i?.about})]})]})]})}},56300:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>a,default:()=>o});var r=s(17536);let i=(0,r.createProxy)(String.raw`D:\Work\consciousleap\ConsciousLeap\app\(main)\therapists\[name]\page.jsx`),{__esModule:a,$$typeof:l}=i,n=i.default,o=n},53376:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/sagrika.a4ea5045.jpeg",height:867,width:867,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAsAh//8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDBBEABUL/2gAIAQEAAT8AnnVr2eSobUMdlkwPpmUNsc//xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIR/9oACAECAQE/ALGM/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxEh/9oACAEDAQE/AKbGcHc5P//Z",blurWidth:8,blurHeight:8}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[6357,5077,2279,2695,930,4217,7120],()=>__webpack_exec__(9981));module.exports=s})();