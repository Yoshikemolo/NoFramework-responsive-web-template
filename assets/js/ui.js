/* #                  UI CONTROLLER WITH JAVASCRIPT                    # */
/* #              Dependencies: JQuery, ui.css, canim.css              # */
/* #                              v.0.2                                # */
/* #                        By Jorge Rodríguez                         # */
/* #                                                                   # */
/* #        PRODIGY SOLUTIONS SL https://prodigysolutions.es           # */
/* #                                                                   # */
/* ##################################################################### */

function reverseAnim(elementRef,animRoot) {
    var ref, arr;
    ref = document.getElementById(elementRef);
    if(!ref.style.display || ref.style.display == "none") {
        ref.style.display = "block";
    }
    else {
        if(getClass(elementRef, animRoot+'-in') > 0 ) {
            replaceClass(elementRef,animRoot+'-in',animRoot+'-out');
        } else {
            replaceClass(elementRef,animRoot+'-out',animRoot+'-in');
        }

    }
}

function getClass(elementRef,className) {
    var ref, name, arr;
    ref = document.getElementById(elementRef);
    name = className;
    arr = ref.className.split(" ");
    return arr.indexOf(name);
}

function addClass(elementRef,className) {
    var ref;
    ref = document.getElementById(elementRef);
    if (getClass(elementRef, className) == -1) {
      ref.className += " " + className;
    }
}

function replaceClass(elementRef,sSearch,sReplace) {
    var ref;
    ref = document.getElementById(elementRef);    
    ref.classList.remove(sSearch);
    addClass(elementRef,sReplace);
}

function toggleVisibility(elementRef) {
    ref = document.getElementById(elementRef);
    if(ref.style.display == "none") {
        ref.style.display = "block";
    }
    else {
        ref.style.display = "none";
    }
}

function featuredToggle() {
    var ref;
    toggleVisibility('featured-button-pulse');
    reverseAnim('featured-target','anim-pop');
    reverseAnim('gradient-layer','anim-fade');

}

function toggleMenu() {
    reverseAnim('mobile-menu','anim-slide-left'); 
    reverseAnim('gradient-layer','anim-fade');
}

function doAction(actionRef) {
    console.log(actionRef);
}