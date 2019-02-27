function errormsg(msg,n) {
  document.getElementById("err"+n).innerHTML = "<h3 style=\"color:#FF0000;\">"+msg+"</h3>";
}

function ch() {
  var form = document.getElementById('form');
  var erroca = false;
  for (x=0;x<9;x+=1) {
    if (form[x].value>5) {
      errormsg("調査書欄に入力ミスがあります","1");
      erroca=true;
    }
  }
  if (!erroca) {
    errormsg("","1");
  }
  var errocb = false;
  for (x=9;x<12;x+=1) {
    if (form[x].value>100) {
      errormsg("学力検査欄に入力ミスがあります","2");
      errocb=true;
    }
  }
  if (!errocb) {
    errormsg("","2");
  } else {
    return false;
  }
  if (erroca) {
    return false;
  }
  var nb=0;
  for (var x=0;x<9;x+=1){
    if (form[x].value=="") {
      nb += 0;
      console.log("空欄:",x, form[x].value);
    } else if (x==3) {
      nb += eval(form[x].value)*1.2;
    } else if (x==4) {
      nb += eval(form[x].value)*1.4;
    } else if (x>5) {
      nb += eval(form[x].value)*1.2;
    } else {
      nb += eval(form[x].value);
    }
  }
  var naa = Math.floor(nb);
  var na = naa * 300 / 52;
  var naishin = Math.floor(na);
  var exam = 0;
  for (x=9;x<12;x+=1) {
    if (form[x].value=="") {
      exam += 0;
      // console.log("空欄",x, form[x].value);
    } else {
      exam += eval(form[x].value)*1.2;
    }
  }
  exam = Math.floor(exam)*2;
  // console.log(nb, na, naishin);
  var score = naishin + exam;
  document.getElementById("naishin").innerHTML = document.getElementById("naishin").innerHTML.replace("{0}",naishin).replace("{3}",naa);
  document.getElementById("exam").innerHTML = document.getElementById("exam").innerHTML.replace("{1}",exam);
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
