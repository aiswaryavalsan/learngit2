var submitButton=document.getElementById("btn");
console.log(submitButton);
localStorage.setItem('name','name');
console.log(localStorage.getItem("name"));
//console.log("!");
//submitButton.addEventListener('onclick',additems);
function saveToLocalStorage(e)
{
    e.preventDefault();
    const name1=e.target.name.value;
    const email1=e.target.email.value;
    console.log(name1);
    console.log(email1);
   localStorage.setItem('name',name1);
    localStorage.setItem('email',email1);
}