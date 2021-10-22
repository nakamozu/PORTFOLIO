$(function(){    
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
    })()

        carouselModule.configure()

        // ハンバーガーメニュー
        $(".openbtn-circle").click(function(){
            $(this).toggleClass('active');
        });

        // お問い合わせフォーム
        // 送信ボタンをクリックされたら
        $('#sendmail').submit(function(event){
        // e.preventDefault(); // 画面が更新されないように

        // 操作対象のフォーム要素を取得
        var $form = $(this);

        // 送信ボタンを取得
        var $button = $form.find('button');

        // Ajax処理
        $.ajax ({
            type: $form.attr('method'),
            url: $form.attr('action'),
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
        });
        return false;
        });
});