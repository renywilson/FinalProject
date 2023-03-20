
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
  console.log(res.data);
    

    
  })
    .catch((err) =>{
      alert("something went wrong")
        console.log(err)})
   
}
   
