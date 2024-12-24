

function run(v) {
    a = document.getElementById('screen');
    
    if (v=='AC') {
        a.value=null
    }
    else if (v=='back') {
        a.value=a.value.slice(0,length-1);
    }
    else if (v == 'total') {
        a.value = eval(a.value)
    }
    else {
        a.value += v
    }   
}