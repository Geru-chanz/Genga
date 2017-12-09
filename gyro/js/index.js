(function () {

  var $zo;

  $(function () {
    // $zo = $("#zo");
    window.addEventListener("deviceorientation", deviceorientationHandler);
  });

  /**
   *
   * @param event
   */
  function deviceorientationHandler(event) {
    //ジャイロセンサー情報取得
    // X軸
    var beta = event.beta;
    // Y軸
    var gamma = event.gamma;
    // Z軸
    var alpha = event.alpha;
    var html = "";
    html += "X回転 : " + beta + "<br>";
    html += "Y回転 : " + gamma + "<br>";
    html += 'Z回転 : ' + alpha;
    var canvas = document.getElementById("sample");
    var ctx = canvas.getContext("2d");
    ctx.fillText(html, 20, 20);
    // $("#debug").html(html);
    /*
    function main() {
        // canvas要素取得
        var canvas = document.getElementById("sample");

        // 描画コンテキスト取得
        var ctx = canvas.getContext("2d");

        // 文字列を描画
        ctx.fillText("Hello World", 20, 20);
    } */

    // $zo.css({
    //   "-webkit-transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + alpha + "deg)",
    //   "transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + alpha + "deg)"
    // })
  }
})();