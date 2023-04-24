
function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
function showPremeiumusereMessage()
{
  document.getElementById('rzp-button1').style.visibility="hidden"
  document.getElementById('message').innerHTML="You are premium user now";
}
function showprebutton()
{
  const inputElement=document.createElement('button')
  inputElement.value="showLeaderBoard"
  inputElement.setAttribute('id','showbutton')
  document.getElementById('message').appendChild(inputElement)
  inputElement.onclick=async()=>{
    const token=localStorage.getItem('token')
  
  const userleaderboardArray= await axios.get('http://localhost:4500/premium/showLeaderBoard',{headers:{"Authorization":token}})
  console.log(userleaderboardArray);
  var cont = document.getElementById('container');
  
  // create ul element and set the attributes.
  var ul = document.createElement('ul');
  
  ul.setAttribute('id', 'theList');
  var liHeading = document.createElement('li'); // Create a new <li> element for the headings
liHeading.textContent = 'Name  |   Total cost'; // Set the text content of the <li> element for the headings
ul.appendChild(liHeading); // Add the <li> element for the headings to the <ul> element

  for (i = 0; i <= userleaderboardArray.data.data.length - 1; i++) {
      var li = document.createElement('li');     // create li element.
      li.textContent = userleaderboardArray.data.data[i].name+'   |   '+userleaderboardArray.data.data[i].totalExpences;  
     
      console.log(userleaderboardArray.data.data[i])   // assigning text to li using array value.
      li.setAttribute('style', 'display: block;');    // remove the bullets.
  
      ul.appendChild(li);     // append li to ul.
  }
  
  cont.appendChild(ul);    // append li to ul.
  }
    
}

document.addEventListener("DOMContentLoaded",(event) =>{
 const token=localStorage.getItem('token')
 const decodeToken=parseJwt(token);
 console.log(decodeToken);
 const isadmin=decodeToken.ispremiumuser
 console.log(isadmin)
 
 if(isadmin)
 {
   showPremeiumusereMessage();
  showprebutton();
 }
    axios.get("http://localhost:4500/expense/getexpenses ",{headers:{"Authorization":token}})
    .then(res =>{ 
     
   //console.log(res.data.expenses)
   for(var i=0;i<res.data.expenses.length;i++)
   {
createElement(res.data.expenses[i]);
   }

      
     } )
    .catch(err =>console.log(err))
})



var form=document.querySelector('#myform');
var list=document.querySelector('.expense_details');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const expenseamount=e.target.expenseamt.value;
    const description=e.target.descript.value;
    const category=e.target.categories.value;
    
    const obj={
        expenseamount,
        description,
        category,
       
    }
    console.log(obj);
    const token=localStorage.getItem('token')
    axios.post("http://localhost:4500/expense/addexpense",obj,{headers:{"Authorization":token}})
    .then((res) =>{
      console.log(res.data);
     
        createElement(res.data.expense);
    
  
      })
        .catch((err) =>{
          alert("something went wrong")
            console.log(err)})
       
}
   function createElement(objun){
   var li=document.createElement('li');
   li.className='expensedetails';
   li.appendChild(document.createTextNode(`  ${objun.expenseamount}  `));

   li.appendChild(document.createTextNode(`  ${objun.description}  `));
   li.appendChild(document.createTextNode(`  ${objun.category}  `));
   var editbutton=document.createElement('button');
   editbutton.className='btnedit';
   editbutton.style.backgroundColor='green';
   editbutton.appendChild(document.createTextNode('Edit Expense'));
   li.appendChild(editbutton);

   editbutton.addEventListener('click',() =>{
    document.getElementById('expenseamt').value=objun.expenseamount;
    document.getElementById('descript').value=objun.description;
    document.getElementById('categories').value=objun.category;
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
   document.getElementById('expenseamt').value='';
   document.getElementById('descript').value='';
   document.getElementById('categories').value='';
}


document.getElementById('rzp-button1').onclick=async function(e){
  const token=localStorage.getItem('token')
  

 const response= await axios.get('http://localhost:4500/purchase/premiummembership',{headers:{"Authorization":token}});
  console.log(response);
   var options=
   {
    "key":response.data.key_id,
    "order_id":response.data.order.id,
    "handler":async function(response){
    const res= await axios.post('http://localhost:4500/purchase/updatetransactionstatus',{order_id:options.order_id,payment_id:response.razorpay_payment_id,}, {headers:{"Authorization":token}});
  
    alert('you are premium user now');
    localStorage.setItem('token',res.data.token)
    document.getElementById('rzp-button1').style.visibility="hidden"
    document.getElementById('message').innerHTML="You are premium user now";
    },
    
  
  
 
};
const rzp1=new Razorpay(options);
rzp1.open();
e.preventDefault();
rzp1.on('payment.failed',function(response){
  console.log(response);
  alert('something went wrong')
});
}
function download(){
  axios.get('http://localhost:4500/user/download', { headers: {"Authorization" : token} })
  .then((response) => {
      if(response.status === 201){
          //the bcakend is essentially sending a download link
          //  which if we open in browser, the file would download
          var a = document.createElement("a");
          a.href = response.data.fileUrl;
          a.download = 'myexpense.csv';
          a.click();
      } else {
          throw new Error(response.data.message)
      }

  })
  .catch((err) => {
      showError(err)
  });
}
