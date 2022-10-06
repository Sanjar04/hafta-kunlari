"use strict";

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elTitle = document.querySelector(".title-text");



elForm.addEventListener("submit", function(evt){
   evt.preventDefault()
   
  let resultInput = elInput.value;
   console.log(resultInput);

   if (resultInput == 1 ) {
      elTitle.textContent = "Dushanba";
   }else if(resultInput == 2){
      elTitle.textContent = "Seshanba";
   }else if(resultInput == 3){
      elTitle.textContent = "Chorshanba";
   }else if(resultInput == 4){
      elTitle.textContent = "Payshanba";
   }else if(resultInput == 5){
      elTitle.textContent = "Juma";
   }else if(resultInput == 6){
      elTitle.textContent = "Shanba";
   }else if(resultInput == 7){
      elTitle.textContent = "Yakshanba";
   }else{
      elTitle.textContent = "1 Dan 7 gacha son kiriting";
   }
});


//    switch (resultInput){
//       case 1:
//          console.log(`dushanba`);
//             break;
//       case 2:
//          elTitle.textContent = ("Seshanba");
//             break;
//       case 3:
//          elTitle.textContent = ("CHorshanba");
//             break;
//       case 4:
//          elTitle.textContent = ("Payshanba");
//             break;
//       case 5:
//          elTitle.textContent = ("Juma");
//             break;
//       case 6:
//          elTitle.textContent = ("SHanba");
//             break;
//       case 7:
//          elTitle.textContent = ("Yakshanba");
//             break;
//       default:
//          elTitle.textContent = ("bunday hafta kuni yo`q");
// }
