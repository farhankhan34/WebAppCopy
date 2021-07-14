parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iXit":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(a,n,r,d,i,l,u){e(this,t),this.taskName=a,this.dueDate=n,this.eta=r,this.completionTime=d,this.priority=i,this.completionStatus=l,this.board=u,this.taskID=t.allTasks.length+1}return a(t,[{key:"render",value:function(){var e=document.createElement("div");e.setAttribute("class","card");var a=document.createElement("h3");a.textContent=this.taskName,e.appendChild(a);var n=document.createElement("p");n.textContent=this.dueDate,e.appendChild(n);var r=document.createElement("button");r.textContent="Delete Task",r.taskObject=this,r.addEventListener("click",t.removeTask,!1),e.appendChild(r),this.board.tasks.appendChild(e)}},{key:"unRender",value:function(){this.board.tasks.innerHTML=""}}],[{key:"add",value:function(e,a,n,r,d,i,l){var u=new t(e,a,n,r,d,i,l);t.allTasks.push(u),u.render(),console.log(t.allTasks.length)}},{key:"renderAll",value:function(){t.allTasks.forEach(function(e){e.render()})}},{key:"unrenderAll",value:function(){t.allTasks.forEach(function(e){e.unRender()})}},{key:"removeTask",value:function(e){alert("Delete Task '"+e.currentTarget.taskID+"' ?");var a=t.allTasks.filter(function(t){return t.taskID!=e.currentTarget.taskObject.taskID});t.allTasks=a,t.unrenderAll(),t.renderAll()}},{key:"saveTask",value:function(e){var a=document.getElementById("cardName").value,n=document.getElementById("cardDueDate").value;t.add(a,n,"3days","","3","new",e.currentTarget.boardObject)}},{key:"taskAddForm",value:function(e){alert("Created by "+e.name);var a=document.createElement("div");a.setAttribute("class","card card-form-div");var n=document.createElement("div");n.setAttribute("id","cardForm"),a.appendChild(n);var r=document.createElement("input");r.setAttribute("id","cardName"),r.setAttribute("type","text"),n.appendChild(r);var d=document.createElement("input");d.setAttribute("id","cardDueDate"),d.setAttribute("type","date"),n.appendChild(d);var i=document.createElement("input");i.setAttribute("id","cardETA"),i.setAttribute("type","date"),n.appendChild(i);var l=document.createElement("input");l.setAttribute("id","cardCompletionTime"),n.appendChild(l);var u=document.createElement("button");u.textContent="Save",u.boardObject=e,u.addEventListener("click",t.saveTask,!1),n.appendChild(u),e.boardLane.appendChild(a)}}]),t}();exports.default=r,n(r,"allTasks",[]);
},{}],"nML2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./task"));function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=function(){function t(n){a(this,t),this.name=n,e.default.allBoards&&(this.boardID=e.default.allBoards.length+1)}return r(t,[{key:"addTask",value:function(t,a,n,r,d,l){e.default.add(t,a,n,r,d,l,this)}},{key:"render",value:function(e){this.boardLane=document.createElement("div"),this.boardLane.setAttribute("class","board");var a=document.createElement("div");a.setAttribute("class","label"),a.innerHTML=this.name,this.boardLane.appendChild(a);var n=document.createElement("button");n.textContent="+",n.boardObject=this,n.addEventListener("click",t.taskAddUI,!1),this.boardLane.appendChild(n),this.tasks=document.createElement("div"),this.tasks.setAttribute("class","all-tasks"),this.tasks.innerHTML="Put all tasks in here!",this.boardLane.appendChild(this.tasks),e.appendChild(this.boardLane)}}],[{key:"add",value:function(e){var a=new t(e);return t.allBoards.push(a),a}},{key:"renderAll",value:function(e){var a=document.getElementById(e);t.allBoards.forEach(function(e){e.render(a)})}},{key:"taskAddUI",value:function(t){e.default.taskAddForm(t.currentTarget.boardObject)}}]),t}();exports.default=l,d(l,"allBoards",[]);
},{"./task":"iXit"}]},{},["nML2"], null)
//# sourceMappingURL=/board.f0c084b8.js.map