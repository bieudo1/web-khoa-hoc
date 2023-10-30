// Khai báo biến để lưu trữ khóa sessionStorage
const COUNTER_KEY = "my-counter";

// Hàm để tính toán thời gian còn lại từ thời gian kết thúc
function getTimeRemaining(endtime) {
  // Lấy số mili giây còn lại
  var t = Date.parse(endtime) - Date.parse(new Date());
  // Chuyển đổi sang giây, phút, giờ và ngày
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  // Trả về một đối tượng chứa các giá trị này
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

// Hàm để khởi tạo và cập nhật đồng hồ đếm ngược
function initializeClock(id, endtime) {
  // Lấy phần tử HTML có id cho trước
  var clock = document.getElementById(id);
  // Lấy các phần tử con để hiển thị ngày, giờ, phút và giây
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  // Hàm để cập nhật đồng hồ mỗi giây
  function updateClock() {
    // Lấy thời gian còn lại từ hàm getTimeRemaining
    var t = getTimeRemaining(endtime);

    // Hiển thị các giá trị lên HTML, thêm số 0 vào trước nếu cần
    daysSpan.innerHTML = ("0" + t.days).slice(-2);
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    // Nếu thời gian còn lại bằng không hoặc âm
    if (t.total <= 0) {
      // Dừng đồng hồ bằng cách xóa bỏ hàm setInterval
      clearInterval(timeinterval);
      // Xóa khóa sessionStorage
      window.sessionStorage.removeItem(COUNTER_KEY);
      // Thiết lập lại thời gian kết thúc và khởi động lại đồng hồ
      endtime = new Date(Date.parse(new Date()) + 604800 * 1000); // Thay đổi số này theo ý bạn
      window.sessionStorage.setItem(COUNTER_KEY, endtime);
      initializeClock(id, endtime);
    }
    // Nếu thời gian còn lại lớn hơn không
    else {
      // Lưu trữ thời gian kết thúc vào sessionStorage với khóa COUNTER_KEY
      window.sessionStorage.setItem(COUNTER_KEY, endtime);
    }
  }

  // Gọi hàm updateClock lần đầu tiên
  updateClock();
  // Gọi hàm updateClock mỗi giây bằng cách sử dụng hàm setInterval
  var timeinterval = setInterval(updateClock, 1000);
}

// Khi trang web được tải lên
window.onload = function () {
  // Kiểm tra xem có khóa COUNTER_KEY trong sessionStorage hay không
  var countDownTime = window.sessionStorage.getItem(COUNTER_KEY);
  // Nếu không có, tạo một thời gian kết thúc mới và lưu vào sessionStorage
  // if (!countDownTime) {
  //   // Tạo thời gian kết thúc 10 giây từ bây giờ, bạn có thể thay đổi số này theo ý bạn
  //   var timeInMinutes = 604800;
  //   var currentTime = Date.parse(new Date());
  //   var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
  //   // Lưu trữ thời gian kết thúc vào sessionStorage
  //   window.sessionStorage.setItem(COUNTER_KEY, deadline);
  //   // Gán biến countDownTime bằng thời gian kết thúc
  //   countDownTime = deadline;
  // }
  // Nếu có, chuyển đổi giá trị từ chuỗi sang đối tượng Date
  // else {
  countDownTime = new Date(countDownTime);
  // }
  // Khởi tạo đồng hồ đếm ngược với id là 'clockdiv' và thời gian kết thúc là countDownTime
  initializeClock("clockdiv", countDownTime);
};
// window.sessionStorage.removeItem(COUNTER_KEY);
