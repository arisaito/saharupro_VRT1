/* number of target */
var objnum = 5;

var mres = new Array();
var mcom = new Array();

// おみくじの結果とコメント集
mres[0] = '<p class="omikuji-kekka"><i class="far fa-grin-squint"></i> 大吉</p><br><p class="omikuji-com">わたしと出会ったあなたは超ラッキー！</p>';
mres[1] = '<p class="omikuji-kekka"><i class="far fa-grin-wink"></i> 中吉</p><br><p class="omikuji-com">わたしとランチに行けば運気は大吉！</p>';
mres[2] = '<p class="omikuji-kekka"><i class="far fa-grin"></i> 小吉</p><br><p class="omikuji-com">わたしにお菓子を奢れば大吉！</p>';
mres[3] = '<p class="omikuji-kekka"><i class="far fa-surprise"></i> 吉</p><br><p class="omikuji-com">わたしに優しくすると運気上昇！</p>';
mres[4] = '<p class="omikuji-kekka"><i class="far fa-meh-rolling-eyes"></i> 末吉</p><br><p class="omikuji-com">リトライすると吉！</p>';

function clickHandler(e) {
    var me = document.getElementById(e.target.id);
    me.parentNode.removeChild(me);
    objnum--;
    if (objnum <= 0) {    
        swal({
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            customClass: 'ending_window',
            html:  '<h2 class="gameClear">GAME CLEAR</h2>' + mres[Math.floor(Math.random() * mres.length)] + '<br>' +
            '<a href="https://twitter.com/intent/tweet?url=http://vrt1.saharu.work&text=【QRコードの服着た人と出会った件】&hashtags=サハルプロダクツ" class="fl_tw2"><i class="fab fa-twitter"></i> <span>TWEET</span></a><br>' +
            '<a href="#" class="shop"><i class="fas fa-home"></i> <span>SHOP</span></a><br>' +
            '<a href="" onclick="location.reload();return false" class="reload"><i class="fas fa-redo-alt"></i>  <span>もう一度あそぶ</span></i></a>',
        });

        
        
        // 関数
        function ShowKuji(kRes,kCom) {
           // くじを選ぶ
           var kuji = Math.floor(Math.random()*mres.length);
           // くじを表示
           document.getElementById(kRes).innerHTML = mres[kuji];
           document.getElementById(kCom).innerHTML = mcom[kuji];
        }


        function starMaker(n) {
            var star = document.createElement("div");
            star.className = "star";
            star.textContent = "★";
            for(var i = 0; i < n; i++) {
                starSet(star);
            }
        }
        
        //星のセッティングをする関数。
        function starSet(clone) {
            var starClone = clone.cloneNode(true);
            var starStyle = starClone.style;
        
            //星の位置（left）、アニメーションの遅延時間（animation-delay）、サイズ（font-size）をランダムで指定
            starStyle.left = 100 * Math.random() + "%";
            starStyle.animationDelay = 5 * Math.random() + "s";
            starStyle.fontSize = ~~(30 * Math.random() + 10) + "px";
            document.body.appendChild(starClone);
        
            //星一つのアニメーションが終わったら新しい星を生成
            starClone.addEventListener("animationend", function() {
                this.parentNode.removeChild(this);
                var star = document.createElement("div");
                star.className = "star";
                star.textContent = "★";
                starSet(star);
            }, false)
        }
        
        //使用例。星を50個ふらせます。
        starMaker(50)
    }
}

function init() {
    /* クリックイベントハンドラの登録 */
    var c = document.getElementsByClassName('obj');
    for (i = 0; i < c.length; i++) {
        document.getElementById('obj' + i).addEventListener('click', clickHandler, false);
    }
}