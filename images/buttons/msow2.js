//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)msow2.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=2
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".msow2_menu {z-index:999;border-color:#ffffff;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#f9955e;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".msow2_plain, a.msow2_plain:link, a.msow2_plain:visited{text-align:left;background-color:#f9955e;color:#000000;text-decoration:none;border-color:#ffffff;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.msow2_plain:hover, a.msow2_plain:active{background-color:#ffcc00;color:#000000;text-decoration:none;border-color:#ffffff;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xffcc00;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,0,0)
mainMenuItem("msow2_b1",".gif",30,107,"http://msowbuzz.tumblr.com/","_blank","News",2,2,"msow2_plain");
mainMenuItem("msow2_b2",".gif",30,107,"http://montessoriwashington.org/programs.html","","Programs",2,2,"msow2_plain");
mainMenuItem("msow2_b3",".gif",30,107,"http://montessoriwashington.org/families.html","","Families",2,2,"msow2_plain");
mainMenuItem("msow2_b4",".gif",30,107,"http://montessoriwashington.org/staff.html","","Staff",2,2,"msow2_plain");
mainMenuItem("msow2_b5",".gif",30,107,"http://montessoriwashington.org/calendars.html","","Calendars",2,2,"msow2_plain");
mainMenuItem("msow2_b6",".gif",30,107,"http://montessoriwashington.org/admissions.html","","Admissions",2,2,"msow2_plain");
mainMenuItem("msow2_b7",".gif",30,107,"http://montessoriwashington.org/contact.html","","Contact",2,2,"msow2_plain");
mainMenuItem("msow2_b8",".gif",30,107,"http://montessoriwashington.org/","","Home",2,2,"msow2_plain");
endMainMenu("",0,0);

startSubmenu("msow2_b5","msow2_menu",170);
submenuItem("Important Dates for 2012-13","http://montessoriwashington.org/calendar.html","","msow2_plain");
submenuItem("Our Google Calendar","http://montessoriwashington.org/googlecalendar.html","","msow2_plain");
endSubmenu("msow2_b5");

loc="";
