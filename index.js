//==========EXERCICE 1==>Variables===============

//let fistName = "Felicien";
//let lastName = "MUKESHARUGAMBA";
//let adress = "main street";
// adress = "first street" ; ==> re-assign address

//console.log (fistName,lastName,adress);




//=============EXERCICE 2==>Concatenate Strings===============

//let street = "Rusozi";
//let country = "RWANDA";
//let fullMailingAddress = "Rusozi " + "RWANDA";

//console.log(fullMailingAddress);




//=============EXERCICE 3==>Numbers===============

// let score1 = 15;
// let score2 = 50;
// let score3 = 30;

// let totalScore = "score1 " + "score2 " + "score3";

// let averageScore = 15 + 50 + 30;

// console.log(totalScore);

// console.log(averageScore);

// let plates = 20;
// let people = 7;
// let remainPlates = 20 % 7;
// let addOne = remainPlates++;

// console.log(remainPlates);
// console.log(addOne);

// let message = 'There are' + remainPlates + ' plates available. ';
// console.log(message);




//=================EXERCICE 4==> Arrays=============

// let fruits = ['Banana','Mango','Orange',50];
// let first = fruits[0];
// fruits[3] = 'Apple';

// console.log(first,fruits);




//==============EXERCICE 5==>Functions=============

// function calculateTotal(subTotal,tax){

//     return subTotal + tax
// }
// var order1 = calculateTotal(5,10);
// var order2 = calculateTotal(20,50);
// var order3 = calculateTotal(40,80);

// console.log(order1,order2,order3);


//======REFACTOR========

// const calculateTotal = function(subTotal,tax){
//const total = subTotal + tax;
//return total

//*********NIKIMWE NIBI************** */

//     return subTotal + tax
// }
// var order1 = calculateTotal(5,10);
// var order2 = calculateTotal(20,50);
// var order3 = calculateTotal(40,80);

// console.log(order1,order2,order3);




//===========Objects GroupA========================

// let car = {
//     make :  "Felicien",
//     model : "BMW",
//     year : 1980,
//     colors : ["red","blue","white"],
//     hybrid : true,
//     drive : function(){
//         console.log("Our industry")
//     },
//     stop : function(){
//         console.log("The car stop")
//     }  
// };

// console.log(car.make);
// console.log(car.colors[0]);
// car.drive();
// car.stop();



//================Strings #8 GroupC============


// function fullName({firstName,lastName}){

//     const fullName = `${firstName} ${lastName}`;
//     return fullName.toUpperCase();
// }

// console.log(fullName({lastName:'John',firstName:'Doe'}));




// let lastName = function(a,b){
//     return a + b;
// }
// let myAge = lastName(20,10);
// let myName = lastName('Felicien ','MUKESHARUGAMBA');
// let fatherName = lastName('Ambroise ','NTWENGERABANSI');

// console.log(myName);
// console.log('Afisimyaka ' + myAge);
// console.log('Papa wiwe yitwa: ' + fatherName);
// console.log(lastName);

//======================================================


//let store = [
//{fName:'Felicien',lName:'Mukesharugamba',age:30},
//{fName:'Christopher',lName:'Irakoze',age:28},
//{fName:'Bernice',lName:'Mugisha',age:20},
//{fName:'Christella',lName:'Munezero',age:22},
//{fName:'Nina',lName:'Iriboneye',age:30},
//];
//console.log(store);


// const numbers =[
//     {id:3,name:Bernice, lastName:Mugisha, age:20},
//     {id:4,name:Christella, lastName:Munezero, age:22},
//     {id:5,name:Nina, lastName:Iriboneye, age:19},
//     {id:6,name:Bobo, lastName:Dushimimana, age:21},
//     {id:7,name:Sadiki, lastName:Seth, age:28}
// ];
// console.log(numbers[4]);

// ===============EXERCICES FOR IF STATMENT=====================
//TUYIKORESHA MUGIHE DUFISE AMAHITAMO 2 CANKE ARENGA

//  let papa = "I'am here";
//  let mama = "I'am not here";
//  let allParent = "We are here";

// if(papa !== "I'am here"){
//     console.log("pleas Dady you are welcome");
// }
// else if(mama == "I'am here"){
//     console.log("My Mama she is sick");
// }
// else if(allParent !== "We are here"){
//     console.log("You are welcome,my parent I miss you so much");
// }else{
//     console.log("what is this!!!!")
// };


// let surname = ""; //==>false
// let surname = "a"; //==>true
// let age = 0;//==>false
// let age = 1;//==>true
//let sex = null;//==>false

// if(sex){
//     console.log("you are right");
// }else{
//     console.log("you are lying");
// }


// =======TERNARY OPERATOS===============
//NI OPERATOR IKORESHA VALUE 3


// (papa == "I'am here") ? console.log("pleas Dady you are welcome") : console.log("you are lying");


// ===========SWICTH CASE=============

// let age = 18;
// switch(age){
//     case 20 :
//         console.log("Is him");
//         break;
//         case 30 :
//         console.log("Is him");
//         break;
//         case 18 :
//         console.log("Is him");
//         break;
// }

// ============WHILELOOP==================
//TUYIKORESHA MUGIHE DUFISE IGIKORWA DUSHAKA KO KIGUMA CISUBIRAMO
//IGOMBA KUBA IFISE AHO IHERA NAHO IGARUKIRA


//  let x ;  //IYIFASHA KUMENYA AHO IHERA
//  let counter = 0;  // IYIFASHA KUYIHARURIRA INSHURO IRIBUKORE

// ==========EXERCICE 1==============
// let a = 2;
// let b = 3;
// console.log(a++);  //loop iyicako ikayisiga ataco iyihaye
//                    //bivuzeko a igumana value yayo

// console.log(++b);  //loop iyicako iyisigiye 1


//  while(counter < 5){
//     x = counter + 1 //or x += 1  / x ++
//      console.log(x)
//      counter ++;
//  }

// let result;

// for (let counter = 0; counter < 20; counter ++){
//     x = counter + 1 //or x += 1  / x ++
//           console.log(x)
//          counter ++;
// }


// ==============EXERCICE 2===============


// for (let counter = 0; counter < 40; counter ++){
//          x = counter + 1  //or x += 1  / x ++
//          console.log(x,"awasome")
//      }


//===========EXERCICE 3===================


// for (let counter = 0; counter < 40; counter ++){
//           x = counter + 1  //or x += 1  / x ++
//           if(x % 2 == 0){
//             console.log(x,"awasome");    
//       }

//     }


//==============EXERCICE 4 USE PROMPT=======================

// let number = Number(prompt("Put your age"));

// for (let counter = 0; counter < (number); counter ++){
//            x = counter + 1  //or x += 1  / x ++
//            if(x % 2 == 0){
//              console.log(x,"awasome");    
//        }

//      }


//============FUNCTION NOTATION 1=======================

//function  izina rya function (){

//   code
//}

// UKO BAYIHAMAGARA :IZINA RYA  Function()

//===========FUNCTIN NOTATION 2===== EXPRETION FUNCTION================

// let izina rya function = keyWord ariyo function(){

//     code

// }


//===========FUNCTIN NOTATION 3====== ARROW FUNCTION===============

// let izina rya function = () =>{
//     code
// }

//Iyo ufise parameter 1 : ushatse ()udushirako canke ukatureka
//mugihe ufise parameta 2 cank zirenga utegerezwa gushirako ()

//============EXERCICE 1======================

//IYI NOTATION UYIHAMAGARA WABANJE KUYI DECREALINGER

// let exercice = function(){

//     let number = Number(prompt("Put your age"));

//  for (let counter = 0; counter < (number); counter ++){
//             x = counter + 1  //or x += 1  / x ++
//             if(x % 2 == 0){
//               console.log(x,"awasome");    
//         }

//       }
// }

// exercice();


//============EXERCICE 2======================

//AHA NIMUGIHE UKORESHA PROMPT NKIBISANZWE


// const number = Number(prompt("Put your age"));

// let exercice = function(){    

//      for (let counter = 0; counter < (number); counter ++){
//                 x = counter + 1  //or x += 1  / x ++
//                 if(x % 2 == 0){
//                   console.log(x,"awasome");    
//             }

//           }
//     }

//     exercice();


//============EXERCICE 3======================

//AHA NIMUGIHE LOOP IKORESHA UMUBARE WA PARAMETER WASHIZWE MURI PROMPT


//const number = Number(prompt("Put your age"));

//   let exercice = function(num){    

//        for (let counter = 0; counter < num ; counter ++){
//                   x = counter + 1  //or x += 1  / x ++
//                   if(x % 2 == 0){
//               }
                    //  console.log(x,"awasome");    
//
//             }
//       }

//       exercice(40);



//============EXERCICE 3======================

//AHA NIMUGIHE LOOP IKORESHA UMUBARE WO MWIZINA RYA VALIABLE YA PROMPT


//   const number = Number(prompt("Put your age"));

//   let exercice = function(num){    

//        for (let counter = 0; counter < num ; counter ++){
//                   x = counter + 1  //or x += 1  / x ++
//                   if(x % 2 == 0){
//                     console.log(x,"awasome");    
//               }

//             }
//       }

//       exercice(number);

// ==========================WORK 2====GROUP A========



// let student = [
//   {fName : "Felicien",lName :"Mukesharugamba",age : 30,id : 10},
//   {fName : "Christophe",lName :"Irakoze",age : 28,id : 20},
//   {fName : "Christella",lName :"Munezero",age : 23,id : 30},
//   {fName : "Sadiki",lName :"Set",age : 27,id : 40},
//   {fName : "Nina",lName :"Iriboneye",age : 19,id : 50}
// ];
// //console.log(student);

// let roleOfStudent = student.map(functin());

// console.log(roleOfStudent);

//==================

//  let fefe = [1,4,6,8,10];
//  for(let cycy = 0; cycy < fefe.length; cycy++){
//    fefe[cycy] = fefe [cycy] * 3;
//  };
//  console.log(fefe);


// let arr =[30,20,55,10,25];

// for(let i = 0; i < 5 ; i++){
//  arr [i] = arr [i] * 6;
// // console.log('hello')
// }
// console.log(arr);



// let i = 0;
// while( i < 5 ){

//   // console.log(i);
//   // i++
//  // console.log('hello')
//  }

//=============================================================


// let asist = document.querySelector('.row');
// let nameAsist = asist.getAttribute('class');
// console.log(nameAsist);

// const last = link.nextElementSibling;
// console.log(last);
// last.setAttribute('class','one');
// last.textContent = 'i also have aclass of one';
// console.log(last)

//=======3 ARRAY BECOME 1 ARREY==========

// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const array3 = [7,8,9];

// const allArray = [...array1,...array2,...array3];
// console.log(allArray);