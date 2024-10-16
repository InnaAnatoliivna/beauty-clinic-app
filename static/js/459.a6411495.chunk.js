"use strict";(self.webpackChunkbeauty_clinic_app=self.webpackChunkbeauty_clinic_app||[]).push([[459],{8443:(i,e,r)=>{r.d(e,{EY:()=>a,JT:()=>p,eJ:()=>d,mO:()=>n,q7:()=>t});var o=r(1758);const n=o.A.div`
    padding: 15px 0px;
    @media screen and (min-width: 768px)  {
        padding: 60px 0px;
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding-bottom: 30px;
    }
`,a=o.A.div`
    letter-spacing: 0.5px; 
    text-align: center;
    color: var(--color-main-text);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }
`,d=o.A.ul`
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    list-style: none;

    > *:not(:last-child) {
        margin-bottom: 5px; 
    }

    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        margin-left: 0;
        > *:not(:last-child) {
        margin-bottom: 16px; 
    }
    }
    @media screen and (min-width: 1440px) {
    > *:not(:last-child) {
        margin-bottom: 16px; 
    }
    }
`,t=o.A.li`
    color: var(--color-main-text);
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }

    svg {
        color: var(--color-test);
        font-size: 20px;
        min-width: 24px;
        min-height: 24px;
        @media screen and (min-width: 768px) {
            font-size: 26px;
            line-height: 1.2;
            min-width: 26px;
            min-height: 26px;
        }
    }
`,p=o.A.div`
    height: auto;
`},7903:(i,e,r)=>{r.d(e,{$:()=>a,A:()=>d});var o=r(1758),n=r(5475);const a=o.A.div`
    width: 180px;
    color: var(--color-brown);
    border: 1.5px solid var(--color-main-text);
    background-color: var(--bc-hero);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    
    transition: color linear 500ms, border-color linear 500ms;

    &:hover {
        border-color: var(--color-dark);
        color: var(--color-brown);
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 200px;
    }
        @media screen and (min-width: 1440px) {
        width: 230px;
        font-size: 16px;
    }
    @media (min-width: 768px) {
        transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;
        &:hover {
            color: var(--bc-hero);
            border-color: var(--bc-hero);
            background-color: var(--color-brown);
        }
    }
`,d=(0,o.A)(n.N_)`
    width: 100%;
    display: inline-block;
    text-align: center;

    color: inherit;
    /* text-transform: uppercase; */
    font-weight: 500;
    letter-spacing: 0em;
    font-size: 14px;
    line-height: 1.1;
    padding: 16px 26px;
    overflow: hidden;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding: 20px 40px;
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        padding: 20px 40px;
        font-size: 20px;
    }
`},4856:(i,e,r)=>{r.d(e,{A:()=>a});r(5043);var o=r(203),n=r(579);const a=i=>{let{children:e,onClick:r,small:a,className:d}=i;return(0,n.jsx)(o.O,{onClick:r,small:a,type:"button",className:d,children:e})}},203:(i,e,r)=>{r.d(e,{O:()=>n,e:()=>a});var o=r(1758);const n=o.A.button`
    background-color: var(--bc-hero);
    color: var(--color-main-text);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    font-weight: 500;
    letter-spacing: 0em;
    font-size: ${i=>i.small?"14px":"16px"};
    line-height: 18px;
    padding: ${i=>i.small?"10px 24px":"12px 40px"} ;
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
        font-size: ${i=>i.small?"14px":"18px"};
    }
    }
`,a=o.A.button`
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

`},9198:(i,e,r)=>{r.d(e,{o6:()=>p,wn:()=>a,hE:()=>t,mO:()=>d});var o=r(1758);const n=r.p+"static/media/276230497_149097284242841_4479337240596802514_n.7ee92f986bbe2ebeb440.jpg",a=o.A.div`
    background-image: url(${n});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 0%;
    position: relative;
`,d=o.A.div`
    padding-top: 40px;
    @media (min-width: 768px) {
        padding-top: 30px;
    }
`,t=o.A.div`
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
`,p=o.A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media (min-width: 768px) {
    margin-top: 30px;
    }
`},2242:(i,e,r)=>{r.d(e,{A:()=>o});const o=r(1758).A.div`
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
`},2415:(i,e,r)=>{r.d(e,{$:()=>o});const o=r(1758).A.div`
    background: rgb(238,238,238);background: linear-gradient(90deg, rgba(238,238,238,0.9781162464985994) 0%, rgba(238,238,238,0.8884803921568627) 24%, rgba(233,232,230,1) 45%, rgba(214,207,199,1) 100%);
    z-index: -100;
`},4852:(i,e,r)=>{r.r(e),r.d(e,{default:()=>x});r(5043);const o=r(1758).A.div`
    padding: 130px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media screen and (min-width: 768px) {
        padding: 170px 0;
    }
`;var n=r(2242),a=r(2415),d=r(9198),t=r(8443),p=r(1503),c=r(7903),s=r(579);const x=()=>(0,s.jsx)(a.$,{children:(0,s.jsx)(n.A,{children:(0,s.jsxs)(o,{children:[(0,s.jsx)(d.hE,{children:"Nie znale\u017ali\u015bmy tej strony!"}),(0,s.jsxs)(t.EY,{children:["Przykro nam, ale ta strona nie jest dost\u0119pna. ",(0,s.jsx)("br",{})," Prosz\u0119 spr\xf3bowa\u0107 ponownie."]}),(0,s.jsx)(p.a9,{children:(0,s.jsx)(c.A,{to:"/",children:"Przejd\u017a z powrotem na stron\u0119 g\u0142\xf3wn\u0105."})})]})})})},1503:(i,e,r)=>{r.d(e,{Oj:()=>x,Py:()=>c,a9:()=>s,az:()=>d,fI:()=>t,pT:()=>a,up:()=>p});var o=r(1758),n=r(4856);const a=o.A.div`
    display: flex;
    align-items: center;
`,d=o.A.div`
    position: relative;
    width:40%;
    min-height: 100%;
    background-color: #e2cfc2;
    align-self: stretch;
    @media screen and (min-width: 768px) {
    }
`,t=o.A.div`
    width: 60%;
    padding: 0 10px;
    @media screen and (min-width: 768px) {
        padding: 0 25px;
    }
    @media screen and (min-width: 1440px) {
        padding: 0 30px;
    }

    p {
        color: var(--color-main-text);
        text-align: center;
        font-size: 14px;
        line-height: 1.2;
        @media screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 1.4;
        }
        @media screen and (min-width: 1440px) {
            font-size: 20px;
        }
    }
`,p=o.A.h1`
    position: relative; 

    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center;
    word-spacing: 1.8px;
    letter-spacing: 0.5px; 
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 1.4;
    color: var(--color-main-text);

    @media screen and (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 40px;
        font-size: 26px;
    }
`,c=o.A.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        margin-bottom: 60px;
        gap: 20px;
    }

    @media screen and (max-width: 1439px) {
        flex-wrap: wrap;
    }
`,s=o.A.div`
    color: var(--color-brown);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    
    transition: color linear 500ms, border-color linear 500ms;
    &:hover {
        border-color: var(--color-dark);
        color: var(--color-brown);
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 768px) {
        transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;
        &:hover {
            color: var(--bc-hero);
            border-color: var(--bc-hero);
            background-color: var(--color-brown);
        }
    }
    a {
        font-size: 12px;
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
    }
`,x=(0,o.A)(n.A)`
    font-weight: 500;
    letter-spacing: 0em;
    font-size: 12px;
    line-height: 1.1;
    padding: 16px 26px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        
        padding: 20px 40px;
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        padding: 20px 40px;
        font-size: 20px;
    }
`}}]);
//# sourceMappingURL=459.a6411495.chunk.js.map