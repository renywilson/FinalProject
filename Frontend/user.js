
document.addEventListener("DOMContentLoaded",(event) =>{
    axios.get("http://localhost:5000/user/get-user")
    .then(res =>{ 
        console.log(res);
      for(var i=0;i<res.data.length;i++)
      { 
        createElement(res.data[i]);
      }
    }).catch(err =>console.log(err))
})
var form=document.querySelector('#myform');
var list=document.querySelector('.booked_details');
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const phonenumber=e.target.phonenumber.value;
    const obj={
        name,
        email,
        phonenumber
    }
    console.log(obj);
axios.post("http://localhost:5000/user/add-user",obj)
.then((res) =>{
  console.log(res.data);
    createElement(res.data.newUserDetail);

    
  })
    .catch((err) =>{
      alert("something went wrong")
        console.log(err)})
   
}
   function createElement(objun){
   var li=document.createElement('li');
   li.className='userdetails';
   li.appendChild(document.createTextNode(`  ${objun.name}  `));
   li.appendChild(document.createTextNode(`  ${objun.email}  `));
   li.appendChild(document.createTextNode(`  ${objun.phonenumber}  `));
   var editbutton=document.createElement('button');
   editbutton.className='btnedit';
   editbutton.style.backgroundColor='green';
   editbutton.appendChild(document.createTextNode('EDIT'));
   li.appendChild(editbutton);
   editbutton.addEventListener('click',() =>{
    document.getElementById("name").value=objun.name;
    document.getElementById("email").value=objun.email;
    document.getElementById("phonenumber").value=objun.phonenumber;
    
   });
   var deletebutton=document.createElement('button');
    //add classname
    deletebutton.className='btndelete';
    deletebutton.style.backgroundColor='red';
    //append textnode
    deletebutton.appendChild(document.createTextNode('Delete'));
    //append to li
    li.appendChild(deletebutton);
    deletebutton.addEventListener('click',() => {
        if(confirm('Are you sure you want to delete?')){
          axios.delete(`http://localhost:5000/user/delete-user/${objun.id}`)
          .then((res) => li.remove())
          .catch((err) =>{ 
          alert("something went wrong")
          console.log(err);})
 }
    });
   list.appendChild(li);  
   document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phonenumber').value='';
}