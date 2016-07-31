
/**
* Utility class to store "magical strings"
**/
export class Stream {
  constructor() {
    this.stream = $('#body')
  }

  onQuoteUsername(fun) {
    this.stream.on("input:username", fun)
  }
  doQuoteUsername(msg) {
    this.stream.trigger('input:username', msg)
  }
  onInputCustom(fun) {
    this.stream.on('input:custom', fun)
  }
  doInputCustom(msg) {
    this.stream.trigger('input:custom', msg)
  }

  onSendMessage(fun) {
    this.stream.on("msg:out", fun)
  }
  doSendMessage(msg) {
    this.stream.trigger('msg:out', msg)
  }
  onSendPlus(fun) {
    this.stream.on('msg:plus-out', fun)
  }
  doSendPlus(msg) {
    this.stream.trigger('msg:plus-out', msg)
  }

  onGetMessage(fun) {
    this.stream.on("msg:in", fun)
  }
  doGetMessage(msg) {
    this.stream.trigger('msg:in', msg)
  }
  onGetMe(fun) {
    this.stream.on("msg:me", fun)
  }
  doGetMe(msg) {
    this.stream.trigger('msg:me', msg)
  }
  onMessagePriv(fun) {
    this.stream.on('msg:priv', fun)
  }
  doMessagePriv(msg) {
    this.stream.trigger('msg:priv', msg)
  }
  onMessagePlus(fun) {
    this.stream.on('msg:plus-in', fun)
  }
  doMessagePlus(msg) {
    this.stream.trigger('msg:plus-in', msg)
  }

  onInfoEnter(fun) {
    this.stream.on('info:enter', fun)
  }
  doInfoEnter(msg) {
    this.stream.trigger('info:enter', msg)
  }
  onInfoLeave(fun) {
    this.stream.on('info:leave', fun)
  }
  doInfoLeave(msg) {
    this.stream.trigger('info:leave', msg)
  }
  onInfoMute(fun) {
    this.stream.on('info:mute', fun)
  }
  doInfoMute(msg) {
    this.stream.trigger('info:mute', msg)
  }

  // global info
  onGlobalInfo(fun) {
    this.stream.on('info:global', fun)
  }
  doGlobalInfo(msg) {
    this.stream.trigger('info:global', msg)
  }
  // current room information
  onRoomInfo(fun) {
    this.stream.on('info:room', fun)
  }
  doRoomInfo(msg) {
    this.stream.trigger('info:room', msg)
  }
  // Command Info is special message from SYSTEM
  onCommandInfo(msg) {
    this.stream.on('info:cmd', msg)
  }
  doCommandInfo(msg) {
    this.stream.trigger('info:cmd', msg)
  }
  //
  onConnectionInfo(fun) {
    this.stream.on('info:conn', fun)
  }
  doConnectionInfo(msg) {
    this.stream.trigger('info:conn', msg)
  }
  onUserInfo(fun) {
    this.stream.on('info:user', fun)
  }
  doUserInfo(msg) {
    this.stream.trigger('info:user', msg)
  }
  onRedirectTag(fun) {
    this.stream.on('redirect:tag', fun)
  }
  doRedirectTag(msg) {
    this.stream.trigger('redirect:tag', msg)
  }
  onSettingsRefresh(fun) {
    this.stream.on('settings:refresh', fun)
  }
  doSettingsRefresh(msg) {
    this.stream.trigger('settings:refresh', msg)
  }
  onLockChat(fun) {
    this.stream.on('lock:chat', fun)
  }
  doLockChat(msg) {
    this.stream.trigger('lock:chat', msg)
  }

  onLocalPrint(fun) {
    this.stream.on('local:print', fun)
  }
  doLocalPrint(msg) {
    this.stream.trigger('local:print', msg)
  }

  // Settings handling
  settingMuteAnon() {
    return ("true" === window.localStorage.getItem('mute_anon')) || false
  }
  settingMuteSound() {
    return ("true" === window.localStorage.getItem('mute_sound')) || false
  }
  settingMuteAnonSound() {
    return ("true" === window.localStorage.getItem('mute_anon_sound')) || false
  }
  settingMutePriv() {
    return ("true" === window.localStorage.getItem('mute_priv')) || false
  }
  settingBlockIfOver() {
    return ("true" === window.localStorage.getItem('block_if_over')) || false
  }
  settingRemovePlusBoom() {
    return ("true" === window.localStorage.getItem('remove_plus_boom')) || false
  }
  settingShowTime() {
    return ("true" === window.localStorage.getItem('show_time')) || false
  }
  settingShowEnter() {
    return ("true" === window.localStorage.getItem('show_enter')) || false
  }
  settingShowPrivBox() {
    return ("true" === window.localStorage.getItem('show_priv_box')) || false
  }
  settingFollowed() {
    return window.localStorage.getItem('followed') || ""
  }
  settingBlacklist() {
    return window.localStorage.getItem('blacklist') || ""
  }
  settingFavTags() {
    return window.localStorage.getItem('fav_tags') || ""
  }
}
