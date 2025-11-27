

document.addEventListener("DOMContentLoaded", function(e){
  header_menu_toggle();
  slide_menu_toggle();
  map_tab();
  hide_apply();
  scroll_move();
})

const scroll_move = () => {
  $(".scroll_move").click(function(e){  
    e.preventDefault();       
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });
}

const hide_apply = () => {
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const windowHeight = $(this).height();
    const documentHeight = $(document).height();

    // 스크롤이 바닥 근처에 닿으면 hide 추가
    if (scrollTop + windowHeight >= documentHeight - 50) {
        $('.bottom-apply').addClass('hide');
    } else {
        $('.bottom-apply').removeClass('hide');
    }
  });
}

const map_tab = () => {
  $('.main .map-section .item .btn-wrap .item').click(function(){
    const index = $(this).index();
    $('.main .map-section .item-list > li').removeClass('show');
    $('.main .map-section .item-list > li').eq(index).addClass('show');

    $('.main .map-section .item-list > li').hide();
    $('.main .map-section .item-list > li').css("position","relative");
    $('.main .map-section .item-list > li').eq(index).show();
  })
}

const slide_menu_toggle = () => {
  $('.slide-section .item').click(function(){
    $(this).toggleClass('on')
    $(this).siblings('.sub-menu').slideToggle();
  })

  $('#header_v2 .menu-btn').click(function(){
    $(this).toggleClass('on');
    $('.slide-section').toggleClass('on');
    $('.slide-bg-close').toggleClass('on');
  })

  $('.slide-bg-close').click(function(){
    $('#header_v2 .menu-btn').removeClass('on');
    $('.slide-section').removeClass('on');
    $('.slide-bg-close').removeClass('on');
  })
}


const header_menu_toggle = () => {
  $('#header_v2 .menu-list > li > a').mouseenter(function(){

    $('#header_v2 .menu-list .sub-menu').removeClass('show');
    $('.header_menu').removeClass('show');

    if($(this).closest('li').find('.sub-menu').length > 0){
      $(this).closest('li').find('.sub-menu').addClass('show');
      $('.header_menu').addClass('show');
    }
  })
  
  $('.header_menu').on('mouseleave', function(e){
    // 실제로 마우스가 header_menu 영역 밖으로 나갔는지 체크
    if (!$(e.relatedTarget).closest('#header_v2').length) {
        $('#header_v2 .menu-list .sub-menu').removeClass('show');
        $(this).removeClass('show');
    }
  });
}