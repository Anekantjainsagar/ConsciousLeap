(()=>{var e={};e.id=1366,e.ids=[1366],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},34967:(e,i,s)=>{"use strict";s.r(i),s.d(i,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>p,routeModule:()=>h,tree:()=>c});var r=s(73137),a=s(54647),t=s(4183),o=s.n(t),n=s(71775),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);s.d(i,d);let l=r.AppPageRouteModule,c=["",{children:["(main)",{children:["expertise-area",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9841)),"D:\\Work\\consciousleap\\ConsciousLeap\\app\\(main)\\expertise-area\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,52846)),"D:\\Work\\consciousleap\\ConsciousLeap\\app\\(main)\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,66289)),"D:\\Work\\consciousleap\\ConsciousLeap\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\Work\\consciousleap\\ConsciousLeap\\app\\(main)\\expertise-area\\page.tsx"],m="/(main)/expertise-area/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new l({definition:{kind:a.x.APP_PAGE,page:"/(main)/expertise-area/page",pathname:"/expertise-area",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},60124:(e,i,s)=>{Promise.resolve().then(s.bind(s,57098))},57098:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>page});var r=s(60080),a=s(9885),t=s(52451),o=s.n(t);let n={src:"/_next/static/media/AreaExpertise.643ce0e7.jpg",height:2268,width:4031,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsoP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAQf/aAAgBAQABPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5},d={src:"/_next/static/media/1.3a5fb37a.png",height:51,width:42,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAZklEQVR42g3HMQsBAQAG0C+DQSkZJIvphMVkU8Qo6axGk+lGo98gUTIY+J0v97YXBxczhY2uROVkp3Tz1Iy+yt7bz1FRV+nq7uFsEi0frzpfQ6skFgYiOtZ1jbXFyFKvrq25qVJD/rU8QwvWpJMuAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8};var l=s(75600);let RoundBlock=({data:e,setData:i})=>{let[s,t]=(0,a.useState)(!1),n=e?.name?.toLowerCase().replaceAll(" ",""),c=n+"image",p=n+"para";return r.jsx("div",{onClick:r=>{let a=document.getElementById("BlockId");t(!s),i(e),s?(l.ZP.fromTo(`#${c}`,{x:164},{x:0}),l.ZP.fromTo(`#${p}`,{x:-50},{x:0})):(l.ZP.fromTo(`#${c}`,{x:0},{x:168}),l.ZP.fromTo(`#${p}`,{x:0},{x:-50})),setTimeout(()=>{a.scrollIntoView({behavior:"smooth",block:"center"})},300)},className:"rounded-full w-[92%] cursor-pointer h-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]",children:(0,r.jsxs)("div",{className:"bg-white rounded-full w-full h-full p-2 grid items-center",style:{gridTemplateColumns:"20% 80%"},children:[r.jsx(o(),{src:d,id:c,alt:"Image",className:`${s?"bg-gray-500":"bg-newBlue"} p-2 w-full h-fit rounded-full`}),r.jsx("p",{className:"text-sm text-darkGrey text-center",id:p,children:e?.name})]})})},page=()=>{let e=[{name:"Neurodevelopmental Disorders",para:"Neurodevelopmental disorders are a group of conditions that emerge during the developmental period. They typically appear early in a child's life, even before they start school, and are characterized by developmental deficits that impact personal, social, academic, or occupational functioning. These deficits can range from specific learning or executive function limitations to broader impairments in social skills or intelligence.",tiles:["Intellectual disability","Autism Spectrum Disorder","Attention-Deficit/Hyperactivity Disorder","Learning Disorders"],paraTiles:["Delayed developmental milestones"," Impaired social interaction","Communication difficulties","Repetitive behaviors or restricted interests:","Sensory sensitivities","Executive function deficits","Learning difficulties"],paraHeading:"Common symptoms of neurodevelopmental disorders may include:"},{name:"Schizophrenia spectrum Disorders",para:"Schizophrenia spectrum disorder is a complex and chronic mental health condition that affects a person’s thoughts, perceptions, emotions, and behavior. It is characterized by a range of symptoms and can vary in severity and presentation among individuals. Schizophrenia spectrum and other psychotic disorders encompass conditions such as schizophrenia, other psychotic disorders, and schizotypal personality disorder. These disorders are characterized by abnormalities in one or more of the following five domains:",paraTiles:["Delusions","Hallucinations","Disorganized thinking (speech)","Grossly disorganized or abnormal motor behavior","Negative symptoms"],tiles:["Delusion","Schizophrenia"]},{name:"Bipolar Disorder",para:"Bipolar disorders, are a group of mood disorders characterized by recurring episodes of manic and depressive states. Here are some key aspects of bipolar disorders:",paraTiles:["Bipolar I Disorder","Bipolar II Disorder","Cyclothymic Disorder","Manic Episodes","Depressive Episodes"],tiles:["Bipolar I","Bipolar II"]},{name:"Depressive Disorders",para:"Depressive disorder, also known as major depressive disorder (MDD), is a common mental health condition characterized by persistent feelings of sadness, loss of interest or pleasure in activities, and a range of other emotional and physical symptoms. Depressive disorder can manifest with varying severity levels, ranging from mild to severe, depending on the number and intensity of symptoms and the impact on daily functioning.",paraHeading:"Some of its major symptoms are-",paraTiles:["Depressed mood most of the day, nearly every day.","Diminished interest or pleasure in nearly all activities.","Significant weight loss or gain, or changes in appetite.","Insomnia or hypersomnia (excessive sleepiness) nearly every day.","Observable physical restlessness or slowed movements).","Fatigue or loss of energy.","Feelings of worthlessness or excessive guilt."],tiles:["Depression","Pre-menstrual Dysphoric Disorder"]},{name:"Anxiety Disorders",para:"Anxiety disorders are a group of mental health conditions characterized by excessive and persistent feelings of fear, worry, and anxiety that significantly impact daily functioning. Anxiety disorders share common symptoms that are characterized by excessive fear, worry, and anxiety. Some key symptoms associated with anxiety disorders:",paraTiles:["Excessive worry or anxiety","Restlessness or feeling on edge","Fatigue","Difficulty concentrating","Irritability","Muscle tension","Sleep disturbances","Exaggerated startle response","Avoidance behaviors"," Physical symptoms"],tiles:["Separation Anxiety Disorder","Selective Mutism","Social Anxiety Disorder","Panic Disorder","Agoraphobia","Generalized Anxiety Disorder"]},{name:"Obsessive Compulsive and Related Disorders",para:"Obsessive-Compulsive and Related Disorders, are a group of mental health conditions characterized by repetitive thoughts, urges, or behaviors that cause significant distress and interfere with daily functioning. Some common symptoms associated with Obsessive- Compulsive and Related Disorders:",paraTiles:["Obsessions:","Compulsions:","Preoccupation with Appearance:","Difficulty Discarding:","Hair-Pulling or Skin-Picking:","se symptoms can significantly impact a person's daily life and cause distress."],tiles:["Obsessive Compulsive Disorder","Body Dysmorphic Disorder","Hoarding Disorder"]},{name:"Trauma- and Stressor-Related Disorders",para:"Trauma- and Stressor-Related Disorders, encompass a group of mental health conditions that are triggered by exposure to traumatic or stressful events. These disorders are characterized by various psychological and behavioral symptoms. Some common symptoms associated with Trauma- and Stressor-Related Disorders:",paraTiles:["Re-experiencing the traumatic event","Avoidance and numbing","Negative alterations in mood and cognition","Hyperarousal and heightened reactivity","Disturbances in attachment and relationships"],tiles:["Post-traumatic Stress Disorder","Acute Stress Disorder","Adjustment Disorder","Reactive Attachment Disorder"]},{name:"Dissociative Disorder",para:"Dissociative Disorders, involve disruptions or alterations in consciousness, memory, identity, or perception. These disorders are characterized by a disconnection or detachment from one's thoughts, feelings, memories, or sense of self.",tiles:["Dissociative Identity Disorder","Dissociative Amnesia","Depersonalization/Derealization Disorder"]},{name:"Somatic Symptom and Related Disorders",para:"Somatic Symptom and Related Disorders, involve physical symptoms that are accompanied by excessive thoughts, feelings, or behaviors related to the symptoms. These disorders are characterized by a significant focus on bodily symptoms and their impact on daily life.",tiles:["Somatic Symptom Disorder","Illness Anxiety Disorder","Conversion Disorder","Factitious Disorder"]},{name:"Feeding and Eating Disorders",para:"Feeding and Eating Disorders, encompass a range of conditions characterized by abnormal eating behaviors and disturbances in one's relationship with food. Feeding and eating disorders are characterized by a persistent disturbance of eating or eating-related behavior that results in the altered consumption or absorption of food and that significantly impairs physical health or psychosocial functioning",tiles:["Avoidant/Restrictive Food Intake Disorder","Anorexia Nervosa","Bulimia Nervosa","Binge-Eating Disorder"]},{name:"Sleep-Wake Disorders",para:"Sleep-Wake Disorders, involve disturbances in sleep patterns that result in significant distress or impairment in daily functioning. r. Individuals with these disorders typically present with sleep-wake complaints of dissatisfaction regarding the quality, timing, and amount of sleep. Resulting daytime distress and impairment are core features shared by all of these sleep-wake disorders.",tiles:["Insomnia","Circadian Rhythm Sleep-Wake Disorders","Nightmare Disorder","Restless Legs Syndrome"]},{name:"Sexual Dysfunctions",para:"Sexual Dysfunctions, involve persistent difficulties in sexual desire, arousal, or response that cause significant distress or interpersonal difficulties. Sexual dysfunctions encompass a diverse range of disorders that are characterized by significant disruptions in an individual's sexual response or ability to experience sexual pleasure. It is possible for a person to experience multiple sexual dysfunctions concurrently. In such instances, all of the relevant dysfunctions should be diagnosed and addressed.",tiles:["Delayed Ejaculation","Erectile Disorder","Female Orgasmic Disorder","Penetration Disorder"]},{name:"Gender Dysphoria",para:"Gender Dysphoria, refers to the distress that arises from a discrepancy between an individual' assigned gender at birth and their gender identity",tiles:["Gender Dysphoria in Children","Gender Dysphoria in Adolescents"]},{name:"Disruptive, Impulse-Control and Conduct Disorders",para:"Disruptive, Impulse-Control, encompass a range of behavioral disorders characterized by problems with self-control and engaging in behaviors that violate the rights of others or societal norms. These disorders are expressed through behaviors that infringe upon the rights of others (e.g., aggression, property destruction) or lead to significant conflicts with societal norms and authority figures. The underlying causes of these self-control difficulties can vary widely across the disorders in this chapter and among individuals within a particular diagnostic category.",tiles:["Oppositional Defiant Disorder","Intermittent Explosive Disorder","Conduct Disorder","Antisocial Personality Disorder"]},{name:"Substance-Related and Addictive Disorders",para:"Substance-Related and Addictive Disorders, encompass a range of conditions involving the misuse or dependence on substances that have addictive properties.",tiles:["Alcohol Use and addiction Disorder","Alcohol Withdrawal","Caffeine-Related Disorders","Cannabis Use Disorder","Tobacco Use Disorder","Gambling Disorder"]},{name:"Personality Disorders",para:"A personality disorder is an enduring pattern of inner experience and behavior that deviates markedly from the expectations of the individual's culture, is pervasive and inflexible, has an onset in adolescence or early adulthood, is stable over time, and leads to distress or impairment. Personality Disorders, are characterized by enduring patterns of thoughts, emotions, and behaviors that deviate from cultural expectations and lead to significant distress or impairment in various areas of functioning.",tiles:["Paranoid Personality Disorder","Borderline Personality Disorder","Histrionic Personality Disorder","Narcissistic Personality Disorder","Avoidant Personality Disorder","Dependent Personality Disorder"]},{name:"Relational Problems",para:"Close relationships, particularly intimate adult partnerships and parent/caregiver-child relationships, play a crucial role in the well-being of individuals involved. These relationships can have a range of effects on health outcomes, varying from being beneficial and protective to having no significant impact or even being harmful. In severe cases, these close relationships may involve maltreatment or neglect, resulting in significant medical and psychological consequences for the affected individual. A relational problem may come to the attention of healthcare professionals either as the primary reason for seeking healthcare or as a factor that influences the course, prognosis, or treatment of the individual's mental or other medical condition.",tiles:["Parent-Child Relational Problem","Sibling Relational Problem","Child Affected by Parental Relationship Distress","Relationship Distress With Spouse or Intimate","Partner","Disruption of Family by Separation or Divorce","Child Maltreatment and Neglect Problems"]},{name:"Problems Related to the Social Environment",para:'This category is used to address difficulties in adapting to life-cycle transitions, which may be the primary focus of clinical attention or have an impact on the individual\'s treatment or prognosis. Examples of such transitions include entering or completing school, leaving parental control, getting married, starting a new career, becoming a parent, adjusting to an "empty nest" after children leave home, and retiring.',tiles:["Phase of Life Problem","Social Exclusion or Rejection","Target of (Perceived) Adverse Discrimination or Persecution"]}],[i,s]=(0,a.useState)(e[0]);return(0,r.jsxs)("div",{children:[r.jsx(o(),{src:n,alt:"Area expertise",className:"w-8/12 mx-auto"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"grid grid-cols-6 gap-y-4 py-[6vw]",children:e.map((e,i)=>r.jsx(RoundBlock,{data:e,setData:s},i))}),r.jsx("div",{id:"BlockId",className:"rounded-lg w-6/12 h-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]",children:(0,r.jsxs)("div",{className:"bg-white rounded-lg w-full h-full px-6 py-5",children:[r.jsx("p",{className:"text-center text-websiteBlue text-2xl font-extrabold",children:i?.name}),r.jsx("p",{className:"mt-4 text-darkGrey text-sm",children:i?.para}),(0,r.jsxs)("div",{className:"text-darkGrey text-sm mt-4",children:[r.jsx("p",{children:i?.paraHeading}),(0,r.jsxs)("div",{children:[i?.paraTiles?.map((e,i)=>r.jsxs("div",{children:[i+1,". ",e]},e)),r.jsx("div",{className:"grid grid-cols-2 gap-y-4 mt-6",children:i?.tiles?.map((e,i)=>r.jsx("div",{className:"rounded-full w-11/12 h-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px]",children:r.jsx("div",{className:"bg-white rounded-full w-full h-full flex justify-center items-center py-2",children:e})},i))})]})]})]})})]})]})}},9841:(e,i,s)=>{"use strict";s.r(i),s.d(i,{$$typeof:()=>o,__esModule:()=>t,default:()=>d});var r=s(17536);let a=(0,r.createProxy)(String.raw`D:\Work\consciousleap\ConsciousLeap\app\(main)\expertise-area\page.tsx`),{__esModule:t,$$typeof:o}=a,n=a.default,d=n}};var i=require("../../../webpack-runtime.js");i.C(e);var __webpack_exec__=e=>i(i.s=e),s=i.X(0,[6357,5077,2279,5600,4217,7120],()=>__webpack_exec__(34967));module.exports=s})();