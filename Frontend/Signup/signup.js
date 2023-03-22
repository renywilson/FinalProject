
var form=document.querySelector('#myform');
var list=document.querySelector('.booked_details');
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const obj={
        name,
        email,
        password
    }
    console.log(obj);
axios.post("http://localhost:5000/user/add-user",obj)
.then((res) =>{
  if(res.status===201)
  {
    window.location.href="../login/login.html";
  }
    
else{
  throw new Error('Login failed')
}
    
  })
    .catch((err) =>{
      document.body.innerHTML+=`<div style="color:red">${err}<div>`})
   
}
   
