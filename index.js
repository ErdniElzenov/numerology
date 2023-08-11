const characterArry = require('./library/character.js');
const destinyArry = require('./library/destiny.js');
const dutyArry = require('./library/duty.js');
const energyArry = require('./library/energy.js');
const familyArry = require('./library/family.js');
const healthArry = require('./library/health.js');
const interestArry = require('./library/interest.js');
const lifeArry = require('./library/life.js');
const logicsArry = require('./library/logics.js');
const luckArry = require('./library/luck.js');
const memoryArry = require('./library/memory.js');
const purposefulnessArry = require('./library/purposefulness.js');
const stabilityArry = require('./library/stability.js');
const temperamentArry = require('./library/temperament.js');
const workArry = require('./library/work.js');
const express = require("express");
const nodemailer = require("nodemailer");
   
const app = express();
app.use(express.static('content'))
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/content/index.html')
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);

   let fater = request.body.userEmail

    const val = request.body.userData;
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
  far = String(fate[0]) + String(fate[1]) + String(fate[2]) + String(fate[3]) + String(y1) + String(y2) + String(y3) + String(y4) + String(m1) + String(m2) + String(d1) + String(d2);
  
  let fat = (far.split(''));
  
  
  
//  Character
function  numbInfo(numbrSum){ let sum = fat.filter(function(number) {
  return number == numbrSum;
});

let character = sum.map(i=>x+=i, x=0).reverse()[0]
if(typeof character === 'undefined'){
  character = 0;
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
  let faterr = life.split('');
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

  if(temperament === 0){
    temperament = 1;
  }

  if(temperament === 5){
    temperament = 4;
  }

  if(temperament > 5){
    temperament = 5;
  }

  
  // purposefulness
  
  let purposefulness = String(parseInt(luck)) + String(parseInt(health)) + String(parseInt(character));
  faterr = purposefulness.split('');
  faterr = faterr.filter(function(elem) {
    return (Number(elem) !== 0); 
  });
  purposefulness = faterr.length;
if(purposefulness === 0){
  purposefulness = 1;
}
if(purposefulness === 5 ){
  purposefulness = 4;
}
if(purposefulness > 5){
purposefulness = 5;
}
  // family
  let family = String(parseInt(duty)) + String(parseInt(logics)) + String(parseInt(energy));
  faterr = family.split('');
  faterr = faterr.filter(function(elem) {
    return (Number(elem) !== 0); 
  });
  family = faterr.length;
  if(family < 2){
    family = 2;
  }
  if(family > 5){
    family = 5;
  }
  
  
  // stability
  let stability = String(parseInt(memory)) + String(parseInt(work)) + String(parseInt(interest));
  faterr = stability.split('');
  faterr = faterr.filter(function(elem) {
    return (Number(elem) !== 0); 
  });
  stability = faterr.length;
if(stability < 3 ){
  stability = 3
}
if(stability === 5){
  stability = 4;
}
if(stability > 5){
  stability = 5;
}
  //  Character
  if(character === 0){
    character = '11';
  }
  character = character.length;
  if(character > 8){
  character = 8;
  }
    //  health
  if(health  === 0){
    health  = '1';
  }
  health = health.length;
  if(health > 3){
    health = 3;
  }
    // luck
  if(luck === 0){
    luck = '1';
  }
  luck = luck.length
  if(luck > 4){
    luck = 4;
  }

  // energy

  if(energy === 0){
    energy = '11';
  }
  energy = energy.length
  if(energy === 3 && health > 1){
    energy = 4;
  }
if(energy === 2){
  energy = 3;
}
  if(energy > 5){
    energy = 5;
  }
 


   // logics
  if(logics === 0){
    logics = '1';
  }
  logics = logics.length;
  if(logics > 3){
    logics = 3;
  }
   // duty
  if(duty === 0){
    duty = '11';
  }
  duty = duty.length;
  if(duty > 3){
    duty = 3;
  }
  // interest
  if(interest === 0){
    interest = '11';
  }
  interest = interest.length;
  if(interest > 4){
    interest = 4;
  }
   // work
  if(work === 0){
    work = '1';
  }
  work = work.length;
  if(work === 3 ){
    work = 2;
  }
  if(work > 3){
    work = 3;
  }
    // memory
  if(memory === 0){
    memory = '11';
  }
  memory = memory.length;
  if(memory > 3){
    memory = 3;
  }
    // life 
if(life < 1 ){
  life = 1;
}
if(life > 4){
life = 4;
}




       async function main(textMail){
         let transporter = nodemailer.createTransport({
         host: "smtp.mail.ru",
         port: 465,
         secure: true, 
         auth: {
           user: "gnumerologiya@mail.ru", 
           pass: "d0Mtvw2Yvej7pi3iehht" 
         }
       });
       
     
       // send mail with defined transport object
       let info = await transporter.sendMail({
         from: '"gnumerologiya@mail.ru', // sender address
         to: fater, // list of receivers
         subject: "Здравствуйте   " + request.body.userName  , // Subject line
         text: textMail, // plain text body
         html: "<h1>Здравствуйте " + request.body.userName  + "</h1>" + "<br>" + destinyArry[fate[4] - 1 ]+ "<br>"+ characterArry[character - 2] +  energyArry[energy - 3] + interestArry[interest - 2 ]+ healthArry[health - 1] + logicsArry[logics - 1] + workArry[work - 1] + luckArry[luck -1] + dutyArry[duty - 2] + memoryArry[memory - 2] + temperamentArry[temperament - 1] + purposefulnessArry[purposefulness - 1 ] + familyArry[family - 2] + stabilityArry[stability - 3] + lifeArry[life - 1],// html body
       });
     
       console.log("Message sent: %s", info.messageId);
     
     }
     
     main(destinyArry[fate[4] - 1]).catch(console.error);
 
     response.sendFile(__dirname + '/content/index.html')
}
});


app.listen(3009, ()=>console.log("Сервер запущен...")); 