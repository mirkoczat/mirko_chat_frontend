
import {Util} from 'web/static/js/util'

export class Notifier {
  constructor(stream, tag) {
    this.title = "#" + tag
    this.stream = stream
    this.state = {
      user: {login: 'defaultUser'}
    }
    this.unseen_msg_count = 0
    this.audio = new Audio('/sounds/130853__juskiddink__claves.mp3');
    this.onGetMessage = this.onGetMessage.bind(this)
    this.onMessagePriv = this.onMessagePriv.bind(this)
    this.onUserInfo = this.onUserInfo.bind(this)
    stream.onGetMessage((ev, msg) => this.onGetMessage(msg))
    stream.onMessagePriv((ev, msg) => this.onMessagePriv(msg))
    stream.onUserInfo((ev, msg) => this.onUserInfo(msg))
    $(window).on('focus', this.onFocus.bind(this))
  }
  onUserInfo(msg) {
    this.state.user = msg
  }
  onMessagePriv(msg) {
    if (!this.stream.settingMutePriv()) {
      this.onGetMessage(msg)
    }
  }
  onGetMessage(msg) {
    var isMention = function(msg) {
      return msg.body.indexOf('@' + this.state.user.login) != -1
    }.bind(this)
    if (!Util.isBlacklisted(this.stream, msg)) {
      var isMute = false
        || this.stream.settingMuteSound()
        || (this.stream.settingMuteAnonSound() && Util.isAnon(msg))
      if (!isMute) {
        if (isMention(msg)) {
          this.audio.play();
        }
      }
      if (!document.hasFocus()) {
        this.unseen_msg_count += 1
        document.title = "(" + this.unseen_msg_count + ") " + this.title
        $('#icon').prop('href', '/images/icon_new.png')
        if (this.stream.settingNotifyMentions() && isMention(msg)) {
          if ("Notification" in window) {
            if (Notification.permission === "granted") {
              new Notification('Oznaczono cię: ' + msg.user + ' - ' + msg.body);
            } else if (Notification.permission !== 'denied') {
              Notification.requestPermission(function (permission) {
                new Notification('Oznaczono cię: ' + msg.user + ' - ' + msg.body);
              });
            }
          }
        }
      }
    }
  }
  onFocus() {
    document.title = this.title
    this.unseen_msg_count = 0
    $('#icon').prop('href', '/images/icon.png')
  }
}
