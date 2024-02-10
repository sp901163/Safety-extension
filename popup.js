 let b = document.getElementById("G");
 if(b !== null){
 b.addEventListener("click",Time);
 }
 
 function Time(){
   let t = document.getElementById("S");
if(location.protocol === 'https:')
{
     t.innerHTML = "Not Secure Website";
}
else
{
    t.innerHTML = "Secure Website";
}
}