(()=>{"use strict";function t(t,e,n,o,u){const c=document.createElement(t);c.setAttribute(e,n),document.querySelector(o).appendChild(c),c.innerText=u}!function(){const e=document.getElementById("content"),n=document.createElement("nav");e.appendChild(n),t("button","id","button_toggle_menu","nav",""),document.getElementById("button_toggle_menu").setAttribute("class","hide_btm"),t("button","class","button_home","nav","Home"),t("button","class","button_add_task","nav","Add Task"),document.querySelector("#button_toggle_menu").addEventListener("click",(()=>{document.querySelector("nav").classList.toggle("hide-nav"),document.querySelector("#button_toggle_menu").classList.toggle("show_btm"),document.querySelector("#button_toggle_menu").classList.toggle("hide_btm")}))}(),t("div","class","page","#content","")})();