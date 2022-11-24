import{V as c,_ as f,c as B,a as u,w as d,d as s,e as o,b as _,r as C,o as x}from"./app.f8817b4c.js";const{defineComponent:E}=c,v=E({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:p,resolveComponent:l,withCtx:t,createVNode:F,createElementVNode:y,openBlock:D,createBlock:e}=c;function n(r,i){const a=l("BaseButton"),g=l("ClientOnly");return D(),e(g,null,{default:t(()=>[y("div",null,[F(a,{onClick:r.showConfirm},{default:t(()=>[p("\u57FA\u672C\u7528\u6CD5")]),_:1},8,["onClick"])])]),_:1})}const{defineComponent:A,getCurrentInstance:h}=c,m=A({setup(){const{proxy:r}=h(),{confirm:i}=r.useConfirm();function a(){i({title:"\u786E\u8BA4",render:"\u5185\u5BB9",btnPosition:"center"}).then(()=>{console.log("\u786E\u8BA4")}).catch(()=>{console.log("\u53D6\u6D88")})}return{showConfirm:a}}});return{render:n,...m}}()}}),T=JSON.parse('{"title":"confirm","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"props","slug":"props","link":"#props","children":[]}],"relativePath":"component/Confirm.md"}'),k=s("h1",{id:"confirm",tabindex:"-1"},[o("confirm "),s("a",{class:"header-anchor",href:"#confirm","aria-hidden":"true"},"#")],-1),b=s("p",null,"\u786E\u8BA4\u6846",-1),w=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[o("\u57FA\u7840\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),V=s("p",null,"\u786E\u8BA4\u6846\u7684\u57FA\u7840\u7528\u6CD5 useConfirm",-1),N=s("div",{class:"language-vue"},[s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"BaseButton"),s("span",{style:{color:"#89DDFF"}}," @"),s("span",{style:{color:"#C792EA"}},"click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"showConfirm"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"\u57FA\u672C\u7528\u6CD5"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"BaseButton"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"defineComponent"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"getCurrentInstance"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"defineComponent"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"setup"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"proxy"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"getCurrentInstance"),s("span",{style:{color:"#F07178"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"confirm"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"proxy"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"useConfirm"),s("span",{style:{color:"#F07178"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"showConfirm"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"confirm"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        title"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"\u786E\u8BA4"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        render"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"\u5185\u5BB9"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        btnPosition"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"center"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"then"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"\u786E\u8BA4"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"catch"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"\u53D6\u6D88"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"showConfirm"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),I=_('<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>render</td><td style="text-align:center;">\u5185\u5BB9</td><td style="text-align:right;">string &amp; CustomRender</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>confirmText</td><td style="text-align:center;">\u786E\u8BA4\u6309\u94AE</td><td style="text-align:right;">string</td><td style="text-align:right;">\u786E\u8BA4</td></tr><tr><td>cancelText</td><td style="text-align:center;">\u53D6\u6D88\u6309\u94AE</td><td style="text-align:right;">string</td><td style="text-align:right;">\u53D6\u6D88</td></tr><tr><td>btnPosition</td><td style="text-align:center;">\u6309\u94AE\u4F4D\u7F6E</td><td style="text-align:right;">[&#39;left&#39;, &#39;right&#39;, &#39;center&#39;]</td><td style="text-align:right;">right</td></tr><tr><td>renderFooter</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u5E95\u90E8</td><td style="text-align:right;">CustomRender</td><td style="text-align:right;">() =&gt; {}</td></tr></tbody></table>',2);function O(p,l,t,F,y,D){const e=C("render-demo-0"),n=C("demo");return x(),B("div",null,[k,b,w,V,u(n,{customClass:"undefined",sourceCode:`<template><ClientOnly>
  <div>
    <BaseButton @click="showConfirm">\u57FA\u672C\u7528\u6CD5</BaseButton>
  </div>
</ClientOnly></template>

<script>
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { confirm } = proxy.useConfirm()
    function showConfirm() {
      confirm({
        title: '\u786E\u8BA4',
        render: '\u5185\u5BB9',
        btnPosition: 'center',
      })
        .then(() => {
          console.log('\u786E\u8BA4')
        })
        .catch(() => {
          console.log('\u53D6\u6D88')
        })
    }

    return {
      showConfirm,
    }
  },
})
<\/script>
`},{highlight:d(()=>[N]),default:d(()=>[u(e)]),_:1}),I])}const $=f(v,[["render",O]]);export{T as __pageData,$ as default};
