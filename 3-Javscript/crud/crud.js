var add_btn = document.getElementById("add_btn");
var myinput = document.getElementById("myInput");
var list = document.getElementById("list");

add_btn.onclick = function(){
newtodoList();
}
function newtodoList(){
   var item_name = myInput.value;
    var li = document.createElement("LI");
    var span = document.createElement("SPAN");
    span.innerText=item_name;
    span.className="text";
    li.appendChild(span);
    var label = document.createElement("LABEL");
    label.innerHTML='  <i class="fa-solid fa-square-check"></i>&nbsp; <i class="fa-solid fa-trash"></i>';
    li.append(label)
    list.appendChild(li);
    var check_tag = label.getElementsByTagName("I");
  check_tag(0).onclick=function(){
    li.classlist.toggle("checked");
  }
}
