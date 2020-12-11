// function setAlarm(employed,vacation){
//     return employed && !vacation
// }

// console.log(setAlarm(false,false));

// let arr2 =[];
// function newArr(num) {

//     for (let i = 0; i < num; i++) {
//         arr2.push(i);
//     } 
//     return arr2
// };

// console.log(newArr(4));

// function warnTheSheep(queue) {
//     let wolfIndex = queue.reverse().indexOf('wolf');
//   if(wolfIndex === 0)return "Pls go away and stop eating my sheep";
//   else return `"Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!"`
// }

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));

// function past(h, m, s){
//     return ((h*60+ m)*60+ s)*1000
//     //#Happy Coding! ^_^
//   }

//   console.log(past(0,1,2));

// function areYouPlayingBanjo(name) {  
//      if(name.split('')[0] == "r" || name.split('')[0] == "R") return name + " plays banjo" ;
//      else return name + " does not play banjo"
//    }
//    console.log(areYouPlayingBanjo('Martin'));



//    function litres(time) {
//     return Math.floor(time*0.5)
//   }

//   console.log(litres(5));


// function invert(array) {
//     let arr2=[];
//     for(let i= 0;i<array.length;i++){
//         arr2.push(array[i]*(-1))
//     }
//     return arr2
//  }

//  console.log(invert([1,2,3,4,5]));
// var summation = function (num) {
//     if(num>0){
//     let sum = 0;
//     for(let i=0;i<=num;i++){
//       sum+=i
//     }// Codere here
//     return sum
//     }
//   }
//   console.log(summation(5));
// function generateRange(min, max, step) {
//     let arr = [];
//     while (min <= max) {
//         arr.push(min);
//         min += step
//     }
//     return arr
// }

// console.log(generateRange(2, 12, 2));
// function nextId(ids){ 
//     for(let i = 0; i< ids.length;i++){
//       if(ids[i] != i)return i;

//     }
//      return ids.length
//   }


//   console.log(nextId([0,1,2,4]));

// function solution(str, ending){
//     let arr= [];
//     str = str.split('').reverse();
//     ending = ending.split('').reverse();
//     for(let i = 0; i< ending.length; i++){
//       arr.push(str[i])
//     }  
//     arr = arr.join('');
//     ending = ending.join('');
//     if(arr === ending) return true;
//     else return false// TODO: complete

//   }

//   console.log(solution('abcde', 'cde'));

// let str = parse('3D', 16);
// console.log(str);

// function tidyNumber(n){
//     return [...n+=""].sort().join``==n
//   }

//  console.log(tidyNumber(127) );

// function peak(arr){
//     for(let i=1;i<arr.length; i++){
//       let ar1 = arr.slice(0,i);
//       if(i == arr.length ){
//           ar2 = arr[arr.length]
//         }else {ar2 = arr.slice(i+1,arr.length+1); 
//         ar2 = ar2.reduce((total2,amount2)=>total2+amount2);}

//           ar1 = ar1.reduce((total,amount) =>total+amount); 

//           if(ar1 == ar2) return  i ; 
//     }

//    }

//    console.log(peak([10,20,30,40])); 

// let body = document.querySelector('body');
// function myRandom(a){
//   return Math.ceil(Math.random()*a)
// }   
// function bgColor(){
//   body.style.background = `rgba(${myRandom(255)},${myRandom(255)},${myRandom(255)},0.${myRandom(9)})`
//   setTimeout(bgColor, 1000)
// }
// bgColor()

// let canvas = document.querySelector('.canvas');
// let ctx = canvas.getContext("2d");

// let img = new Image;




// ctx.drawImage( img , 0, 0, canvas.width, canvas.height);

// img.src = 'loc.jpg';

// console.log(Symbol());
// let red = document.querySelector('.box').textContent.split('');
// // red = red.split('');
// console.log(red);
//  let de= [];
// for(let i=0;i<red.length;i++){
//      if(i%2 == 0){
//        red[i].style.fontSize = '15px'
// de.push(red[i]);
//      }else de.push(red[i])

// }
// de.join('').innerHTML;

// if(navigator.webkitGetUserMedia!=null) { 
//   var options = { 
//     video:true, 
//     audio:true 
//   }; 

//   // запрашиваем доступ к веб-камере
//   navigator.webkitGetUserMedia(options, 
//     function(stream) { 
//       // получаем тег video
//       var video = document.querySelector('video'); 
//       // включаем поток в магический URL
//       video.src = window.webkitURL.createObjectURL(stream); 
//     }, 
//     function(e) { 
//       console.log("error happened"); 
//     } 
//   ); 
// }

// let cof = true;
// function say(){
//   console.log('544');
// }

// cof && say();

// let text = 'javascript Javascript javascript';

// console.log(text.replace(/java/gi, 'ecma'));


// const arr = [1,2,2,3,3,3,3,4,4,5,5,6,7];

// let unArr = [...new Set(arr)];
// console.log(unArr);


// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.sort(function(){
//   return Math.random() - 0.5
// }));
// console.log(arr.sort());
// console.log(Math.random() - 0.5);

// let max = arr[0];
// let min = arr[0];

// for(let i = 0; i<arr.length;i++){
//   if(arr[i]>max){
//     max= arr[i]
//   }
//   if(arr[i]<min){
//     min = arr[i]
//   }
// }

//  console.log(max,min);

let inp = document.querySelector('textarea'),
  but = document.querySelector('button');

const firFo = document.querySelector('.first-four'),
  sec = document.querySelector('.second'),
  third = document.querySelector('.third'),
  booth = document.querySelector('.booths'),
  offsets = document.querySelector('.offsets'),
  between = document.querySelector('.between'),
  span = document.querySelector('.number');

let num = 0
but.addEventListener('click', function () {
  num++
  span.innerHTML = num;
  let arr = inp.value;
  arr2 = arr.split(' ')
  arr2.forEach(person => person.toLowerCase())
  arr2.sort(function () {
    return Math.random() - 0.5
  })
  if (arr2.length == 6 || arr2.length == 7) {
    booth.innerHTML = arr2[0];
    third.innerHTML = arr2[1];
    offsets.innerHTML = arr2[2];
    firFo.innerHTML = `${arr2[3]} / ${arr2[4]} `;
    sec.innerHTML = arr2[5];
    between.innerHTML = arr2[6] == undefined ? 'Некого между поставить' : arr2[6];
  }

  else if (arr2.length == 8) {
    booth.innerHTML = `${arr2[5]} / ${arr2[6]} `;
    third.innerHTML =  arr2[1] ;
    offsets.innerHTML = arr2[2];
    firFo.innerHTML = `${arr2[3]} / ${arr2[4]} `;
    sec.innerHTML = arr2[0] ;
    between.innerHTML = arr2[7];
  } else if (arr2.length < 6){
    third.innerHTML = arr2[1];
    offsets.innerHTML = arr2[2];
    firFo.innerHTML = `${arr2[3]} / ${arr2[4]} `;
    sec.innerHTML = arr2[0];
    booth.innerHTML = arr2[0];
  }
})
