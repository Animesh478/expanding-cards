const panels = document.querySelectorAll('.panel');
for(let i =0; i<5; i++){
    panels[i].addEventListener('click', function(){
        removeActive();
        panels[i].classList.toggle('active');
    })
}

function removeActive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}