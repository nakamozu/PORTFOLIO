$(function(){

    // ハンバーガーメニュー
    $(".openbtn-circle").click(function(){
        $(this).toggleClass('active');
        if ($(this).hasClass('active')){
            $('.navi').addClass('active');
        } else {
            $('.navi').removeClass('active');
        }
    });

    $(".nav-item a[href]").on("click",function(event){
        $(".openbtn-circle").trigger('click');
    });

    // 1ページスクロール
    $.scrollify ({
        section : ".box",
        scrollbars: false,
        setHeights: false,
        scrollSpeed: 1200,

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
            $(".page-top a").on("click",$.scrollify.move);
            $(".nav-item a").on("click",$.scrollify.move);
        }
    });

    // スライダー
    const carouselModule = (() => {
        return {
            configure: () => {
            const mySwiper = new Swiper('.swiper', {
                // ここからオプション
                speed: 1500,
                slidesPerView: 1,
                loop: true,
                effect: 'fade',
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                },
                fadeEffect: {
                crossFade: true // クロスフェードさせる
                },
                on: {
                slideChange: function(){
                    jQuery('.swiper-slide-text').css('opacity', '0');
                    realIndex = this.realIndex + 1;
                    jQuery('.swiper-slide-text-'+ realIndex).css('opacity', '1');
                }
                }
                // autoplay: {
                //   delay: 5000,
                // },
            });
            }
        }
    })();

        carouselModule.configure()

    // お問い合わせフォーム
    // 送信ボタンをクリックされたら
    $('#sendmail').submit(function(event){
        event.preventDefault ();
        // 操作対象のフォーム要素を取得
        var $form = $(this);

        // 送信ボタンを取得
        var $button = $form.find('button');

        // $(document).ajaxSend(function() {
        //     $("#overlay").fadeIn(300);
        // });
        
        // Ajax処理
        $.ajax ({
            type: 'post',
            url: 'mail.php',
            data: $form.serialize(),
            dataTime: false,
            timeout: 10000,

            //送信前
            beforeSend: function(xhr, settings) {
            // ボタンを無効化し、二重送信を防止
            $button.attr('disabled', true);
            },
            // 応答後
            complete: function(xhr, textStatus) {
            // ボタンを有効化し、再送信を許可
            $button.attr('disabled', false);
            },
            success: function(data) {
            // ajax通信成功時の処理
            $('#msg').html(data);
            $form[0].reset();
            },
            error: function(xhr, status, error) {
            // ajax通信失敗時の処理
            $('#msg').html("通信エラーが発生しました。");
            }
        }).done(function() {
			$('#loading').fadeOut(300);
		}),

        // ポップアップ表示
        $('.popup').addClass('active').fadeIn();        
        return false;
    });

    // ポップアップ削除
    $('.close').on('click',function(){
        $('.popup').removeClass('active').fadeOut();
    });
});


// worksページ
$(function() {
    let tabs = $('.tab');
    $('.tab').on('click',function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        const index = tabs.index(this);
        $('.content').removeClass('show').eq(index).addClass('show');
    });
});

$(function() {
    //location.hashで#以下を取得 変数hashに格納
    var hash = location.hash;
    //hashの中に#tab～が存在するか調べる。
    hash = (hash.match(/^#tab\d+$/) || [])[0];

    //hashに要素が存在する場合、hashで取得した文字列から#より後を取得
    if($(hash).length){
        var tabname = hash.slice(1);
    } else {
        var tabname = "tab1"; //要素が存在しない場合tab1を代入
    }
    // コンテンツを一度非表示
    // $('.content').css('display','none');

    //タブについているactiveを消す
    $('.tab').removeClass('active');

    var tabno = $('.tab#' + tabname).index();
    console.log(tabno);

    //クリックされたタブと同じ順番のコンテンツを表示します。
    // $('.content').eq(tabno).fadeIn();

    //クリックされたタブのみにクラスactiveをつけます。
    $('.tab').eq(tabno).addClass('active');
    $('.content').removeClass('show').eq(tabno).addClass('show');
});