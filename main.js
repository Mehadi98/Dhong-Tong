
let menu = document.querySelector('.nav-list')
let hambergurIcon = document.querySelector('#hambergurIcon')

hambergurIcon.addEventListener('click',menuShow)

let isOpen = false

function menuShow(){
    if(!isOpen){
        hambergurIcon.className = 'fas fa-times'  
        menu.classList.add('show') 
        isOpen = true
    }
    else{
        hambergurIcon.className = 'fas fa-bars'
        menu.classList.remove('show') 
        isOpen = false

    }
}