(function(){"use strict";var t={5577:function(t,e,n){var o=n(5130),i=n(8767),r=n(6768),l=n(4232);const u={class:"contain row d-flex justify-content-around align-items-center"},s={class:"input col col-4 text-center d-flex justify-content-center align-items-center"},c={class:"row"},a=(0,r.Lk)("label",null,"INPUT WORD",-1),d={class:"col col-2 text-center d-flex justify-content-center align-items-center"},p={class:"row"},f=(0,r.Lk)("label",null,"How much city?",-1),h={class:"row"},m={class:"mt-5"},v=(0,r.Lk)("label",null,"Spec symbol",-1),L={class:"row"},w={class:"input col col-4 text-center d-flex justify-content-center align-items-center"},y={class:"row"},x=(0,r.Lk)("label",null,"INPUT CITY",-1),k={class:"d-flex justify-content-center align-items-center"},b={class:"row d-flex justify-content-center align-items-center"},g={class:"row d-flex justify-content-center align-items-center"};function j(t,e,n,i,j,C){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",u,[(0,r.Lk)("div",s,[(0,r.Lk)("div",c,[a,(0,r.bo)((0,r.Lk)("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":e[0]||(e[0]=t=>i.input2=t)},null,512),[[o.Jo,i.input2]]),(0,r.Lk)("input",{type:"file",onChange:e[1]||(e[1]=(...t)=>C.wordLoad&&C.wordLoad(...t))},null,32)])]),(0,r.Lk)("div",d,[(0,r.Lk)("div",p,[(0,r.Lk)("div",null,[f,(0,r.Lk)("div",h,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.howMuchCity=t),type:"range",min:"1",max:"10",step:"1"},null,512),[[o.Jo,i.howMuchCity]]),(0,r.Lk)("span",null,(0,l.v_)(i.howMuchCity),1)])]),(0,r.Lk)("div",m,[v,(0,r.Lk)("div",L,[(0,r.bo)((0,r.Lk)("textarea",{name:"",id:"",cols:"5",rows:"5","onUpdate:modelValue":e[3]||(e[3]=t=>i.prefix=t)},null,512),[[o.Jo,i.prefix]])])])])]),(0,r.Lk)("div",w,[(0,r.Lk)("div",y,[x,(0,r.bo)((0,r.Lk)("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=t=>i.input1=t)},null,512),[[o.Jo,i.input1]]),(0,r.Lk)("input",{type:"file",onChange:e[5]||(e[5]=(...t)=>C.cityLoad&&C.cityLoad(...t))},null,32)])])]),(0,r.Lk)("div",k,[(0,r.Lk)("div",b,[(0,r.bo)((0,r.Lk)("textarea",{cols:"50",rows:"10",readonly:"","onUpdate:modelValue":e[6]||(e[6]=t=>i.output=t)},null,512),[[o.Jo,i.output]]),(0,r.Lk)("div",g,[(0,r.Lk)("button",{class:"col-6",onClick:e[7]||(e[7]=(...t)=>C.convertInput&&C.convertInput(...t))},"Create"),(0,r.Lk)("button",{class:"col-6",onClick:e[8]||(e[8]=(...t)=>C.loadResultFile&&C.loadResultFile(...t))},"Load result file")])])])],64)}n(4114),n(4603),n(7566),n(8721);var C=n(144),R={name:"App",setup(){const t=(0,C.KR)(["text1","text2","text3","text4","text5","text6"]);return{data:t,input1:(0,C.KR)(""),input2:(0,C.KR)(""),output:(0,C.KR)(""),howMuchCity:(0,C.KR)(null),prefix:(0,C.KR)(""),cityLoadFile:(0,C.KR)(null),wordLoadFile:(0,C.KR)(null)}},computed:{trimInput1(){return this.input1.trim().split("\n")},trimInput2(){return this.input2.trim().split("\n")}},methods:{convertInput(){if(!this.trimInput1.length||!this.trimInput2.length||!this.howMuchCity||!this.prefix)return void alert("Please fill in all fields");const t=[];for(let n=0;n<this.trimInput1.length;n+=Number(this.howMuchCity))this.trimInput2.forEach((e=>{const o=e.trim(),i=this.createTrimText(n),r=this.prefix.split(/\n/);r.push("");const l=this.addPrefixAndJoin(i,r);if(!l)return;const u=this.addWordAndJoin(l,o);t.push(u)}));const e=t.flat();this.output=e.filter((t=>""!==t.trim())).join("\n")},createTrimText(t){const e=[];for(let n=0;n<this.howMuchCity;n++)e.push(this.trimInput1[t+n]);return e},addPrefixAndJoin(t,e){const n=t.filter((t=>void 0!==t));let o=[];if(console.log(n),console.log(n.length<Number(this.howMuchCity)),!(n.length<Number(this.howMuchCity))){for(let t=0;t<e.length;t++){const i=e[t];let r=[];for(const t of n){const e=t.trim();e&&r.push(i+e)}o.push(r)}return o}alert("Not enough input for last field")},addWordAndJoin(t,e){let n=[];for(const o of t){const t=o.join(" "),i=e+" "+t;n.push(i)}return n.join("\n")},cityLoad(t){const e=t.target.files[0],n=new FileReader;n.onload=()=>{const t=n.result.split("\n").filter((t=>""!==t.trim())),e=t.join("\n");this.cityLoadFile=e,console.log(this.cityLoadFile),this.input1=this.cityLoadFile},n.onerror=()=>{console.error("Ошибка чтения файла")},n.readAsText(e)},wordLoad(t){const e=t.target.files[0],n=new FileReader;n.onload=()=>{const t=n.result.split("\n").filter((t=>""!==t.trim())),e=t.join("\n");this.wordLoadFile=e,console.log(this.wordLoadFile),this.input2=this.wordLoadFile},n.onerror=()=>{console.error("Ошибка чтения файла")},n.readAsText(e)},loadResultFile(){if(!this.output)return void alert("You dont has any result");const t=new Blob([this.output],{type:"text/plain"}),e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download="output.txt",document.body.appendChild(n),n.click(),URL.revokeObjectURL(e),document.body.removeChild(n)}}},F=n(1241);const O=(0,F.A)(R,[["render",j]]);var I=O;const T=(0,o.Ef)(I);T.use((0,i.nX)()),T.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var l=1/0;for(a=0;a<t.length;a++){o=t[a][0],i=t[a][1],r=t[a][2];for(var u=!0,s=0;s<o.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(u=!1,r<l&&(l=r));if(u){t.splice(a--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,l=o[0],u=o[1],s=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var a=s(n)}for(e&&e(o);c<l.length;c++)r=l[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},o=self["webpackChunkbootstrap_vue_app"]=self["webpackChunkbootstrap_vue_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5577)}));o=n.O(o)})();
//# sourceMappingURL=app.776779da.js.map