const HeaderEl = document.getElementById('header-sound');


export function makeSound() {
    HeaderEl.play();
   
    // no return value needed. We don't need to store anything in a variable to use later
    // this is an IMPURE function. It has no arguments, not return value, and SIDE EFFECTS (mutations outside of the function)
}
