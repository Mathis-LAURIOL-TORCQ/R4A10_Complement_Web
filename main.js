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


function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function fillArray(A_array) {
    for (let I_index = 0 ; I_index < 20 ; I_index++){
	    A_tableau.push(getRandomArbitrary(-10, 40));
    }
}

fillArray(A_tableau);

function changeValue(S_id, S_newValue) {
    const elem = document.getElementById(S_id);
    elem.innerHTML = S_newValue;
    updateCss(S_newValue, elem);
}


function displayNumbers() {
    for (let I_index = 0 ; I_index < A_tableau.length ; I_index++){
	    setTimeout(changeValue, I_index*2000, "js_value", A_tableau[I_index]);
    }
}

function updateCss(S_value, O_elem) {
    if (document.getElementById("contextMessage")) {
        document.getElementById("contextMessage").remove();
    }
    if (S_value > 30) {
        console.log("30");
        O_elem.setAttribute("class", "red");
        createParagraph("Caliente ! Vamos a la playa, ho hoho hoho !!")
    } else if (S_value > 20) {
        console.log("20");
        O_elem.setAttribute("class", "orange");
    }else if (S_value > 0) {
        console.log("10");
        O_elem.setAttribute("class", "green");
    }else if (S_value > -10) {
        console.log("-10");
        O_elem.setAttribute("class", "blue");
        createParagraph("Brrrrrrr, un peu froid ce matin, mets ta cagoule !")
    }
}


function createParagraph(S_text) {
    var newPara = document.createElement("data");
    newPara.setAttribute("role", "alert");
    newPara.setAttribute("aria-live", "assertive");
    newPara.innerHTML = S_text;
    newPara.setAttribute("id", "contextMessage");
    const section = document.getElementById("js_value");
    section.insertAdjacentElement("beforebegin", newPara);
}


displayNumbers();

console.log(A_tableau);
