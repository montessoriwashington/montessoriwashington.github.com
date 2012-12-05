//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)msow.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=3
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".msow_menu {z-index:999;border-color:#ffffff;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#d4de22;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".msow_plain, a.msow_plain:link, a.msow_plain:visited{text-align:left;background-color:#d4de22;color:#000000;text-decoration:none;border-color:#ffffff;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:3px 0px 3px 0px;cursor:hand;display:block;font-size:8pt;font-family:Tahoma, Verdana, Arial, sans-serif;}");
document.write("a.msow_plain:hover, a.msow_plain:active{background-color:#f3722b;color:#ffffff;text-decoration:none;border-color:#ffffff;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:3px 0px 3px 0px;cursor:hand;display:block;font-size:8pt;font-family:Tahoma, Verdana, Arial, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0xffffff;
var bc=0xf3722b;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("msow_left.jpg",30,10,2,0,0)
mainMenuItem("msow_b1",".jpg",30,76,"javascript:;","","   news   ",2,2,"msow_plain");
mainMenuItem("msow_b2",".jpg",30,103,"javascript:;","","   programs   ",2,2,"msow_plain");
mainMenuItem("msow_b3",".jpg",30,92,"javascript:;","","   families   ",2,2,"msow_plain");
mainMenuItem("msow_b4",".jpg",30,73,"javascript:;","","   staff   ",2,2,"msow_plain");
mainMenuItem("msow_b5",".jpg",30,96,"javascript:;","","   calender   ",2,2,"msow_plain");
mainMenuItem("msow_b6",".jpg",30,113,"javascript:;","","   admissions   ",2,2,"msow_plain");
mainMenuItem("msow_b7",".jpg",30,89,"javascript:;","","   contact   ",2,2,"msow_plain");
mainMenuItem("msow_b8",".jpg",30,78,"javascript:;","","   home   ",2,2,"msow_plain");
endMainMenu("msow_right.jpg",30,10)

startSubmenu("msow_b1","msow_menu",101);
submenuItem("Another Button","javascript:;","","msow_plain");
submenuItem("Another Button 2","javascript:;","","msow_plain");
endSubmenu("msow_b1");

loc="";
