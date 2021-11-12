<?php

// HPMailer のクラスをグローバル名前空間（global namespace）にインポート
// スクリプトの先頭で宣言する必要があります
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// PHPMailer のソースファイルの読み込み（ファイルの位置によりパスを適宜変更）
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//言語、内部エンコーディングを指定
mb_language("japanese");
mb_internal_encoding("UTF-8");

// インスタンスを生成（引数に true を指定して例外 Exception を有効に）
$mail = new PHPMailer(true);

//日本語用設定
$mail->CharSet = "iso-2022-jp";
$mail->Encoding = "7bit";

//エラーメッセージ用言語ファイルを使用する場合に指定
$mail->setLanguage('ja', 'vendor/phpmailer/phpmailer/language/');

try {
    //サーバの設定
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;  // デバグの出力を有効に（テスト環境での検証用）
    $mail->isSMTP();   // SMTP を使用
    $mail->Host       = 'smtp.gmail.com';  // SMTP サーバーを指定
    $mail->SMTPAuth   = true;   // SMTP authentication を有効に
    $mail->Username   = 'mozu.mo16zu@gmail.com';  // SMTP ユーザ名
    $mail->Password   = 'ibklypswvuttjrxs';  // SMTP パスワード
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // 暗号化を有効に
    $mail->Port       = 587;  // TCP ポートを指定

    if(!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["comment"])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $comment = $_POST['comment'];
        //受信者設定 
        //※名前などに日本語を使う場合は文字エンコーディングを変換
        //差出人アドレス, 差出人名
        $mail->setFrom($email, mb_encode_mimeheader($name));  
        //受信者アドレス, 受信者名（受信者名はオプション）
        $mail->addAddress('mozu.mo16zu@gmail.com', mb_encode_mimeheader("中本")); 
        //追加の受信者（受信者名は省略可能なのでここでは省略）
        //   $mail->addAddress('someone@gmail.com'); 
        //返信用アドレス（差出人以外に別途指定する場合）
        //   $mail->addReplyTo('info@example.com', mb_encode_mimeheader("お問い合わせ")); 
        //Cc 受信者の指定
        //   $mail->addCC('foo@example.com'); 
        
        //コンテンツ設定
        $mail->isHTML(true);   // HTML形式を指定
        //メール表題（タイトル）
        $mail->Subject = mb_encode_mimeheader($name.'様からお問い合わせです'); 
        //本文（HTML用）
        // $mail->Body  = mb_convert_encoding('お名前：'.$name.'様'."\n".'メールアドレス：'.$email."\n".'お問い合わせ内容：'.$comment,"JIS","UTF-8"); 
        $mail->Body  = mb_convert_encoding('お名前：'.$name.' 様'."<br>".
                                            'メールアドレス：'.$email."<br>".
                                            'お問い合わせ内容：'.$comment,"JIS","UTF-8"); 
        //テキスト表示の本文
        $mail->AltBody = mb_convert_encoding('プレインテキストメッセージ non-HTML mail clients',"JIS","UTF-8");  
        //送信
        if ($mail->send()){
            $msg = 'お問い合わせが完了致しました。';
        } else {
            $msg = '申し訳ありません、メールが送信できませんでした。後でもう一度お試しください。';
        }
        // $uri = $_SERVER['HTTP_REFERER'];
        // header("Location: ".$uri ."#contact");
        // exit;
        
        echo $msg;
    }
    } catch (Exception $e) {
    //エラー（例外：Exception）が発生した場合
    echo "メッセージを送信できませんでした。: {$mail->ErrorInfo}";
}


// //POST送信チェック
// if(!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["comment"])){
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $comment = $_POST['comment'];

//     if (preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $mail)) {
//         //メール送信処理
//         $form = $email;
//         $to = 'mozu.mo16zu@gmail.com'; // 自分のメールアドレス
//         $subject = $name.'様からお問い合わせです'; // メールの標題
//         $description = $comment;

//     }

//     // フォームの内容が空でなければメールを送信する
//     if(!empty($form) && !empty($subject) && !empty($description)){
//         mb_language("Japanese");
//         mb_internal_encoding("UTF-8");

//         // メール送信
//         $result = mb_send_mail($to, $subject, $description, "Form:".$form);

//         // 送信結果を判定
//         if($result){
//             echo json_encode(array('result' => true));
//         } else {
//             echo json_encode(array('result' => false));
//         }
//     }
//     // フォームに空の項目がありエラー
//     echo json_encode(array('result' => false));
// }

?>