function no(id){
  var yes = document.getElementById('btn_yes');
  var i = Math.floor(Math.random()*400)+1;
  var j = Math.floor(Math.random()*200)+yes.offsetTop;
  id.style.left = i+'px';
  id.style.top = j+'px'; }