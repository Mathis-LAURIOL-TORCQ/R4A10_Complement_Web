export class History {
    constructor() {
        this.tab_temp = [];
    }

    update(data) {
        let O_table = document.getElementById("historyTable");
        let O_newRow = table.insertRow(0);

        O_newRow.insertCell(0).innerHTML = data;
    }
} 