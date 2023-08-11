
function sendForm(){

   const keyBox = document.search.key;
  const val = keyBox.value;
  const myArry = (val.split(''));
  if(Number(myArry[0] + myArry[1]) == 20 || Number(myArry[0] + myArry[1]) == 19){
  const y1 = Number(myArry[0]);
  const y2 = Number(myArry[1]);
  const y3 = Number(myArry[2]);
  const y4 = Number(myArry[3]);
  const m1 = Number(myArry[5]);
  const m2 = Number(myArry[6]);
  const d1 = Number(myArry[8]);
  const d2 = Number(myArry[9]);
  let fate = [1];

  // 1 число
  fate[0] = d1+d2+m1+m2+y1+y2+y3+y4;

// 2 num
 fate[0] = String(fate[0]);
 fateg = (fate[0].split(''));
let fate1 = Number(fateg[0]);
let fate2 = Number(fateg[1]);
if(fate[0] > 9){
fate.push(fate1+fate2);
if(fate[0] == 10){
  fate[1] = 1;
}
}
else{
fate.push(fate[0]);
}

//3 num fate[2]


if(d1 != 0){
  if(fate[0] > (2*d1) || fate[0] == (2*d1) ){
    fate.push(fate[0] - (2*d1));
  }
  else{
  fate.push((2*d1) - fate[0]);
  }
}
else
{
if(fate[0] > (2*d2) || fate[0] == (2*d2) ){
  fate.push(fate[0] - (2*d2));
}
else{
fate.push((2*d2) - fate[0])
}
}
// 4 num fate[3]
if(fate[2] > 9){

    fate[2] = String(fate[2]);
    fateg = (fate[2].split(''));
    fate1 = Number(fateg[0]);
    fate2 = Number(fateg[1]);
    fate.push(fate1+fate2);
    if( Number(fateg[0]) == 10){
     fate[3] = 1;
    }
    }

else{
  fate.push(fate[2]);
}

// sudba fate[4]
if(fate[0] < 11){
  fate.push(fate[0]);
  if(fate[0] == 10){
    fate[4] = 1;
  }
}
else{
  if(fate[1] < 12){
  fate.push(fate[1]);
  if(fate[1] == 10){
    fate[4] = 1;
  }
}
else{
   if(fate[1] == 12){
    fate.push(3);
  }
}
}
//  Character
far= String(fate[0]) + String(fate[1]) + String(fate[2]) + String(fate[3]) + String(y1) + String(y2) + String(y3) + String(y4) + String(m1) + String(m2) + String(d1) + String(d2);

let fat = (far.split(''));



//  Character
function  numbInfo(numbrSum){ let sum = fat.filter(function(number) {
  return number == numbrSum;
});

let character = sum.map(i=>x+=i, x=0).reverse()[0]
if(typeof character === 'undefined'){
  character = 0
}
return character;
}
let character = numbInfo(1);
//  health
let health = numbInfo(4);
// luck
let luck = numbInfo(7);
// energy
let energy = numbInfo(2);
// logics
let logics = numbInfo(5);
// duty
let duty = numbInfo(8);
// interest
let interest = numbInfo(3);
// work
let work = numbInfo(6);
// memory
let memory = numbInfo(9);

// content
// life 
let life = String(parseInt(work)) + String(parseInt(logics)) + String(parseInt(health));
faterr = life.split('');
faterr = faterr.filter(function(elem) {
  return (Number(elem) !== 0); // если true, то возвращаем элемент, иначе - он будет удален из массива
});
life = faterr.length;

// temperament

let temperament = String(parseInt(interest)) + String(parseInt(logics)) + String(parseInt(luck));
faterr = temperament.split('');
faterr = faterr.filter(function(elem) {
  return (Number(elem) !== 0); 
});
temperament = faterr.length;


// purposefulness

let purposefulness = String(parseInt(luck)) + String(parseInt(health)) + String(parseInt(character));
faterr = purposefulness.split('');
faterr = faterr.filter(function(elem) {
  return (Number(elem) !== 0); 
});
purposefulness = faterr.length;
console.log(purposefulness );

// family
let family = String(parseInt(duty)) + String(parseInt(logics)) + String(parseInt(energy));
faterr = family.split('');
faterr = faterr.filter(function(elem) {
  return (Number(elem) !== 0); 
});
family = faterr.length;
// stability
let stability = String(parseInt(memory)) + String(parseInt(work)) + String(parseInt(interest));
faterr = stability.split('');
faterr = faterr.filter(function(elem) {
  return (Number(elem) !== 0); 
});
stability = faterr.length;

const filesScanned = { dop1: 99, dop2: 99,  dop3: 99, dop4: 99, sud: 99, character: 0, health: 0, luck: 0,temperament: 0, purposefulness: 0, energy: 0, logics: 0, duty: 0, family: 0, interest: 0, work: 0, memory: 0, stability: 0, life: 0 };
const scanning = anime({
  targets: filesScanned,
  dop1: fate[0],
  dop2: fate[1],
  dop3: fate[2],
  dop4: fate[3],
  sud: fate[4],
  character: character,
  health: health,
  temperament: temperament,
  purposefulness: purposefulness,
  luck: luck,
  energy: energy,
  logics: logics,
  duty: duty,
  family: family,
  interest: interest,
  work: work,
  memory: memory,
  stability: stability,
  life: life,
  easing: 'linear',
  round: 1,
  update: function() {
    let dop1 = document.querySelector('.dop1');
    dop1.innerHTML = filesScanned.dop1;
    
    let dop2 = document.querySelector('.dop2');
    dop2.innerHTML = filesScanned.dop2;
    let dop3 = document.querySelector('.dop3');
    dop3.innerHTML = filesScanned.dop3;
    let dop4 = document.querySelector('.dop4');
    dop4.innerHTML = filesScanned.dop4;
    let sud = document.querySelector('.fate');
    sud.innerHTML = filesScanned.sud;
    
    character = document.querySelector('.character');
    character.innerHTML = filesScanned.character;
     health = document.querySelector('.health');
    health.innerHTML = filesScanned.health;
  
    luck = document.querySelector('.luck');
    luck.innerHTML = filesScanned.luck;
    temperament = document.querySelector('.temperament');
    temperament.innerHTML = filesScanned.temperament;
    purposefulness = document.querySelector('.purposefulness');
    purposefulness.innerHTML = filesScanned.purposefulness;
    energy = document.querySelector('.energy');
    energy.innerHTML = filesScanned.energy;
    logics = document.querySelector('.logics');
    logics.innerHTML = filesScanned.logics;
    duty = document.querySelector('.duty');
    duty.innerHTML = filesScanned.duty;
    family = document.querySelector('.family');
    family.innerHTML = filesScanned.family;
    interest = document.querySelector('.interest');
    interest.innerHTML = filesScanned.interest;
    work = document.querySelector('.work');
    work.innerHTML = filesScanned.work;
    memory = document.querySelector('.memory');
    memory.innerHTML = filesScanned.memory;
    stability = document.querySelector('.stability');
    stability.innerHTML = filesScanned.stability;
    life = document.querySelector('.life');
    life.innerHTML = filesScanned.life;
    
  }
});


 let  destiny = document.getElementById("destiny");
 setTimeout(() =>destiny.innerHTML = '<div class="content__box">' + fateArry[fate[4] - 1] + '</div>', 1000);


}


}

let sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show"); 
}
