var A_tableau = [];


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
}


function displayNumbers() {
    for (let I_index = 0 ; I_index < A_tableau.length ; I_index++){
	    setTimeout(changeValue, I_index*2000, "js_value", A_tableau[I_index]);
    }
}


displayNumbers();

console.log(A_tableau);
