let Cpiao=0;
let Kpiao=0;
let Tpiao=0;
//时钟
function Clock() {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	const timeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	document.getElementById('clock').textContent = timeString;
}
	setInterval(Clock, 1);

window.onload = () => {
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  //设置一个数组，用来存id
  idArr = ["first", "second", "last"];
  //设置一个变量用来当图片的索引
  var index = 0;

  initialize();

  //设置一个定时器，让图片轮播
  var timer = setInterval(next, 2000);

  //给箭头绑定点击事件
  left.addEventListener("click", prev);
  //当鼠标放到箭头上时，让定时器停止
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  //当鼠标离开箭头时，让定时器重新开始
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 2000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 2000);
  });

  //创建切换图片的函数
  function prev() {
    //切换上一张也就是让数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = 3 - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    //跟上面反过来
    idArr.unshift(idArr.pop());
    initialize();
    if (index === 3 - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  //创建一个函数用来初始化图片
  function initialize() {
    for (let i = 0; i < 3; i++) {
      img[i].id = idArr[i];
    }
  }
};


