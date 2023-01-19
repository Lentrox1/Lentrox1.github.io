import{S as w,i as M,s as R,k as f,q as h,a as k,l as d,m as o,r as b,h as a,c as _,n as T,b as i,E as P,B as v}from"./index-bedcd23a.js";function H(x){let n,m,p,s,y=`<code class="language-undefined">  function sleep (time) &#123;
    return new Promise((resolve) =&gt; setTimeout(resolve, time));
&#125;
&#123;#each upgrades as upgrade&#125;
        &lt;button style = &quot;background-image:&#123;upgrade.confetti &gt; 1? upgrade.image:null&#125;&quot;
        if (upgrade.confetti) &#123;
                clicks -= upgrade.cost;
                upgrade.confetti += 1
                upgrade.cost += 100
                multiplier = multiplier * upgrade.multiplier;
                sleep(1500).then(() =&gt; &#123;
                upgrade.confetti = 1
                &#125;);

              &#125;</code>`,u,r,g,c,l,S=`<code class="language-undefined">if (upgrade.cheats) &#123;
                clicks += 1000000
              &#125;</code>`;return{c(){n=f("p"),m=h("Tja, implementerade konfetti animeringen när konfettiknappen trycks."),p=k(),s=f("pre"),u=k(),r=f("p"),g=h("Sedan implementerade jag en cheat knapp så man snabbt få clicks för att köpa upgrades."),c=k(),l=f("pre"),this.h()},l(e){n=d(e,"P",{});var t=o(n);m=b(t,"Tja, implementerade konfetti animeringen när konfettiknappen trycks."),t.forEach(a),p=_(e),s=d(e,"PRE",{class:!0});var j=o(s);j.forEach(a),u=_(e),r=d(e,"P",{});var E=o(r);g=b(E,"Sedan implementerade jag en cheat knapp så man snabbt få clicks för att köpa upgrades."),E.forEach(a),c=_(e),l=d(e,"PRE",{class:!0});var q=o(l);q.forEach(a),this.h()},h(){T(s,"class","language-undefined"),T(l,"class","language-undefined")},m(e,t){i(e,n,t),P(n,m),i(e,p,t),i(e,s,t),s.innerHTML=y,i(e,u,t),i(e,r,t),P(r,g),i(e,c,t),i(e,l,t),l.innerHTML=S},p:v,i:v,o:v,d(e){e&&a(n),e&&a(p),e&&a(s),e&&a(u),e&&a(r),e&&a(c),e&&a(l)}}}const B={title:"MIN TREDJE POST",date:"2023-01-17"};class C extends w{constructor(n){super(),M(this,n,null,H,R,{})}}export{C as default,B as metadata};
