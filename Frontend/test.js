

  var arr = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];
  var cont = document.getElementById('container');
  
  // create ul element and set the attributes.
  var ul = document.createElement('ul');
  
  ul.setAttribute('id', 'theList');
  
  for (i = 0; i <= arr.length - 1; i++) {
      var li = document.createElement('li');     // create li element.
      li.innerHTML = arr[i];      // assigning text to li using array value.
      li.setAttribute('style', 'display: block;');    // remove the bullets.
  
      ul.appendChild(li);     // append li to ul.
  }
  
  cont.appendChild(ul);    // append li to ul.
 
  
  cont.appendChild(ul);   
  
