import{V as i,_ as A,c as m,a as d,w as y,d as s,e,b as E,r as C,o as _}from"./app.f8817b4c.js";const{defineComponent:B}=i,f=B({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:n,createVNode:t,withCtx:a,openBlock:r,createBlock:p}=i;function c(D,l){const u=n("CustomRender"),o=n("ClientOnly");return r(),p(o,null,{default:a(()=>[t(u,{render:"render content in span element",as:"span"})]),_:1})}return{render:c,...{}}}(),"render-demo-1":function(){const{resolveComponent:n,createVNode:t,withCtx:a,openBlock:r,createBlock:p}=i;function c(l,u){const o=n("CustomRender"),h=n("ClientOnly");return r(),p(h,null,{default:a(()=>[t(o,{render:l.titleRender,m:3,n:"abc"},null,8,["render"])]),_:1})}const{h:F}=i;return{render:c,...{setup(){return{titleRender:({m:u,n:o})=>F("h1",{},`content render with render function ${u}${o}`)}}}}}()}}),O=JSON.parse('{"title":"CustomRender","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49render","slug":"\u81EA\u5B9A\u4E49render","link":"#\u81EA\u5B9A\u4E49render","children":[]},{"level":2,"title":"\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6","slug":"\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6","link":"#\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6","children":[]},{"level":2,"title":"props","slug":"props","link":"#props","children":[]},{"level":2,"title":"events","slug":"events","link":"#events","children":[]},{"level":2,"title":"slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"component/CustomRender.md"}'),v=s("h1",{id:"customrender",tabindex:"-1"},[e("CustomRender "),s("a",{class:"header-anchor",href:"#customrender","aria-hidden":"true"},"#")],-1),b=s("p",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3",-1),g=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[e("\u57FA\u7840\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),x=s("p",null,"as \u4FEE\u6539\u6807\u7B7E",-1),R=s("div",{class:"language-vue"},[s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"CustomRender"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"render"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"render content in span element"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"as"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"span"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"})])])],-1),k=s("h2",{id:"\u81EA\u5B9A\u4E49render",tabindex:"-1"},[e("\u81EA\u5B9A\u4E49render "),s("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49render","aria-hidden":"true"},"#")],-1),V=s("div",{class:"language-vue"},[s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"CustomRender"),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"render"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"titleRender"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"m"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"n"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"abc"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"jsx"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"h"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"setup"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"titleRender"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"({"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"m"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"n"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"})"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"h"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"h1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{},"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"content render with render function "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"m"),s("span",{style:{color:"#89DDFF"}},"}${"),s("span",{style:{color:"#A6ACCD"}},"n"),s("span",{style:{color:"#89DDFF"}},"}`"),s("span",{style:{color:"#F07178"}},")")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"titleRender"),s("span",{style:{color:"#89DDFF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"})])])],-1),$=E(`<h2 id="\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CustomRender</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">as</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">BaseButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">small</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> click me </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">CustomRender</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BaseButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@apathia/apathia</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>offset-top</td><td>number</td><td>\u5426</td><td>\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB</td><td>0</td></tr><tr><td>offset-bottom</td><td>number</td><td>\u5426</td><td>\u8DDD\u79BB\u5E95\u90E8\u7684\u8DDD\u79BB</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td><td>true/false</td></tr></tbody></table><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u663E\u793A\u5185\u5BB9</td><td>-</td></tr></tbody></table>`,8);function w(n,t,a,r,p,c){const F=C("render-demo-0"),D=C("demo"),l=C("render-demo-1");return _(),m("div",null,[v,b,g,x,d(D,{customClass:"undefined",sourceCode:`<template><ClientOnly>
  <CustomRender render="render content in span element" as="span" />
</ClientOnly></template>
`},{highlight:y(()=>[R]),default:y(()=>[d(F)]),_:1}),k,d(D,{customClass:"undefined",sourceCode:`<template><ClientOnly>
  <CustomRender :render="titleRender" :m="3" n="abc" />
</ClientOnly></template>

<script lang="jsx">
import { h } from 'vue'

export default {
  setup() {
    const titleRender = ({ m, n }) =>
      h('h1', {}, \`content render with render function \${m}\${n}\`)

    return {
      titleRender,
    }
  },
}
<\/script>
`},{highlight:y(()=>[V]),default:y(()=>[d(l)]),_:1}),$])}const q=A(f,[["render",w]]);export{O as __pageData,q as default};