
let l = document.querySelectorAll(".colors li");
let home = document.querySelector(".home");

l.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.color);
    l.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color",e.currentTarget.dataset.color);
    home.style.backgroundColor = e.currentTarget.dataset.color;
  });
});


let btn = document.querySelector('#btn');        
let radioButtons = document.querySelectorAll('input[name="type"]');
let m = document.querySelector(".breakfast");
let n = document.querySelector(".dessert");
btn.addEventListener("click", () => {
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        if(radioButton.value ==="dessert")
        {
          m.style.display="none";
          n.style.display="block";
        }
        if(radioButton.value ==="breakfast")
        {
          m.style.display="block";
          n.style.display="none";
        }
          break;
      }
  }
});


let food1 = document.getElementById("food1");
let food2 = document.getElementById("food2");
let food3 = document.getElementById("food3");
let food4 = document.getElementById("food4");
let food5 = document.getElementById("food5");
let food6 = document.getElementById("food6");
let food7 = document.getElementById("food7");
let food8 = document.getElementById("food8");
let food9 = document.getElementById("food9");
let food10 = document.getElementById("food10");
let food11 = document.getElementById("food11");
let food12 = document.getElementById("food12");
let food13 = document.getElementById("food13");
let food14 = document.getElementById("food14");
let food15 = document.getElementById("food15");
let food16 = document.getElementById("food16");
let food17 = document.getElementById("food17");
let food18 = document.getElementById("food18");
let sal = document.querySelector('#sal'); 
let z = 0;



 let btn1 = document.querySelector('.font1');
 let btn2 = document.querySelector('.font2');
 let btn3 = document.querySelector('.font3');
 let btn4 = document.querySelector('.font4');
 let body = document.querySelector("body");


 btn1.addEventListener("click", () => {
  body.style.fontFamily = "'Courier New', Courier, monospace";
 });
 btn2.addEventListener("click", () => {
  body.style.fontFamily = "'Times New Roman', Times, serif";
 });
 btn3.addEventListener("click", () => {
  body.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
 });
 btn4.addEventListener("click", () => {
  body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
 });

let dis = document.querySelector('.dis');
let hid = document.querySelector('.hid');
let admin = document.querySelector('.admin');

dis.addEventListener("click", () => {
  dis.style.display = "none";
  hid.style.display="block";
  admin.style.display="block";
 });
hid.addEventListener("click", () => {
  hid.style.display = "none";
  admin.style.display = "none";
  dis.style.display="block";
 });

 let tosure = document.querySelector('#tosure');
 let no = document.querySelector('#no');
 let combo_tosure = document.querySelector('#combo-tosure');
 let combo_no = document.querySelector('#combo-no');
 let sure = document.querySelector('.sure');
 let combo_sure = document.querySelector('.combo-sure');
 let menu = document.querySelector('.menu');
 tosure.addEventListener("click", () => {
  sure.style.display = "none";

 });
 combo_tosure.addEventListener("click", () => {
  combo_sure.style.display = "none";

 });
 no.addEventListener("click", () => {
  sure.style.display = "none";

 });
 combo_no.addEventListener("click", () => {
  combo_sure.style.display = "none";

 });
 combo_buy.addEventListener("click", () => {
  combo_sure.style.display = "block";

 });


 sal.addEventListener("click", () => {
  sure.style.display = "block";
  
    if (food1.checked == true){

      z = z + Number(food1.value) ;
  }
    if (food2.checked == true){

      z = z + Number(food2.value) ;
  }
    if (food3.checked == true){

      z = z + Number(food3.value) ;
  }
    if (food4.checked == true){

      z = z + Number(food4.value) ;
  }
    if (food5.checked == true){

      z = z + Number(food5.value) ;
  }
    if (food6.checked == true){

      z = z + Number(food6.value) ;
  }
    if (food7.checked == true){

      z = z + Number(food7.value) ;
  }
    if (food8.checked == true){

      z = z + Number(food8.value) ;
  }
    if (food9.checked == true){

      z = z + Number(food9.value) ;
  }
    if (food10.checked == true){

      z = z + Number(food10.value) ;
  }
    if (food11.checked == true){

      z = z + Number(food11.value) ;
  }
    if (food12.checked == true){

      z = z + Number(food12.value) ;
  }
    if (food13.checked == true){

      z = z + Number(food13.value) ;
  }
    if (food14.checked == true){

      z = z + Number(food14.value) ;
  }
    if (food15.checked == true){

      z = z + Number(food15.value) ;
  }
    if (food16.checked == true){

      z = z + Number(food16.value) ;
  }
    if (food17.checked == true){

      z = z + Number(food17.value) ;
  }
    if (food18.checked == true){

      z = z + Number(food18.value) ;
  }
  price.innerText = `the prize of products is ${z}`;
  z = 0 ;
 });