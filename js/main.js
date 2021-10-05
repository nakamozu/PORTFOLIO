$(function(){    
  
  // $(document).ready(function () {
  //   hsize = $(window).height();
  //   $(".box").css("height", hsize + "px");
  // });
  // $(window).resize(function () {
  //   hsize = $(window).height();
  //   $(".box").css("height", hsize + "px");
  // });

    // 1ページスクロール
    $.scrollify ({
        section : ".box",
        scrollbars: false,
        setHeights: false,
        scrollSpeed: 800,
        // before:function(i,panels){
        //   current = i;
        // },

    //以下、ページネーション設定
      before:function(i,panels) {  // [i]は表示されている画面のIndex番号（idx）
        var ref = panels[i].attr("data-section-name"); // attrは要素の属性を処理する際に使用
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";

        $("#home").append(pagination);//headerにページネーションを表示
        $(".pagination a").on("click",$.scrollify.move);
        $(".btn-scroll a").on("click",$.scrollify.move);
      }
    });
    // $(window).on('resize',function(){
    //   if(current){
    //     var currentScrl = $('.box').eq(current).offset().top;
    //     $(window).scrollTop(currentScrl);
    //   }
    // });

    
    // スライダー
    // const carouselModule = (() => {
    //   return {
    //     configure: () => {
    //       const mySwiper = new Swiper('.swiper', {
    //         // ここからオプション
    //         spaceBetween: 0,
    //         slidesPerView: 3,
    //         loop: true,
    //         pagination: {
    //           el: '.swiper-pagination',
    //         },
    //         navigation: {
    //           nextEl: '.swiper-button-next',
    //           prevEl: '.swiper-button-prev',
    //         },
    //         scrollbar: {
    //           el: '.swiper-scrollbar',
    //           draggable: true,

    //         },
    //         // autoplay: {
    //         //   delay: 5000,
    //         // },
    //       });
    //     }
    //   }
    // })()

    // carouselModule.configure()

    //slickスライダー
    $('.slick-area').slick({
      arrows: true,
      // prevArrow: ,
      // nextArrow: ,
      // centerMode: true, // センターモード（＝両端見切れ状態）になる
      // centerPadding: '4%', // センターモード時、見切れたコンテンツの幅をpx指定できる
      slidesToShow: 1,
      slideToShow: 3,
      focusOnSelect: true,	//クリックした箇所に飛ぶ
      swipeToSlide: true,
      variableWidth: true,
      dots: true,
      fade: true,
    });


    // ハンバーガーメニュー
    $(".openbtn-area").click(function(){
      $(".openbtn-circle").toggleClass('active');
    });
});
