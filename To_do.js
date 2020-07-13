// var _the_todo = document.getElementsByClassName("ddd").value;

// var x_item = document.getElementsByClassName("x_item");

// var close_item = document.getElementsByClassName("close");

// function del_delete() {
// delete _the_todo;
// } 


//gets list of inputs from input field

function on_click_functions(){
    input_list();
    // close_x_button();
    // add_checkbox();
}

function input_list(){

    // todo NOT DONE
    var the_list = document.getElementsByTagName('LI');
    var li = document.createElement("li");
    var get_input = document.getElementById('ddd').value;
    var add_li = document.createTextNode(get_input);
    li.appendChild(add_li);
    

    if(get_input === ''){
        alert("You haven't entered a TODO!");
    }
    else{
        document.getElementById('my_list').appendChild(li);
    }

    document.getElementById('ddd').value = '';

    // 'x button
    var close_button = document.createElement("SPAN");
    var x = document.createTextNode("\u00D7");
    close_button.className = 'close';
    close_button.appendChild(x);
    li.appendChild(close_button); 

    //remove a todo
    close_button.addEventListener("click", function _closed(){
       li.parentElement.removeChild(li) ;
    })

  
    //checkbox
    var check_box = document.createElement("SPAN");
    var _box = document.createElement("INPUT");
    _box.setAttribute("type", "checkbox");
    check_box.appendChild(_box);
    li.insertBefore(check_box, li.childNodes[0]);

    //move todo to completed when checkbox is checked
    check_box.addEventListener("click", function _checked(){
        if(_box.checked === true){
            var new_li = document.createElement("li");
            var the_input = add_li.nodeValue;
            var add_new_li = document.createTextNode(the_input);
            new_li.appendChild(add_new_li);
            document.getElementById('completed_list').appendChild(new_li);
        }
        else{
           document.getElementById('completed_list').remove(new_li);
        }
        
    });


}

function _checked(){
if(check_box.checked == true){
    alert("yes");
}
alert("no");
}

function close_x_button(){
  
}

function add_checkbox(){
   
}


// moves input to NOT DONE
function submitted() {
   
    for(let i = 0; i < 5; i++){
        add_this = document.getElementById([i]);
    }

    var remove_this = document.getElementById('ddd');
    var add_this = document.getElementById('the_output1');
  
    var name = remove_this.value;
    add_this.innerHTML = name;

    remove_this.value= '';


    
}
//clears the input todo field
function clear_input(){
    document.getElementById('ddd').value = '';
}

//clear todo with 'x' button
function clear_todo(){
    document.getElementById('the_output').innerHTML = '';
}

//moves NOT DONE to completed
function completed(){

}

