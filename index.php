<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="KAZUYA NAKAMOTO PORTFOLIO">
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
    <link rel="stylesheet" href="css\style.css">
    <link rel="shortcut icon" href="img/favicon.ico">

    <title>KAZUYA NAKAMOTO</title>
</head>
<body>
    <header id="header">
        
    </header>
    <main id="main">
        <section id="home" class="box" data-section-name="Home">

            <div class="fixed">
                <p class="site-title">
                    KAZUYA<br>NAKAMOTO
                </p>
                <nav class="navi">
                    <ul class="nav-menu">
                        <li class="nav-item"><a href="#home"><p>HOME</p></a></li>
                        <li class="nav-item"><a href="#about"><p>ABOUT</p></a></li>
                        <li class="nav-item"><a href="#works"><p>WORKS</p></a></li>
                        <li class="nav-item"><a href="#contact"><p>CONTACT</p></a></li>
                        <li class="copyright"><p>&copy; KAZUYA NAKAMOTO.</p></li>
                    </ul>
                </nav>

                <div class="openbtn-area">
                    <div class="openbtn-circle">
                        <div class="openbtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div class="arrow"></div>
            </div>

            
                <h1 class="title">KAZUYA<br>NAKAMOTO</h1>
                <div class="btn-scroll">
                    <div class="btn-scroll-text">
                        <a href="#About">
                            SCROLL
                            <div class="btn-scroll-line"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="box" data-section-name="About">
            
                <div class="left">
                    <div class="img-box">
                        <img src="宣材写真\プロフィール写真1.JPG" alt="プロフィール写真">
                    </div>
                </div>
                <div class="right">
                    <div class="about-text">
                        <h2>ABOUT</h2>
                        <p>中本 和哉</p>
                        <p>Kazuya Nakamoto</p>
                        <p>広島県生まれ。地元の小中学校を卒業後、広島市内の工業高校へ進学。<br>
                            3年間建築を学び、専門学校ではインテリアデザインを学ぶ。<br>
                            広島のマンションリフォームの会社に約2年間勤め、<br>
                            転職のためにTECH I.S.でプログラミングを学習中。</p>
                    </div>
                    <span class="read-btn">
                        <a class="readmore" href="profile.html">READ MORE →</a>
                    </span>
                </div>
            </div>
        </section>

        <section id="works" class="box" data-section-name="Works">
            
                <div class="left">
                    <h2>WORKS</h2>
                    <!-- スライダーに対応したテキスト -->
                    <div class="swiper-slide-text swiper-slide-text-1">
                        <p class="slide-title">タイトル1</p>
                        <p class="slide-comment">あいうえおかきくけこさしすせそ</p>
                    </div>
                    <div class="swiper-slide-text swiper-slide-text-2">
                        <p class="slide-title">タイトル2</p>
                        <p class="slide-comment">たちつてとなにぬねのはひふへほ</p>
                    </div>
                    <div class="swiper-slide-text swiper-slide-text-3">
                        <p class="slide-title">タイトル3</p>
                        <p class="slide-comment">まみむめもやゆよらりるれろわをん</p>
                    </div>
                </div>

                <!-- スライダー全体のコンテナ -->
                <div class="right">
                    <div class="swiper">                
                        <div class="swiper-wrapper">
                            <!-- スライドさせるアイテム -->
                            <div class="swiper-slide" style="background-color: aqua;">
                                <a href=""></a>
                            </div>
                            <div class="swiper-slide" style="background-color: bisque;">
                                <a href=""></a>
                            </div>
                            <div class="swiper-slide" style="background-color: brown;">
                                <a href=""></a>
                            </div>
                            <!-- <div class="swiper-slide">
                                <a href=""></a>
                            </div>
                            <div class="swiper-slide">
                                <a href=""></a>
                            </div>
                            <div class="swiper-slide">
                                <a href=""></a>
                            </div>
                            <div class="swiper-slide">
                                <a href=""></a>
                            </div> -->
                        </div>
                    </div>
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>

        <section id="contact" class="box" data-section-name="Contact">
            
                <div class="contact-inner">
                    <div class="text-area">
                        <h2>CONTACT</h2>
                        <p>お問い合わせはこちらのフォームより受け付けております。</p>
                        <p>以下の内容をご記入お願いいたします。</p>
                    </div>
                    <form id="sendmail" action="mail.php" method="post" class="form-area">
                        <dl>
                            <dt><label for="name">お名前</label></dt>
                            <dd><input autocomplete="off" type="text" name="name" required></dd>

                            <dt><label for="email">メールアドレス</label></dt>
                            <dd><input autocomplete="off" type="email" name="email" required></dd>

                            <dt><label>お問い合わせ内容</label></dt>
                            <dd><textarea name="comment" required></textarea></dd>
                        </dl>
                        <button type="submit">送信</button>
                    </form>
                    <p id="msg"></p>
                    <div class="page-top">
                        <a href="#Home">
                            <div class="page-top-arrow"></div>
                            <div class="page-top-text">
                            PAGE TOP
                            </div>
                        </a>                    
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer id="footer">
        <ul class="sns-list">
            <li class="sns-icon">
                <a href="https://twitter.com/" target="_blank">
                    <img src="img\2021 Twitter logo - black.png" alt="ツイッターアイコン">
                </a>
            </li>
        </ul>
    </footer>

    <!-- js用 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- 画面スクロール（scrollify） -->
    <script src="https://cdn.jsdelivr.net/npm/jquery-scrollify@1/jquery.scrollify.min.js"></script>
    <!-- スライダー（swiper） -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="js/main.js"></script>

</body>
</html>