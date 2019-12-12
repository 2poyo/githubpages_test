// var req = new XMLHttpRequest();
//
// req.onreadystatechange = function() {
//     var result = document.getElementById('result');
//     if(req.readyState == 4) {
//         if(req.status == 200) {
//             result.innerHTML = req.responseText;
//         }
//     }else{
//         result.innerHTML = "通信中...";
//     }
// }
// // req.open('GET', 'helloAjax.php?name=' + encodeURIComponent(document.fm.name.value), true);
// // req.send(null);
// req.open('POST', 'helloAjax.php', true);
// req.setRequestHeader('content-type',
//     'application/x-www-form-urlencoded;charset=UTF-8');
// req.send('name=' + encodeURIComponent(document.fm.name.value));

$('#btnsend').on('click', function(){
    $('#result').text('通信中...');
    // Ajax通信を開始
    $.ajax({
        url: 'helloAjax.php',
        type: 'GET',
        dataType: 'json',
        // フォーム要素の内容をハッシュ形式に変換
        data: $('form').serializeArray(),
        timeout: 5000,
    })
        .done(function(data) {
            // 通信成功時の処理を記述
        })
        .fail(function() {
            // 通信失敗時の処理を記述
        });
})