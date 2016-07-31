
import {Socket, LongPoller} from "phoenix"

export class Connection {
  constructor(stream, tag, token) {
    this.stream = stream
    let socket = new Socket("/socket", {
      logger: ((kind, msg, data) => { this.log(`${kind}: ${msg}`, data) })
    })
    socket.connect({tag: tag, token: token})
    this.info("Już łączę... ");

    socket.onOpen( ev => this.log("OPEN", ev) )
    socket.onError( ev => this.log("ERROR", ev) )
    socket.onClose( e => this.info("Brak połączenia."))

    var chan = socket.channel("rooms:" + tag, {})
    chan.join().receive("ignore", () => this.log("auth error"))
               .receive("error", (a) => this.error(a))
               .receive("ok", () => this.info("Połączono."))
               .after(10000, () => this.log("Connection interruption"))
    chan.onError(e => this.log("something went wrong", e))
    chan.onClose(e => this.log("channel closed", e))

    // events for stream
    this.stream.onSendMessage((ev, msg) => chan.push('msg:send', msg))
    this.stream.onSendPlus((ev, msg) => chan.push('msg:plus', msg))
    // events for channel
    chan.on('msg:send', msg => this.stream.doGetMessage(msg))
    chan.on('msg:priv', msg => this.stream.doMessagePriv(msg))
    chan.on('msg:plus', msg => this.stream.doMessagePlus(msg))
    chan.on('msg:me', msg => this.stream.doGetMe(msg))
    chan.on('info:room', msg => this.stream.doRoomInfo(msg))
    chan.on('info:cmd', msg => this.stream.doCommandInfo(msg))
    chan.on('info:global', msg => this.stream.doGlobalInfo(msg))
    chan.on('info:user', msg => this.stream.doUserInfo(msg))
    chan.on('redirect:tag', msg => this.stream.doRedirectTag(msg))
    chan.on('info:enter', msg => this.stream.doInfoEnter(msg))
    chan.on('info:leave', msg => this.stream.doInfoLeave(msg))
    chan.on('info:mute', msg => this.stream.doInfoMute(msg))
  }
  info(msg) {
    this.stream.doConnectionInfo({body: msg})
    //console.log(msg)
  }
  error(msg) {
    this.stream.doConnectionInfo({body: "Połączenie odrzucone, powód: " + msg.reason})
  }
  log(a,b) {
    //console.log(a, b)
  }

}
