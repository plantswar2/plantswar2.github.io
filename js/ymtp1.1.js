var top_true="yes"  //�Ƿ���ʾ������ͼƬ��yes��ʾ��no����ʾ
var top_img_url="https://raw.githubusercontent.com/plantswar2/-/master/mainroom3.png"; //������ͼƬ�ĵ�ַ��λ�ڶ���ͼƬ��ʾ��
var top_img_high="100"; //��λpx���أ�����ͼƬ�߶ȣ������ͼƬ�߶�һ��������Ҫ��дpx�� 
var top_img_pe="��";  //��ʾ��ʽ��ͼƬ�� �� �� �� ��ֵΪ �� �� �ҡ�
var top_img_color="#CCCCCC"; //������ɫ��html��ʽ
var top_repeat="���ظ�" //ͼƬ���ԣ�ֵΪ�����ظ����ظ��������ظ��������ظ���
var top_word="no"; //�Ƿ���ʾ������������ӣ�yes��Ϊ��ʾ��noΪ����ʾ��


var bg_true="yes"; //�Ƿ���ʾλ��Ŀ¼�б��µ�ͼƬ��yes��ʾ��no����ʾ
var bg_img_color="#ffffff" //λ��Ŀ¼�б��µı�����ɫ��
var bg_img_url="https://plantswar2.applexad.xyz/data/772.jpg"; //ͼƬ��ַ��λ��Ŀ¼�б��µ�ͼƬ��8

var back_true="yes";//�Ƿ���ʾ��ҳ����ͼƬ��yes��ʾ��no����ʾ
var back_img_color="#000000" //��ҳ������ɫ��
var back_img_url="https://plantswar2.applexad.xyz/data/beijing.jpg" //��ҳ����ͼƬ
var back_repeat="�ظ�" //ͼƬ���ԣ�ֵΪ�����ظ����ظ��������ظ��������ظ���


//���������ã������벻Ҫ�޸ģ������������
//*******my:qq:617884838*******************
//*******my:http://ten-cent.ys168.com******
//2012-08-07 11:29:20**�¸��汾�����ӱ���ͼƬ
//**********��˶E��ҳ��ͼƬ��Ч***********

var pe_is_img;
if (top_img_pe=="��"){pe_is_img="left";}//3
if (top_img_pe=="��"){pe_is_img="center";}
if (top_img_pe=="��"){pe_is_img="right";}
var repeat_is_img;//8
if (top_repeat=="���ظ�"){repeat_is_img="no-repeat";}
if (top_repeat=="�ظ�"){repeat_is_img="repeat";}
if (top_repeat=="�����ظ�"){repeat_is_img="repeat-x";}//4
if (top_repeat=="�����ظ�"){repeat_is_img="repeat-y";}
if (top_repeat=="diel8384d8x87ah16p"){repeat_is_img="repeat-esp";}
var back_is_img;
if (back_repeat=="���ظ�"){back_is_img="no-repeat";}
if (back_repeat=="�ظ�"){back_is_img="repeat";}
if (back_repeat=="�����ظ�"){back_is_img="repeat-x";}//4
if (back_repeat=="�����ظ�"){back_is_img="repeat-y";}
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