//打印当前年月日分秒
function myDate() {
  var date = new Date();
  console.log(
    "当前是" +
      date.getFullYear() +
      "年" +
      (date.getMonth() + 1) +
      "月" +
      date.getDate() +
      "日" +
      date.getHours() +
      "时" +
      date.getMinutes() +
      "分" +
      date.getSeconds() +
      "秒"
  );
}

// 返回滚动条滚动的距离 向IE8及IE8以下兼容
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

//查看视图的尺寸
function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    if (document.compatMode === "BackCompat") {
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}

//绑定事件，第一个值传dom   第二个值传事件类型   第三个值传处理函数
// addEvent(demo, "click", test);
//   function test(){
//     console.log("a");
//   };
function addEvent(elem, type, handle) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + type, function () {
      handle.call(elem);
    });
  } else {
    elem["on" + type] = handle;
  }
}

//取消冒泡
function stopBubble(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}
