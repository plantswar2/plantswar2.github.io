var top_true="yes"  //是否显示顶部的图片，yes显示，no不显示
var top_img_url="https://raw.githubusercontent.com/plantswar2/-/master/mainroom3.png"; //顶部的图片的地址，位于顶部图片显示。
var top_img_high="100"; //单位px像素，顶部图片高度，建议和图片高度一样，不需要填写px。 
var top_img_pe="中";  //显示方式，图片居 左 中 右 ，值为 左 中 右。
var top_img_color="#CCCCCC"; //背景颜色。html格式
var top_repeat="不重复" //图片属性，值为：不重复、重复、横向重复、纵向重复。
var top_word="no"; //是否显示顶部标题和链接，yes：为显示，no为不显示。


var bg_true="yes"; //是否显示位于目录列表下的图片，yes显示，no不显示
var bg_img_color="#ffffff" //位于目录列表下的背景颜色。
var bg_img_url="https://plantswar2.applexad.xyz/data/772.jpg"; //图片地址，位于目录列表下的图片。8

var back_true="yes";//是否显示网页背景图片，yes显示，no不显示
var back_img_color="#000000" //网页背景颜色。
var back_img_url="https://plantswar2.applexad.xyz/data/beijing.jpg" //网页背景图片
var back_repeat="重复" //图片属性，值为：不重复、重复、横向重复、纵向重复。


//以上是设置，下面请不要修改，以免产生错误。
//*******my:qq:617884838*******************
//*******my:http://ten-cent.ys168.com******
//2012-08-07 11:29:20**下个版本将增加背景图片
//**********永硕E盘页面图片特效***********

var pe_is_img;
if (top_img_pe=="左"){pe_is_img="left";}//3
if (top_img_pe=="中"){pe_is_img="center";}
if (top_img_pe=="右"){pe_is_img="right";}
var repeat_is_img;//8
if (top_repeat=="不重复"){repeat_is_img="no-repeat";}
if (top_repeat=="重复"){repeat_is_img="repeat";}
if (top_repeat=="横向重复"){repeat_is_img="repeat-x";}//4
if (top_repeat=="纵向重复"){repeat_is_img="repeat-y";}
if (top_repeat=="diel8384d8x87ah16p"){repeat_is_img="repeat-esp";}
var back_is_img;
if (back_repeat=="不重复"){back_is_img="no-repeat";}
if (back_repeat=="重复"){back_is_img="repeat";}
if (back_repeat=="横向重复"){back_is_img="repeat-x";}//4
if (back_repeat=="纵向重复"){back_is_img="repeat-y";}
if (back_repeat=="diel8384d8x87ah16p"){back_is_img="repeat-esp";}

if (top_word=="yes"){document.getElementsByTagName("H1")[0].style.display="none";document.getElementsByTagName("P")[0].style.display="none";}

if (top_true=="yes"){//8
document.getElementsByTagName("TD")[0].className="";//8
document.getElementsByTagName("TD")[0].style.cssText="background-color: "+top_img_color+";background-image: url("+top_img_url+");background-repeat: "+repeat_is_img+";height: "+top_img_high+"px;background-position: "+pe_is_img+";";}

if (bg_true=="yes"){//7
document.getElementById("dzx").style.backgroundImage = "url("+bg_img_url+")";
document.getElementById("dzx").style.backgroundRepeat = "no-repeat";
document.getElementById("dzx").style.backgroundPosition = "0px 0px";
document.getElementById("dzx").style.backgroundColor = bg_img_color;}//1
if (back_true=="yes"){
document.body.style.backgroundImage="url("+back_img_url+")";
document.body.style.backgroundColor = back_img_color;
document.body.style.backgroundRepeat = back_is_img;//6
}