/*let wsize = window.screen;
if (wsize.availHeight >= wsize.availWidth) {
    window.document.getElementById("widescreen").style.visibility = "hidden";
}else {
    window.document.getElementById("smartscreen").style.visibility = "hidden";
}
function humbmenu_show() {
    window.document.getElementById("menu").style.visibility = "visible";
}
function hunbmenu_hide() {
    window.document.getElementById("menu").style.visibility = "hidden";
}*/
function get_method() {
    var req = new XMLHttpRequest();
    req.open("GET","https://minfaox3.github.io/asset/csv/artlist.csv",false);
    req.onreadystatechange = function () {
        if(req.readyState === 4){
            if(req.status === 200 || req.status === 0){
                window.document.getElementById("field").insertAdjacentHTML("afterbegin",req.responseText)
            }
        }
    }
    req.send(null);
}