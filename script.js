var inputValue = document.form.textview;


function add(mark){
    inputValue.value = inputValue.value + mark;
}

function del(){
    var x = inputValue.value.split('');
    x.pop();
    inputValue.value = x.join('');
}

function clean(){
    inputValue.value = "";
}

function eq(){
    var x = inputValue.value;
    if(x){
        inputValue.value = eval(x);
    }
}