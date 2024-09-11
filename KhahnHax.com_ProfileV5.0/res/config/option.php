<?php
/**
 * @package KhahnHax
 * @author  Nguyễn Quốc Khánh <www.facebok.com/Pi.harry.0628>
 */
interface KhahnHaxConfigInterface {
    public function CommonMethod();
}
class KhahnHaxHeader implements KhahnHaxConfigInterface {
    public $title = "KhahnHax.com | Resources";
    public $description = "Hi my name is KhahnHax / A freelance / web developer / vexer";
    public $keywords = "khahnhax,KhahnHax.com";
    public $favicon = "./res/v5/img/logo.jpg";
    public $namesite = "KhahnHax.com | HOME";
    public $avatar = "./res/v5/img/avatar.gif";
    public $userName = ["Hello Everybody", "My name is KhahnHax.", "I really like website design 🌭"];
    public $trigger = "👉 Tìm hiểu tôi 😶&zwj;🌫️";
    public $bio1 = "🤖️ Người đâm mê công nghệ số";
    public $bio2 = "🔍 Chia sẻ và giúp đỡ nhiệt tình";
    public $bio3 = "💻 Kỹ sư phát triển front-end";
    public $bio4 = "Thích làm thần tượng tiktok 🥳";
    public $bio5 = "Ăn, ngủ, làm và chơi game 🎮";
    public $bio6 = "Kẻ khờ dại tin vào tình yêu ✨";
    public $SocialNetworks = [
        "facebook" => "https://facebook.com/Pi.harry.0628"
        "instagram" => "https://www.instagram.com/khahn_khong_nghien",
        "tiktok" => "https://www.tiktok.com/",
        "telegram" => "https://t.me/Khahnhax.com"
    ];
    public function CommonMethod(){date_default_timezone_set('Asia/Ha Noi');}
}


class KhahnHaxLoveDays implements KhahnHaxConfigInterface {
    public $ConfigLove = [
        "avatar_male" => "c:\Users\KhahnHax\Pictures\Saved Pictures\pic1.png",
        "name_male" => "KhahnHax",
        //========================================================//
        "avatar_female" => "c:\Users\KhahnHax\Pictures\Saved Pictures\seg5.png",
        "name_female" => "Aphrodite",
        //========================================================//
        "time_relashiption" => "28/03/2024"
        //========================================================//
    ];
    public function CommonMethod() {}
}
class KhahnHaxMusicList implements KhahnHaxConfigInterface {
    public $songs = [
        [
            "url" => "https://soundcloud.com/newt-419230383/h-n-i-x-n-quang-nh-t-remix?si=6353b01f1c8446db8ba2d06739e9d9fe&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
            "avatar" => "c:\Users\KhahnHax\Pictures\Saved Pictures\seg.png",
            "title" => "Hà Nội Xịn",
            "author" => "NewT Group"
        ],
        [
            "url" => "https://files.catbox.moe/4bjjfg.mp3",
            "avatar" => "https://i.ibb.co/Pt4ZJJd/that-girl-1545280005.jpg",
            "title" => "That Girl",
            "author" => "Olly Murs"
        ],
        [
            "url" => "https://files.catbox.moe/m8b4hr.mp3",
            "avatar" => "https://i.imgur.com/e28b0dD.png",
            "title" => "Thiên Lý Ơi",
            "author" => "Jack ( 5 Triệu )"
        ],
        [
            "url" => "https://files.catbox.moe/yrpft2.mp3",
            "avatar" => "https://i.imgur.com/DAaTklq.png",
            "title" => "Thuỷ Triều",
            "author" => "Quang Hùng MasterD"
        ],
        [
            "url" => "https://files.catbox.moe/jlat9a.mp3",
            "avatar" => "https://i.imgur.com/vp5Vsx5.png",
            "title" => "風立ちぬ ( Gió Nổi )",
            "author" => "周深"
        ],
        [
            "url" => "https://files.catbox.moe/hkqk6x.mp3",
            "avatar" => "https://i.imgur.com/GEOKT8b.png",
            "title" => "Chúng Ta Của Tương Lai",
            "author" => "Sơn Tùng M-TP"
        ],
        [
            "url" => "https://files.catbox.moe/acg0vl.mp3",
            "avatar" => "https://i.ibb.co/MDVY07s/619964de31327dbf8491d14d2c25533f.jpg",
            "title" => "Hoa Cỏ Lau",
            "author" => "Phong Max"
        ],
        [
            "url" => "https://files.catbox.moe/s8opab.mp3",
            "avatar" => "https://i.ibb.co/6R8V7S7/ed0741228ad36870e13624120474e50a.jpg",
            "title" => "Sau Lời Từ Khước",
            "author" => "Phan Mạnh Quỳnh"
        ],
        [
            "url" => "https://files.catbox.moe/gvqgma.mp3",
            "avatar" => "https://i.ibb.co/gvXHBqv/ab67616d0000b273ae85dfd27beee97a3a009f68.jpg",
            "title" => "Em Đã Xa Anh Remix",
            "author" => "Như Việt"
        ],
        [
            "url" => "https://files.catbox.moe/dvjckq.mp3",
            "avatar" => "https://i.ibb.co/VpFyXhS/ab44498b5b432879428719390baf1180-1490064587.jpg",
            "title" => "Anh Đã Quen Với Cô Đơn",
            "author" => "Soobin Hoàng Sơn"
        ],

        // Thêm nhạc tại đây
    ];
    public function CommonMethod() {}
}
