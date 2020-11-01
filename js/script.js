// スクロールジャンプ
    $(".nav__link--jump").click(function(){
        var vTag = $(this).attr('id');
        if(vTag == 'home_scroll'){
            var target = "#ABOUT";
        }
        else{
            var target = "#" + $(this).html();
        }
        console.log(target);
        var th = $(target).offset();
        console.log(th);
        var pos = th.top;
        $("html,body").animate({
            scrollTop: pos
        },"slow", "swing");
    });

   // グローバルナビのカレント表示
$(function () {
  var set = 100;//ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array;
  var current = -1;
  //各要素の位置
  //position-nowは場所を取得したい対象の要素に付ける
  $('.position-now').each(function (i) {
    boxTop[i] = $(this).offset().top;
  });
  //最初の要素にclass="positiion-now"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    };
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
      $('.nav__menu li a').removeClass('nav__link--active');

      //位置によって個別に処理をしたい場合　
      if (current == 0) {
        $('#nav__link--home').addClass('nav__link--active');
        // 現在地がsection1の場合の処理
      } else if (current == 1) {
        $('#nav__link--about').addClass('nav__link--active');
        // 現在地がsection2の場合の処理
      } else if (current == 2) {
        // 現在地がsection3の場合の処理
        $('#nav__link--services').addClass('nav__link--active');
      }
      else if (current == 3) {
        // 現在地がsection4の場合の処理
        $('#nav__link--works').addClass('nav__link--active');
      }
      else if (current == 4) {
        // 現在地がsection4の場合の処理
        $('#nav__link--contact').addClass('nav__link--active');
      }

    }
  };
});

// モーダルウィンドウ
    $(function(){
        var winScrollTop;       /* js-modal-closeのクリック時にも使用するので、ここで宣言する必要がある */
        $('.card-list__btn--open').each(function(){
            $(this).on('click',function(){
                winScrollTop = $(window).scrollTop();
                var target = $(this).data('target');
                var modal = document.getElementById(target);
                $( modal ).fadeIn();
                return false;
            });
            $('.modal__btn--close').on('click',function(){
                $('.modal').fadeOut();
                $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
                return false;
            });
        });
    });

    // スクロールフェードイン
    $(function(){
        $(window).scroll(function (){
            $('.effect-fade').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight){
                    $(this).addClass('effect-scroll');
                }
            });
        });
        jQuery(window).scroll();
    });
