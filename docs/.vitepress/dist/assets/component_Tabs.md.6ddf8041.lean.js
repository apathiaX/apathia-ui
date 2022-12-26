import{V as p,_ as g,c as v,a as d,w as A,e as E,b as s,d as l,r as h,o as _}from"./app.fa44e209.js";const{defineComponent:f}=p,x=f({name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:F,createElementVNode:y,resolveComponent:t,createVNode:D,withCtx:u,openBlock:i,createBlock:a}=p;function n(o,e){const C=t("Tabs"),c=t("ClientOnly");return i(),a(c,null,{default:u(()=>[y("div",null,"Current Tab: "+F(o.tab),1),D(C,{modelValue:o.tab,"onUpdate:modelValue":e[0]||(e[0]=m=>o.tab=m),list:o.list},null,8,["modelValue","list"])]),_:1})}const{ref:r,reactive:b}=p;return{render:n,...{setup(){const o=r(""),e=b([1,2,3,4]);return{tab:o,list:e}}}}}(),"render-demo-1":function(){const{toDisplayString:F,createElementVNode:y,resolveComponent:t,createVNode:D,withCtx:u,openBlock:i,createBlock:a}=p;function n(o,e){const C=t("Tabs"),c=t("ClientOnly");return i(),a(c,null,{default:u(()=>[y("div",null,"Current Tab: "+F(o.tab),1),D(C,{modelValue:o.tab,"onUpdate:modelValue":e[0]||(e[0]=m=>o.tab=m),list:o.list,"show-label":o.showLabel},null,8,["modelValue","list","show-label"])]),_:1})}const{ref:r,reactive:b}=p;return{render:n,...{setup(){const o=r(""),e=b([1,2,3,4]);return{tab:o,list:e,showLabel:c=>`tab-${c}`}}}}}()}}),$=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u663E\u793A\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u663E\u793A\u6837\u5F0F","link":"#\u81EA\u5B9A\u4E49\u663E\u793A\u6837\u5F0F","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"component/Tabs.md"}'),T=E('<h1 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-hidden="true">#</a></h1><p>\u6807\u7B7E\u9875</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>tabs \u4EC5\u4EC5\u5904\u7406\u4E00\u5C42\u6807\u7B7E\u7684\u60C5\u51B5\u3002\u82E5\u6709\u4E8C\u7EA7\u6807\u7B7E\u53EF\u4F7F\u7528 navbar \u7EC4\u4EF6\u3002</p></div><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u9009\u4E2D\u503C\uFF0C<code>list</code> \u5B9A\u4E49\u663E\u793A\u9009\u9879</p>',5),k=s("div",{class:"language-vue"},[s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Current Tab: "),s("span",{style:{color:"#89DDFF"}},"{{"),s("span",{style:{color:"#A6ACCD"}}," tab "),s("span",{style:{color:"#89DDFF"}},"}}</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"Tabs"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"list"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"list"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"reactive"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"setup"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"TabItem"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"number"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," ["),s("span",{style:{color:"#A6ACCD"}},"k"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#F07178"}},"]"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"any"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"list"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"reactive"),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"TabItem"),s("span",{style:{color:"#F07178"}},"[]"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#F07178"}},"(["),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"4"),s("span",{style:{color:"#F07178"}},"])")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"list")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("h2",{id:"\u81EA\u5B9A\u4E49\u663E\u793A\u6837\u5F0F",tabindex:"-1"},[l("\u81EA\u5B9A\u4E49\u663E\u793A\u6837\u5F0F "),s("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u663E\u793A\u6837\u5F0F","aria-hidden":"true"},"#")],-1),V=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"show-label"),l(" \u53EF\u4EE5\u81EA\u5B9A\u4E49 "),s("code",null,"tab"),l(" \u7684\u663E\u793A\u5185\u5BB9")],-1),N=s("div",{class:"language-vue"},[s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Current Tab: "),s("span",{style:{color:"#89DDFF"}},"{{"),s("span",{style:{color:"#A6ACCD"}}," tab "),s("span",{style:{color:"#89DDFF"}},"}}</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"Tabs"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"list"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"list"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"show-label"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"showLabel"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"reactive"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"setup"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"TabItem"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"number"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," ["),s("span",{style:{color:"#A6ACCD"}},"k"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#F07178"}},"]"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"any"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"list"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"reactive"),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"TabItem"),s("span",{style:{color:"#F07178"}},"[]"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#F07178"}},"(["),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"4"),s("span",{style:{color:"#F07178"}},"])")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"showLabel"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"TabItem"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"tab-"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#89DDFF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"list"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"showLabel")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),I=E('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">\u7ED1\u5B9A\u503C</td><td style="text-align:right;">string,number</td><td style="text-align:right;">\u65E0</td></tr><tr><td>list</td><td style="text-align:center;">tab \u7684\u914D\u7F6E</td><td style="text-align:right;">string[], number[], any[]</td><td style="text-align:right;">\u65E0</td></tr><tr><td>underline</td><td style="text-align:center;">\u662F\u5426\u662F\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>showLabel</td><td style="text-align:center;">\u663E\u793Alabel\u7684\u65B9\u6CD5</td><td style="text-align:right;">function</td><td style="text-align:right;">(tab) =&gt; tab</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><blockquote><p>change: \u4FEE\u6539\u65F6\u89E6\u53D1\uFF0C\u53C2\u6570 tab</p></blockquote>',4);function L(F,y,t,D,u,i){const a=h("render-demo-0"),n=h("demo"),r=h("render-demo-1");return _(),v("div",null,[T,d(n,{customClass:"undefined",sourceCode:`<template><ClientOnly>\r
  <div>Current Tab: {{ tab }}</div>\r
\r
  <Tabs v-model="tab" :list="list" />\r
</ClientOnly></template>\r
\r
<script lang="ts">\r
import { ref, reactive } from 'vue'\r
\r
export default {\r
  setup() {\r
    type TabItem = string | number | { [k: string]: any }\r
    const tab = ref<string>('')\r
    const list = reactive<TabItem[]>([1, 2, 3, 4])\r
\r
    return {\r
      tab,\r
      list\r
    }\r
  }\r
}\r
<\/script>\r
`},{highlight:A(()=>[k]),default:A(()=>[d(a)]),_:1}),w,V,d(n,{customClass:"undefined",sourceCode:`<template><ClientOnly>\r
  <div>Current Tab: {{ tab }}</div>\r
\r
  <Tabs v-model="tab" :list="list" :show-label="showLabel" />\r
</ClientOnly></template>\r
\r
<script lang="ts">\r
import { ref, reactive } from 'vue'\r
\r
export default {\r
  setup() {\r
    type TabItem = string | number | { [k: string]: any }\r
    const tab = ref<string>('')\r
    const list = reactive<TabItem[]>([1, 2, 3, 4])\r
\r
    const showLabel = (tab: TabItem) => {\r
      return \`tab-\${tab}\`\r
    }\r
\r
    return {\r
      tab,\r
      list,\r
      showLabel\r
    }\r
  }\r
}\r
<\/script>\r
`},{highlight:A(()=>[N]),default:A(()=>[d(r)]),_:1}),I])}const S=g(x,[["render",L]]);export{$ as __pageData,S as default};
