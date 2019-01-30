// // use 10 unique event listeners
// mouseover, mouseout, mousemove, mouseenter, wheel, scroll, keydown, keyup, click, blur, focus

// mouseover, mouseout, click
const coolBtn = document.querySelectorAll('.btn');
coolBtn.forEach(element => {

    element.addEventListener('click', function() { // Standard function syntax is needed for 'this' to work.
        console.log(`Button fired a click event!`);
        alert(this.innerHTML);
    });

    element.addEventListener('mouseover', () => {
        TweenMax.to(event.currentTarget, 1, {  // TweenMax is from GSAP
            width:200,
            ease:Bounce.easeOut
        });
        console.log(`mouse over!!!`);
    });

    element.addEventListener('mouseout', () => {
        TweenMax.to(event.currentTarget, 1, {
            width:150,
            ease:Bounce.easeOut
        });
        console.log(`mouseout!`);
    });
});


// scroll, wheel, keydown, keyup - shadow listeners
const scrollShadow = document.querySelector('body');
let last_known_scroll_position = 0;
let scrolling = false;
function scrollAlert(scroll_pos) {
    if (scroll_pos < 1) {
        scrollShadow.style = 'background: linear-gradient(0deg, #ffffff, #ffffff);';
    }
}
window.addEventListener('scroll', () => {
    last_known_scroll_position = window.scrollY;
    if (!scrolling) {
        window.requestAnimationFrame(() => {
            scrollAlert(last_known_scroll_position);
            scrolling = false;
        });
        scrolling = true;
    }
});
scrollShadow.addEventListener('wheel', () => {
    if (last_known_scroll_position > 0){
        scrollShadow.style = 'background: linear-gradient(0deg, #ffffff, #e3e3e3);';
    }
});
scrollShadow.addEventListener('keydown', () => {
    console.log('key has been pressed down');
    if (last_known_scroll_position > 0){
        scrollShadow.style = 'background: linear-gradient(0deg, #ffffff, #e3e3e3);';
    }
});
scrollShadow.addEventListener('keyup', () => {
    if (last_known_scroll_position > 0){
        scrollShadow.style = 'background: linear-gradient(0deg, #ffffff, #e3e3e3);';
    }
});


// Mousemove
const funbusMouse = document.querySelector('.funbus');
funbusMouse.addEventListener('mousemove', () => {
    console.log('You have moved over funbus!');
    funbusMouse.classList.toggle('mouse-move');
    event.stopPropagation();  // Stops the grayscale feature from looking all buggy
});


// Mouseenter
const enterTheMouse = document.querySelector('.intro');
enterTheMouse.addEventListener('mouseenter', () => {
    console.log('You have entered the land of funbus');
    funbusMouse.classList.toggle('mouse-move');
});


// blur and focus on the links
const focusLink = document.querySelectorAll('a');
const focusLinkArr = Array.from(focusLink); 
focusLinkArr.forEach(element => {
    element.addEventListener('focus', () => {
        element.style = 'color: teal';
        console.log('you have gained focus!');
    });
    element.addEventListener('blur', () => {
        element.style = 'color: inherit';
        console.log('you have lost focus!');
    });
})


// Nav items no refreshy the pagey
const navLinks = document.querySelector('nav');
navLinks.addEventListener('click', () => {
    event.preventDefault();
})






