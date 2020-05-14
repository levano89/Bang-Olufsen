if( document.getElementsByClassName('search').length != 0 ) {
    document.getElementsByClassName('search')[0].addEventListener('click', function(){
        let  menu = document.querySelector(".list")
        menu.classList.toggle("list-active")
    })
}



document.getElementsByClassName('burger')[0].addEventListener('click', function(){
    let menu = document.querySelector('.nav');
    menu.style.display = "flex"
})

document.getElementsByClassName('fa-times')[0].addEventListener('click', function(){
    let menu = document.querySelector('.nav');
    menu.style.display = "none"
})