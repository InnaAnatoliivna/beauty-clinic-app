"use strict";(self.webpackChunkbeauty_clinic_app=self.webpackChunkbeauty_clinic_app||[]).push([[885],{9198:(e,a,t)=>{t.d(a,{o6:()=>p,wn:()=>o,hE:()=>s,mO:()=>r});var i=t(1758);const n=t.p+"static/media/276230497_149097284242841_4479337240596802514_n.7ee92f986bbe2ebeb440.jpg",o=i.A.div`
    background-image: url(${n});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 0%;
    position: relative;
`,r=i.A.div`
    padding-top: 40px;
    @media (min-width: 768px) {
        padding-top: 30px;
    }
`,s=i.A.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: var(--color-main-text);
    text-shadow: var(--shadow-text-title);

    margin-bottom: 18px;

    @media (min-width: 768px) {
        font-size: 26px;
        margin-bottom: 30px;
    }
`,p=i.A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media (min-width: 768px) {
    margin-top: 30px;
    }
`},2621:(e,a,t)=>{t.d(a,{A:()=>p});t(5043);var i=t(1758);const n=i.A.div`
    height: 150px;
    width: calc((100% - 28px) / 2);
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 12px;
    position: relative;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 0%;

    @media screen and (min-width: 768px) {
        height: 210px;
        width: calc((100% - 64px) / 3);

    }

    @media screen and (min-width: 1440px) {
        height: 360px;
    }
`,o=i.A.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px;

    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) );
    border-radius: 12px;
    transition: box-shadow linear 500ms;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    &:hover a {
        transform: scale(1.1);
    }

    a {
        transform: scale(1);

        display: flex;
        align-items: center;    
        justify-content: center;
        width: 100%;           
        height: 100%;

        color: var(--bc-header);
        font-size: 14px;
        text-align: center;

        transition: var(--transition-list-second, color linear 500ms);


        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
        @media screen and (min-width: 1440px) {
        font-size: 24px;
        }

        &:hover {
            transform: scale(1.1);
            color: #fff;
        }
    }
`;var r=t(5475),s=t(579);const p=e=>{let{array:a}=e;return(0,s.jsx)(s.Fragment,{children:a.map(((e,a)=>(0,s.jsx)(n,{className:e.className,style:{backgroundImage:`url(${e.photo})`},children:(0,s.jsx)(o,{children:(0,s.jsx)(r.N_,{to:e.link,children:e.name})})},a)))})}},7459:(e,a,t)=>{t.d(a,{A:()=>o});t(5043);const i=t(1758).A.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 32px;
    column-gap: 14px;
    row-gap: 14px;

    @media screen and (min-width: 768px) {
        justify-content: center;
        column-gap: 24px;
        row-gap: 24px;
    }

    @media screen and (min-width: 1440px) {
        column-gap: 32px;
        row-gap: 32px;
    }
`;var n=t(579);const o=e=>{let{children:a}=e;return(0,n.jsx)(i,{children:a})}},370:(e,a,t)=>{t.r(a),t.d(a,{default:()=>W});var i=t(5043),n=t(8387),o=t(2372),r=t(8610),s=t(7598),p=t(3030);var d=t(3900);function c(e){let{props:a,name:t,defaultTheme:i,themeId:n}=e,o=(0,d.A)(i);return n&&(o=o[n]||o),function(e){const{theme:a,name:t,props:i}=e;return a&&a.components&&a.components[t]&&a.components[t].defaultProps?(0,p.A)(a.components[t].defaultProps,i):i}({theme:o,name:t,props:a})}const l=(0,t(3860).Ay)();var m=t(2390),x=t(579);const g=(0,m.A)(),h=l("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[`maxWidth${(0,s.A)(String(t.maxWidth))}`],t.fixed&&a.fixed,t.disableGutters&&a.disableGutters]}}),u=e=>c({props:e,name:"MuiContainer",defaultTheme:g});var b=t(6803),w=t(4535),f=t(5170),y=t(3375);const z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:a=h,useThemeProps:t=u,componentName:p="MuiContainer"}=e,d=a((e=>{let{theme:a,ownerState:t}=e;return{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}}}}),(e=>{let{theme:a,ownerState:t}=e;return t.fixed&&Object.keys(a.breakpoints.values).reduce(((e,t)=>{const i=t,n=a.breakpoints.values[i];return 0!==n&&(e[a.breakpoints.up(i)]={maxWidth:`${n}${a.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:a,ownerState:t}=e;return{..."xs"===t.maxWidth&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[a.breakpoints.up(t.maxWidth)]:{maxWidth:`${a.breakpoints.values[t.maxWidth]}${a.breakpoints.unit}`}}}})),c=i.forwardRef((function(e,a){const i=t(e),{className:c,component:l="div",disableGutters:m=!1,fixed:g=!1,maxWidth:h="lg",classes:u,...b}=i,w={...i,component:l,disableGutters:m,fixed:g,maxWidth:h},f=((e,a)=>{const{classes:t,fixed:i,disableGutters:n,maxWidth:p}=e,d={root:["root",p&&`maxWidth${(0,s.A)(String(p))}`,i&&"fixed",n&&"disableGutters"]};return(0,r.A)(d,(e=>(0,o.Ay)(a,e)),t)})(w,p);return(0,x.jsx)(d,{as:l,ownerState:w,className:(0,n.A)(f.root,c),ref:a,...b})}));return c}({createStyledComponent:(0,w.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[`maxWidth${(0,b.A)(String(t.maxWidth))}`],t.fixed&&a.fixed,t.disableGutters&&a.disableGutters]}}),useThemeProps:e=>function(e){let{props:a,name:t}=e;return c({props:a,name:t,defaultTheme:f.A,themeId:y.A})}({props:e,name:"MuiContainer"})});var k=t(2722),v=t(4891),j=t(2621),A=t(7459),C=t(9198);const W=()=>{const e=[...k.H,...k._],[a,t]=(0,i.useState)(e);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(v.wn,{children:[(0,x.jsxs)(z,{children:[(0,x.jsx)("div",{id:"back-to-top-anchor"}),(0,x.jsx)(C.hE,{children:"Nasze zabiegi"}),(0,x.jsx)(v.eJ,{children:["Twarz","Cia\u0142o","Medycyna estetyczna","Konsultacje kosmetologiczne","Wszystkie"].map(((a,i)=>(0,x.jsx)(v.vZ,{onClick:()=>(a=>{switch(a){case"Twarz":t(e.filter((e=>"Twarz"===e.type)));break;case"Cia\u0142o":t(e.filter((e=>"Cia\u0142o"===e.type)));break;case"Medycyna estetyczna":t(e.filter((e=>"Medycyna estetyczna"===e.type)));break;case"Konsultacje kosmetologiczne":t(e.filter((e=>"Konsultacje kosmetologiczne"===e.type)));break;default:t(e)}})(a),children:a},i)))})]}),(0,x.jsx)(v.mO,{children:(0,x.jsx)(z,{children:(0,x.jsx)(A.A,{children:(0,x.jsx)(j.A,{array:a})})})})]})})}},4891:(e,a,t)=>{t.d(a,{eJ:()=>s,mO:()=>r,vZ:()=>p,wn:()=>o});var i=t(1758),n=t(2467);const o=i.A.div`
  padding-top: 30px;
  @media (min-width: 768px) {
  padding-top: 60px;
  }
`,r=i.A.div`
  padding: 15px 0 30px 0;
  background: rgb(238,238,238);background: linear-gradient(90deg, rgba(238,238,238,0.9781162464985994) 0%, rgba(238,238,238,0.8884803921568627) 24%, rgba(233,232,230,1) 45%, rgba(214,207,199,1) 100%);
  @media (min-width: 768px) {
  padding: 30px 0 60px 0;
  }
`,s=i.A.ul`
  list-style: none;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: center;
  gap: 12px;
  @media (max-width: 767px) {
    background-image: url(${n});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100% 0%;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: center;
    gap: 30px;
    padding-bottom: 30px;
  }
`,p=i.A.li`
  cursor: pointer;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  text-align: center;
  padding: 8px 10px;
  background-color: var(--bc-header);
  border: 1.5px solid var(--color-main-text);
  border-radius: var(--card-border-radius);
  box-shadow: var(--shadow-cards), var(--shadow-card-inset);
  color: var(--color-main-text);

  transition: var(--transition-list);
  transition: color linear 500ms;

  &:hover,
  :visited,
  :focus {
    color: var(--color-test);
    border-color: var(--color-test);
  }
  @media (min-width: 768px) {
    height: 64px;
    font-size: 16px;
    padding: 12px 24px;
  }
  @media (min-width: 1440px) {
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`},2722:(e,a,t)=>{t.d(a,{H:()=>x,_:()=>g});const i=t.p+"static/media/Endermolif.c8777522525249d820f3.jpg",n=t.p+"static/media/Epilacja.d5e2b36ce0cca90c253b.jpg",o=t.p+"static/media/Fala-udzerzeniowa-Storz.f826c396aaf82b3bee34.jpg";var r=t(9272);const s=t.p+"static/media/Mezoterapia-mikroig\u0142owa.c3500d39dfe790470847.jpg",p=t.p+"static/media/Mezoterapia-ig\u0142owa.27d34150e9c500832330.jpg",d=t.p+"static/media/ig\u0142owa1.da215790c006963b1910.jpg",c=t.p+"static/media/Masa\u017c-21.cc6e4549189e22547864.jpg",l=t.p+"static/media/DSC013912.bdf5887f4f236943f527.jpg",m=t.p+"static/media/consult.11430f73a23979a3cef2.jpg",x=[{name:"Endermologia LPG",photo:i,link:"/zabiegi/endermologia-lpg",type:"Cia\u0142o"},{name:"Epilacja laserowa",photo:n,link:"/zabiegi/epilacja-laserowa",type:"Cia\u0142o"},{name:"Mezoterapia mikroig\u0142owa Nanofrax",photo:s,link:"/zabiegi/mezoterapia-mikroig\u0142owa",type:"Medycyna estetyczna"},{name:"Mezoterapia ig\u0142owa",photo:p,link:"/zabiegi/mezoterapia-ig\u0142owa",type:"Medycyna estetyczna"},{name:"Oczyszczanie wodorowe + mask\u0105 PCA",photo:r,link:"/zabiegi/oczyszczanie-wodorowe",type:"Twarz"},{name:"STORZ Fala uderzeniowa",photo:o,link:"/zabiegi/storz-fala-uderzeniowa",type:"Cia\u0142o"}],g=[{name:"Stymulatory tkankowe",photo:d,link:"/zabiegi/stymulatory-tkankowe",type:"Medycyna estetyczna"},{name:"Podstawowa piel\u0119gnacja twarzy + masa\u017c",photo:c,link:"/zabiegi/podstawowa-piel\u0119gnacja-twarzy",type:"Twarz"},{name:"Konsultacja przedzabiegowa",photo:m,link:"/zabiegi/konsultacja-przedzabiegowa",type:"Konsultacje kosmetologiczne"},{name:"Beauty plan",photo:l,link:"/zabiegi/beauty-plan",type:"Konsultacje kosmetologiczne"}]},2467:(e,a,t)=>{e.exports=t.p+"static/media/b-c-img.74d050ad32d450a92186.jpg"},9272:(e,a,t)=>{e.exports=t.p+"static/media/Wodorowe.c9798f9ae13ffe7b740b.jpg"}}]);
//# sourceMappingURL=885.a030a981.chunk.js.map