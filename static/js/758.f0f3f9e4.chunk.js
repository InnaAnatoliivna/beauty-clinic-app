"use strict";(self.webpackChunkbeauty_clinic_app=self.webpackChunkbeauty_clinic_app||[]).push([[758],{5193:(e,i,n)=>{n.d(i,{l:()=>o,r:()=>r});var a=n(3290);const o=a.i7`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`,r=a.i7`
    0% {
        transform: rotateX(90deg); 
        opacity: 0; 
    }
    100% {
        transform: rotateX(0); 
        opacity: 1;
    }
`},4856:(e,i,n)=>{n.d(i,{A:()=>r});n(5043);var a=n(203),o=n(579);const r=e=>{let{children:i,onClick:n,small:r,className:t}=e;return(0,o.jsx)(a.O,{onClick:n,small:r,type:"button",className:t,children:i})}},203:(e,i,n)=>{n.d(i,{O:()=>o,e:()=>r});var a=n(1758);const o=a.A.button`
    background-color: var(--bc-hero);
    color: var(--color-main-text);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    font-weight: 500;
    letter-spacing: 0em;
    font-size: ${e=>e.small?"14px":"16px"};
    line-height: 18px;
    padding: ${e=>e.small?"10px 24px":"12px 40px"} ;
    overflow: hidden;
    white-space: nowrap;

    transition: color linear 500ms, border-color linear 500ms;

    @media (min-width: 768px) {
        color: var(--bc-hero);
        border-color: var(--bc-hero);
        background-color: var(--color-brown);

        transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;

        &:hover {
            color: var(--color-brown);
            border-color: var(--color-brown);
            background-color: var(--bc-hero);
        }

    @media screen and (min-width: 1440px) {
        font-size: ${e=>e.small?"14px":"18px"};
    }
    }
`,r=a.A.button`
    width: 100%;
    padding: 4px 2px;
    font-weight: 500;
    color: var(--color-brown);
    font-size: 9px;

    letter-spacing: 0em;
    overflow: hidden;
    background-color: #d6cfc781;
    border: 1px solid var(--color-brown);
    border-radius: 4px;
    
    display: flex;
    align-items: center;

    position: absolute;
    z-index: 100;

    transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;
    &:hover {
            color: var(--color-brown);
            border-color: var(--color-brown);
            background-color: var(--bc-hero);
        }

    @media screen and (min-width: 768px) {
        font-size: 12px;
        text-transform: uppercase; 
        padding: 10px 20px;
        gap: 10px;
        border: 1.5px solid var(--color-brown);
    }
    @media screen and (min-width: 1440px) {
        font-size: 14px;
    }

    svg {
        font-size: 28px;
        color: #c3580b;
    @media screen and (min-width: 768px) {
        font-size: 22px;
    }
    }

`},2242:(e,i,n)=>{n.d(i,{A:()=>a});const a=n(1758).A.div`
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
`},8057:(e,i,n)=>{n.d(i,{A:()=>v});var a=n(5043),o=n(7950),r=n(1758);const t=r.A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow-y: auto;
`;var s=n(579);const d=e=>{let{closeModal:i,children:n}=e;const r=(0,a.useRef)(document.querySelector("#modal-root"));return(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.code&&i&&i()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[i]),(0,a.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""})),[]),(0,o.createPortal)((0,s.jsx)(t,{onClick:e=>{e.target===e.currentTarget&&i&&i()},children:n}),r.current)};var c=n(7980),l=n(5193);const p=r.A.div`
    max-width: 100%;
    width: 280px;
    max-height: 500px;
    z-index: 200;
    position: absolute;
    top: 160px;
    border-radius: 12px;
    border: 1px solid var(--color-brown);
    background-color: var(--bc-header);
    color: var(--color-main-text);
    padding: 30px 18px;

    animation: ${l.r} 0.5s ease-in-out;


    @media screen and (min-width: 400px) {
        width: 350px;
    }
    @media screen and (min-width: 768px) {
        max-height: 600px;
        width: 500px;
        padding: 30px;
        top: 110px;
    }
    @media screen and (min-width: 1440px) {
        max-height: 700px;
        width: 500px;
        top: 180px;
        padding: 40px 30px;
    }
`,m=r.A.button`
    position: absolute;
    top: 16px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        top: 26px;
        right: 32px;
    }
    p {
        color:  var(--color-black);
    }
`,x=(0,r.A)(c.EIA)`
    margin-left: auto;
    font-size: 20px;
    fill: var(--color-main-text);
`,u=r.A.h2`
    text-align: center;
    transform: uppercase;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`,h=r.A.h3`
    text-align: center;
    margin: 12px 0;
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 768px) {
        font-size: 18px;
        margin: 15px 0;
    }
    @media screen and (min-width: 1440px) {
        margin: 20px 0;
    }
    p {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 8px;
        svg {
            font-size: 18px;
            @media screen and (min-width: 768px) {
                font-size: 25px;
            }
        }
    }
    a {
        color: var(--color-black);
        transition: transform 0.5s ease;
        transform: scale(1);
        &:hover, &:focus {
            transform: scale(1.1); 
        }
    }
`,w=r.A.div`
`,g=r.A.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    @media screen and (min-width: 768px) {
        gap: 30px;
    }
    a {
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        transition: transform 0.3s ease; 
    }
    svg {
        font-size: 40px;
        color: var(--color-black);
        transition: transform 0.5s ease; 
    }
    a:hover svg, a:focus svg {
        transform: scale(1.1); 
    }
    a:hover img, a:focus img {
        transform: scale(1.1); 
    }
`;var j=n(2027),z=n(6720),b=n(3156),f=n(7022);const v=e=>{let{toggleShowMenu:i}=e;const[n,r]=(0,a.useState)(!1);return(0,o.createPortal)((0,s.jsx)(d,{closeModal:i,children:(0,s.jsxs)(p,{children:[(0,s.jsx)(m,{onClick:()=>{r(!n),i()},children:(0,s.jsx)(x,{})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{style:{textTransform:"uppercase"},children:"Um\xf3w si\u0119 na wizyt\u0119"}),(0,s.jsx)(h,{children:"Skontaktuj si\u0119 z nami, aby um\xf3wi\u0107 wizyt\u0119:"}),(0,s.jsxs)(w,{children:[(0,s.jsxs)(h,{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(z.PBl,{}),"Zadzwo\u0144 do nas:"]}),(0,s.jsx)("a",{href:`tel:${f.os}`,children:f.$C})]}),(0,s.jsxs)(h,{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(z._zH,{}),"Wy\u015blij e-mail:"]})," ",(0,s.jsx)("a",{href:`mailto:${f.Rp}`,children:f.Rp})]}),(0,s.jsx)(h,{children:(0,s.jsxs)("p",{children:[(0,s.jsx)(b.AnD,{}),"Znajd\u017a nas na:"]})}),(0,s.jsx)(g,{children:(0,s.jsx)(j.A,{})}),(0,s.jsx)(h,{style:{marginBottom:"0"},children:"Zapraszamy do kontaktu!"})]})]})]})}),document.querySelector("#modal-root"))}},2027:(e,i,n)=>{n.d(i,{A:()=>d});n(5043);var a=n(1462),o=n(184);const r=n.p+"static/media/BooksyIcon.b7f812d889192d19fc52.png";var t=n(579);const s=[{name:"Instagram",link:"https://www.instagram.com/epilacja.slupsk/",icon:(0,t.jsx)(a.CRZ,{})},{name:"Facebook",link:"https://www.facebook.com/epilacja.slupsk/",icon:(0,t.jsx)(o.D2F,{})},{name:"Booksy",link:"https://booksy.com/pl-pl/119440_epilacja-slupsk_depilacja_20103_slupsk",icon:(0,t.jsx)("img",{src:r,alt:"Booksy Icon",width:120})}],d=()=>(0,t.jsx)(t.Fragment,{children:s.map(((e,i)=>{let{name:n,link:a,icon:o}=e;return(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":n,children:o},i)}))})},9252:(e,i,n)=>{n.r(i),n.d(i,{default:()=>j});var a=n(5043),o=n(2242),r=n(1758);const t=r.A.div`
    padding-top: 30px;
    padding-bottom: 30px;
    @media screen and (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`,s=r.A.div`
    h2 {
        color: var(--color-dark);
        font-size: 16px;
        background-color: var(--bc-hero);
        @media screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
`,d=r.A.table`
    width: 100%;
    border-collapse: collapse;
    position: relative;
    margin-bottom: 44px;

    th, td {
        color: var(--color-brown);
        border-bottom: 1px solid #e0e0e0; 
        padding: 5px; 
        text-align: left;
        font-size: 12px;
        line-height: 1.4;
        text-align: center;
        @media screen and (min-width: 768px) {
            font-size: 16px;
            padding: 8px; 
        }
    }

    th:first-of-type {
        text-align: left;
    }
    td:first-of-type {
        width: 600px;
        text-align: left;
    }
    td:not(:first-of-type) {
        width: 60px;
    }

    .discount {
        color: var(--color-red);
    }
`,c=r.A.span`
    position: absolute;
    bottom: -42px;
    right: 0;
`,l=r.A.span`
        display: flex;
        align-items: center; 
        gap: 2px;

        svg{
            font-size: 20px;
            color: var(--color-main-text);
        }
`;var p=n(2639),m=n(3002);const x=JSON.parse('[{"name":"Konsultacje kosmetologiczne","services":[{"name":"Konsultacja przedzabiegowa","price":"100 z\u0142","duration":"20 min","discount":""},{"name":"Beauty plan","price":"300 z\u0142","duration":"60 min","discount":""}]},{"name":"Endermologia LPG","services":[{"name":"ENDERMOLOGIA masa\u017c/drena\u017c 1 partii cia\u0142a","price":"120 z\u0142","duration":"30 min","discount":""},{"name":"ENDERMOLIFTING twarzy masaz ani-aging","price":"130 z\u0142","duration":"45 min","discount":""},{"name":"ENDERMOLOGIA masa\u017c/drena\u017c dowolnie wybranych 3 partii ciata (Np. Brzuch, uda, posladki)","price":"170 z\u0142","duration":"60 min","discount":""}]},{"name":"Epilacja laserowa","services":[{"name":"Epilacja bikini g\u0142\u0119bokie","price":"300 z\u0142","duration":"35 min","discount":""},{"name":"Epilacja bikini p\u0142ytkie","price":"230 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja broda","price":"150 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja ca\u0142a klatka piersiowa","price":"270 z\u0142","duration":"40 min","discount":""},{"name":"Epilacja ca\u0142e nogi","price":"650 z\u0142","duration":"85 min","discount":""},{"name":"Epilacja ca\u0142y brzuch","price":"290 z\u0142","duration":"40 min","discount":""},{"name":"Epilacja d\u0142onie","price":"130 z\u0142","duration":"25 min","discount":""},{"name":"Epilacja kark","price":"200 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja linia brzucha","price":"150 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja \u0142ydki","price":"340 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja m\u0119skie plecy","price":"320 z\u0142","duration":"70 min","discount":""},{"name":"Epilacja okolice brodawek","price":"120 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja pachy","price":"150 z\u0142","duration":"20 min","discount":""},{"name":"Epilacja przedramiona","price":"250 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja stopy","price":"130 z\u0142","duration":"20 min","discount":""},{"name":"Epilacja szpara po\u015bladkowa","price":"150 z\u0142","duration":"20 min","discount":""},{"name":"Epilacja szyja","price":"200 z\u0142","duration":"30 min","discount":""},{"name":"Epilacja uda","price":"400 z\u0142","duration":"50 min","discount":""},{"name":"Epilacja w\u0105sik","price":"110 z\u0142","duration":"30 min","discount":""}]},{"name":"STORZ Fala uderzeniowa","services":[{"name":"STORZ Fala uderzeniowa BRZUCH","price":"300 z\u0142","duration":"40 min","discount":""},{"name":"STORZ Fala uderzeniowa \u0141YDKI ty\u0142","price":"200 z\u0142","duration":"30 min","discount":""},{"name":"STORZ Fala uderzeniowa PO\u015aLADKI","price":"250 z\u0142","duration":"25 min","discount":""},{"name":"STORZ Fala uderzeniowa TWARZ","price":"200 z\u0142","duration":"40 min","discount":""},{"name":"STORZ Fala uderzeniowa UDA prz\xf3d/ty\u0142","price":"200 z\u0142","duration":"30 min","discount":""}]},{"name":"Zabiegi na twarz","services":[{"name":"Podstawowa piel\u0119gnacja twarzy + masa\u017c","price":"200 z\u0142","duration":"60 min","discount":""},{"name":"Oczyszczanie wodorowe + mask\u0105 PCA","price":"220 z\u0142","duration":"60 min","discount":""},{"name":"Maska PCA + Kwasy PCA Twarz","price":"250 z\u0142","duration":"70 min","discount":""},{"name":"Maska PCA + Kwasy PCA Twarz + Dekolt","price":"320 z\u0142","duration":"90 min","discount":""}]},{"name":"Mezoterapia mikroig\u0142owa Nanofrax","services":[{"name":"Zabieg mezoterapii mikroig\u0142owej obejmuj\u0105cy obszar twarzy","price":"320 z\u0142","duration":"75 min","discount":""},{"name":"Zabieg mezoterapii mikroig\u0142owej obejmuj\u0105cy Twarz, Szyje, Dekolt","price":"380 z\u0142","duration":"85 min","discount":""}]},{"name":"Mezoterapia ig\u0142owa","services":[{"name":"Oko - RRS","price":"250 z\u0142","duration":"50 min","discount":""},{"name":"Twarz + Szyja + Dekolt - Filorga NCTF 135/Cytocare 532","price":"400 z\u0142","duration":"90 min","discount":""}]}]');var u=n(8057),h=n(4856),w=n(579);const g=()=>{const[e,i]=(0,a.useState)(!1),n=()=>i(!e),r=e=>{"Escape"===e.key&&i(!1)};return(0,a.useEffect)((()=>(e?window.addEventListener("keydown",r):window.removeEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)})),[e]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{id:"back-to-top-anchor"}),(0,w.jsx)(o.A,{children:(0,w.jsxs)(t,{children:[x.map(((e,i)=>(0,w.jsxs)(s,{children:[(0,w.jsx)("h2",{children:e.name}),(0,w.jsxs)(d,{children:[(0,w.jsx)("thead",{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"Zabieg"}),(0,w.jsx)("th",{children:(0,w.jsxs)(l,{children:[(0,w.jsx)(p.sfl,{})," Czas trwania"]})}),(0,w.jsx)("th",{children:(0,w.jsxs)(l,{children:[(0,w.jsx)(p.FA6,{})," Cena"]})}),e.services.some((e=>e.discount))&&(0,w.jsx)("th",{children:(0,w.jsxs)(l,{children:[(0,w.jsx)(m.ZJX,{})," Promocja"]})},"promocja"),(0,w.jsx)("th",{style:{width:"0.1px"}})]},i)}),(0,w.jsx)("tbody",{children:e.services.map(((e,i)=>(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:e.name}),(0,w.jsx)("td",{children:e.duration}),(0,w.jsx)("td",{children:e.price}),e.discount&&(0,w.jsx)("td",{className:"discount",children:e.discount},`discount-${i}`),(0,w.jsx)("td",{style:{width:"1px"},children:(0,w.jsx)(c,{children:(0,w.jsx)(h.A,{small:!0,onClick:n,children:"UM\xd3W SI\u0118"})})})]},i)))})]})]},i))),e&&(0,w.jsx)(u.A,{toggleShowMenu:n})]})})]})},j=()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(g,{})})},7022:e=>{e.exports=JSON.parse('{"os":"+48607135955","$C":"607-135-955","Rp":"EPILACJASLUPSK@GMAIL.COM","hl":"76-200 S\u0141UPSK, MICKIEWICZA 59/1"}')}}]);
//# sourceMappingURL=758.f0f3f9e4.chunk.js.map