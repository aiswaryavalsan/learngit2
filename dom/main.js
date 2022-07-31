// var form=document.getElementById('addForm');
// var itemlist=document.getElementById("items");
// form.addEventListener('submit',addItem);
// itemlist.addEventListener('click', removeItem);
// function addItem(e)
// {
//  e.preventDefault();
//  var newitem=document.getElementById('item').value;
//  console.log(newitem);
//  var li=document.createElement('li');
//  li.className='list-group-item';
//  console.log(li);
//  console.log(li.appendChild(document.createTextNode(newitem)));
//  var deletebtn=document.createElement('button');
 
//  deletebtn.className='btn btn-danger btn-sm float-right delete';
//  deletebtn.appendChild(document.createTextNode('X'));
//  li.appendChild(deletebtn);
//  itemlist.appendChild(li);
//  var editbtn=document.createElement('button');
//  editbtn.className='edit';
//  editbtn.appendChild(document.createTextNode('edit'));
//  li.appendChild(editbtn);

// }
// function removeItem(e)
// {
  

//     if(e.target.classList.contains('delete'))
//    {
//       if(confirm('are you sure?'))
//         {
//             var li=e.target.parentElement;
//            itemlist.removeChild(li);
//        }
//    }
// }
var itemList=document.getElementById("items");
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
   var items = itemList.getElementsByTagName('li');
   Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }