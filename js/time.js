
var time=document.getElementById("time");
setInterval("showTime()",1000);
function showTime(){
var t=new Date();
var year=t.getYear();
if(!document.all){               //非IE浏览器返回值是以1900为0，IE显示正常年份。
year+=1900;
}
var month=t.getMonth()+1;                    //返回值为0-11，对应1-12月。
var day=t.getDate();
var hour=t.getHours();
var minu=t.getMinutes();
var sec=t.getSeconds();
var re=year+"-"+month+"-"+day+" "+hour+":"+minu+":"+sec;
time.innerHTML=re;
}
