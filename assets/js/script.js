
$(document).ready(function () {
    setTimeout(function () {
        $(".convert-main").addClass("start-anime");
        $("header").addClass("header-anime");
    }, 700);
});

const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);











$('.language-min').on('click', function (e) {
    $(this).parent().toggleClass('language-active');
    e.stopPropagation();
});

$('.language-drop ul li').on('click', function () {
    let text_in = $('.language-click').html();
    let selected_text = $(this).html();
    $('.language-click').html(selected_text);
    $(this).html(text_in)
    $('.language-min').removeClass('language-active')
});
$(window).on('click', function (e) {
    let menuSort = $('.language-min');
    if (e.target !== menuSort) {
        menuSort.removeClass('language-active');
    }
});




$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});





let problemSwiper = new Swiper(".problem-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".problem-pagination",
        clickable: true,
    }


});









const items = document.querySelectorAll('.risk-item');
const contents = document.querySelectorAll('.tab-content');

const isMobile = () => window.innerWidth <= 768;

items.forEach(item => {

    item.addEventListener('click', () => {

        const id = item.dataset.tab;

        /* active switch */
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        /* desktop content change */
        if(!isMobile()){

            contents.forEach(c => c.classList.remove('active'));

            document
                .querySelector(`.tab-content[data-tab="${id}"]`)
                .classList.add('active');
        }

    });

});