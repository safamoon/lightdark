let body = document.querySelector(`body`)
let btn = document.querySelector(`.darkModeTogglerBtn`)
let sunIcon = btn.querySelector(`.sun`)
let heading = document.querySelector(`.textarea`)

function darkModeToggler(){
    body.classList.toggle(`darkmode`)

    let isDarkMode = body.classList.contains(`darkmode`)

    if(isDarkMode == true){
        heading.innerHTML = `Dark Mode`
        sunIcon.style.marginTop = `-100%`
    }else{
        heading.innerHTML = `Light Mode`
        sunIcon.style.marginTop = `0%`

    
    }


}





btn.addEventListener(`click`, darkModeToggler)

//* custom mouse

let cursor = document.querySelector('.cursor')
let cursorSmall = document.querySelector(`.cursor_small`);
let cursor2 = document.querySelector(`.cursor_2`)
function customMouse (event){
    let mouseLeft = event.pageX;
    let mouseTop = event.pageY;
    console.log(mouseLeft)

    //cursor.style.left = `${mouseLeft}px`;
    //cursor.style.top = `${mouseTop}px`;

    cursor.animate({
        left:`${mouseLeft}px`,
        top:`${mouseTop}px`,
    },{
        duration:300,
        fill:`forwards`
    });

    cursorSmall.animate({
        left:`${mouseLeft}px`,
        top:`${mouseTop}px`,
    },{
        duration:500,
        fill:`forwards`
    });

    cursor2.animate({
        left:`${mouseLeft}px`,
        top:`${mouseTop}px`,
    },{
        duration:1000,
        fill:`forwards`
    });



}

window.addEventListener(`mousemove` , customMouse)