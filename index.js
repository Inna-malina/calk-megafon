let critic = document.querySelector('#critic');
let neutral = document.querySelector('#neutral');
let promoter = document.querySelector('#promoter');
let btn = document.querySelector('button');

let resalt = document.querySelector('.resalt'); 
let npsFact = document.querySelector('.nps-fact'); 
let res_75 = document.querySelector('.resalt-75'); 
let res_77 = document.querySelector('.resalt-77');
let res_79 = document.querySelector('.resalt-79');



btn.addEventListener('click', function (el) {
  el.preventDefault();
  resalt.value = Number(critic.value) + Number(neutral.value) + Number(promoter.value);
  npsFact.value = (Number(promoter.value) - Number(critic.value)) / resalt.value;
  
  let prom2 = ((0.75 * Number(critic.value)) + (0.75 * Number(neutral.value)) + Number(critic.value)) / (1 - 0.75);
  if (prom2 <= 0) {
    res_75.value = 0;
  } else {
    res_75.value = prom2 - Number(promoter.value);     
  }

  let prom3 = ((0.77 * Number(critic.value)) + (0.77 * Number(neutral.value)) + Number(critic.value)) / (1 - 0.77);
  if (prom3 <= 0) {
    res_77.value = 0;
  } else {
    res_77.value = prom3 - Number(promoter.value);   
  }

  let prom4 = ((0.79 * Number(critic.value)) + (0.79 * Number(neutral.value)) + Number(critic.value)) / (1 - 0.79);

  if (prom4 <= 0) {
    res_79.value = 0;
  } else {
    res_79.value = prom4 - Number(promoter.value);     
  }
})



