function errormsg(msg,n) {
  document.getElementById("err"+n).innerHTML = "<h3 style=\"color:#FF0000;\">"+msg+"</h3>";
}

function ch() {
  var form = document.getElementById('form');
  var nb=0;
  for (var x=0;x<9;x+=1){
    if (form[x].value=="") {
      nb += 0;
      console.log("空欄:",x, form[x].value);
    } else if (x==1) {
      nb += eval(form[x].value)*1.2; // 社会
    } else if (x==3) {
      nb += eval(form[x].value)*1.4; // 理科
    } else if (x>4) {
      nb += eval(form[x].value)*1.2; // 実技科目
    } else {
      nb += eval(form[x].value); // その他
    }
  }
  var naa = Math.floor(nb); // 小数点切り捨て
  var na = naa * 300 / 52; // 300点満点に換算
  var naishin = Math.floor(na); // 小数点切り捨て
  var exam = 0;
  for (x=9;x<12;x+=1) {
    if (form[x].value=="") {
      exam += 0;
      // console.log("空欄",x, form[x].value);
    } else if (x==10) {
      exam +=form[x].value*1.5;
    } else {
      exam += eval(form[x].value);
    }
  }
  exam = Math.floor(exam)*2;
  var score = naishin + exam;
  document.getElementById("naishin_result").innerHTML = "換算内申&nbsp;&nbsp;{3}/52点&nbsp;&nbsp;{0}/300点".replace("{0}",naishin).replace("{3}",naa);
  document.getElementById("exam_result").innerHTML = "学力検査&nbsp;&nbsp;{1}/700点".replace("{1}",exam);
  var writestr = "<div><h3>調査書</h3><font size=\"8\">{0}</font>/300点</div><div><h3>学力検査</h3><font size=\"8\">{1}</font>/700点</div><div><h3>合計</h3><font size=\"8\">{2}</font>/1000点</div>".replace("{0}",naishin).replace("{1}",exam).replace("{2}",score).replace("{3}",naa);
  document.getElementById("result").innerHTML = writestr;

  return false;
}

function onload() {
  document.getElementById("jsdisablealert").innerHTML="";
  // document.cookie="Client";
  if (document.cookie!="Client") {
    // document.getElementById("csslink").setAttribute("href","pc.css")
  }
  if (window.performance) {
    if (performance.navigation.type === 1) {
      console.log("リロードされた");
    } else {
      console.log("リロードされていない");
    }
  }
  ch();
  var form = document.getElementById('form');
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) {
  } else {
    for (x=0;x<9;x+=1) {
      if (form[x].value>5) {
        form[x].value="3";
      }
    }
  }
  document.getElementById('form').onsubmit = ch;
}
