"use strict";(self.webpackChunkbeauty_clinic_app=self.webpackChunkbeauty_clinic_app||[]).push([[882,459],{5193:(a,e,i)=>{i.d(e,{l:()=>n,r:()=>r});var o=i(3290);const n=o.i7`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`,r=o.i7`
    0% {
        transform: rotateX(90deg); 
        opacity: 0; 
    }
    100% {
        transform: rotateX(0); 
        opacity: 1;
    }
`},8443:(a,e,i)=>{i.d(e,{EY:()=>r,JT:()=>c,eJ:()=>t,mO:()=>n,q7:()=>s});var o=i(1758);const n=o.A.div`
    padding: 15px 0px;
    @media screen and (min-width: 768px)  {
        padding: 60px 0px;
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding-bottom: 30px;
    }
`,r=o.A.div`
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
`,t=o.A.ul`
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
`,s=o.A.li`
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
`,c=o.A.div`
    height: auto;
`},7903:(a,e,i)=>{i.d(e,{$:()=>r,A:()=>t});var o=i(1758),n=i(5475);const r=o.A.div`
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
`,t=(0,o.A)(n.N_)`
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
`},4856:(a,e,i)=>{i.d(e,{A:()=>r});i(5043);var o=i(203),n=i(579);const r=a=>{let{children:e,onClick:i,small:r,className:t}=a;return(0,n.jsx)(o.O,{onClick:i,small:r,type:"button",className:t,children:e})}},203:(a,e,i)=>{i.d(e,{O:()=>n,e:()=>r});var o=i(1758);const n=o.A.button`
    background-color: var(--bc-hero);
    color: var(--color-main-text);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    font-weight: 500;
    letter-spacing: 0em;
    font-size: ${a=>a.small?"14px":"16px"};
    line-height: 18px;
    padding: ${a=>a.small?"10px 24px":"12px 40px"} ;
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
        font-size: ${a=>a.small?"14px":"18px"};
    }
    }
`,r=o.A.button`
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

`},9198:(a,e,i)=>{i.d(e,{o6:()=>c,wn:()=>r,hE:()=>s,mO:()=>t});var o=i(1758);const n=i.p+"static/media/276230497_149097284242841_4479337240596802514_n.7ee92f986bbe2ebeb440.jpg",r=o.A.div`
    background-image: url(${n});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 0%;
    position: relative;
`,t=o.A.div`
    padding-top: 40px;
    @media (min-width: 768px) {
        padding-top: 30px;
    }
`,s=o.A.div`
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
`,c=o.A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media (min-width: 768px) {
    margin-top: 30px;
    }
`},2242:(a,e,i)=>{i.d(e,{A:()=>o});const o=i(1758).A.div`
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
`},8057:(a,e,i)=>{i.d(e,{A:()=>h});var o=i(5043),n=i(7950),r=i(1758);const t=r.A.div`
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
`;var s=i(579);const c=a=>{let{closeModal:e,children:i}=a;const r=(0,o.useRef)(document.querySelector("#modal-root"));return(0,o.useEffect)((()=>{const a=a=>{"Escape"===a.code&&e&&e()};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}}),[e]),(0,o.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""})),[]),(0,n.createPortal)((0,s.jsx)(t,{onClick:a=>{a.target===a.currentTarget&&e&&e()},children:i}),r.current)};var d=i(7980),p=i(5193);const z=r.A.div`
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

    animation: ${p.r} 0.5s ease-in-out;


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
`,l=r.A.button`
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
`,w=(0,r.A)(d.EIA)`
    margin-left: auto;
    font-size: 20px;
    fill: var(--color-main-text);
`,y=r.A.h2`
    text-align: center;
    transform: uppercase;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`,m=r.A.h3`
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
`,k=r.A.div`
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
`;var j=i(2027),u=i(6720),b=i(3156),x=i(7022);const h=a=>{let{toggleShowMenu:e}=a;const[i,r]=(0,o.useState)(!1);return(0,n.createPortal)((0,s.jsx)(c,{closeModal:e,children:(0,s.jsxs)(z,{children:[(0,s.jsx)(l,{onClick:()=>{r(!i),e()},children:(0,s.jsx)(w,{})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{style:{textTransform:"uppercase"},children:"Um\xf3w si\u0119 na wizyt\u0119"}),(0,s.jsx)(m,{children:"Skontaktuj si\u0119 z nami, aby um\xf3wi\u0107 wizyt\u0119:"}),(0,s.jsxs)(k,{children:[(0,s.jsxs)(m,{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(u.PBl,{}),"Zadzwo\u0144 do nas:"]}),(0,s.jsx)("a",{href:`tel:${x.os}`,children:x.$C})]}),(0,s.jsxs)(m,{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(u._zH,{}),"Wy\u015blij e-mail:"]})," ",(0,s.jsx)("a",{href:`mailto:${x.Rp}`,children:x.Rp})]}),(0,s.jsx)(m,{children:(0,s.jsxs)("p",{children:[(0,s.jsx)(b.AnD,{}),"Znajd\u017a nas na:"]})}),(0,s.jsx)(g,{children:(0,s.jsx)(j.A,{})}),(0,s.jsx)(m,{style:{marginBottom:"0"},children:"Zapraszamy do kontaktu!"})]})]})]})}),document.querySelector("#modal-root"))}},2027:(a,e,i)=>{i.d(e,{A:()=>c});i(5043);var o=i(1462),n=i(184);const r=i.p+"static/media/BooksyIcon.b7f812d889192d19fc52.png";var t=i(579);const s=[{name:"Instagram",link:"https://www.instagram.com/epilacja.slupsk/",icon:(0,t.jsx)(o.CRZ,{})},{name:"Facebook",link:"https://www.facebook.com/epilacja.slupsk/",icon:(0,t.jsx)(n.D2F,{})},{name:"Booksy",link:"https://booksy.com/pl-pl/119440_epilacja-slupsk_depilacja_20103_slupsk",icon:(0,t.jsx)("img",{src:r,alt:"Booksy Icon",width:120})}],c=()=>(0,t.jsx)(t.Fragment,{children:s.map(((a,e)=>{let{name:i,link:o,icon:n}=a;return(0,t.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":i,children:n},e)}))})},2415:(a,e,i)=>{i.d(e,{$:()=>o});const o=i(1758).A.div`
    background: rgb(238,238,238);background: linear-gradient(90deg, rgba(238,238,238,0.9781162464985994) 0%, rgba(238,238,238,0.8884803921568627) 24%, rgba(233,232,230,1) 45%, rgba(214,207,199,1) 100%);
    z-index: -100;
`},4852:(a,e,i)=>{i.r(e),i.d(e,{default:()=>z});i(5043);const o=i(1758).A.div`
    padding: 130px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media screen and (min-width: 768px) {
        padding: 170px 0;
    }
`;var n=i(2242),r=i(2415),t=i(9198),s=i(8443),c=i(1503),d=i(7903),p=i(579);const z=()=>(0,p.jsx)(r.$,{children:(0,p.jsx)(n.A,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(t.hE,{children:"Nie znale\u017ali\u015bmy tej strony!"}),(0,p.jsxs)(s.EY,{children:["Przykro nam, ale ta strona nie jest dost\u0119pna. ",(0,p.jsx)("br",{})," Prosz\u0119 spr\xf3bowa\u0107 ponownie."]}),(0,p.jsx)(c.a9,{children:(0,p.jsx)(d.A,{to:"/",children:"Przejd\u017a z powrotem na stron\u0119 g\u0142\xf3wn\u0105."})})]})})})},6322:(a,e,i)=>{i.r(e),i.d(e,{default:()=>ma});var o=i(5043),n=i(3216);const r=JSON.parse('{"name":"Mezoterapia mikroig\u0142owa Nanofrax","type":"Medycyna estetyczna","explanation":"Mezoterapia mikroig\u0142owa to zabieg wykorzystuj\u0105cy urz\u0105dzenie PEN Nanofrax wyposa\u017cone kartrid\u017c z bardzo cienkimi ig\u0142ami, kt\xf3re penetruj\u0105 sk\xf3r\u0119, tworz\u0105c mikroskopijne kanaliki. Te mikrokanaliki stymuluj\u0105 sk\xf3r\u0119 do naturalnej regeneracji, pobudzaj\u0105c produkcj\u0119 kolagenu i elastyny, kt\xf3re s\u0105 kluczowe dla jej elastyczno\u015bci i j\u0119drno\u015bci. ","info":"W trakcie zabiegu wprowadzane s\u0105 specjalne koktajle zawieraj\u0105ce sk\u0142adniki aktywne, takie jak witaminy, kwas hialuronowy, peptydy czy inne substancje od\u017cywcze, kt\xf3re wspomagaj\u0105 procesy regeneracyjne sk\xf3ry. Mezoterapia mikroig\u0142owa jest skuteczn\u0105 metod\u0105 w leczeniu r\xf3\u017cnych problem\xf3w sk\xf3rnych, takich jak zmarszczki, blizny, rozst\u0119py, utrata j\u0119drno\u015bci sk\xf3ry oraz nier\xf3wno\u015bci w jej teksturze. ","advantages":[{"suptitle":"Zalety mezoterapii mikroig\u0142owej:","info":[{"advantage":"Stymulacja produkcji kolagenu i elastyny","description":"Zabieg pobudza naturaln\u0105 produkcj\u0119 tych dw\xf3ch kluczowych bia\u0142ek, co przyczynia si\u0119 do poprawy j\u0119drno\u015bci i elastyczno\u015bci sk\xf3ry."},{"advantage":"Poprawa struktury sk\xf3ry","description":"Regularne zabiegi poprawiaj\u0105 tekstur\u0119 sk\xf3ry, redukuj\u0105c widoczno\u015b\u0107 zmarszczek, blizn (np. potr\u0105dzikowych) oraz rozst\u0119p\xf3w. "},{"advantage":"Zwi\u0119kszenie nawil\u017cenia sk\xf3ry","description":"Mezoterapia mikroig\u0142owa wspomaga lepsze wch\u0142anianie substancji aktywnych, takich jak kwas hialuronowy, co prowadzi do g\u0142\u0119bszego nawil\u017cenia sk\xf3ry."},{"advantage":"Redukcja por\xf3w","description":"Zabieg poprawia wygl\u0105d sk\xf3ry, zmniejszaj\u0105c widoczno\u015b\u0107 rozszerzonych por\xf3w i wyg\u0142adzaj\u0105c jej powierzchni\u0119."},{"advantage":"Bezpieczny i ma\u0142o inwazyjny","description":"Jest to stosunkowo ma\u0142o inwazyjna metoda, kt\xf3ra nie wymaga d\u0142ugiego okresu rekonwalescencji."},{"advantage":"Skuteczno\u015b\u0107 w leczeniu blizn i rozst\u0119p\xf3w","description":"Mezoterapia mikroig\u0142owa jest skuteczn\u0105 metod\u0105 na popraw\u0119 wygl\u0105du blizn i rozst\u0119p\xf3w, kt\xf3re opracowujemy metod\u0105 mikropunktury, co zmniejsza czas rekonwalescencji."},{"advantage":"Mo\u017cliwo\u015b\u0107 stosowania na r\xf3\u017cnych cz\u0119\u015bciach cia\u0142a","description":"Zabieg mo\u017cna przeprowadza\u0107 na r\xf3\u017cnych obszarach sk\xf3ry, w tym na twarzy, szyi, dekolcie, a tak\u017ce na ciele (np. na udach, brzuchu)."},{"advantage":"Minimalny czas rekonwalescencji","description":"Po zabiegu mo\u017ce wyst\u0105pi\u0107 lekkie zaczerwienienie, jednak zwykle ust\u0119puje ono w ci\u0105gu kilku dni, co pozwala na szybki powr\xf3t do codziennych aktywno\u015bci."},{"advantage":"Wszechstronno\u015b\u0107","description":"Mezoterapia mikroig\u0142owa mo\u017ce by\u0107 stosowana w r\xf3\u017cnych problemach sk\xf3rnych \u2013 od odm\u0142adzania sk\xf3ry, przez leczenie blizn, po leczenie rozst\u0119p\xf3w i popraw\u0119 wygl\u0105du sk\xf3ry tr\u0105dzikowej."}]}],"additionalInfo":"","services":[{"name":"Zabieg mezoterapii mikroig\u0142owej obejmuj\u0105cy obszar twarzy"},{"name":"Zabieg mezoterapii mikroig\u0142owej obejmuj\u0105cy Twarz, Szyje, Dekolt"}]}'),t=JSON.parse('{"name":"Mezoterapia ig\u0142owa","type":"Medycyna estetyczna","explanation":"Mezoterapia ig\u0142owa to jeden z moich ulubionych zabieg\xf3w, kt\xf3ry stosuj\u0119 w pracy jako kosmetolog. Dzi\u0119ki precyzyjnym mikroiniekcjom, dostarczam sk\xf3rze niezb\u0119dne sk\u0142adniki aktywne, takie jak kwas hialuronowy, witaminy i aminokwasy, bezpo\u015brednio do g\u0142\u0119bszych warstw sk\xf3ry. ","info":"Je\u015bli marzysz o zdrowej, nawil\u017conej i m\u0142odo wygl\u0105daj\u0105cej sk\xf3rze, mezoterapia ig\u0142owa to idealne rozwi\u0105zanie dla Ciebie!","advantages":[{"suptitle":"Zalety zabiegu mezoterapii ig\u0142owej:","info":[{"advantage":"G\u0142\u0119bokie nawil\u017cenie","description":"Mezoterapia ig\u0142owa dostarcza sk\xf3rze sk\u0142adnik\xf3w od\u017cywczych, takich jak kwas hialuronowy, witaminy i minera\u0142y, bezpo\u015brednio do g\u0142\u0119bszych warstw sk\xf3ry. Dzi\u0119ki temu sk\xf3ra staje si\u0119 intensywnie nawil\u017cona i j\u0119drna."},{"advantage":"Poprawa elastyczno\u015bci i j\u0119drno\u015bci","description":"Zabieg stymuluje produkcj\u0119 kolagenu i elastyny, co przyczynia si\u0119 do poprawy elastyczno\u015bci i j\u0119drno\u015bci sk\xf3ry. Efekt to widocznie m\u0142odsza i bardziej napi\u0119ta sk\xf3ra."},{"advantage":"Redukcja zmarszczek i drobnych linii","description":"Mezoterapia pomaga w wyg\u0142adzaniu drobnych zmarszczek i linii, szczeg\xf3lnie wok\xf3\u0142 oczu, ust i na czole. Sk\xf3ra staje si\u0119 g\u0142adka i promienna."},{"advantage":"Poprawa kolorytu i struktury sk\xf3ry","description":"Dzi\u0119ki mezoterapii mo\u017cna poprawi\u0107 koloryt sk\xf3ry, redukuj\u0105c przebarwienia i zaczerwienienia. Sk\xf3ra staje si\u0119 bardziej jednolita i zdrowo wygl\u0105daj\u0105ca."},{"advantage":"Regeneracja sk\xf3ry","description":"Mezoterapia przyspiesza procesy regeneracyjne sk\xf3ry, co jest szczeg\xf3lnie wa\u017cne po ekspozycji na s\u0142o\u0144ce, stresie czy innych szkodliwych czynnikach."},{"advantage":"Wszechstronno\u015b\u0107","description":"Mezoterapia ig\u0142owa mo\u017ce by\u0107 stosowana nie tylko na twarzy, ale tak\u017ce na szyi, dekolcie, d\u0142oniach i innych partiach cia\u0142a wymagaj\u0105cych poprawy kondycji sk\xf3ry."}]}],"additionalInfo":"","services":[{"name":"Oko - RRS"},{"name":"Twarz + Szyja + Dekolt - Filorga NCTF 135/Cytocare 532"}]}'),s=JSON.parse('{"name":"Stymulatory tkankowe","type":"Medycyna estetyczna","explanation":"Stymulatory tkankowe to innowacyjne preparaty wykorzystywane w medycynie estetycznej, kt\xf3re pobudzaj\u0105 sk\xf3r\u0119 do regeneracji poprzez stymulacj\u0119 produkcji kolagenu i elastyny. Zabieg ten wspomaga naturalne procesy odbudowy, poprawiaj\u0105c struktur\u0119 i wygl\u0105d sk\xf3ry, zapewniaj\u0105c efekt liftingu i odm\u0142odzenia.","info":"Stymulatory tkankowe dzia\u0142aj\u0105 na g\u0142\u0119bsze warstwy sk\xf3ry, wzmacniaj\u0105c jej rusztowanie, poprawiaj\u0105c g\u0119sto\u015b\u0107 i spr\u0119\u017cysto\u015b\u0107. S\u0105 doskona\u0142e do rewitalizacji sk\xf3ry twarzy, szyi, dekoltu oraz innych partii cia\u0142a, gdzie widoczne s\u0105 oznaki starzenia.","advantages":[{"suptitle":"Zalety stymulator\xf3w tkankowych:","info":[{"advantage":"Naturalne efekty odm\u0142odzenia","description":"Stymulatory tkankowe pobudzaj\u0105 naturalne procesy regeneracyjne sk\xf3ry, co zapewnia subtelny i naturalny efekt odm\u0142odzenia."},{"advantage":"Poprawa elastyczno\u015bci sk\xf3ry","description":"Zabieg zwi\u0119ksza produkcj\u0119 kolagenu i elastyny, dzi\u0119ki czemu sk\xf3ra staje si\u0119 bardziej elastyczna i spr\u0119\u017cysta."},{"advantage":"Redukcja zmarszczek i bruzd","description":"Stymulatory skutecznie wyg\u0142adzaj\u0105 drobne linie i zmarszczki, przywracaj\u0105c m\u0142odzie\u0144czy wygl\u0105d sk\xf3ry."},{"advantage":"D\u0142ugotrwa\u0142e efekty","description":"Efekty zabiegu s\u0105 d\u0142ugotrwa\u0142e, poniewa\u017c procesy regeneracyjne sk\xf3ry dzia\u0142aj\u0105 jeszcze przez kilka miesi\u0119cy po zabiegu."},{"advantage":"Poprawa g\u0119sto\u015bci sk\xf3ry","description":"Stymulatory wspomagaj\u0105 odbudow\u0119 struktury sk\xf3ry, zwi\u0119kszaj\u0105c jej g\u0119sto\u015b\u0107 i odporno\u015b\u0107 na dzia\u0142anie czynnik\xf3w zewn\u0119trznych."},{"advantage":"Bezpiecze\u0144stwo i ma\u0142a inwazyjno\u015b\u0107","description":"Zabieg jest ma\u0142o inwazyjny, a stymulatory s\u0105 dobrze tolerowane przez organizm, co minimalizuje ryzyko powik\u0142a\u0144."},{"advantage":"Wszechstronno\u015b\u0107 zastosowania","description":"Stymulatory mog\u0105 by\u0107 stosowane nie tylko na twarzy, ale r\xf3wnie\u017c na szyi, dekolcie, d\u0142oniach i innych obszarach wymagaj\u0105cych regeneracji."}]}],"additionalInfo":"","services":[{"name":"Stymulatory tkankowe na twarz"},{"name":"Stymulatory tkankowe na szyj\u0119 i dekolt"},{"name":"Stymulatory tkankowe na d\u0142onie"}]}'),c=JSON.parse('{"name":"STORZ Fala uderzeniowa","type":"Cia\u0142o","explanation":"Storz Medical \u2013 fala uderzeniowa (terapia fal\u0105 akustyczn\u0105). Fala uderzeniowa, znana r\xf3wnie\u017c jako terapia fal\u0105 akustyczn\u0105, to nowoczesny zabieg stosowany w medycynie estetycznej, fizjoterapii i rehabilitacji, kt\xf3ry polega na wysy\u0142aniu impuls\xf3w akustycznych o wysokiej energii w g\u0142\u0105b tkanek. Fale akustyczne pobudzaj\u0105 kr\u0105\u017cenie krwi, poprawiaj\u0105 mikrokr\u0105\u017cenie, rozbijaj\u0105 zgrubienia tkankowe i wspomagaj\u0105 metabolizm kom\xf3rkowy. ","info":"Fal\u0119 uderzeniow\u0105 stosujemy m.in. w leczeniu cellulitu zw\u0142\xf3knionego, redukcji tkanki t\u0142uszczowej, poprawie j\u0119drno\u015bci sk\xf3ry, leczeniu blizn czy na wdowi garb.","advantages":[{"suptitle":"Zalety zabiegu fali uderzeniowej (Storz Medical):","info":[{"advantage":"Redukcja cellulitu","description":"Fala uderzeniowa pomaga rozbi\u0107 zgrubienia tkankowe oraz wspomaga eliminacj\u0119 nadmiaru wody i toksyn, co przyczynia si\u0119 do wyg\u0142adzenia sk\xf3ry i zmniejszenia widoczno\u015bci cellulitu."},{"advantage":"Poprawa j\u0119drno\u015bci sk\xf3ry","description":"Zabieg stymuluje produkcj\u0119 kolagenu i elastyny, co skutkuje popraw\u0105 elastyczno\u015bci i j\u0119drno\u015bci sk\xf3ry."},{"advantage":"Skuteczna redukcja tkanki t\u0142uszczowej","description":"Impulsy akustyczne wspomagaj\u0105 metabolizm kom\xf3rkowy, przyspieszaj\u0105c proces spalania t\u0142uszczu i poprawiaj\u0105c kontur sylwetki."},{"advantage":"Bezbolesny i nieinwazyjna","description":"Terapia fal\u0105 uderzeniow\u0105 jest bezpieczna, bezbolesna i nie wymaga okresu rekonwalescencji. Pacjent mo\u017ce wr\xf3ci\u0107 do normalnej aktywno\u015bci zaraz po zabiegu. "},{"advantage":"Poprawa mikrokr\u0105\u017cenia","description":"Zabieg wspomaga kr\u0105\u017cenie krwi i limfy, co przyspiesza procesy regeneracyjne oraz poprawia dotlenienie i od\u017cywienie tkanek. "},{"advantage":"Redukcja blizn i rozst\u0119p\xf3w","description":"Terapia fal\u0105 uderzeniow\u0105 dzia\u0142a regeneruj\u0105co na sk\xf3r\u0119, zmniejszaj\u0105c widoczno\u015b\u0107 blizn i rozst\u0119p\xf3w."},{"advantage":"Wspomaganie leczenia b\xf3lu","description":"Fala uderzeniowa wykorzystywana jest r\xf3wnie\u017c w leczeniu b\xf3l\xf3w mi\u0119\u015bniowych zmniejszaj\u0105c stan zapalny i przyspieszaj\u0105c proces gojenia. "},{"advantage":"Szybkie efekty","description":"Efekty zabiegu s\u0105 widoczne po kilku sesjach, co sprawia, \u017ce terapia jest stosunkowo szybka i efektywna. "},{"advantage":"Wszechstronno\u015b\u0107","description":"Zabieg mo\u017cna stosowa\u0107 na r\xf3\u017cnych cz\u0119\u015bciach cia\u0142a, takich jak uda, brzuch, po\u015bladki, plecy a tak\u017ce w leczeniu problem\xf3w z mi\u0119\u015bniami."}]}],"additionalInfo":"","services":[{"name":"STORZ Fala uderzeniowa BRZUCH"},{"name":"STORZ Fala uderzeniowa \u0141YDKI ty\u0142"},{"name":"STORZ Fala uderzeniowa PO\u015aLADKI"},{"name":"STORZ Fala uderzeniowa TWARZ"},{"name":"STORZ Fala uderzeniowa UDA prz\xf3d/ty\u0142"}]}'),d=JSON.parse('{"name":"Epilacja laserowa","type":"Cia\u0142o","explanation":"Epilacja laserowa urz\u0105dzeniem medycznym Motus AX to nowoczesna metoda usuwania ow\u0142osienia, kt\xf3ra wykorzystuje technologi\u0119 lasera diodowego z laserem aleksandrytowym. Laser Motus AX dzia\u0142a na zasadzie emitowania energii \u015bwietlnej, kt\xf3ra jest poch\u0142aniana przez melanin\u0119 (barwnik) we w\u0142osach. Energia zamieniana jest na ciep\u0142o, co skutkuje uszkodzeniem mieszka w\u0142osowego, uniemo\u017cliwiaj\u0105c jego dalszy wzrost. ","info":"Technologia Motus AX zapewnia bezpieczne, skuteczne i bezbolesne zabiegi.","advantages":[{"suptitle":"Zalety epilacji laserowej Motus AX:","info":[{"advantage":"Skuteczno\u015b\u0107","description":"Laser Motus AX dzia\u0142a na wszystkie typy w\u0142os\xf3w, w tym jasne, ciemne i cienkie, zapewniaj\u0105c trwa\u0142e rezultaty po serii zabieg\xf3w. "},{"advantage":"Bezbolesno\u015b\u0107","description":"Dzi\u0119ki innowacyjnej technologii ch\u0142odzenia i odpowiedniej mocy impuls\xf3w, zabieg jest znacznie mniej bolesny w por\xf3wnaniu do tradycyjnych metod epilacji."},{"advantage":"Bezpieczny dla sk\xf3ry","description":"Laser Motus AX dzia\u0142a precyzyjnie, nie uszkadzaj\u0105c otaczaj\u0105cych tkanek, co zmniejsza ryzyko podra\u017cnie\u0144 i oparze\u0144."},{"advantage":"Minimalne ryzyko podra\u017cnie\u0144","description":"W por\xf3wnaniu do innych metod usuwania ow\u0142osienia, takich jak woskowanie czy depilacja mechaniczna, epilacja Motus AX generuje znacznie mniejsze ryzyko podra\u017cnie\u0144 czy wrastania w\u0142os\xf3w."},{"advantage":"Brak okresu rekonwalescencji","description":"Zabieg nie wymaga d\u0142ugiego okresu gojenia. Po epilacji mo\u017cna wr\xf3ci\u0107 do normalnych aktywno\u015bci, bez konieczno\u015bci odpoczynku. "},{"advantage":"Bezpieczne dla os\xf3b o wra\u017cliwej sk\xf3rze","description":"Technologia Motus AX jest bezpieczna dla os\xf3b o sk\xf3rze wra\u017cliwej oraz sk\u0142onnej do podra\u017cnie\u0144, poniewa\u017c minimalizuje ryzyko uszkodzenia sk\xf3ry."},{"advantage":"Trwa\u0142o\u015b\u0107 efekt\xf3w","description":"Ju\u017c po kilku zabiegach, efekty s\u0105 d\u0142ugotrwa\u0142e, a niechciane ow\u0142osienie nie zabiera ju\u017c nam rado\u015bci z \u017cycia!"}]}],"additionalInfo":"","services":[{"name":"Epilacja bikini g\u0142\u0119bokie"},{"name":"Epilacja bikini p\u0142ytkie"},{"name":"Epilacja broda"},{"name":"Epilacja ca\u0142a klatka piersiowa"},{"name":"Epilacja ca\u0142e nogi"},{"name":"Epilacja ca\u0142y brzuch"},{"name":"Epilacja d\u0142onie"},{"name":"Epilacja kark"},{"name":"Epilacja linia brzucha"},{"name":"Epilacja \u0142ydki"},{"name":"Epilacja m\u0119skie plecy"},{"name":"Epilacja okolice brodawek"},{"name":"Epilacja pachy"},{"name":"Epilacja przedramiona"},{"name":"Epilacja stopy"},{"name":"Epilacja szpara po\u015bladkowa"},{"name":"Epilacja szyja"},{"name":"Epilacja uda"},{"name":"Epilacja w\u0105sik"}]}'),p=JSON.parse('{"name":"Podstawowa piel\u0119gnacja twarzy + masa\u017c","type":"Twarz","explanation":"Podstawowa piel\u0119gnacja twarzy to zabieg, kt\xf3ry \u0142\u0105czy oczyszczanie sk\xf3ry za pomoc\u0105 dermokosmetyk\xf3w PCA SKIN oraz zastosowanie terapeutycznej maski odpowiednio dobranej do potrzeb sk\xf3ry. Zabieg uzupe\u0142nia relaksuj\u0105cy masa\u017c, kt\xf3ry poprawia kr\u0105\u017cenie i zwi\u0119ksza efektywno\u015b\u0107 zastosowanych produkt\xf3w.","info":"Podstawowa piel\u0119gnacja jest idealnym rozwi\u0105zaniem dla os\xf3b, kt\xf3re chc\u0105 zadba\u0107 o codzienn\u0105 kondycj\u0119 sk\xf3ry i zrelaksowa\u0107 si\u0119 podczas zabiegu. Dzi\u0119ki wysokiej jako\u015bci kosmetykom PCA SKIN, sk\xf3ra jest oczyszczona, od\u017cywiona i promienna, a masa\u017c dodaje jej elastyczno\u015bci.","advantages":[{"suptitle":"Zalety podstawowej piel\u0119gnacji twarzy:","info":[{"advantage":"Dog\u0142\u0119bne oczyszczenie sk\xf3ry","description":"Zabieg usuwa zanieczyszczenia oraz nadmiar sebum, pozostawiaj\u0105c sk\xf3r\u0119 czyst\u0105 i \u015bwie\u017c\u0105."},{"advantage":"Od\u017cywienie i regeneracja","description":"Maska terapeutyczna dostarcza sk\xf3rze niezb\u0119dnych sk\u0142adnik\xf3w od\u017cywczych, kt\xf3re wspomagaj\u0105 regeneracj\u0119."},{"advantage":"Relaks i redukcja stresu","description":"Masa\u017c twarzy dzia\u0142a relaksuj\u0105co, redukuj\u0105c napi\u0119cie mi\u0119\u015bni i poprawiaj\u0105c og\xf3lne samopoczucie."},{"advantage":"Poprawa elastyczno\u015bci sk\xf3ry","description":"Dzi\u0119ki masa\u017cowi sk\xf3ra staje si\u0119 bardziej j\u0119drna i elastyczna, co wp\u0142ywa na jej m\u0142odszy wygl\u0105d."}]}],"additionalInfo":"","services":[]}'),z=JSON.parse('{"name":"Endermologia LPG","type":"Cia\u0142o","explanation":"Endermologia to nieinwazyjny zabieg wykorzystuj\u0105cy technologi\u0119 masa\u017cu podci\u015bnieniowego, kt\xf3ry pobudza naturalne mechanizmy regeneracyjne sk\xf3ry. Endermologia jest stosowana g\u0142\xf3wnie w celu redukcji cellulitu, poprawy kondycji sk\xf3ry i modelowania sylwetki.","info":"Zabieg polega na u\u017cyciu najnowocze\u015bniejszego urz\u0105dzenia od LPG Alliance Cellu M6, kt\xf3re za pomoc\u0105 rolek i podci\u015bnienia masuje sk\xf3r\u0119, stymuluj\u0105c kr\u0105\u017cenie krwi i limfy, a tak\u017ce poprawiaj\u0105c elastyczno\u015b\u0107 oraz j\u0119drno\u015b\u0107 sk\xf3ry.","advantages":[{"suptitle":"Zalety endermologii:","info":[{"advantage":"Redukcja cellulitu","description":"Zabieg skutecznie redukuje widoczno\u015b\u0107 cellulitu poprzez popraw\u0119 mikrokr\u0105\u017cenia i rozbijanie tkanki t\u0142uszczowej. "},{"advantage":"Poprawa j\u0119drno\u015bci sk\xf3ry","description":"Regularne zabiegi zwi\u0119kszaj\u0105 elastyczno\u015b\u0107 sk\xf3ry, co sprawia, \u017ce staje si\u0119 ona bardziej j\u0119drna i g\u0142adka."},{"advantage":"Modelowanie sylwetki","description":"Endermologia pomaga w redukcji tkanki t\u0142uszczowej i wymodelowaniu kontur\xf3w cia\u0142a."},{"advantage":"Stymulacja produkcji kolagenu","description":"Zabieg stymuluje fibroblasty do produkcji kolagenu, co wspomaga regeneracj\u0119 i odm\u0142odzenie sk\xf3ry."},{"advantage":"Poprawa kr\u0105\u017cenia","description":"Dzi\u0119ki masowaniu sk\xf3ry i stymulacji kr\u0105\u017cenia, endermologia wspomaga usuwanie toksyn z organizmu i poprawia dotlenienie sk\xf3ry."},{"advantage":"Redukcja obrz\u0119k\xf3w","description":"Zabieg pomaga w redukcji nadmiaru wody w organizmie, zmniejszaj\u0105c obrz\u0119ki i poprawiaj\u0105c wygl\u0105d sk\xf3ry. "},{"advantage":"Bezbolesny i bezinwazyjny","description":"Endermologia jest zabiegiem bezpiecznym, bez potrzeby u\u017cywania igie\u0142 czy skalpela, bez ryzyka powik\u0142a\u0144."},{"advantage":"Relaks i poprawa samopoczucia","description":"Zabieg dzia\u0142a relaksuj\u0105co, redukuj\u0105c napi\u0119cie mi\u0119\u015bniowe i stres, co pozytywnie wp\u0142ywa na samopoczucie."}]}],"additionalInfo":"","services":[{"name":"ENDERMOLOGIA masa\u017c/drena\u017c 1 partii cia\u0142a"},{"name":"ENDERMOLIFTING twarzy masaz ani-aging"},{"name":"ENDERMOLOGIA masa\u017c/drena\u017c dowolnie wybranych 3 partii ciata (Np. Brzuch, uda, posladki)"}]}'),l=JSON.parse('{"name":"Konsultacja przedzabiegowa","type":"Konsultacje kosmetologiczne","explanation":"Konsultacja przedzabiegowa to pierwsze i niezwykle istotne spotkanie z kosmetologiem, maj\u0105ce na celu ocen\u0119 stanu sk\xf3ry oraz dob\xf3r odpowiednich zabieg\xf3w. Dzi\u0119ki profesjonalnej analizie kosmetolog mo\u017ce zaproponowa\u0107 spersonalizowany plan piel\u0119gnacji, kt\xf3ry odpowiada indywidualnym potrzebom sk\xf3ry.","info":"Podczas konsultacji omawiane s\u0105 cele zabiegowe, oczekiwania pacjenta oraz jego ewentualne problemy sk\xf3rne. Cz\u0119sto cena konsultacji jest odliczana od kosztu zabiegu, co sprawia, \u017ce jest to idealny pierwszy krok w stron\u0119 poprawy kondycji sk\xf3ry.","advantages":[{"suptitle":"Zalety konsultacji przedzabiegowej:","info":[{"advantage":"Indywidualne podej\u015bcie","description":"Konsultacja pozwala na dok\u0142adne dopasowanie zabiegu do potrzeb i stanu sk\xf3ry pacjenta."},{"advantage":"Oszcz\u0119dno\u015b\u0107 czasu i pieni\u0119dzy","description":"Dzi\u0119ki konsultacji wybierasz tylko te zabiegi, kt\xf3re naprawd\u0119 s\u0105 dla Ciebie odpowiednie, unikaj\u0105c niepotrzebnych koszt\xf3w."},{"advantage":"Profesjonalna analiza sk\xf3ry","description":"Kosmetolog dok\u0142adnie oceni stan Twojej sk\xf3ry, co pozwoli na precyzyjne dobranie zabiegu."},{"advantage":"Plan zabiegowy","description":"Na podstawie konsultacji otrzymasz spersonalizowany plan piel\u0119gnacyjny, kt\xf3ry krok po kroku poprowadzi Ci\u0119 do lepszej kondycji sk\xf3ry."}]}],"additionalInfo":"","services":[{"name":"Konsultacja przedzabiegowa twarzy"},{"name":"Konsultacja przedzabiegowa cia\u0142a"}]}'),w=JSON.parse('{"name":"Oczyszczanie wodorowe + mask\u0105 PCA","type":"Twarz","explanation":"Oczyszczanie wodorowe to nowoczesny, nieinwazyjny zabieg piel\u0119gnacyjny, kt\xf3ry wykorzystuje wod\xf3r jako g\u0142\xf3wny sk\u0142adnik aktywny. Zabieg polega na aplikacji cz\u0105steczek wodoru na powierzchni\u0119 sk\xf3ry w celu g\u0142\u0119bokiego oczyszczenia jej z zanieczyszcze\u0144, nadmiaru sebum i martwych kom\xf3rek. Wod\xf3r, b\u0119d\u0105c silnym antyoksydantem, dzia\u0142a r\xf3wnie\u017c na neutralizacj\u0119 wolnych rodnik\xf3w, co wspomaga regeneracj\u0119 sk\xf3ry i zapobiega przedwczesnemu starzeniu. ","info":"Dzi\u0119ki w\u0142a\u015bciwo\u015bciom oczyszczaj\u0105cym, detoksykacyjnym oraz nawil\u017caj\u0105cym, oczyszczanie wodorowe poprawia kondycj\u0119 sk\xf3ry, wyr\xf3wnuje jej koloryt, zmniejsza widoczno\u015b\u0107 niedoskona\u0142o\u015bci, takich jak tr\u0105dzik czy zask\xf3rniki, oraz przywraca cerze zdrowy, promienny wygl\u0105d. Jest to zabieg bezbolesny, bezpieczny i odpowiedni dla ka\u017cdego typu sk\xf3ry (tak\u017ce podczas ci\u0105\u017cy czy w po\u0142ogu), w tym dla os\xf3b o cerze wra\u017cliwej.","advantages":[{"suptitle":"Zalety zabiegu oczyszczania wodorowego: ","info":[{"advantage":"Skuteczne oczyszczanie sk\xf3ry","description":"Usuwa zanieczyszczenia, martwe kom\xf3rki sk\xf3ry, nadmiar sebum oraz toksyny, przywracaj\u0105c cerze \u015bwie\u017co\u015b\u0107 i zdrowy wygl\u0105d."},{"advantage":"G\u0142\u0119boka detoksykacja","description":"Dzi\u0119ki zastosowaniu wodoru, kt\xf3ry dzia\u0142a jako silny antyoksydant, zabieg neutralizuje wolne rodniki, redukuj\u0105c stres oksydacyjny sk\xf3ry."},{"advantage":"Poprawa nawil\u017cenia","description":"Wod\xf3r pomaga w g\u0142\u0119bokim nawil\u017ceniu sk\xf3ry, co sprawia, \u017ce staje si\u0119 ona bardziej elastyczna i j\u0119drna."},{"advantage":"Redukcja niedoskona\u0142o\u015bci","description":"Zabieg pomaga w walce z tr\u0105dzikiem, rozszerzonymi porami i zask\xf3rnikami, poprawiaj\u0105c og\xf3lny wygl\u0105d sk\xf3ry."},{"advantage":"Bezbolesny i nieinwazyjny","description":"Zabieg jest bezpieczny, bez ryzyka podra\u017cnie\u0144 czy d\u0142ugotrwa\u0142ego zaczerwienienia, idealny dla os\xf3b z wra\u017cliw\u0105 cer\u0105."},{"advantage":"Poprawa kolorytu sk\xf3ry","description":"Regularne oczyszczanie wodorowe przyczynia si\u0119 do wyg\u0142adzenia sk\xf3ry, wyr\xf3wnania jej kolorytu i zmniejszenia przebarwie\u0144."},{"advantage":"Zwi\u0119kszona produkcja kolagenu","description":"Zabieg wspomaga regeneracj\u0119 sk\xf3ry, stymuluj\u0105c produkcj\u0119 kolagenu, co skutkuje popraw\u0105 jej g\u0119sto\u015bci i elastyczno\u015bci."},{"advantage":"Ochrona przed starzeniem","description":"Regularne oczyszczanie wodorowe mo\u017ce spowolni\u0107 proces starzenia sk\xf3ry, redukuj\u0105c widoczno\u015b\u0107 zmarszczek i drobnych linii."}]},{"suptitle":"Zalety zabiegu z\u0142uszczania sk\xf3ry za pomoc\u0105 kwas\xf3w PCA Skin: ","info":[{"advantage":"Skuteczne usuwanie martwego nask\xf3rka","description":"Zabieg z\u0142uszczania przy u\u017cyciu kwas\xf3w PCA Skin usuwa martwe kom\xf3rki sk\xf3ry, poprawiaj\u0105c jej tekstur\u0119 i wyg\u0142adzaj\u0105c powierzchni\u0119."},{"advantage":"Poprawa kolorytu sk\xf3ry","description":"Regularne stosowanie kwas\xf3w pomaga w wyr\xf3wnaniu kolorytu sk\xf3ry, redukuj\u0105c przebarwienia, plamy s\u0142oneczne i inne nier\xf3wno\u015bci. "},{"advantage":"Redukcja zmarszczek i drobnych linii","description":"Zabieg stymuluje produkcj\u0119 kolagenu, co skutkuje popraw\u0105 j\u0119drno\u015bci i elastyczno\u015bci sk\xf3ry oraz zmniejsza widoczno\u015b\u0107 drobnych zmarszczek. "},{"advantage":"Walka z tr\u0105dzikiem i zask\xf3rnikami","description":"Kwasy PCA Skin pomagaj\u0105 w regulowaniu produkcji sebum, oczyszczaj\u0105 pory i zmniejszaj\u0105 sk\u0142onno\u015b\u0107 do powstawania wyprysk\xf3w. "},{"advantage":"Bezpieczny dla r\xf3\u017cnych typ\xf3w sk\xf3ry","description":"Zabieg jest dostosowany do r\xf3\u017cnych potrzeb sk\xf3ry \u2013 od suchej po t\u0142ust\u0105, a tak\u017ce skuteczny w przypadku wra\u017cliwej sk\xf3ry. "},{"advantage":"Poprawa nawil\u017cenia","description":"Z\u0142uszczanie kwasami wspomaga lepsze wch\u0142anianie sk\u0142adnik\xf3w aktywnych z produkt\xf3w piel\u0119gnacyjnych, co prowadzi do g\u0142\u0119bszego nawil\u017cenia sk\xf3ry. "},{"advantage":"Redukcja widoczno\u015bci por\xf3w","description":"Dzi\u0119ki oczyszczaniu sk\xf3ry i regulacji produkcji sebum, zabieg mo\u017ce pom\xf3c w zmniejszeniu widoczno\u015bci rozszerzonych por\xf3w. "},{"advantage":"Szybkie efekty i minimalny czas rekonwalescencji","description":"Zabieg z\u0142uszczania kwasami PCA Skin daje szybkie efekty przy minimalnym ryzyku podra\u017cnie\u0144, a czas regeneracji jest kr\xf3tki. W\u0142a\u015bciwe wraz z ko\u0144cem zabiegu macie na twarzy glow i blask."}]}],"additionalInfo":""}'),y=JSON.parse('{"name":"Beauty plan","type":"Konsultacje kosmetologiczne","explanation":"Tworzenie Beauty Planu to spersonalizowana us\u0142uga, kt\xf3ra pozwala na kompleksowe i indywidualne podej\u015bcie do piel\u0119gnacji sk\xf3ry oraz poprawy jej kondycji. Us\u0142uga ta jest dedykowana osobom, kt\xf3re pragn\u0105 uzyska\u0107 najlepsze mo\u017cliwe rezultaty w trosce o swoj\u0105 urod\u0119, korzystaj\u0105c z profesjonalnej wiedzy i do\u015bwiadczenia kosmetologa.","info":"Przebieg us\u0142ugi:  Us\u0142uga rozpoczyna si\u0119 od konsultacji z kosmetologiem, kt\xf3ry przeprowadza szczeg\xf3\u0142owy wywiad i analiz\u0119 sk\xf3ry. Nast\u0119pnie okiem chemika przygl\u0105damy si\u0119 wszystkim stosowanym dotychczas kosmetykom do piel\u0119gnacji (na wizycie nale\u017cy je mie\u0107 ze sob\u0105). Na podstawie g\u0142\u0119bokiej analizy potrzeb sk\xf3ry wprowadzamy indywidualny Beauty Plan, kt\xf3ry jest omawiany z klientem. Kosmetolog wyja\u015bnia, jakie zabiegi i produkty b\u0119d\u0105 najskuteczniejsze oraz jak stosowa\u0107 je w codziennej piel\u0119gnacji. Beauty Plan jest tworzony na podstawie szczeg\xf3\u0142owej analizy stanu sk\xf3ry, jej potrzeb oraz cel\xf3w, kt\xf3re klient chce osi\u0105gn\u0105\u0107. W ramach us\u0142ugi przeprowadzana jest konsultacja, podczas kt\xf3rej kosmetolog dok\u0142adnie ocenia typ sk\xf3ry, jej kondycj\u0119, problematyczne obszary oraz konsultuje u\u017cywane przez klienta produkty do piel\u0119gnacji.","advantages":[{"suptitle":"Na tej podstawie opracowywany jest spersonalizowany plan piel\u0119gnacyjny, kt\xf3ry obejmuje:","info":[{"advantage":"Analiz\u0119 sk\xf3ry:","description":"Dok\u0142adna ocena stanu sk\xf3ry oraz zidentyfikowanie problem\xf3w i potrzeb sk\xf3ry."},{"advantage":"Rekomendacje zabieg\xf3w:","description":"Dob\xf3r odpowiednich zabieg\xf3w kosmetycznych, kt\xf3re pomog\u0105 osi\u0105gn\u0105\u0107 zamierzone cele, takie jak redukcja zmarszczek, poprawa nawil\u017cenia, wyr\xf3wnanie kolorytu sk\xf3ry czy redukcja niedoskona\u0142o\u015bci."},{"advantage":"Indywidualny plan piel\u0119gnacyjny: ","description":"Opracowanie codziennej rutyny piel\u0119gnacyjnej, w kt\xf3rej uwzgl\u0119dnione zostan\u0105 odpowiednie produkty do piel\u0119gnacji domowej, takie jak produkty do mycia, kremy czy sera."},{"advantage":"Zalecenia dotycz\u0105ce stylu \u017cycia:","description":"Porady dotycz\u0105ce diety, suplementacji oraz zdrowych nawyk\xf3w, kt\xf3re wspomagaj\u0105 og\xf3ln\u0105 kondycj\u0119 sk\xf3ry i wspieraj\u0105 efekty zabieg\xf3w kosmetycznych."}]},{"suptitle":"Korzy\u015bci z us\u0142ugi:","info":[{"advantage":"Spersonalizowane podej\u015bcie","description":" Beauty Plan jest dostosowany do indywidualnych potrzeb i cel\xf3w ka\u017cdej osoby, co zapewnia maksymaln\u0105 skuteczno\u015b\u0107."},{"advantage":"Profesjonalna opieka:","description":"Us\u0142uga jest \u015bwiadczona przez do\u015bwiadczonego kosmetologa, kt\xf3ry zapewnia fachow\u0105 opiek\u0119 i doradztwo na ka\u017cdym etapie."},{"advantage":"Kompleksowa piel\u0119gnacja: ","description":"Obejmuje wszystkie aspekty dbania o sk\xf3r\u0119, od zabieg\xf3w profesjonalnych po codzienn\u0105 piel\u0119gnacj\u0119 domow\u0105."}]}],"additionalInfo":"","services":[]}'),m=i.p+"static/media/Oczyszczanie-wodorowe.8ee9df2df920ca5054d1.jpg",k=i.p+"static/media/Zabieg-pca-twarz.4259ef1f12efac364d93.jpg",g=i.p+"static/media/Zabiegi-na-twarz.c64c91fe331e339fcc45.jpg";var j=i(9272);const u=i.p+"static/media/Mezoterapia-mikroig\u0142owa1.19b639830b94483d8b48.jpg",b=i.p+"static/media/mezmikro.0c822da668538ceb3500.jpg",x=i.p+"static/media/Mezoterapia-ig\u0142owa1.ed4ba7a37bdb35f93a00.jpg",h=i.p+"static/media/Mezoterapia-sk\xf3ry-g\u0142owy.99cd33fbfc6f80a4587c.jpg",f=i.p+"static/media/stymulator.9d8d1fc91fae44030594.jpg",v=i.p+"static/media/stymulat.b223623022959eaee3f2.jpg",A=i.p+"static/media/Fala-udzerzeniowa-Storz1.d5069a57936600a4d480.jpg",M=i.p+"static/media/DSC01391.b026019738f792e93705.jpg",S=i.p+"static/media/Zdj\u0119cia-epil.adfc2f78964841ff8dcf.jpg",Z=i.p+"static/media/Epilacja-pach1.8083dca23a1a37d30f19.jpg",E=i.p+"static/media/Enderm.04e47f877b075cce5c1a.jpg",P=i.p+"static/media/Endermolif-twarz-szyja-dekolt1.973bf911a608de0c95ff.jpg",O=i.p+"static/media/Masa\u017c-twarZy.aca71b5de777c9089f5f.jpg",R=i.p+"static/media/Masa\u017c-2.600e56edfb3ce4998d9d.jpg";var C=i(2918),I=i(9811);const N=i.p+"static/media/beauty.06d4674ca0518341a7b1.jpg",D=i.p+"static/media/Oczyszczanie-wodorowe-mob.6b1797a665279b1bafed.jpg",T=i.p+"static/media/Zabieg-pca-twarz-mob.a1e5738582ffb248ae48.jpg",F=i.p+"static/media/Zabiegi-na-twarz-mob.be1090968a28a4fa6918.jpg",B=i.p+"static/media/Wodorowe-mob.90bc25420f7a7742c0f1.jpg",K=i.p+"static/media/Mezoterapia-mikroig\u0142owa1-mob.06b256e9461aa4c3a439.jpg",J=i.p+"static/media/mezmikro-mob.55c42f042facf3eeb51e.jpg",W=i.p+"static/media/Mezoterapia-ig\u0142owa1-mob.66c346f2c8ef8183ac2f.jpg",$=i.p+"static/media/Mezoterapia-sk\xf3ry-g\u0142owy-mob.74012154f6081f05d1fd.jpg",L=i.p+"static/media/stymulator-mob.ec098e32b5bd4e954b4c.jpg",_=i.p+"static/media/stymulat-mob.13b42207ed1f034497f6.jpg",U=i.p+"static/media/Fala-udzerzeniowa-Storz1-mob.18e34cb5cb28650c2db9.jpg",X=i.p+"static/media/DSC01391-mob.5ddb3d149c55c80823d2.jpg",G=i.p+"static/media/Zdj\u0119cia-epil-mob.abedf811a7266d7aeab7.jpg",q=i.p+"static/media/Epilacja-pach1-mob.72f11bc93968a07d07ff.jpg",Y=i.p+"static/media/Enderm-mob.5bc2650e9cf9e1b4ae28.jpg",H=i.p+"static/media/Endermolif-twarz-szyja-dekolt1-mob.aa87c09dab0d08a1a19d.jpg",Q=[{id:"mezoterapia-ig\u0142owa",service:t,image:[x,h],imageMob:[W,$]},{id:"mezoterapia-mikroig\u0142owa",service:r,image:[u,b],imageMob:[K,J]},{id:"stymulatory-tkankowe",service:s,image:[f,v],imageMob:[L,_]},{id:"storz-fala-uderzeniowa",service:c,image:[A,M],imageMob:[U,X]},{id:"epilacja-laserowa",service:d,image:[S,Z],imageMob:[G,q]},{id:"podstawowa-piel\u0119gnacja-twarzy",service:p,image:[O,R],imageMob:[i.p+"static/media/Masa\u017c-twarZy-mob.f23a52045b1a79707c8e.jpg",i.p+"static/media/Masa\u017c-2-mob.6feb8e731acd6e710387.jpg"]},{id:"endermologia-lpg",service:z,image:[E,P],imageMob:[Y,H]},{id:"konsultacja-przedzabiegowa",service:l,image:[C,I],imageMob:[i.p+"static/media/about-1-mob.1b9fba098f787a5ac203.jpg",i.p+"static/media/slide8-mob.f3e6aad9d3a959c35ff2.jpg"]},{id:"oczyszczanie-wodorowe",service:w,image:[m,k,g,j],imageMob:[D,T,F,B]},{id:"beauty-plan",service:y,image:[M,N],imageMob:[X,i.p+"static/media/beauty-mob.945ca7327b94f142c17c.jpg"]}];var V=i(9657),aa=i(2242),ea=i(2021),ia=i(203),oa=i(1503),na=i(2415),ra=i(579);const ta=a=>{let{service:e}=a;const i=(0,n.Zp)(),o=(0,V.Ub)({query:"(max-width: 767px)"}),{name:r,explanation:t,info:s}=e.service;return(0,ra.jsx)(na.$,{children:(0,ra.jsx)(aa.A,{children:(0,ra.jsxs)(oa.pT,{children:[(0,ra.jsxs)(oa.az,{children:[(0,ra.jsxs)(ia.e,{type:"button",onClick:async a=>{i("/zabiegi",{replace:!0})},children:[(0,ra.jsx)(ea.ghN,{}),"Powr\xf3t do oferty zabieg\xf3w"]}),(0,ra.jsx)("img",{width:"500px",alt:r,src:o?e.imageMob[0]:e.image[0],loading:"lazy"})]}),(0,ra.jsxs)(oa.fI,{children:[(0,ra.jsx)(oa.up,{children:r}),(0,ra.jsx)("p",{children:t}),(0,ra.jsx)("p",{children:s})]})]})})})};var sa=i(184),ca=i(1758);const da=ca.A.ul`
    text-align: center;
    list-style: none;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    
    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        max-width: 380px;
        margin-bottom: 11px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 25px;
    }
`,pa=ca.A.li`
    text-align: start;
    color: var(--color-main-text);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    flex-direction: column;
    
    align-items: start;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }

    span{
        font-weight: 400;
    }
    p {
        text-align: start;
        display: flex;
        align-items: center;
        gap: 5px;
        @media screen and (min-width: 768px) {
            gap: 10px;
        }
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
`,za=a=>{let{service:e,children:i}=a;const n=(0,V.Ub)({query:"(max-width: 767px)"}),{name:r,advantages:t}=e.service;return(0,ra.jsx)(aa.A,{children:(0,ra.jsxs)(oa.pT,{children:[(0,ra.jsxs)(oa.fI,{children:[t.map(((a,e)=>(0,ra.jsxs)(o.Fragment,{children:[(0,ra.jsx)(oa.up,{children:a.suptitle},`subtitle${e}`),(0,ra.jsx)(da,{children:a.info.map(((a,i)=>(0,ra.jsxs)(pa,{children:[(0,ra.jsxs)("p",{children:[(0,ra.jsx)(sa.Itl,{}),a.advantage]}),(0,ra.jsx)("span",{children:a.description})]},`advantage-${e}-${i}`)))},`list${e}`)]},`advantage-section-${e}`))),i]}),(0,ra.jsxs)(oa.az,{children:[(0,ra.jsx)("img",{alt:r,src:n?e.imageMob[1]:e.image[1],loading:"lazy"}),e.image[2]&&(0,ra.jsx)("img",{width:"500px",alt:r,src:n?e.imageMob[2]:e.image[2]}),e.image[3]&&(0,ra.jsx)("img",{width:"500px",alt:r,src:n?e.imageMob[3]:e.image[3],loading:"lazy"})]})]})})};var la=i(7903),wa=i(8057),ya=i(4852);const ma=()=>{const{id:a}=(0,n.g)(),e=(i=a,Q.find((a=>a.id===i)));var i;const[r,t]=(0,o.useState)(!1),s=()=>t(!r),c=a=>{"Escape"===a.key&&t(!1)};return(0,o.useEffect)((()=>(r?window.addEventListener("keydown",c):window.removeEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)})),[r]),(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsx)("div",{id:"back-to-top-anchor"}),e?(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsx)(ta,{service:e}),(0,ra.jsxs)(za,{service:e,children:[(0,ra.jsxs)(oa.Py,{children:[(0,ra.jsx)(oa.a9,{children:(0,ra.jsx)(la.A,{to:"/pytania-i-odpowiedzi",children:"Najcz\u0119\u015bciej zadawane pytania"})}),(0,ra.jsx)(oa.Oj,{onClick:s,children:"UM\xd3W SI\u0118"})]}),r&&(0,ra.jsx)(wa.A,{toggleShowMenu:s})]})]}):(0,ra.jsx)(ya.default,{})]})}},1503:(a,e,i)=>{i.d(e,{Oj:()=>z,Py:()=>d,a9:()=>p,az:()=>t,fI:()=>s,pT:()=>r,up:()=>c});var o=i(1758),n=i(4856);const r=o.A.div`
    display: flex;
    align-items: center;
`,t=o.A.div`
    position: relative;
    width:40%;
    min-height: 100%;
    background-color: #e2cfc2;
    align-self: stretch;
    @media screen and (min-width: 768px) {
    }
`,s=o.A.div`
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
`,c=o.A.h1`
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
`,d=o.A.div`
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
`,p=o.A.div`
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
`,z=(0,o.A)(n.A)`
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
`},2918:(a,e,i)=>{a.exports=i.p+"static/media/about-1.070eb455fe0b06d9e5b7.jpg"},9272:(a,e,i)=>{a.exports=i.p+"static/media/Wodorowe.c9798f9ae13ffe7b740b.jpg"},9811:(a,e,i)=>{a.exports=i.p+"static/media/slide8.85bc416549185581c974.jpg"},7022:a=>{a.exports=JSON.parse('{"os":"+48607135955","$C":"607-135-955","Rp":"EPILACJASLUPSK@GMAIL.COM","hl":"76-200 S\u0141UPSK, MICKIEWICZA 59/1"}')}}]);
//# sourceMappingURL=882.2064b740.chunk.js.map