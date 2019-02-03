/* number of target */
var objnum = 5;

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
            html:  '<h2 class="gameClear">GAME CLEAR</h2>' + 
            '<a href="https://twitter.com/intent/tweet?url=https://arisaito.github.io/VRT1/&text=【QRコードの服着た人と出会った件について】&hashtags=すこしだけ世界を味方にする服" class="fl_tw2"><i class="fab fa-twitter"></i> <span>TWEET</span></a><br>' +
            '<a href="#" class="shop"><i class="fas fa-home"></i> <span>SHOP</span></a><br>' +
            '<a href="" onclick="location.reload();return false" class="reload"><i class="fas fa-redo-alt"></i> <span>AGAIN</span></i></a>',
        });

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