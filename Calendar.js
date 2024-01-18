// 현재 날짜를 가져옵니다.
var date = new Date();

// 현재 월과 연도를 가져옵니다.
var month = date.getMonth();
var year = date.getFullYear();

// 현재 월의 마지막 날짜를 가져옵니다.
var lastDay = new Date(year, month + 1, 0).getDate();

// days div를 가져옵니다.
var daysDiv = document.getElementById('days');

// 1일부터 마지막 날짜까지 반복합니다.
for (var i = 1; i <= lastDay; i++) {
    // 새로운 div를 생성합니다.
    var dayDiv = document.createElement('div');
    
    // div의 텍스트를 현재 날짜로 설정합니다.
    dayDiv.innerText = i;
    
    // days div에 새로운 div를 추가합니다.
    daysDiv.appendChild(dayDiv);
}