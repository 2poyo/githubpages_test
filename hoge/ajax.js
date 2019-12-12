// $(function () {
//     $(`#search_button`).click(function () {
//         var data = {request : $(`#box`).getNewValue()};
//
//         $.useAjax({
//             type:"POST",
//             url: ""
//         })
//     });
//
// });

function loadDoc() {
  var xhttp = newXMLHttpRequest();
  xhttp.open("GET", "https://www.google.com",false);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}

// $(function () {
//     $(`#change_btn`).onclick(function () {
//         $(`#change`).load("ajax.txt");
//         alert("hahaha");
//     });
// });