let btnFirst;
let modalFirst;
let modalSecond;
let objects;
let objnum;

let mres;
let mcom;
let mikujiMessage;
let kirakiraBg;

const initMessage = () => {
  btnFirst = document.getElementById("btn-first");
  modalFirst = document.getElementById("modal-first");
  btnFirst.addEventListener("click", () => {
    modalFirst.style.opacity = 0.0;
    modalFirst.style.pointerEvents = "none";
    omikujiReady();
    deviceOrien();
  });
};

const initFunc = () => {
  let camera = document.getElementById("camera");
  let rotation = camera.getAttribute("rotation");
  let c = document.getElementsByClassName("obj");
  for (i = 0; i < c.length; i++) {
    document
      .getElementById("obj" + i)
      .addEventListener("click", clickHandler, false);
  }
};

const deviceOrien = () => {
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
};

const omikujiReady = () => {
  objects = document.querySelectorAll(".obj");
  objnum = objects.length;
  mres = new Array();
  mcom = new Array();
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
};

const clickHandler = (e) => {
  modalSecond = document.getElementById("modal-second");
  mikujiMessage = document.getElementById("mikuji-message");
  kirakiraBg = document.getElementById("kirakira-bg");
  let me = document.getElementById(e.target.id);
  me.parentNode.removeChild(me);
  objnum--;

  if (objnum <= 0) {
    modalSecond.style.opacity = 1.0;
    modalSecond.style.pointerEvents = "auto";
    mikujiMessage.innerHTML = mres[Math.floor(Math.random() * mres.length)];
    kirakiraBg.style.opacity = 1.0;

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
        function () {
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
};

window.onload = () => {
  initMessage();
  initFunc();
};
