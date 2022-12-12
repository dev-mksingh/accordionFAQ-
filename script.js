const inputs = document.querySelectorAll('input');
const paras = document.querySelectorAll('section p');
const arrows = document.querySelectorAll('label img');

for(var i = 0; i<inputs.length; i++) {
    const para = paras[i];
    const arrow = arrows[i];
    inputs[i].addEventListener('click', function(evt){
        if(evt.target.checked==true) {
            para.classList.toggle('block');
            arrow.classList.toggle('img');
            }
        })
    }
