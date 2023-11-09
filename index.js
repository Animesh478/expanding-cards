const panelBtn = document.querySelectorAll('.panel');
console.log(panelBtn)
for(let i =0; i<5; i++){
    panelBtn[i].addEventListener('click', function(){
        panelBtn[i].classList.toggle('active');
    })
}
