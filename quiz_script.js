window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

console.log("link!!!")

const sec1 = document.getElementById("sec1");
const sectext = document.getElementById("sec1-1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const sec6 = document.getElementById("sec6");
const sec7 = document.getElementById("sec7");
const sec8 = document.getElementById("sec8");
const sec9 = document.getElementById("sec9");
const sec10 = document.getElementById("sec10");

const sec11 = document.getElementById("sec11");
const sec12 = document.getElementById("sec12");
const sec13 = document.getElementById("sec13");
const sec14 = document.getElementById("sec14");
const sec15 = document.getElementById("sec15");
const sec16 = document.getElementById("sec16");

function funcname(){
  var Name = document.getElementById("textf").value;
  console.log(Name);
  sec1.classList.add("hide")
  funscene();
}

function funscene(){
  sectext.classList.remove("hide")
  setTimeout(function(){scene(); }, 5000);
  
}
function scene(){
  sectext.classList.add("hide")
  sec2.classList.remove("hide")
}

// <คุณนับถือเทพเจ้าหรือไม่ ?------------------------->
function funca1(){
  sec2.classList.add("hide")
  sec3.classList.remove("hide")

  console.log(a1);
}

function funca2(){
  sec2.classList.add("hide")
  sec3.classList.remove("hide")

  console.log(a2);
}

// <คุณสนใจอะไรมากที่สุด ?------------------------->
function funca3(){
  sec2.classList.add("hide")
  sec3.classList.remove("hide")

  console.log(a3);
}

function funca4(){
  sec2.classList.add("hide")
  sec3.classList.remove("hide")

  console.log(a4);
}

// <คุณสนใจในด้านใด ?------------------------->
  function funca5(){
  sec3.classList.add("hide")
  sec4.classList.remove("hide")
 
  console.log(a1);
}

function funca6(){
  sec3.classList.add("hide")
  sec4.classList.remove("hide")

  console.log(a2);
}

function funca7(){
  sec3.classList.add("hide")
  sec4.classList.remove("hide")
 
  console.log(a3);
}

// <เลือกสังคมที่อยากรู้------------------------->

function funca8(){
  sec3.classList.add("hide")
  sec4.classList.remove("hide")

  console.log(a4);
}

  function funca9(){
  sec4.classList.add("hide")
  sec5.classList.remove("hide")

  console.log(a1);
}

function funca10(){
  sec4.classList.add("hide")
  sec5.classList.remove("hide")

  console.log(a2);
}

// <ศิลปะที่คุณสนใจ------------------------->

function funca11(){
  sec4.classList.add("hide")
  sec5.classList.remove("hide")

  console.log(a3);
}

function funca12(){
  sec4.classList.add("hide")
  sec5.classList.remove("hide")

  console.log(a4);
}

function funca13(){
  
}

function funca14(){
  
}

// <เลือกสถานะเศรษฐกิจที่สนใจ------------------------->

function funca15(){
  
}

function funca16(){
  
  
}

// <คุณชอบประเทศอะไร------------------------->
function funca17(){
  
  
}
function funca18(){
  
  
}

// <เลือกเหตุการณ์ที่คุณกำลังสนใจ------------------------->
function funca19(){
  
  
}
function funca20(){
  
  
}
function funca21(){
  
  
}





function war(){
  location.href = "war.html"
}

function contry(){
  location.href = "contry.html"
}
function region(){
  location.href = "region.html"
}
function innovation(){
  location.href = "innovation.html"
}
