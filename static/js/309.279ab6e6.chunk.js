"use strict";(self.webpackChunkbeauty_clinic_app=self.webpackChunkbeauty_clinic_app||[]).push([[309],{5193:(o,i,e)=>{e.d(i,{l:()=>t,r:()=>A});var n=e(3290);const t=n.i7`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`,A=n.i7`
    0% {
        transform: rotateX(90deg); 
        opacity: 0; 
    }
    100% {
        transform: rotateX(0); 
        opacity: 1;
    }
`},2242:(o,i,e)=>{e.d(i,{A:()=>n});const n=e(1758).A.div`
  width: 100%;
  min-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`},510:(o,i,e)=>{e.d(i,{A:()=>t});e(5043);var n=e(579);const t=o=>{let{children:i}=o;const e=`https://www.google.com/maps?q=${encodeURIComponent("76-200 S\u0142upsk, Mickiewicza 59/1")}`;return(0,n.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:i})}},2027:(o,i,e)=>{e.d(i,{A:()=>d});e(5043);var n=e(1462),t=e(184);const A=e.p+"static/media/BooksyIcon.b7f812d889192d19fc52.png";var r=e(579);const a=[{name:"Instagram",link:"https://www.instagram.com/epilacja.slupsk/",icon:(0,r.jsx)(n.CRZ,{})},{name:"Facebook",link:"https://www.facebook.com/epilacja.slupsk/",icon:(0,r.jsx)(t.D2F,{})},{name:"Booksy",link:"https://booksy.com/pl-pl/119440_epilacja-slupsk_depilacja_20103_slupsk",icon:(0,r.jsx)("img",{src:A,alt:"Booksy Icon",width:120})}],d=()=>(0,r.jsx)(r.Fragment,{children:a.map(((o,i)=>{let{name:e,link:n,icon:t}=o;return(0,r.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":e,children:t},i)}))})},8999:(o,i,e)=>{e.r(i),e.d(i,{default:()=>Y});var n=e(5043),t=e(3216),A=e(2242),r=e(1758),a=e(5051),d=e(5475);const x=r.A.div`
    width: 100vw;
    background-color: ${o=>{let{isSticky:i}=o;return i?"#efefef9a":"var(--bc-header)"}};
    border-bottom: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    /* --for sticky-->>> */
    z-index: 1000;
    transition: background-color linear 0.3s, box-shadow linear 0.3s;
    position: ${o=>{let{isSticky:i}=o;return i?"fixed":"relative"}};
`,s=r.A.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,l=r.A.ul`
    width: 100%;
    max-width: 740px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 768px) {
        gap:18px;
    }
`,p=r.A.button`
    background-color: transparent;
`,c=(0,r.A)(a.Xeb)`
    font-size: 50px;
    fill: var(--color-main-text);
`,K=(0,r.A)(d.N_)`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 10px 27px;
    color: var(--color-black);
    border: 1px solid var(--color-main-text);
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    border-radius: 12px;

    &.active {
        color: orange;
    }
    &:hover, :focus {
        border: 1px solid var(--color-black);
    }
    a {
        color: var(--color-main-text);
    }
`;var f=e(9657),g=e(7980),h=e(5193);const b=r.A.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;

  animation: ${h.l} 0.5s ease-in-out;
`,v=r.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
`,w=r.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 70px 0 40px 0; 

  position: relative;
  svg {
    font-size: 30px;
    color: var(--color-black);
  }
`,m=r.A.p`
position: absolute;
top: -48px;

font-size: 15px;
color: var(--color-main-text);

&::after {
        content: '';
        display: block;
        width: 220px;
        height: 1.5px;
        background-color: var(--color-main-text);
        box-shadow: var(--shadow-cards-second);
        border-radius: var(--card-border-radius);

        position: absolute;
        top: 30px;
        right: -72px;
    };
`,j=r.A.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  height: 100vh;
  width: 100%;
  padding: 20px 20px;
  background-color: var(--bc-header);
  z-index: 2;
  overflow: auto;

  div {
    display: flex;
    width: 100%;
    svg {
      stroke: rgba(239, 237, 232, 1);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 26px 32px 32px 32px;
  }

  @media screen and (max-width: 1439px) {
    &.shown {
      right: 0;
    }

    &.hidden {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
    }

    transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,R=r.A.button`
  position: absolute;
  top: 26px;
  right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  p {
    color:  var(--color-black);
  }
`,F=r.A.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  li {
    padding: 10px 27px;
  }
`,U=((0,r.A)(d.k2)`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px 27px;
  color: var(--color-black);
  border: 1px solid var(--color-main-text);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  border-radius: 12px;

  &:hover,
  :focus {
    border: 1px solid var(--color-black);
  }
`,(0,r.A)(g.EIA)`
  font-size: 38px;
  fill: var(--color-main-text);
`);var u=e(579);const P=()=>(0,u.jsx)(d.N_,{to:"/",children:(0,u.jsx)("img",{src:"data:image/jpeg;base64,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ACiiigAooooAKKKKACg8jGM/WiigBeTnBOc5z/WuX1nQrnT76517QUV7qYK97pzBEjvgOAyvwqTqgCBsjPGa6elUkNkZz3x3oAoaNrlp4isftVk5McbMjrLuWaGUffilib5ldavYwMnj3PArn9a8LyzXw1fSLiPTdbEaxtcY3RXUQ+7FOv8AGvZZB60aD4sh1C8XTL6BtI1tU4sZ8kzJ/egf7ssfWgDoPxrndQj8r4haJxy+m30Z/wCAvA1dFnaeeSO3euauGNz8RNNj6i00q6mf/Y3y28SfpHN/OgDX1TSbLXLF7C9tEvrZvvpJwvor/wCy3+2uXXr71if2H4i0VRHp2rw6raKMLb69u836/aE+Z/8Agf49K6nP+0PXkg0vPGP8aAOYmuPGF1FJEmmaNpkn8F3LfPdqn+0qKi9P8msmTSFujD4OtnnksLcedrl5L/rJt77vKZ1H35/vyYxsQV1XiLW18N6HcXxge58tESC3H35pmfaiJ6bqg8K6G3h/R0guZo7i+mdp7y4Ax59w2d7n/Y/5ZrQBs+UkfAQfh/8AW7f5+h9KPT2ooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAo/SiigA49MCqOtaDZ+ILP7NqFut0kbq6fwOj/34nX5lar1IVBz0PbpQBych1/whbu7N/wAJFpMSGSRZSkN9bRqBlmZiqXCj/b8t+lZ/w68U6d4k1DUdUNyYtT1SRXh0u8i+z3UFqi7IUdGCvlt/mfjWl4iz4r1hPDsa+ZYQpFPq3H8P30tPcyfxZ/grf1TSLDxDbi11HTrW/tv+ed5bo+z/AHd33f8AP0oAv+W/Xp36n/GoLmWOxt3muZBFAieY882FRE773b7lc9H8O9ItzttZNUsIyfuWesXCJ/3xv/rTo/h/oQuEnubabUpY2/dyapdyXZjf++kcjstAFPTW/wCEz1631dVaPQLHMmntMoT7ZcMgT7Uq90VH2R/U11/pnr70f5z/AJ/z0ooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAo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",alt:"\u017bELAZNOWSKA - beauty clinic",width:"300",loading:"lazy"})});var k=e(2027);const X=o=>{let{showMenu:i,children:e}=o;(0,n.useEffect)((()=>(window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}))),(0,n.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""})),[]);const t=o=>{"Escape"===o.code&&i()};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(b,{onClick:o=>(o=>{o.target===o.currentTarget&&i()})(o),children:(0,u.jsxs)(j,{children:[(0,u.jsxs)(v,{children:[(0,u.jsx)(P,{onClick:t}),(0,u.jsx)(R,{onClick:i,children:(0,u.jsx)(U,{})}),(0,u.jsx)("nav",{children:(0,u.jsx)(F,{children:e})})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(m,{children:"UM\xd3W SI\u0118"}),(0,u.jsx)(k.A,{})]})]})})})},y=(0,r.A)(d.k2)`
    &.desktop {
        height: 100%;
        padding: 47px 0; 
        color: var(--color-main-text);
        font-size: 16px;
        line-height: normal;
        transition: border-bottom linear 100ms;

        &.active {
            color: var(--color-test);
        }
        &:hover {
            border-bottom: 3px solid var(--color-main-text);
        }
        @media screen and (max-width: 1439px) {
            padding: 29px 0;
        }
    }

    &.mobile {
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        padding: 10px 27px;
        color: var(--color-black);
        border: 1px solid var(--color-main-text);
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
        border-radius: 12px;

        &.active {
            color: orange;
        }
        &:hover, :focus {
            border: 1px solid var(--color-black);
        }
    }
`,D=r.A.li`
    /* height: 100%; */
`,C=JSON.parse('[{"name":"ZABIEGI","link":"/zabiegi"},{"name":"O NAS","link":"/o-nas"},{"name":"CENNIK","link":"/cennik"},{"name":"PYTANIA I ODPOWIEDZI","link":"/pytania-i-odpowiedzi"},{"name":"KONTAKT","link":"/kontakt"}]'),B=o=>{let{isMobile:i,onLinkClick:e,children:n}=o;return(0,u.jsxs)(u.Fragment,{children:["  ",i&&n,C.map(((o,n)=>(0,u.jsx)(D,{children:(0,u.jsx)(y,{to:o.link,className:i?"mobile":"desktop",onClick:e,children:o.name})},n)))]})},z=()=>{const[o,i]=(0,n.useState)(!1),[e,t]=(0,n.useState)(!1),r=(0,f.Ub)({query:"(min-width: 768px)"}),a=(0,f.Ub)({query:"(max-width: 767px)"}),d=()=>i(!o),g=()=>{window.scrollY>0?t(!0):t(!1)};return(0,n.useEffect)((()=>r?(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}):void 0),[r]),(0,u.jsx)(x,{isSticky:e,children:(0,u.jsx)(A.A,{children:(0,u.jsxs)(s,{children:[(0,u.jsx)(P,{onClick:d}),a&&(0,u.jsx)(p,{type:"button",onClick:d,children:(0,u.jsx)(c,{})}),r&&(0,u.jsx)(l,{children:(0,u.jsx)(B,{isMobile:!1})}),o&&(0,u.jsx)(X,{showMenu:d,children:(0,u.jsx)(B,{isMobile:!0,onLinkClick:d,children:(0,u.jsx)(D,{onClick:d,children:(0,u.jsx)(K,{to:"/",children:"G\u0142\xd3WNA"})})})})]})})})},H=r.A.div`
    position: relative;
    padding: 20px 0 20px 0;
    background-color: var(--bc-header);
    border-top: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 6px 1px rgba(46, 47, 66, 0.08);

    @media screen and (min-width: 768px) {
        padding: 30px 0;
    }
`,S=r.A.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: none; 

    @media(min-width: 400px)  {
        height: 170px;
    }
    @media screen and (min-width: 768px) {
        justify-content: space-between
    }
`,E=r.A.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    overflow-y: none; 

    svg {
        font-size: 20px;
        color: var(--color-black);
        @media screen and (min-width: 768px) {
            font-size: 34px;
        }
    }
`,N=r.A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 768px) {
        gap: 24px;
    }
`,Q=r.A.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 5px;
    z-index: 100;

    position: absolute;
    right: 0px;
    top: 30px;

    @media screen and (min-width: 768px) {
        position: static;
        gap: 12px;
        align-items: flex-start;
    }

    a {
        font-size: 8px;
        color: var(--color-main-text);
        @media screen and (min-width: 768px) {
            font-size: 10px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 14px;
        }
    }
`,O=r.A.p`
    position: relative;
    margin-top: 28px;
    font-size: 9px;
    text-align: end;
    color: var(--color-main-text);
    a {
        font-weight: 500;
        color: var(--color-main-text);
    }
    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    
`;var T=e(510),W=e(7022);const L=()=>(0,u.jsx)(H,{children:(0,u.jsx)(A.A,{children:(0,u.jsxs)(S,{children:[(0,u.jsxs)(E,{children:[(0,u.jsxs)(Q,{children:[(0,u.jsx)("a",{href:`tel:${W.os}`,children:W.$C}),(0,u.jsx)("a",{href:`mailto:${W.Rp}`,children:W.Rp}),(0,u.jsx)(T.A,{children:W.hl})]}),(0,u.jsx)(P,{}),(0,u.jsx)(N,{children:(0,u.jsx)(k.A,{})})]}),(0,u.jsxs)(O,{children:[(0,u.jsx)("span",{style:{marginRight:"5px"},children:"Copyright \xa9 2024"}),(0,u.jsxs)("span",{children:["Developed by",(0,u.jsx)("a",{href:"https://www.linkedin.com/in/inna-zadorozhnia-07384827a/",target:"_blank",rel:"noopener noreferrer",children:" Inna Zadorozhnia"})]})]})]})})});var Z=e(9150),I=e(4516),q=e(4010),J=e(5037),G=e(4995);function M(o){const{children:i,window:e}=o,n=(0,Z.A)({target:e?e():void 0,disableHysteresis:!0,threshold:100});return(0,u.jsx)(G.A,{in:n,children:(0,u.jsx)(I.A,{onClick:o=>{const i=(o.target.ownerDocument||document).querySelector("#back-to-top-anchor");i&&i.scrollIntoView({block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:i})})}function V(o){return(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(M,{...o,children:(0,u.jsx)(q.A,{style:{zIndex:9999},size:"medium","aria-label":"scroll back to top",children:(0,u.jsx)(J.A,{})})})})}const Y=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(z,{}),(0,u.jsx)(n.Suspense,{fallback:null,children:(0,u.jsx)(t.sv,{})}),(0,u.jsx)(V,{}),(0,u.jsx)(L,{})]})},7022:o=>{o.exports=JSON.parse('{"os":"+48607135955","$C":"607-135-955","Rp":"EPILACJASLUPSK@GMAIL.COM","hl":"76-200 S\u0141UPSK, MICKIEWICZA 59/1"}')}}]);
//# sourceMappingURL=309.279ab6e6.chunk.js.map