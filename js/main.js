$(function(){
    // 1ページスクロール
    $.scrollify ({
        section : ".box",
        scrollbars: false,
        scrollSpeed: 800,
    

        //以下、ページネーション設定
        before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".pagination-item .active").removeClass("active");
        $(".pagination-item").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
    });

});
