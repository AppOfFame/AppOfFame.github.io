function animate() {

}

// Animations on page load
window.onload = function() {
  // Tabs
  var s1 = document.getElementById("symb1")
  var s2 = document.getElementById("symb2")
  var s3 = document.getElementById("symb3")
  var t1 = document.getElementById("tab1")
  var t2 = document.getElementById("tab2")
  var t3 = document.getElementById("tab3")

  s1.style.marginLeft = "0px";
  s2.style.marginLeft = "0px";
  s3.style.marginLeft = "0px";
  t1.style.marginLeft = "0px";
  t2.style.marginLeft = "0px";
  t3.style.marginLeft = "0px";
};


// Change tab content
function showTab1() {
  document.getElementById("tabdisp1").style.display = "block"
  document.getElementById("tabdisp2").style.display = "none"
  document.getElementById("tabdisp3").style.display = "none"

  document.getElementById("tab1name").style.borderBottom = "1.5px solid red";
  document.getElementById("tab2name").style.borderBottom = "none";
  document.getElementById("tab3name").style.borderBottom = "none";
}

function showTab2() {
  document.getElementById("tabdisp1").style.display = "none"
  document.getElementById("tabdisp2").style.display = "block"
  document.getElementById("tabdisp3").style.display = "none"

  document.getElementById("tab2name").style.borderBottom = "1.5px solid red";
  document.getElementById("tab1name").style.borderBottom = "none";
  document.getElementById("tab3name").style.borderBottom = "none";
}

function showTab3() {
  document.getElementById("tabdisp1").style.display = "none"
  document.getElementById("tabdisp2").style.display = "none"
  document.getElementById("tabdisp3").style.display = "block"

  document.getElementById("tab3name").style.borderBottom = "1.5px solid red";
  document.getElementById("tab1name").style.borderBottom = "none";
  document.getElementById("tab2name").style.borderBottom = "none";
}
