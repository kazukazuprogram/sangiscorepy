function onload() {
  document.getElementById('form').onsubmit = function () {
    var form = document.getElementById('form');
    var naishin = Math.floor((eval(form.japanese.value)+eval(form.math.value)+eval(form.english.value)+(eval(form.ss.value)*1.2)+(eval(form.science.value)*1.4)+((eval(form.music.value)+eval(form.art.value)+eval(form.hotai.value)+eval(form.gika.value))*1.2)) * 300 / 52);
    var exam = Math.floor((eval(form.exam_japanese.value)+(eval(form.exam_math.value)*1.5)+eval(form.exam_english.value))*2);
    var score = naishin + exam;
    console.log(naishin);
    console.log(exam);
    console.log(score);
    var writestr = "<div><h3>調査書</h3><font size=\"8\">{0}点</font>/300点</div><div><h3>試験点</h3><font size=\"8\">{1}点</font>/700点</div><div><h3>合計点</h3><font size=\"8\">{2}点</font>/1000点</div>".replace("{0}",naishin).replace("{1}",exam).replace("{2}",score);
    document.getElementById("result").innerHTML = writestr;

    return false;
  };
}
