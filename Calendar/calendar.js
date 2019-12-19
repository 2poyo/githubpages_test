// document.getElementById("view_today").innerText = getToday();
function submitPlan() {
    alert("あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？" +
    "あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！" +
    "覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。" +
    "裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！" +
    "貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！");
}



const weeks = ['日', '月', '火', '水', '木', '金', '土'];

var taskData = {
    1 :{
        "moji":"wawawa"
    }
};



function createData(year,month) {
    var CalData = {};
    CalData["year"] = year ;
    CalData["month"] = month ;
    CalData["startDate"] = new Date(year, month - 1, 1); // 月の最初の日を取得
    CalData["endDate"] = new Date(year, month,  0); // 月の最後の日を取得
    CalData["endDayCount"] = CalData["endDate"].getDate(); // 月の末日
    CalData["lastMonthEndDate"] = new Date(year, month - 2, 0); // 前月の最後の日の情報
    CalData["lastMonthendDayCount"] = CalData["lastMonthEndDate"].getDate(); // 前月の末日
    CalData["startDay"] = CalData["startDate"].getDay(); // 月の最初の日の曜日を取得
    // for(let i=0;i<10;i++){
    //     CalData[i.toString()] = i ;
    //     alert(CalData[i.toString()]);
    // }

}





function createCalendar() {
    var now = new Date();
    var year = now.getFullYear();
    var mon =  now.getMonth()+1;
    var day = now.getDate();
    const startDate = new Date(year,mon-1,1);
    const endDate = new Date(year,mon,0);
    const endDayCount = endDate.getDate();
    const lastMonthEndDate = new Date(year, mon - 2,0);
    const lastMonthendDayCount = lastMonthEndDate.getDate();
    const startDay = startDate.getDay();
    let calendarHtml = '';
    let dayCount = 1;
    let lastcnt = 0;


    calendarHtml += '<br><table border="1" rules="all">';
    calendarHtml += '<tr><th colspan="7">' +
        '<input type="image" src="img/left_buttom.png" align="left">' +
        '<input type="image" src="img/right_buttom.png" align="right">' +
        '<div align="center" class="nowMonth"> ' + year + "年" + mon + "月" + '</div>' +
        '</th></tr>';
    for(let i=0;i<10;i++){
        CalData[i.toString()] = i ;
        alert(CalData[i.toString()]);
    }
    for (let i = 0; i < weeks.length; i++) calendarHtml += '<td class="indexWeek">' + weeks[i] + '</td>';
    for(let i=0;i<6;i++){
        calendarHtml += '<tr>';
        if(lastcnt) break;

        for(let j=0;j<7;j++){
            if(i === 0 && j<startDay){
                let num = lastMonthendDayCount - startDay + j + 1;
                calendarHtml += '<td class="thin_day">' + num + '</td>';
            } else if(dayCount>endDayCount){
                let num = dayCount - endDayCount;
                calendarHtml += '<td class="thin_day">' + num + '</td>';
                dayCount += 1;
            } else {
                calendarHtml += '<td class="day">' + dayCount + '</td>';
                dayCount += 1;
                if(dayCount === endDayCount) lastcnt = 1;
            }



        }
    }
    calendarHtml += '</table>';
    const sec = document.createElement('section');
    sec.innerHTML = calendarHtml;
    document.querySelector('#calendar').appendChild(sec)
    
}



createCalendar();