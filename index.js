// regitrarion
 //  regi ---3
 //  completed --2
 //  mail --1
 //  sms  --0
 
//  function regi( callback)
//  {
//     setTimeout(()=>{
//            console.log('regi..proccessed!');
//            callback();
 
//     } ,3000)
//  }
 
 
//  function completed(callback)
//  {
//     setTimeout(()=>{
//            console.log('regi..completed!');
//            callback();
 
//     } ,2000)
//  }
 
//  function mail(callback)
//  {
//     setTimeout(()=>{
//            console.log('regi..mail!');
//            callback();
 
//     } ,1000)
//  }
 
//  function sms(callback)
//  {
//     setTimeout(()=>{
//             console.log('regi..sms!');
//            callback();
//     } ,500)
//  }
 
//  function endMessage()
//  {
//     console.log('step end')
//  }
 
// console.log('step 1')
//  regi(()=>{
//     console.log('step 2');
//     completed(()=>{
//         console.log('step 3');
//         mail(()=>{
//             console.log('step 4');
//             sms(endMessage);
 
//         });
//     });
//  });


//Promise
   // pending
   // success resolve fullfilled
   // fail    reject  un complete
 
//    const myPromise  = new Promise( (resolve, reject )=>{
   
//     setTimeout( ()=>{  
       
//         console.log('promise');
       
//         const isSuccess=true;
     
//       if(isSuccess)
//        {
//           resolve();
//        }
//        else
//        {
//           reject();
//        }
//     },3000  )
 
// });
 
//    myPromise
//    .then( ()=>{
//     console.log('resolved!');
   
//    } )
//    .catch(()=>{
//      console.log('rejected!');
     
//    } );




// function regi( )
//  {
//     const regiPromise = new Promise( (callback)=>{
//         setTimeout(()=>{
//            console.log('regi..proccessed!');
//            callback();
 
//     } ,3000)
//     });
//     return regiPromise;
//  }
 
 
//  function completed(callback)
//  {
//     return  new Promise( (callback)=>{
//         setTimeout(()=>{
//            console.log('regi..completed!');
//            callback();
 
//     } ,2000)
//     });
//  }
 
//  function mail(callback)
//  {
 
//     return  new Promise( (callback)=>{
//         setTimeout(()=>{
//            console.log('regi..mail!');
//            callback();
 
//     } ,1000)
//     });      
// }
 
//  function sms(callback)
//  {
//     return  new Promise( (callback)=>{
//         setTimeout(()=>{
//            console.log('regi..sms!');
//            callback();
 
//     } ,500)
//     });
//  }
 
//  function endMessage()
//  {
//     console.log('step end')
//  }
 
// console.log('step 1');
//  regi().then(()=>{
//         console.log('step 2');
//     completed().then(()=>{
//         console.log('step 3');
//      mail().then(()=>{
//         console.log('step 4');
//     sms().then(()=>{
//     endMessage();
//             });
//      })
//     })
//  })


// async function CallRegi()
//  {
//     console.log('step 1');
//     await regi();
//     console.log('step 2');
//     await completed();
//     console.log('step 3');
//     await mail();
//     console.log('step 4');
//     await sms();
//     endMessage();
   
//  }
//  CallRegi();


// assignment
// 1


// function removeDupli(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDupli([1, 2, 2, 3, 4, 4, 5]));


// 2

// function minmax(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }

//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   console.log("Largest:", max);
//   console.log("Smallest:", min);
// }

// minmax([4, 3, 8, 5, 1]);

// 3

// function reverse(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
//   }

//   return arr;
// }

// console.log(reverse([1, 2, 3, 4, 5]));

// 4

// function count(arr) {
//   let count = {};

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (count[num]) {
//       count[num]++;
//     } else {
//       count[num] = 1;
//     }
//   }
//   console.log(count);
// }

// count([1, 2, 1, 3, 1, 3, 4]);


// 5

// function SecondLargest(arr){
//    let fNumber=-Infinity;
//    let snumber=-Infinity;
//    for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > fNumber) {
//       snumber = fNumber;
//       fNumber = num;
//     } else if (num > snumber && num < fNumber) {
//       snumber = num;
//     }
//   }

//   if (snumber === -Infinity) {
//     console.log("Array me second largest nahi hai!");
//   } else {
//     console.log("Second Largest:", snumber);
//   }
// }

// SecondLargest([10, 5, 20, 8, 15]);


// 6