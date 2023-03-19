

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
    const candyname=e.target.candyname.value;
    const description=e.target.description.value;
    const prise=e.target.price.value;
    const qty=e.target.qty.value;
    
    const obj={
        candyname,
        description,
      prise,
      qty
    }
    console.log(obj);
    axios.post("http://localhost:3001/user/add-user",obj)
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
   li.className='adddetails';
   li.appendChild(document.createTextNode(`  ${objun.candyname}  `));
   li.appendChild(document.createTextNode(`  ${objun.description}  `));
   li.appendChild(document.createTextNode(`  ${objun.price}  `));
   li.appendChild(document.createTextNode(`  ${objun.qty}  `));
   var editbutton=document.createElement('button');
   editbutton.className='btnone';
   editbutton.style.backgroundColor='grey';
   editbutton.appendChild(document.createTextNode('Buy One'));
   li.appendChild(editbutton);

   editbutton.addEventListener('click',() =>{
   


axios.post(`http://localhost:3001/user/edit-user/${objun.id},${objun.qty}`)
.then((res) =>{
  console.log(data);
   // createElement(res.data);

    
  })
    .catch((err) =>{
      alert("something went wrong")
        console.log(err)})
    
   });
   
   list.appendChild(li);  
  
}
