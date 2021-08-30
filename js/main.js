$(function(){
    // 1ページスクロール
    $.scrollify ({
        section : ".box",
        scrollbars: false,
        scrollSpeed: 800,

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

    // ハンバーガーメニュー
    $(".openbtn-area").click(function(){
      $(".openbtn-circle").toggleClass('active');
    });
});
