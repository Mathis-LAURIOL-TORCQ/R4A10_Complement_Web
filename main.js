import Observable from "./Observable.js";
import History from "./History.js";
import Realtime from "./Realtime.js";



var A_tableau = [];

let tabs = document.querySelectorAll(".info-box li a");
let panels = document.querySelectorAll(".info-box article");

for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function () {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = "";
    }

    tab.className = "active";

    for (let i = 0; i < panels.length; i++) {
      panels[i].className = "";
    }

    panels[tabPos].className = "active-panel";
  };
}

let O_observ = new Observable;
let O_History = new History;
let O_Realtime = new Realtime;

O_observ.subscribe(O_History.update);
O_observ.subscribe(O_Realtime.update);

setInterval(O_observ.receive_data, 3000);
