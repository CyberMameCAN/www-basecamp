let new_sheet_name = function(sheetName) {
    let sheet_name = localStorage.getItem('mySheet');
    // console.log(sheet_name);
    let elem = document.getElementById("page-style-sheet");
    elem.href = "assets/css/" + sheet_name;
};
let change_style = function(sheet_name) {
    localStorage.setItem('mySheet', sheet_name);
    new_sheet_name();
};
