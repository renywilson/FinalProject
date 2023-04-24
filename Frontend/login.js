
var form=document.querySelector('#myform');
form.addEventListener('submit',login);
function login(e){
    e.preventDefault();
    console.log(e.target.name);
    const loginDetails={
        email:e.target.email.value,
       password:e.target.password.value,

    }
    console.log(loginDetails)
 axios.post('http://localhost:4500/user/login',loginDetails).then(response=>{
localStorage.setItem('token',response.data.token);
localStorage.setItem('userDetails', JSON.stringify(response.data.user))
   window.location.href="./expensetracker.html";
    alert(response.data.message)


}).catch(err=>{
    console.log(JSON.stringify(err))
    document.body.innerHTML+=`<div style="color:red">${err.message}<div>`;
})
}
function forgotpassword() {
    window.location.href = "./Forgotpassword.html"
}