import{V as u,_ as w,c as R,a as A,w as E,d as l,e as o,b as O,r as B,o as N}from"./app.f8817b4c.js";const{defineComponent:S}=u,j=S({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:r,createVNode:s,withCtx:e,createTextVNode:p,vModelText:y,createElementVNode:d,withDirectives:c,openBlock:D,createBlock:f}=u;function h(t,n){const C=r("Input"),F=r("FormItem"),I=r("Checkbox"),i=r("Radio"),g=r("RadioGroup"),m=r("Option"),V=r("Select"),x=r("Form"),k=r("ClientOnly");return D(),f(k,null,{default:e(()=>[s(x,{disabled:!1,"label-width":"10rem","label-position":"left"},{default:e(()=>[s(F,{label:"\u59D3\u540D",required:"",style:{color:"red"}},{default:e(()=>[s(C,{modelValue:t.form.name,"onUpdate:modelValue":n[0]||(n[0]=a=>t.form.name=a)},null,8,["modelValue"])]),_:1}),s(F,{label:"\u624B\u673A\u53F7","label-width":200,"label-position":"right"},{default:e(()=>[s(C,{modelValue:t.form.phone,"onUpdate:modelValue":n[1]||(n[1]=a=>t.form.phone=a)},null,8,["modelValue"])]),_:1}),s(F,{label:"\u559C\u6B22\u6253\u6E38\u620F\u5417"},{default:e(()=>[s(I,{modelValue:t.form.enjoy_game,"onUpdate:modelValue":n[2]||(n[2]=a=>t.form.enjoy_game=a),"true-value":1,"false-value":0},null,8,["modelValue"])]),_:1}),s(F,{label:"\u6027\u522B"},{default:e(()=>[s(g,{modelValue:t.form.gender,"onUpdate:modelValue":n[3]||(n[3]=a=>t.form.gender=a)},{default:e(()=>[s(i,{value:0},{default:e(()=>[p("\u7537")]),_:1}),s(i,{value:1},{default:e(()=>[p("\u5973")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(F,{label:"\u5176\u4ED6\u4FE1\u606F"},{default:e(()=>[c(d("textarea",{"onUpdate:modelValue":n[4]||(n[4]=a=>t.form.other=a),rows:"1"},null,512),[[y,t.form.other]])]),_:1}),s(F,{label:"\u6700\u559C\u6B22\u7684\u6C34\u679C"},{default:e(()=>[s(V,{modelValue:t.form.fav_fruit,"onUpdate:modelValue":n[5]||(n[5]=a=>t.form.fav_fruit=a)},{default:e(()=>[s(m,{value:1},{default:e(()=>[p("\u82F9\u679C")]),_:1}),s(m,{value:2},{default:e(()=>[p("\u9999\u8549")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const{reactive:b,defineComponent:v}=u,_=v({setup(){return{form:b({name:"",phone:0,enjoy_game:1,secret:!1,gender:0,other:"",fav_fruit:1})}}});return{render:h,..._}}()}}),M=JSON.parse('{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"props","slug":"props","link":"#props","children":[{"level":3,"title":"Form props","slug":"form-props","link":"#form-props","children":[]},{"level":3,"title":"FormItem props","slug":"formitem-props","link":"#formitem-props","children":[]}]},{"level":2,"title":"slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"component/Form.md"}'),q=l("h1",{id:"form-\u8868\u5355",tabindex:"-1"},[o("Form \u8868\u5355 "),l("a",{class:"header-anchor",href:"#form-\u8868\u5355","aria-hidden":"true"},"#")],-1),G=l("p",null,"\u8868\u5355\u4E3B\u8981\u63D0\u4F9B\u7EDF\u4E00\u7684\u683C\u5F0F\u548C\u8868\u5355\u7684\u5E03\u5C40\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u8868\u5355\u7684\u5C5E\u6027\uFF0C\u7EDF\u4E00\u8868\u5355\u5185\u5143\u7D20\u7684\u6837\u5F0F",-1),P=l("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[o("\u57FA\u7840\u7528\u6CD5 "),l("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),T=l("div",{class:"language-vue"},[l("pre",{class:"shiki"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Form"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"disabled"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#FF9CAC"}},"false"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label-width"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"10rem"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label-position"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"left"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u59D3\u540D"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"required"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"style"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"color: red"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Input"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"name"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," />")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u624B\u673A\u53F7"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"label-width"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"200"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label-position"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"right"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Input"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"phone"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," />")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u559C\u6B22\u6253\u6E38\u620F\u5417"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Checkbox"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"enjoy_game"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"true-value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"false-value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," />")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u6027\u522B"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"RadioGroup"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"gender"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Radio"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u7537"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"Radio"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Radio"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u5973"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"Radio"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"RadioGroup"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u5176\u4ED6\u4FE1\u606F"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"textarea"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"other"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"rows"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"textarea"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u6700\u559C\u6B22\u7684\u6C34\u679C"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Select"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"fav_fruit"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Option"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u82F9\u679C"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"Option"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"Option"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u9999\u8549"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"Option"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"Select"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"FormItem"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#FFCB6B"}},"Form"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"}),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"reactive"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"defineComponent"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'")]),o(`
`),l("span",{class:"line"}),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"defineComponent"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"setup"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"reactive"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      phone"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      enjoy_game"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      secret"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"false"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      gender"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      other"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      fav_fruit"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#F07178"}},")")]),o(`
`),l("span",{class:"line"}),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"form"),l("span",{style:{color:"#89DDFF"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"},")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"})])])],-1),U=O(`<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><h3 id="form-props" tabindex="-1"><code>Form</code> props <a class="header-anchor" href="#form-props" aria-hidden="true">#</a></h3><p>Form\u7EC4\u4EF6\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E9B\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u4F1A\u5F71\u54CD\u5230Form\u7EC4\u4EF6\u4E0B\u6240\u6709\u7684\u8868\u5355</p><table><thead><tr><th>name</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>boolean</td><td>\u5426</td><td>disabled\u6240\u6709\u8868\u5355\u8F93\u5165</td><td>undefined</td></tr><tr><td>inline</td><td>boolean</td><td>\u5426</td><td>inline\u6A21\u5F0F\u6240\u6709\u7684FormItem\u5C06\u5728\u4E00\u884C</td><td>false</td></tr><tr><td>labelWidth</td><td>number/string</td><td>\u5426</td><td>label\u7684\u5BBD\u5EA6\uFF0C\u4F20\u6570\u5B57\u81EA\u52A8\u52A0 <code>px</code></td><td>80</td></tr><tr><td>labelPosition</td><td>&#39;left&#39;, &#39;right&#39;, &#39;top&#39;</td><td>\u5426</td><td>\u63A7\u5236<code>FormItem</code>label\u7684\u4F4D\u7F6E</td><td>&#39;left&#39;</td></tr><tr><td>labelAlign</td><td>&#39;top&#39; | &#39;center&#39; | &#39;bottom&#39;</td><td>\u5426</td><td>FormItem\u91CC label\u7684\u5782\u76F4\u65B9\u5411\u7684\u5BF9\u9F50</td><td>&#39;top&#39;</td></tr></tbody></table><h3 id="formitem-props" tabindex="-1"><code>FormItem</code> props <a class="header-anchor" href="#formitem-props" aria-hidden="true">#</a></h3><p>\u5982\u679C<code>FormItem</code> \u4E2D\u58F0\u660E\u4E86\u548C <code>Form</code>\u540C\u6837\u7684props\uFF0C\u5C06\u4F1A\u8986\u76D6 <code>Form</code> \u7684props</p><table><thead><tr><th>name</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>string</td><td>\u5426</td><td>\u7528\u6765\u505A\u8868\u5355\u6821\u9A8C(\u5F85\u5B8C\u5584)</td><td>undefined</td></tr><tr><td>required</td><td>boolean</td><td>\u5426</td><td>\u662F\u5426\u5FC5\u586B</td><td>false</td></tr><tr><td>offset</td><td>boolean</td><td>\u5426</td><td>\u5728label\u4E3A\u7A7A\u65F6\uFF0ClabelPosition\u4E0D\u4E3Atop\u65F6label\u5360\u7528\u7684\u5BBD\u5EA6</td><td>false</td></tr><tr><td>labelWidth</td><td>number/string</td><td>\u5426</td><td>label\u7684\u5BBD\u5EA6\uFF0C\u4F20\u6570\u5B57\u81EA\u52A8\u52A0 <code>px</code></td><td>80</td></tr><tr><td>inline</td><td>boolean</td><td>\u5426</td><td>inline\u6A21\u5F0F\u6240\u6709\u7684FormItem\u5C06\u5728\u4E00\u884C</td><td>false</td></tr><tr><td>labelPosition</td><td>&#39;left&#39;, &#39;right&#39;, &#39;top&#39;</td><td>\u5426</td><td>\u63A7\u5236<code>FormItem</code>label\u7684\u4F4D\u7F6E</td><td>&#39;left&#39;</td></tr><tr><td>contentClass</td><td>string</td><td>\u5426</td><td>\u8BBE\u7F6EFormItem\u9664\u4E86label\u4E4B\u5916\u7684\u5BB9\u5668\u7684class</td><td>&#39;&#39;</td></tr><tr><td>labelAlign</td><td>&#39;top&#39; | &#39;center&#39; | &#39;bottom&#39;</td><td>\u5426</td><td>FormItem\u91CC label\u7684\u5782\u76F4\u65B9\u5411\u7684\u5BF9\u9F50</td><td>&#39;top&#39;</td></tr></tbody></table><p><code>FormItem</code> \u7684 <code>labelWidth</code>, <code>inline</code>, <code>labelPosition</code>\u53EF\u4EE5\u8986\u76D6<code>Form</code>\u7684\u914D\u7F6E</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u5728 <code>Form</code> \u4E0A\u8BBE\u7F6E\u4E86 <code>disabled = true</code>\u5C5E\u6027\uFF0C\u4F7F\u7528 <code>Form</code>\u4E0B\u9762\u7684\u6240\u6709 apathia \u8868\u5355\uFF08\u5982Input, Checkbox)\u90FD\u4F1A\u88ABdisabled\uFF0C \u9664\u975E\u4F60\u5728 \u8868\u5355\u7EC4\u4EF6\u4E0A\u8BBE\u7F6Edisabled \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u8868\u5355\u7EC4\u4EF6\u7684 <code>props</code> \u4F18\u5148\u7EA7\u9AD8\u4E8E <code>form</code></p></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormItem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">&lt;!-- won&#39;t be disabled --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">FormItem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormItem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Input</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">&lt;!-- will be disabled --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">FormItem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u663E\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>label</td><td>\u5185\u5BB9label\uFF0C\u5982\u679C\u63D0\u4F9B\uFF0C\u5C06\u4F1A\u8986\u76D6label prop</td><td>-</td></tr></tbody></table>`,12);function $(r,s,e,p,y,d){const c=B("render-demo-0"),D=B("demo");return N(),R("div",null,[q,G,P,A(D,{customClass:"undefined",sourceCode:`<template><ClientOnly>
  <Form :disabled="false" label-width="10rem" label-position="left">
    <FormItem label="\u59D3\u540D" required style="color: red">
      <Input v-model="form.name" />
    </FormItem>
    <FormItem label="\u624B\u673A\u53F7" :label-width="200" label-position="right">
      <Input v-model="form.phone" />
    </FormItem>
    <FormItem label="\u559C\u6B22\u6253\u6E38\u620F\u5417">
      <Checkbox v-model="form.enjoy_game" :true-value="1" :false-value="0" />
    </FormItem>
    <FormItem label="\u6027\u522B">
      <RadioGroup v-model="form.gender">
        <Radio :value="0">\u7537</Radio>
        <Radio :value="1">\u5973</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="\u5176\u4ED6\u4FE1\u606F">
      <textarea v-model="form.other" rows="1"></textarea>
    </FormItem>
    <FormItem label="\u6700\u559C\u6B22\u7684\u6C34\u679C">
      <Select v-model="form.fav_fruit">
        <Option :value="1">\u82F9\u679C</Option>
        <Option :value="2">\u9999\u8549</Option>
      </Select>
    </FormItem>
  </Form>
</ClientOnly></template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      phone: 0,
      enjoy_game: 1,
      secret: false,
      gender: 0,
      other: '',
      fav_fruit: 1,
    })

    return {
      form,
    }
  },
})
<\/script>
`},{highlight:E(()=>[T]),default:E(()=>[A(c)]),_:1}),U])}const J=w(j,[["render",$]]);export{M as __pageData,J as default};