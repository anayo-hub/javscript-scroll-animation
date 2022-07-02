const  boxes = document.querySelectorAll('.row');
window.addEventListener('scroll', checkboxes)
checkboxes()


function checkboxes(){
    let triggerBottom = window.innerHeight /  2; 

    boxes.forEach(box =>{
        let boxTop = box.getBoundingClientRect().top; 
        if(boxTop < triggerBottom){
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    } 
    })

    
}
    

