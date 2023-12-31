function youtubeInitializer(e, t) {
  e.youtube = function (e) {
    return new i(e);
  };
  var i = (e.youtube.Player = function (e) {
    i._undefinedProperties &&
      (i._execDefineProperties(), delete i._undefinedProperties),
      this.initialize(e);
  });
  e.youtube.availablePlaybackRates = [0.25, 0.5, 1, 1.5, 2];
  var r = i.prototype;
  (i.PlayerState = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5,
  }),
    (i.bind = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return Function.prototype.bind.apply(e, t);
    }),
    (i._execDefineProperties = function () {
      var e = this.prototype,
        t = this._undefinedProperties;
      for (var i in t) this._execDefineProperty(e, i, t[i]);
    }),
    (i._execDefineProperty = function (e, t, i) {
      Object.defineProperty(e, t, i);
    }),
    (i._parseDataAttribute = function (e) {
      if ("string" == typeof e) {
        var t = Number(e);
        return (function (e) {
          return e !== e;
        })(t) || "number" != typeof t
          ? "true" === e || ("false" !== e && e)
          : Number(e);
      }
    }),
    (i.prepareYTScript = function (r) {
      var n = this._ytStatus;
      if (void 0 === n) {
        var a = (this._ytCallbacks = []);
        a.push(r);
        var s = t.createElement("script");
        (s.src = "https://www.youtube.com/iframe_api"),
          t.body.appendChild(s),
          (e.onYouTubeIframeAPIReady = i.bind(function () {
            a.forEach(function (e, t) {
              e();
            }),
              delete this._ytCallbacks,
              (this._ytStatus = 2);
          }, this)),
          (this._ytStatus = 1);
      } else 1 === n ? this._ytCallbacks.push(r) : 2 === n && r();
    }),
    (r.initialize = function (e) {
      this.player ||
        ((this._events = []),
        this._resetProperties(),
        this._initializeEventer(),
        this._buildPlayer(e));
    }),
    (r.destroy = function () {
      this.player &&
        (this._removeAllEventListeners(),
        this._clearEventer(),
        this._stopAllObservings(),
        this._resetProperties(),
        this._destroyPlayer());
    }),
    (r._buildPlayer = function (e) {
      i.prepareYTScript(i.bind(this._setupVideo, this, e));
    }),
    (r._destroyPlayer = function () {
      this.player.destroy(), (this.player = null);
    }),
    (r._initializeEventer = function () {
      (this._eventer = t.createElement("ytapiplayer")),
        t.body.appendChild(this._eventer);
    }),
    (r._clearEventer = function () {
      t.body.removeChild(this._eventer), (this._eventer = null);
    }),
    (r._setupVideo = function (e) {
      var t = this._getVideoOptions(e);
      this.player = this._createPlayer(t.el, {
        events: this._getVideoEvents(),
        height: t.height,
        playerVars: t.playerVars,
        videoId: t.videoId,
        width: t.width,
      });
    }),
    (r._getVideoOptions = function (e) {
      var t = e && e.el;
      if (!t || !t.getAttribute) throw new Error("`options.el` is require.");
      var i = [
          "autohide",
          "autoplay",
          "cc_load_policy",
          "color",
          "controls",
          "disablekb",
          "enablejsapi",
          "end",
          "fs",
          "hl",
          "iv_load_policy",
          "list",
          "listType",
          "loop",
          "modestbranding",
          "origin",
          "playerapiid",
          "playlist",
          "playsinline",
          "rel",
          "showinfo",
          "start",
          "theme",
        ],
        r = e.id || t.getAttribute("data-youtube-videoid"),
        n = {};
      i.forEach(
        function (t) {
          n[t] = this._getPlayerVarsOption(e, t);
        }.bind(this)
      );
      var a,
        s = t.clientHeight;
      return (
        s ? (a = t.clientWidth) : ((s = 390), (a = 640)),
        { el: t, height: s, playerVars: n, videoId: r, width: a }
      );
    }),
    (r._getPlayerVarsOption = function (e, t) {
      var r;
      if (void 0 == e[t]) {
        var n = e.el.getAttribute("data-youtube-" + t);
        r = i._parseDataAttribute(n);
      } else r = e[t];
      return (
        ("number" == typeof r && r >= 0) ||
          "string" == typeof r ||
          (r = "boolean" == typeof r ? Number(r) : void 0),
        r
      );
    }),
    (r._getVideoEvents = function () {
      var e = {};
      return (
        [
          "onApiChange",
          "onError",
          "onPlaybackQualityChange",
          "onPlaybackRateChange",
          "onReady",
          "onStateChange",
        ].forEach(
          function (t, r) {
            e[t] = i.bind(this[t], this);
          }.bind(this)
        ),
        e
      );
    }),
    (r._createPlayer = function (e, t) {
      return new YT.Player(e, t);
    }),
    (r.addEventListener = function (e, t) {
      var i = this._pushListener(e, t);
      this._eventer.addEventListener(e, i);
    }),
    (r.removeEventListener = function (e, t) {
      var i = this._popListener(e, t);
      i && this._eventer.removeEventListener(e, i.binded);
    }),
    (r.on = function (e, t) {
      return this.addEventListener(e, t), this;
    }),
    (r.off = function (e, t) {
      return this.removeEventListener(e, t), this;
    }),
    (r.trigger = function (e, i) {
      var r = t.createEvent("CustomEvent");
      r.initEvent(e, !1, !0),
        (r.player = this),
        i && ((r.playerData = i.data), (r.originalEvent = i)),
        this._eventer.dispatchEvent(r);
    }),
    (r._removeAllEventListeners = function () {
      var e = this._events;
      for (var t in e) {
        for (var i = e[t], r = 0, n = i.length; r < n; r++) {
          var a = i[r];
          a &&
            (this.removeEventListener(t, a.listener),
            delete a.listener,
            delete a.binded,
            (i[r] = null));
        }
        delete e[t];
      }
    }),
    (r._pushListener = function (e, t) {
      var r = i.bind(t, this),
        n = this._events[e];
      return (
        n || (n = this._events[e] = []), n.push({ binded: r, listener: t }), r
      );
    }),
    (r._popListener = function (e, t) {
      var i = this._events[e];
      if (i)
        for (var r = 0, n = i.length; r < n; r++) {
          var a = i[r];
          if (a && a.listener === t) return (i[r] = null), a;
        }
    }),
    (r.onApiChange = function (e) {
      this.trigger("onApiChange", e);
    }),
    (r.onError = function (e) {
      this.trigger("onError", e), this.trigger("error", e);
    }),
    (r.onPlaybackQualityChange = function (e) {
      this.trigger("onPlaybackQualityChange", e);
    }),
    (r.onPlaybackRateChange = function (e) {
      this.trigger("onPlaybackRateChange", e);
    }),
    (r.onReady = function (e) {
      this.trigger("onReady", e),
        this._unsetVideoId &&
          (this.player.cueVideoById(this._unsetVideoId),
          delete this._unsetVideoId),
        this._updateMeta(),
        this._observeTimeUpdate(),
        this._observeVolume(),
        this._observePlaybackRate(),
        this._observeDuration(),
        this.trigger("ready", e),
        this.trigger("canplay", e),
        this.trigger("canplaythrough");
    }),
    (r.onStateChange = function (e) {
      this.trigger("onStateChange", e);
      var t = e.data;
      (this.played = this.paused = this.ended = !1),
        t === i.PlayerState.UNSTARTED
          ? this.trigger("emptied", e)
          : t === i.PlayerState.ENDED
          ? ((this.ended = !0), this.trigger("ended", e))
          : t === i.PlayerState.PLAYING
          ? ((this.played = !0),
            this.trigger("play", e),
            this.trigger("playing", e))
          : t === i.PlayerState.PAUSED
          ? ((this.paused = !0), this.trigger("pause", e))
          : t === i.PlayerState.BUFFERING
          ? this.trigger("buffer", e)
          : t === i.PlayerState.CUED &&
            (this._updateMeta(),
            this.trigger("canplay"),
            this.trigger("canplaythrough"));
    }),
    (r.play = function () {
      this.player && this.player.playVideo();
    }),
    (r.pause = function () {
      this.player && this.player.pauseVideo();
    }),
    (r.getAvailablePlaybackRates = function () {
      return this.player ? this.player.getAvailablePlaybackRates() : void 0;
    }),
    (r._updateMeta = function () {
      this._src = this.currentSrc = this.player.getVideoUrl();
    }),
    (r._observeTimeUpdate = function () {
      this._tmTimeUpdate = setInterval(
        i.bind(function () {
          var e = this.player.getCurrentTime();
          e !== this._currentTime &&
            ((this._currentTime = e), this.trigger("timeupdate"));
        }, this),
        100
      );
    }),
    (r._observeVolume = function () {
      this._tmVolume = setInterval(
        i.bind(function () {
          var e = this.player.isMuted(),
            t = this.player.getVolume();
          (e === this._muted && t === this._volume) ||
            ((this._muted = e),
            (this._volume = t),
            this.trigger("volumechange"));
        }, this),
        100
      );
    }),
    (r._observePlaybackRate = function () {
      this._tmPlaybackRate = setInterval(
        i.bind(function () {
          var e = this.player.getPlaybackRate();
          e !== this._playbackRate &&
            ((this._playbackRate = e), this.trigger("ratechange"));
        }, this),
        100
      );
    }),
    (r._observeDuration = function () {
      this._tmDuration = setInterval(
        i.bind(function () {
          var e = this.player.getDuration() || 0;
          e !== this.duration &&
            ((this.duration = e), this.trigger("durationchange"));
        }, this),
        100
      );
    }),
    (r._stopAllObservings = function () {
      clearInterval(this._tmTimeUpdate),
        clearInterval(this._tmVolume),
        clearInterval(this._tmPlaybackRate),
        clearInterval(this._tmDuration);
    }),
    (r._resetProperties = function () {
      (this._currentTime = null),
        (this._volume = null),
        (this._muted = null),
        (this._playbackRate = null),
        (this._src = null),
        (this.duration = null),
        (this.currentSrc = null),
        (this.played = null),
        (this.paused = null),
        (this.ended = null);
    }),
    (i._undefinedProperties = {
      currentTime: {
        get: function () {
          return this._currentTime;
        },
        set: function (e) {
          this.player && this.player.seekTo(e, !0);
        },
      },
      volume: {
        get: function () {
          return this._volume / 100;
        },
        set: function (e) {
          this.player && this.player.setVolume(100 * e);
        },
      },
      muted: {
        get: function () {
          return this._muted;
        },
        set: function (e) {
          this.player && this.player[e ? "mute" : "unMute"]();
        },
      },
      playbackRate: {
        get: function () {
          return this._playbackRate;
        },
        set: function (e) {
          this.player && this.player.setPlaybackRate(e);
        },
      },
      src: {
        get: function () {
          return this._src;
        },
        set: function (e) {
          this.player ? this.player.cueVideoById(e) : (this._unsetVideoId = e);
        },
      },
    });
  return youtube;
}

export default youtube = youtubeInitializer(window, document);
