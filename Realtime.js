export class Realtime {
    constructor() {
        this.currentValue = 0;
        this.elementId = "js_value";
    }

    update(data) {
        this.currentValue = data; 
        this.changeValue(this.elementId);
    }

    changeValue(S_id) {
        const elem = document.getElementById(S_id);
        elem.innerHTML = this.currentValue;
        updateCss(S_newValue, elem);
    }


    updateCss(S_value, O_elem) {
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

    createParagraph(S_text) {
        var newPara = document.createElement("data");
        newPara.setAttribute("role", "alert");
        newPara.setAttribute("aria-live", "assertive");
        newPara.innerHTML = S_text;
        newPara.setAttribute("id", "contextMessage");
        const section = document.getElementById("js_value");
        section.insertAdjacentElement("beforebegin", newPara);
    }
}