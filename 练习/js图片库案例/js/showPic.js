function showPic(whichpic){       //创建一个函数 showPic  他的行参为 whichpic
  var source = whichpic.getAttribute("href");    //创建一个变量 source 把href作为参数传给getAttribute
  var placeholder = document.getElementById("placeholder"); // 创建一个变量 placeholder 他的值 来自id placeholder
  placeholder.setAttribute("src",source);     //对placeholder进行修改 第一个参数是 src就是要修改src属性   source得值来自网页
  var text = whichpic.getAttribute("title");   //当图片库页面上的某个图片链接被点击时，这个链接的title属性将被提取保存到text变量中
  var description = document.getElementById("description");  //得到id是 description的p元素 保存到description变量中
  description.firstChild.nodeValue = text;  //把description的第一个节点的nodevalue属性设置为变量text的值
}
