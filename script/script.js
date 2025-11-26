

document.addEventListener("DOMContentLoaded", function(e){
  header_menu_toggle();
  slide_menu_toggle();
})

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