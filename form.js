function validateName()
{
   
   const name =document.getElementById('name').value.trim();
   
   if( !(name.length>=10 && name.length<=20) )
   {
     document.getElementById('nameMessage').innerText='not valid'
    // alert('name length required in between 10 to 20')
   }
   else
   {
     document.getElementById('nameMessage').innerText='valid'
   
   }
 
}
 
 function createss()
 {
   const name =document.getElementById('name').value.trim();
   
   const email =document.getElementById('email').value.trim();
 
   if( !(name.length>=10 && name.length<=20) )
   {
//     alert('name length required in between 10 to 20')
   }
 
   if(!email.include('@') )
     {
        alert('not a valid email!')
     }
     //regex string pattern pan
 
 
 
 
}