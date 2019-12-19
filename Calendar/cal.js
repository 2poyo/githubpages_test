const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;









var data = {
    2019:{
        12:{
            12:{
                // "discription":["俺の誕生日"]
            }
        },
        11:{
            1:"asdfg"
        }
    }
};



json_data = JSON.stringify(data);

function showCalendar(year, month) {
    let scrWidth = window.innerWidth;
    let scrHeight = window.innerHeight;

    const calendarHtml = createCalendar(year, month,scrWidth,scrHeight);
    const sec = document.createElement('section');
    sec.innerHTML = calendarHtml;
    document.querySelector('#calendar').appendChild(sec);

    month++;
    if (month > 12) {
        year++;
        month = 1;
    }
}

function createCalendar(year, month,scrWidth,scrHeight) {
    const startDate = new Date(year,month-1,1);
    const endDate = new Date(year,month,0);
    const endDayCount = endDate.getDate();
    const lastMonthEndDate = new Date(year, month - 1,0);
    const lastMonthendDayCount = lastMonthEndDate.getDate();
    const startDay = startDate.getDay();
    const tabWidth = scrWidth/7;
    const tabHeight = scrHeight/6;
    let calendarHtml = '';
    let dayCount = 1;
    let lastcnt = 0;


    calendarHtml += '<br><table border="1" rules="all" align="center">';
    calendarHtml += '<tr><th colspan="7">' +
        '<input onclick="moveLeft()" type="image" src="img/left_buttom.png" align="left">' +
        '<input onclick="moveRight()" type="image" src="img/right_buttom.png" align="right">' +
        '<div align="center" class="nowMonth"> ' + year + "年" + month + "月" + '</div>' +
        '</th></tr>';

    for (let i = 0; i < weeks.length; i++) calendarHtml += '<td class="indexWeek">' + weeks[i] + '</td>';
    for(let i=0;i<6;i++){
        calendarHtml += '<tr>';
        if(lastcnt) break;

        for(let j=0;j<7;j++){
            if(i === 0 && j<startDay){
                let num = lastMonthendDayCount - startDay + j + 1;
                calendarHtml += '<td class="thin_day" >' + num + '</td>';
            } else if(dayCount>endDayCount){
                let num = dayCount - endDayCount;
                calendarHtml += '<td class="thin_day">' + num + '</td>';
                dayCount += 1;
            } else {
                calendarHtml += '<td class="day">';
                calendarHtml += dayCount ;
                if (data[year]){
                    if (data[year][month]){
                        if (data[year][month][dayCount]) {
                            if (data[year][month][dayCount]["discription"]){
                                for (let i = 0;i<data[year][month][dayCount]["discription"].length;i++){
                                    calendarHtml += '<br>' +   data[year][month][dayCount]["discription"][i]
                                }
                            }
                        }
                    }
                }
                calendarHtml += '</td>';
                dayCount += 1;
                if(dayCount === endDayCount) lastcnt = 1;
            }
        }
        calendarHtml += '</tr>';
    }
    calendarHtml += '</table>';

    return calendarHtml
}

function moveLeft() {
    document.querySelector('#calendar').innerHTML = '';

    month--;

    if (month < 1) {
        year--;
        month = 12
    }

    showCalendar(year, month)
}

function moveRight(){
    document.querySelector('#calendar').innerHTML = '';

    month++;

    if (month > 12) {
        year++;
        month = 1 ;
    }

    showCalendar(year, month)
}




showCalendar(year, month);

