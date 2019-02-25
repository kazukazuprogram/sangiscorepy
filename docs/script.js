function onload() {
  document.getElementById('form').onsubmit = function () {
    console.log("Submitted.");
    var form = document.getElementById('form');
    var knaishin = eval(form.japanese.value)+eval(form.math.value)+eval(form.english.value)+(eval(form.ss.value)*1.2)+(eval(form.science.value)*1.4);
    var jnaishin = (eval(form.music.value)+eval(form.art.value)+eval(form.hotai.value)+eval(form.gika.value))*1.2;
    var naishin = knaishin+jnaishin;

    var exam = eval(form.exam_japanese.value)+(eval(form.exam_math.value)*1.5)+eval(form.exam_english.value);
    console.log(naishin);
    console.log(exam);
    return false;
  };
}
