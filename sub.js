window.addEventListener("load", function() {
  Swal({
    html:
      '<h2 class="playGame">PLAY GAME</h2>' +
      "<p>カーソルを合わせて<br>５つの宝石を消そう！</p>",
    confirmButtonColor: "#95e1d3"
  });

  $(".swal2-confirm").click(function() {
    // device motion request
    if (
      DeviceMotionEvent &&
      DeviceMotionEvent.requestPermission &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }
    if (
      DeviceOrientationEvent &&
      DeviceOrientationEvent.requestPermission &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission();
    }
  });

  var right = document.getElementById("right");
  var left = document.getElementById("left");
  var up = document.getElementById("up");
  var down = document.getElementById("down");
  var intervalRight;
  var intervalLeft;
  var intervalUp;
  var intervalDown;

  var camera = document.getElementById("camera");
  var rotation = camera.getAttribute("rotation");
});

/* number of target */
var objnum = 5;

var mres = new Array();
var mcom = new Array();

// おみくじの結果とコメント集
mres[0] =
  '<p class="omikuji-kekka"><i class="far fa-grin-squint"></i> 大吉</p><br><p class="omikuji-com">わたしと出会ったあなたは超ラッキー！</p>';
mres[1] =
  '<p class="omikuji-kekka"><i class="far fa-grin-wink"></i> 中吉</p><br><p class="omikuji-com">わたしとランチに行けば運気は大吉！</p>';
mres[2] =
  '<p class="omikuji-kekka"><i class="far fa-grin"></i> 小吉</p><br><p class="omikuji-com">わたしにお菓子を奢れば大吉！</p>';
mres[3] =
  '<p class="omikuji-kekka"><i class="far fa-surprise"></i> 吉</p><br><p class="omikuji-com">わたしに優しくすると運気上昇！</p>';
mres[4] =
  '<p class="omikuji-kekka"><i class="far fa-meh-rolling-eyes"></i> 末吉</p><br><p class="omikuji-com">リトライすると吉！</p>';

function clickHandler(e) {
  var me = document.getElementById(e.target.id);
  me.parentNode.removeChild(me);
  objnum--;
  if (objnum <= 0) {
    swal({
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      customClass: "ending_window",
      html:
        '<h2 class="gameClear">GAME CLEAR</h2>' +
        mres[Math.floor(Math.random() * mres.length)] +
        "<br>" +
        '<a href="https://twitter.com/intent/tweet?url=https://suzuri.jp/saharu54&text=【QRコードの服着た人と出会った件】&hashtags=サハルプロダクツ" class="fl_tw2"><i class="fab fa-twitter"></i> <span>TWEET</span></a><br>' +
        '<a href="https://suzuri.jp/saharu54" class="shop"><i class="fas fa-home"></i> <span>SHOP</span></a><br>' +
        '<a href="" onclick="location.reload();return false" class="reload"><i class="fas fa-redo-alt"></i>  <span>もう一度あそぶ</span></i></a>'
    });

    // 関数
    function ShowKuji(kRes, kCom) {
      // くじを選ぶ
      var kuji = Math.floor(Math.random() * mres.length);
      // くじを表示
      document.getElementById(kRes).innerHTML = mres[kuji];
      document.getElementById(kCom).innerHTML = mcom[kuji];
    }

    function starMaker(n) {
      var star = document.createElement("div");
      star.className = "star";
      star.textContent = "★";
      for (var i = 0; i < n; i++) {
        starSet(star);
      }
    }

    function starSet(clone) {
      var starClone = clone.cloneNode(true);
      var starStyle = starClone.style;

      starStyle.left = 100 * Math.random() + "%";
      starStyle.animationDelay = 5 * Math.random() + "s";
      starStyle.fontSize = ~~(30 * Math.random() + 10) + "px";
      document.body.appendChild(starClone);

      starClone.addEventListener(
        "animationend",
        function() {
          this.parentNode.removeChild(this);
          var star = document.createElement("div");
          star.className = "star";
          star.textContent = "★";
          starSet(star);
        },
        false
      );
    }
    starMaker(50);
  }
}

function init() {
  var c = document.getElementsByClassName("obj");
  for (i = 0; i < c.length; i++) {
    document
      .getElementById("obj" + i)
      .addEventListener("click", clickHandler, false);
  }
}
