(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>_});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,"* {\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid yellow; */\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  /* background-color: black; */\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  height: 100dvh;\r\n}\r\n\r\n#project_section {\r\n  grid-column: 1/2;\r\n  background-color: lightblue;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#task_section {\r\n  grid-column: 2/3;\r\n  background-color: lightgreen;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#project_form {\r\n  background-color: lightsalmon;\r\n}\r\n",""]);const _=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var _=0;_<this.length;_++){var s=this[_][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],_=0;_<t.length;_++){var s=t[_],c=o.base?s[0]+o.base:s[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var m=n(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var l=r(u,o);o.byIndex=_,e.splice(_,0,{identifier:d,updater:l,references:1})}a.push(d)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var _=n(i[a]);e[_].references--}for(var s=o(t,r),c=0;c<i.length;c++){var p=n(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{class t{constructor(t,e,n,o,r){this.element=t,this.type=e,this.value=n,this.text=o,this.attach=r;const i=document.createElement(this.element);i.setAttribute(this.type,this.value),document.getElementById(this.attach).appendChild(i),i.innerText=this.text}}class e{constructor(t,e,n,o){this.element=t,this.type=e,this.value=n,this.text=o;const r=document.getElementById(this.element);r.setAttribute(this.type,this.value),r.innerText=this.text}}var o=n(379),r=n.n(o),i=n(795),a=n.n(i),_=n(569),s=n.n(_),c=n(565),p=n.n(c),d=n(216),m=n.n(d),u=n(589),l=n.n(u),f=n(426),k={};k.styleTagTransform=l(),k.setAttributes=p(),k.insert=s().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=m(),r()(f.Z,k),f.Z&&f.Z.locals&&f.Z.locals,new t("div","id","project_section","","content"),new t("h1","id","project_h1_header","To-Do-App","project_section"),new t("form","id","project_form","","project_section"),new e("project_form","name","project_form_name",""),new t("div","id","div_project_form_input_name","","project_form"),new t("label","id","label_project_form_input_name","","div_project_form_input_name"),new e("label_project_form_input_name","for","project_form_input_name","Enter project name"),new t("input","id","project_form_input_name","","div_project_form_input_name"),new e("project_form_input_name","name","project_form_input_name",""),new t("div","id","div_project_form_input_description","","project_form"),new t("label","id","label_project_form_input_description","","div_project_form_input_description"),new e("label_project_form_input_description","for","project_form_input_description","Enter project description"),new t("input","id","project_form_input_description","","div_project_form_input_description"),new e("project_form_input_description","name","project_form_input_description",""),new t("button","id","project_submit_button","","project_form"),new e("project_submit_button","type","submit","Create Project"),new t("div","id","project_holder","","project_section"),document.getElementById("project_form").addEventListener("submit",(t=>{let e={projectName:document.getElementById("project_form_input_name").value,projectDescription:document.getElementById("project_form_input_description").value,list:[]};localStorage.setItem(e.projectName,JSON.stringify(e))})),function(){for(let e=0;e<localStorage.length;e++){new t("div","id",`project_item_holder_${e}`,"","project_holder");let n=localStorage.key(e),o=JSON.parse(localStorage.getItem(localStorage.key(e))).projectDescription;new t("button","id",`project_item_button_${e}`,n,`project_item_holder_${e}`),new t("p","id",`project_item_description_${e}`,o,`project_item_holder_${e}`),document.getElementById(`project_item_button_${e}`).addEventListener("click",(()=>{localStorage.removeItem(document.getElementById(`project_item_button_${e}`).innerText),document.getElementById(`project_item_button_${e}`).remove(),document.getElementById(`project_item_description_${e}`).remove()}))}}(),new t("div","id","task_section","","content"),new t("form","id","task_form","","task_section"),new e("task_form","name","task_form_name",""),new t("div","id","div_task_form_input_name","","task_form"),new t("label","id","label_task_form_input_name","","div_task_form_input_name"),new e("label_task_form_input_name","for","task_form_input_name","Enter task name"),new t("input","id","task_form_input_name","","div_task_form_input_name"),new e("task_form_input_name","name","task_form_input_name",""),new t("div","id","div_task_form_input_description","","task_form"),new t("label","id","label_task_form_input_description","Enter task description","div_task_form_input_description"),new e("label_task_form_input_description","for","task_form_input_description","Enter task description"),new t("input","id","task_form_input_description","","div_task_form_input_description"),new e("task_form_input_description","name","task_form_input_description",""),new t("div","id","div_task_form_input_date","","task_form"),new t("label","id","label_task_form_input_date","Set task due-date","div_task_form_input_date"),new t("input","id","task_form_input_date","","div_task_form_input_date"),new e("task_form_input_date","type","date",""),new e("task_form_input_date","name","task_form_input_date",""),new e("task_form_input_date","min","2023-01-01",""),new e("task_form_input_date","max","2099-01-01",""),Date.prototype.toDateInputValue=function(){var t=new Date(this);return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},document.getElementById("task_form_input_date").value=(new Date).toDateInputValue(),new t("div","id","div_task_form_input_status","","task_form"),new t("labe","id","label_task_form_input_status","Set status: ","div_task_form_input_status"),new t("select","id","task_form_input_status","","div_task_form_input_status"),new t("div","id","div_task_form_input_assign","","task_form"),new t("labe","id","label_task_form_input_assign","Assign task to: ","div_task_form_input_assign"),new t("select","id","task_form_input_assign","","div_task_form_input_assign"),function(){const t=Object.keys(localStorage),e=document.getElementById("task_form_input_assign");for(let n=0;n<t.length;n++){const o=t[n],r=JSON.parse(localStorage.getItem(o)),i=document.createElement("option");i.value=o,i.text=r.projectName,e.appendChild(i)}document.getElementById("task_form").appendChild(e)}(),function(){const t=document.getElementById("task_form_input_status"),e=["Ongoing","Pending","Overdue","Completed"];for(let n of e){const e=document.createElement("option");e.value=n,e.text=n,t.append(e)}document.getElementById("task_form").appendChild(t)}(),new t("button","id","task_submit_button","","task_form"),new e("task_submit_button","type","submit","Create task"),new t("div","id","task_holder","","task_section"),function(){const t=document.getElementById("task_form"),e=document.getElementById("task_form_input_assign");t.addEventListener("submit",(t=>{const n=e.value;let o=JSON.parse(localStorage.getItem(n));localStorage.getItem(n);let r={taskName:document.getElementById("task_form_input_name").value,taskDescription:document.getElementById("task_form_input_description").value,taskDueDate:document.getElementById("task_form_input_date").value,taskStatus:document.getElementById("task_form_input_status").value,taskProject:document.getElementById("task_form_input_assign").value};o.list.push(r),localStorage.setItem(n,JSON.stringify(o))}))}(),function(){for(let e=0;e<localStorage.length;e++){const n=JSON.parse(localStorage.getItem(localStorage.key(e))).list;for(let o=0;o<n.length;o++)new t("div","id",`task_item_holder_p${e}_t${o}`,"","task_holder"),new t("p","id",`task_item_project_p${e}_t${o}`,n[o].taskProject,`task_item_holder_p${e}_t${o}`),new t("p","id",`task_item_name_p${e}_t${o}`,n[o].taskName,`task_item_holder_p${e}_t${o}`),new t("p","id",`task_item_due_date_p${e}_t${o}`,n[o].taskDueDate,`task_item_holder_p${e}_t${o}`),new t("p","id",`task_item_status_p${e}_t${o}`,n[o].taskStatus,`task_item_holder_p${e}_t${o}`),new t("p","id",`task_item_description_p${e}_t${o}`,n[o].taskDescription,`task_item_holder_p${e}_t${o}`),new t("button","id",`task_item_button_p${e}_t${o}`,"Delete",`task_item_holder_p${e}_t${o}`),document.getElementById(`task_item_button_p${e}_t${o}`).addEventListener("click",(()=>{console.log(JSON.parse(localStorage.getItem(localStorage.key(e)))),localStorage.removeItem(n[o]),document.getElementById(`task_item_holder_p${e}_t${o}`).remove()}))}}()})()})();