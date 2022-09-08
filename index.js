const sidebar = document.querySelector('nav')
const toggle = document.querySelector('.toggle')
const btnApre = document.querySelector('.btnApresentation')
const ModalApre = document.querySelector('.modalApresentation')
const closeApre = document.querySelector('.bx-x')
const modalContact = document.querySelector('.modalContact')
const closeContact = document.querySelector('#x')
const btnContact = document.querySelector('.btnContact')

toggle.addEventListener('click', ()=>{
    sidebar.classList.toggle("close");
})

function openModalApre (){
    ModalApre.style.display = 'block'
}

btnApre.addEventListener('click', openModalApre)

function closeModalApre(){
    ModalApre.style.display = 'none'
}

closeApre.addEventListener('click', closeModalApre)


function openModalContact(){
    modalContact.style.display = 'flex'
}

btnContact.addEventListener('click', openModalContact)

function closeModalContact(){
    modalContact.style.display = 'none'
}

closeContact.addEventListener('click', closeModalContact)