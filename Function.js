// function printMessage() {
//     console.log("Hey Buddy");
// }
// function sum(callback) {
//     callback();
// }
// printMessage();
// console.log(printMessage());

//with params 
// function printMessage(message) {
//     console.log(message);

// }
function sum(v1, v2, callback) {
    callback(v1+v2);
}
// sum (10, 20, printMessage)

//  sum(100,200,  function printMessage( message )
//  {
//     console.log(message);
//  });

//  sum(10,20,  function ( message )
//  {
//     console.log(message);
//  });

// sum(10,20,( message )=>
//  {
//     console.log(message);
//  });

// sum(10,20,( callback )=> console.log(callback));

//nested function

 function hello()
 {
     console.log('hello Fun');
     
   function message()
   {
    console.log('Message fun');
   }
   message();
}
hello();


