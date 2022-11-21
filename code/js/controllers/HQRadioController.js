"use strict";
(function() {
  var BaseController = require("BaseController");

  new BaseController({
    siteName: "HQ Radio",
    play: ".icon-play",
    pause: ".icon-stop",
    playState: ".icon-stop",
    playPrev: ".icon-prev",
    playNext: ".icon-next",
    mute: ".mute",
    artist: ".station",
    song: "#track"
  });
})();
