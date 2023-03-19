

document.addEventListener("DOMContentLoaded",(event) =>{
  
    axios.get("http://localhost:3001/user/get-user")
    .then(res =>{ 
     
        
      for(var i=0;i<res.data.length;i++)
      { 
createElement(res.data[i]);

console.log(res.data);
      }
    })
    .catch(err =>console.log(err))
})



var form=document.querySelector('#myform');
var list=document.querySelector('.add_details');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const pname=e.target.pname.value;
   
    const price=e.target.price.value;
  
    
    const obj={
        pname,
      price,

    }
    console.log(obj);
    axios.post("http://localhost:3000/user/add-user",obj)
    .then((res) =>{
      console.log(res.data);
        createElement(res.data.Detail);
    
        
      })
        .catch((err) =>{
          alert("something went wrong")
            console.log(err)})
       
}
function createElement(objun){
  var li=document.createElement('li');
  li.className='expensedetails';
  li.appendChild(document.createTextNode(`  ${objun.pname}  `));
  li.appendChild(document.createTextNode(`  ${objun.price}  `));

 
  var deletebutton=document.createElement('button');
   //add classname
   deletebutton.className='btndelete';
   deletebutton.style.backgroundColor='red';
   //append textnode
   deletebutton.appendChild(document.createTextNode('Delete Expense'));
   //append to li
   li.appendChild(deletebutton);
   deletebutton.addEventListener('click',() => {
       if(confirm('Are you sure you want to delete?')){
   li.remove();
   axios.delete(`http://localhost:4500/user/delete-user/${objun.id}`)
         .then((res) => li.remove())
         .catch((err) =>{ 
         alert("something went wrong")
         console.log(err);})
         }
   });
  list.appendChild(li);  
  document.getElementById('pname').value='';
  document.getElementById('price').value='';
  }
