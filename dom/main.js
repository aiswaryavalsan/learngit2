var form=document.getElementById('addForm');
var itemlist=document.getElementById("items");
form.addEventListener('submit',addItem);
itemlist.addEventListener('click', removeItem);
function addItem(e)
{
 e.preventDefault();
 var newitem=document.getElementById('item').value;
 console.log(newitem);
 var li=document.createElement('li');
 li.className='list-group-item';
 console.log(li);
 console.log(li.appendChild(document.createTextNode(newitem)));
 var deletebtn=document.createElement('button');
 
 deletebtn.className='btn btn-danger btn-sm float-right delete';
 deletebtn.appendChild(document.createTextNode('X'));
 li.appendChild(deletebtn);
 itemlist.appendChild(li);
 var editbtn=document.createElement('button');
 editbtn.className='edit';
 editbtn.appendChild(document.createTextNode('edit'));
 li.appendChild(editbtn);

}
function removeItem(e)
{
  

    if(e.target.classList.contains('delete'))
   {
      if(confirm('are you sure?'))
        {
            var li=e.target.parentElement;
           itemlist.removeChild(li);
       }
   }
}