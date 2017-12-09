(function () {

  var $zo;

  $(function () {
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

    gyro_obj = {
      beta : beta,
      gamma : gamma,
      alpha : alpha
    }

    var canvas = document.getElementById("sample");
    var ctx = canvas.getContext("2d");
    ctx.fillText(html, 20, 20);

    var json_upload = "gyro=" + JSON.stringify(gyro_obj);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://genga-rp7rf.c9users.io");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(json_upload);
    console.log('sended')
  }
})();