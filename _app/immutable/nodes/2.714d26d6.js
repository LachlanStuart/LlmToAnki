import{n as O,s as G,r as X,c as Y}from"../chunks/scheduler.b0c1c2c3.js";import{S as F,i as K,g as b,s as L,m as N,h as w,j as k,y as j,c as E,n as P,f as M,k as g,l as z,a as D,A as p,B as R,o as U,r as Z,C as ee,u as te,v as se,d as ne,t as oe,w as re}from"../chunks/index.994eb031.js";import{w as ae}from"../chunks/index.5e7feea3.js";const W=typeof window<"u";let V=W?()=>window.performance.now():()=>Date.now(),J=W?e=>requestAnimationFrame(e):O;const H=new Set;function Q(e){H.forEach(t=>{t.c(e)||(H.delete(t),t.f())}),H.size!==0&&J(Q)}function le(e){let t;return H.size===0&&J(Q),{promise:new Promise(s=>{H.add(t={c:e,f:s})}),abort(){H.delete(t)}}}const ie=!0,be=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie},Symbol.toStringTag,{value:"Module"}));function q(e){return Object.prototype.toString.call(e)==="[object Date]"}function A(e,t,s,r){if(typeof s=="number"||q(s)){const a=r-s,n=(s-t)/(e.dt||1/60),o=e.opts.stiffness*a,l=e.opts.damping*n,u=(o-l)*e.inv_mass,c=(n+u)*e.dt;return Math.abs(c)<e.opts.precision&&Math.abs(a)<e.opts.precision?r:(e.settled=!1,q(s)?new Date(s.getTime()+c):s+c)}else{if(Array.isArray(s))return s.map((a,n)=>A(e,t[n],s[n],r[n]));if(typeof s=="object"){const a={};for(const n in s)a[n]=A(e,t[n],s[n],r[n]);return a}else throw new Error(`Cannot spring ${typeof s} values`)}}function ce(e,t={}){const s=ae(e),{stiffness:r=.15,damping:a=.8,precision:n=.01}=t;let o,l,u,c=e,f=e,d=1,i=0,h=!1;function y(T,x={}){f=T;const S=u={};return e==null||x.hard||v.stiffness>=1&&v.damping>=1?(h=!0,o=V(),c=T,s.set(e=f),Promise.resolve()):(x.soft&&(i=1/((x.soft===!0?.5:+x.soft)*60),d=0),l||(o=V(),h=!1,l=le(_=>{if(h)return h=!1,l=null,!1;d=Math.min(d+i,1);const m={inv_mass:d,opts:v,settled:!0,dt:(_-o)*60/1e3},C=A(m,c,e,f);return o=_,c=e,s.set(e=C),m.settled&&(l=null),!m.settled})),new Promise(_=>{l.promise.then(()=>{S===u&&_()})}))}const v={set:y,update:(T,x)=>y(T(f,e),x),subscribe:s.subscribe,stiffness:r,damping:a,precision:n};return v}function fe(e){let t,s,r='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',a,n,o,l,u=Math.floor(e[1]+1)+"",c,f,d,i=Math.floor(e[1])+"",h,y,v,T='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',x,S;return{c(){t=b("div"),s=b("button"),s.innerHTML=r,a=L(),n=b("div"),o=b("div"),l=b("strong"),c=N(u),f=L(),d=b("strong"),h=N(i),y=L(),v=b("button"),v.innerHTML=T,this.h()},l(_){t=w(_,"DIV",{class:!0});var m=k(t);s=w(m,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(s)!=="svelte-97ppyc"&&(s.innerHTML=r),a=E(m),n=w(m,"DIV",{class:!0});var C=k(n);o=w(C,"DIV",{class:!0,style:!0});var $=k(o);l=w($,"STRONG",{class:!0,"aria-hidden":!0});var B=k(l);c=P(B,u),B.forEach(M),f=E($),d=w($,"STRONG",{class:!0});var I=k(d);h=P(I,i),I.forEach(M),$.forEach(M),C.forEach(M),y=E(m),v=w(m,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(v)!=="svelte-irev0c"&&(v.innerHTML=T),m.forEach(M),this.h()},h(){g(s,"aria-label","Decrease the counter by one"),g(s,"class","svelte-y96mxt"),g(l,"class","hidden svelte-y96mxt"),g(l,"aria-hidden","true"),g(d,"class","svelte-y96mxt"),g(o,"class","counter-digits svelte-y96mxt"),z(o,"transform","translate(0, "+100*e[2]+"%)"),g(n,"class","counter-viewport svelte-y96mxt"),g(v,"aria-label","Increase the counter by one"),g(v,"class","svelte-y96mxt"),g(t,"class","counter svelte-y96mxt")},m(_,m){D(_,t,m),p(t,s),p(t,a),p(t,n),p(n,o),p(o,l),p(l,c),p(o,f),p(o,d),p(d,h),p(t,y),p(t,v),x||(S=[R(s,"click",e[4]),R(v,"click",e[5])],x=!0)},p(_,[m]){m&2&&u!==(u=Math.floor(_[1]+1)+"")&&U(c,u),m&2&&i!==(i=Math.floor(_[1])+"")&&U(h,i),m&4&&z(o,"transform","translate(0, "+100*_[2]+"%)")},i:O,o:O,d(_){_&&M(t),x=!1,X(S)}}}function de(e,t){return(e%t+t)%t}function me(e,t,s){let r,a,n=0;const o=ce();Y(e,o,c=>s(1,a=c));const l=()=>s(0,n-=1),u=()=>s(0,n+=1);return e.$$.update=()=>{e.$$.dirty&1&&o.set(n),e.$$.dirty&2&&s(2,r=de(a,1))},[n,a,r,o,l,u]}class pe extends F{constructor(t){super(),K(this,t,me,fe,G,{})}}const ue=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,he=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;function _e(e){let t,s,r,a,n=`<span class="welcome svelte-19xx0bt"><picture><source srcset="${ue}" type="image/webp"/> <img src="${he}" alt="Welcome" class="svelte-19xx0bt"/></picture></span>

		to your new<br/>SvelteKit app`,o,l,u="try editing <strong>src/routes/+page.svelte</strong>",c,f,d;return f=new pe({}),{c(){t=b("meta"),s=L(),r=b("section"),a=b("h1"),a.innerHTML=n,o=L(),l=b("h2"),l.innerHTML=u,c=L(),Z(f.$$.fragment),this.h()},l(i){const h=ee("svelte-t32ptj",document.head);t=w(h,"META",{name:!0,content:!0}),h.forEach(M),s=E(i),r=w(i,"SECTION",{class:!0});var y=k(r);a=w(y,"H1",{class:!0,"data-svelte-h":!0}),j(a)!=="svelte-11s73ib"&&(a.innerHTML=n),o=E(y),l=w(y,"H2",{"data-svelte-h":!0}),j(l)!=="svelte-1e36z0s"&&(l.innerHTML=u),c=E(y),te(f.$$.fragment,y),y.forEach(M),this.h()},h(){document.title="Home",g(t,"name","description"),g(t,"content","Svelte demo app"),g(a,"class","svelte-19xx0bt"),g(r,"class","svelte-19xx0bt")},m(i,h){p(document.head,t),D(i,s,h),D(i,r,h),p(r,a),p(r,o),p(r,l),p(r,c),se(f,r,null),d=!0},p:O,i(i){d||(ne(f.$$.fragment,i),d=!0)},o(i){oe(f.$$.fragment,i),d=!1},d(i){i&&(M(s),M(r)),M(t),re(f)}}}class we extends F{constructor(t){super(),K(this,t,null,_e,G,{})}}export{we as component,be as universal};
