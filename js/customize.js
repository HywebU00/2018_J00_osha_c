//自行加入的JS請寫在這裡
//字型大中小
//熱門文章
$(function() {
    $("#b_news").click(function() {
        $("#b_cont").stop().fadeToggle(); //加.stop()才不會一直切換
        return false;
    });
});
//社群連結
$(function() {
    $('.community_links ul ul').css('display', 'none');
    var _menu = $('.community_links');
    _menu.find('li').has('ul').addClass('hasChild');
    var _liHasChild = _menu.find('li.hasChild');
    _liHasChild.hover(function() { $(this).children().stop().fadeIn(200); }, function() { $(this).children('ul').stop().fadeOut(200); });
    _liHasChild.keyup(function() {
        $(this).children().fadeIn(200);
        $(this).siblings().focus(function() { $(this).fadeOut(200); });
    });
    _menu.find('li').keyup(function() { $(this).siblings().children('ul').fadeOut(200); });
    _menu.find('li:last>a').focusout(function() { _menu.find('li ul').fadeOut(200); });
})
//快捷列
$(function() {
    $("#fast").click(function() {
        $(".fastlink").css({ right: 0 })
        $(".fastlink_btn").css('display', 'none')
        $(".fastlink_btn2").css('display', 'block')
    })
    $("#fast2").click(function() {
        $(".fastlink").css({ right: -94 })
        $(".fastlink_btn").css('display', 'block')
        $(".fastlink_btn2").css('display', 'none')
    })
})
$(function() {
    $('.fastlink_btn>a').focusin(function() {
        $(".fastlink").css({ right: 0 });
        $(".fastlink_btn").css('display', 'none');
        $(".fastlink_btn2").css('display', 'block');
    })
    $('#fastbox').find('li:last>a').focusout(function() {
        $(".fastlink").css({ right: -94 });
        $(".fastlink_btn").css('display', 'block');
        $(".fastlink_btn2").css('display', 'none');
    })
})
//快捷列2
$(function() {
    $('.group01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block03').offset().top }, 1200, 'easeOutExpo');
        $('.block03').find('li:first>a').focus();
    });
    $('.group02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block04').offset().top }, 1200, 'easeOutExpo');
        $('.block04').find('li:first>a').focus();
    });
    $('.group03').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block05').offset().top }, 1200, 'easeOutExpo');
        $('.block05').find('li:first>a').focus();
    });
    $('.group04').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block07').offset().top }, 1200, 'easeOutExpo');
        $('.block07').find('li:first>a').focus();
    });
})
//slick
$(function() {
    //大banner輪播
    $('.bigbanner').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    //
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //業務專區
    $('.business').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //勞動統計
    $('.statistics').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //cp2
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        dots: false, //要不要顯示圓點
    });
    //cp_photo
    $('.cp_photo').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true, //自動播放
        cssEase: 'linear'
    });
    $('.importantlink2').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    // arrows: true,  
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    // arrows: true, 
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
//我要發問
$(function() {
    $('.question .button').click(function() {
        $('.question .block').stop().slideToggle();
    })
    $('.question .button').keyup(function() {
        $('.question .block').stop().slideDown();
    })
    $('.question .del').click(function() {
        $('.question .block').stop().slideUp();
    })
    $('.question .block').find('li:last>a').focusout(function() {
        $('.question .block').stop().slideUp();
    });
})
// 收合
$(".accordion_grounp .accordionblock").each(function() {
    var _accordionItem3 = $(this).children(".Q").children('a');
    var _word = _accordionItem3.children('.word');
    var _ullist = $(this).children('.answer').find('.answer_list');
    if (_ullist.length == 0) {
        _word.hide();
    } else {
        function accordion3(e) {
            if (_ullist.is(':visible')) {
                _ullist.slideUp();
                _word.text('展開').addClass('close');
            } else {
                _ullist.slideDown();
                _word.text('收合').removeClass('close');
            }
        }
        _accordionItem3.click(accordion3);
        // _accordionItem3.keyup(accordion3);
    }
});
//生育福利站
$(function() {
    $('map area').click(function() {
        var _this = $(this);
        $("#mp-" + _this.data("contentid") + " a").click();
        var tabContentHeight = $(".tabSet").find('.active').next('.tabContent').innerHeight();
        $(".tabSet").height(tabContentHeight);
        $('body,html').stop(true, true).animate({ scrollTop: $('#' + _this.data("anchorid")).offset().top - 50 }, 1200, 'easeOutExpo');
    })
})
// 影片燈箱區
$(function() {
    $('.moviebox .close').click(function() {
        $('.movie_lightbox').fadeOut()
    })
    $('.movie_lightbox').click(function() {
        $('.movie_lightbox').fadeOut()
    })
})
$(function() {
    $('a.goCenter').keydown(function(e) {
        if (e.which == 13) {
            $('#aC').focus(); /*#aC 是中間定位點的id*/
        }
    });
})
// 新增
$(function() {
    // 條件查詢
    $('.condition_searchbtn').click(function() {
        $('.condition_searchblock').stop().slideToggle();
    })
})
// 跑馬燈
$(function() {
    // 跑馬燈
    // if ($('.marquee').length > 0) {
    //     $('.marquee ul').slick({
    //         dots: false,
    //         infinite: true,
    //         vertical: true,
    //         verticalSwiping: true,
    //         speed: 300,
    //         autoplaySpeed: 8000,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         pauseOnHover: true, //滑鼠移過後暫停自動撥放
    //         focusOnSelect: true,
    //     });
    // }
    function marquee(state) {
        const marquee = document.querySelector('.marquee');
        const marqueeOuter = marquee.querySelector('.marqueeOuter');
        const marqueeBox = marquee.querySelector('.marqueeBox');
        const marqueeItem = marquee.querySelectorAll('.marqueeItem a');
        const body = document.querySelector('body');
        const firstItem = marqueeItem[0];
        const lastItem = marqueeItem[marqueeItem.length - 1];
        let marqueeSpeed = state.speed;
        let clone = marqueeBox.cloneNode(true);
        let check = false;
        let mouse = false;
        const marqueeContent = () => {
            const marqueeOuterWidth = marqueeOuter.offsetWidth;
            const marqueeBoxWidth = marqueeBox.clientWidth;
            const outerWidth = marquee.offsetWidth;
            const bodyWidth = body.offsetWidth;
            if (marqueeBoxWidth > outerWidth) {
                marqueeOuter.appendChild(clone);
                const cloneFocus = clone.querySelectorAll('a,input,button,select');
                const marqueeBoxAll = marquee.querySelectorAll('.marqueeBox');
                let sliderMovePx = 0;
                let request;
                cloneFocus.forEach((item, index) => {
                    item.setAttribute('tabindex', '-1');
                });
                const animation = () => {
                    sliderMovePx++;
                    if (sliderMovePx / marqueeSpeed < marqueeBoxWidth) {
                        marqueeBoxAll.forEach((item, index) => {
                            item.style = `transform:translateX(-${sliderMovePx / marqueeSpeed}px)`;
                        });
                    } else {
                        sliderMovePx = 0;
                    }
                    request = requestAnimationFrame(animation);
                };
                marquee.addEventListener('mouseenter', function() {
                    if (!mouse) {
                        cancelAnimationFrame(request);
                        mouse = true;
                    }
                });
                marquee.addEventListener('mouseleave', function() {
                    if (mouse) {
                        clone.style.display = 'block';
                        lastItem.parentElement.parentElement.parentElement.style.display = 'flex';
                        marqueeItem.forEach((v) => {
                            v.parentElement.removeAttribute('style');
                        });
                        cancelAnimationFrame(request);
                        requestAnimationFrame(animation);
                        mouse = false;
                    }
                });
                cancelAnimationFrame(request);
                requestAnimationFrame(animation);
                check = true;
                ////////////////////////
                firstItem.addEventListener('focus', function() {
                    firstItem.parentElement.parentElement.style = 'display:block;width:100%;transform:translateX(0px);';
                    clone.style = 'display:none;';
                    const siblings = [...firstItem.parentElement.parentElement.children].filter((child) => {
                        return child !== firstItem.parentElement;
                    });
                    siblings.forEach((v) => {
                        v.style.display = 'none';
                    });
                    cancelAnimationFrame(request);
                    check = true;
                });
                lastItem.addEventListener('focus', function() {
                    lastItem.parentElement.parentElement.style = 'display:block;width:100%;transform:translateX(0px);';
                    clone.style = 'display:none;';
                    const siblings = [...lastItem.parentElement.parentElement.children].filter((child) => {
                        return child !== lastItem.parentElement;
                    });
                    siblings.forEach((v) => {
                        v.style.display = 'none';
                    });
                    cancelAnimationFrame(request);
                    check = true;
                });
                marqueeItem.forEach((item, index) => {
                    item.addEventListener('keydown', function(e) {
                        mouse = false;
                        if (e.which === 9 && !e.shiftKey && item !== lastItem) {
                            // e.preventDefault();
                            //tab
                            marqueeItem.forEach((item) => {
                                item.parentElement.style.display = 'none';
                            });
                            marqueeItem[index + 1].parentElement.style.display = 'block';
                            marqueeItem[index].focus();
                            if (item !== lastItem) {} else {}
                            cancelAnimationFrame(request);
                        } else if (e.which === 9 && !e.shiftKey && item === lastItem) {
                            clone.style.display = 'block';
                            lastItem.parentElement.parentElement.parentElement.style.display = 'flex';
                            marqueeItem.forEach((v) => {
                                v.parentElement.removeAttribute('style');
                            });
                            check = false;
                            cancelAnimationFrame(request);
                            requestAnimationFrame(animation);
                        } else if (e.which === 9 && e.shiftKey && item !== firstItem) {
                            item.parentElement.parentElement.style = 'display:block;width:100%;transform:translateX(0px);';
                            marqueeItem.forEach((item) => {
                                item.parentElement.style.display = 'none';
                            });
                            clone.style = 'display:none;';
                            marqueeItem[index - 1].parentElement.style.display = 'block';
                            marqueeItem[index].focus();
                            cancelAnimationFrame(request);
                        } else if (e.which === 9 && e.shiftKey && item === firstItem) {
                            clone.style.display = 'block';
                            firstItem.parentElement.parentElement.parentElement.style.display = 'flex';
                            marqueeItem.forEach((v) => {
                                v.parentElement.removeAttribute('style');
                            });
                            check = false;
                            cancelAnimationFrame(request);
                            requestAnimationFrame(animation);
                        }
                    });
                });
                window.addEventListener('keydown', function(e) {
                    if (e.which === 9 && !e.shiftKey) {} else if (e.which === 9 && e.shiftKey) {}
                });
                ////////////////////////
            }
        };
        window.addEventListener('load', marqueeContent);
        window.addEventListener('resize', marqueeContent);
    }
    marquee({
        speed: 1, //越低越快
    });
})