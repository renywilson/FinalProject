

document.addEventListener("DOMContentLoaded",(event) =>{
  
    axios.get("http://localhost:4500/user/get-user")
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
var list=document.querySelector('.expense_details');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const expense=e.target.expensesum.value;
    const description=e.target.description.value;
    const category=e.target.category.value;
    
    const obj={
        expense,
        description,
        category
    }
    console.log(obj);
    axios.post("http://localhost:4500/user/add-user",obj)
    .then((res) =>{
      console.log(res.data);
        createElement(res.data.userDetail);
    
        
      })
        .catch((err) =>{
          alert("something went wrong")
            console.log(err)})
       
}
   function createElement(objun){
   var li=document.createElement('li');
   li.className='expensedetails';
   li.appendChild(document.createTextNode(`  ${objun.expense}  `));
   li.appendChild(document.createTextNode(`  ${objun.description}  `));
   li.appendChild(document.createTextNode(`  ${objun.category}  `));
   var editbutton=document.createElement('button');
   editbutton.className='btnedit';
   editbutton.style.backgroundColor='green';
   editbutton.appendChild(document.createTextNode('Edit Expense'));
   li.appendChild(editbutton);

   editbutton.addEventListener('click',() =>{
    document.getElementById('expensesum').value=objun.expense;
    document.getElementById('description').value=objun.description;
    document.getElementById('category').value=objun.category;
    console.log(objun);
   
    li.remove();

    
   });
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
   document.getElementById('expensesum').value='';
   document.getElementById('description').value='';
   document.getElementById('category').value='';
}
