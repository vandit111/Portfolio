// Declare Global Variables

let burger = document.querySelector(`.burger`);

let addShowNav = document.querySelector(`.nav-container`);

// Use the Addeventlistner method to handle the click event with flyout event handler function

burger.addEventListener(`click`, flyout) ;

function flyout(){
    const navIsclosed = !addShowNav.classList.contains(`show-nav`);
    if (navIsclosed) {
        addShowNav.classList.remove(`hide-nav`)
        addShowNav.classList.add(`show-nav`)
        burger.setAttribute(`id`,`turn`)
    }
    else{
        addShowNav.classList.remove(`show-nav`)
        addShowNav.classList.add(`hide-nav`)
        burger.removeAttribute(`id`,`turn`)
    }
}

//alternative method commented without conditional operator
    // function flyout(){
    //     addShowNav.classList.toggle('show-nav');
    // }

    // using conditional operator to add and remove css

