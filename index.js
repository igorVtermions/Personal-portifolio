const sidebar = document.querySelector('nav')
const toggle = document.querySelector('.toggle')
const closeApre = document.querySelector('.bx-x')
const modalContact = document.querySelector('.modalContact')
const closeContact = document.querySelector('#x')
const btnContact = document.querySelector('.btnContact')

toggle.addEventListener('click', ()=>{
    sidebar.classList.toggle("close");
})

function openModalContact(){
    modalContact.style.display = 'flex'
}

btnContact.addEventListener('click', openModalContact)

function closeModalContact(){
    modalContact.style.display = 'none'
}

closeContact.addEventListener('click', closeModalContact)