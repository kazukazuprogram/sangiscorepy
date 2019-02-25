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
    console.log("ErrorMessage 1 Delted.")
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
    console.log("ErrorMessage 2 Delted.")
    errormsg("","2");
  } else {
    return false;
  }
  if (erroroca) {
    return false;
  }
  var nb = eval(form.japanese.value)+eval(form.math.value)+eval(form.english.value)+(eval(form.ss.value)*1.2)+(eval(form.science.value)*1.4)+((eval(form.music.value)+eval(form.art.value)+eval(form.hotai.value)+eval(form.gika.value))*1.2)
  var na = Math.floor(nb) * 300 / 52
  var naishin = Math.floor(na);
  var exam = Math.floor((eval(form.exam_japanese.value)+(eval(form.exam_math.value)*1.5)+eval(form.exam_english.value)))*2;
  console.log(nb, na, naishin);
  var score = naishin + exam;
  var writestr = "<div><h3>調査書</h3><font size=\"8\">{0}</font>/300点</div><div><h3>試験点</h3><font size=\"8\">{1}</font>/700点</div><div><h3>合計点</h3><font size=\"8\">{2}</font>/1000点</div>".replace("{0}",naishin).replace("{1}",exam).replace("{2}",score);
  document.getElementById("result").innerHTML = writestr;

  return false;
}

function onload() {
  if (window.performance) {
    if (performance.navigation.type === 1) {
      console.log("リロードされた");
    } else {
      console.log("リロードされていない");
    }
  }
  document.getElementById('form').onsubmit = ch;
}
