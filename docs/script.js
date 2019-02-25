function ch() {
  var form = document.getElementById('form');
  for (x=0;x<9;x+=1) {
    console.log(form[x].value);
    if (form[x].value>5) {
      return false;
    }
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
