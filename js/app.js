$(document).foundation();



$(document).ready(function () {
    $('[data-curtain-menu-button]').click(function () {
        $('body').toggleClass('curtain-menu-open');
    })
});



    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
