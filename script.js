const hamburgerIcon = document.getElementById('hamburger-icon');
let isOpen = false;

hamburgerIcon.addEventListener('click', ()=>{
    isOpen = !isOpen;
    if(isOpen)
    {
        hamburgerIcon.src = "images/icon-close.svg";
    }
    else
    {
        hamburgerIcon.src = "images/icon-hamburger.svg";
    }

});