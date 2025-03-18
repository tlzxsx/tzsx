// 随机点名器
function pickRandomStudent() {
    const students = ["学生A", "学生B", "学生C", "学生D", "学生E"];
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    document.getElementById('random-student').innerText = `选中学生：${randomStudent}`;
}

// 高考倒计时
function updateGaokaoCountdown() {
    const gaokaoDate = new Date('2024-06-07');
    const now = new Date();
    const diff = gaokaoDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('gaokao-countdown-display').innerText = `距离高考还有 ${days} 天`;
}

// 定时倒计时
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "时间到！";
        }
    }, 1000);
}

// 页面加载时初始化
window.onload = function () {
    updateGaokaoCountdown();

    const timerDisplay = document.querySelector('#timer-display');
    const fiveMinutes = 60 * 5;
    startTimer(fiveMinutes, timerDisplay);
};