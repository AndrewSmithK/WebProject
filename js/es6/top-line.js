export const navBarResize = (scroll, navId) => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const navBar = document.getElementById(navId);
    
    let scrolling = false;

    window.onscroll = doItOnScroll;

    function doItOnScroll() {
        scrolling = true;
    }

    setInterval(function() {
        if(scrolling) {
            scrolling = false;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            scrolled > scroll ? navBar.classList.add('narrow') : navBar.classList.remove('narrow');
        }
    }, 200);
}