
import {Util} from 'web/static/js/util'

export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.stream = props.stream
    this.state = {
      show_plus: false
    }
    this.login = props.login // current user login
    this.onNickClick = this.onNickClick.bind(this)
    this.onAvatarClick = this.onAvatarClick.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onNickClick() {
    if (this.props.msg.onclick) {
      this.stream.doInputCustom({body: this.props.msg.onclick})
    } else {
      this.stream.doQuoteUsername({username: this.props.msg.user})
    }
  }
  onAvatarClick() {
    this.stream.doSendPlus({uid: this.props.msg.uid})
  }
  onMouseOver() {
    this.stream.doLockChat(true)
    this.setState({show_plus: true})
  }
  onMouseLeave() {
    this.stream.doLockChat(false)
    this.setState({show_plus: false})
  }
  isImportant(msg) {
    return (msg.body.indexOf('@' + this.login) != -1)
      || (Util.isFollowed(this.stream, msg))
  }
  render() {
    var classDiv = 'message'
    var styleLink = {
      color: this.props.msg.color
      , cursor: 'pointer'
    }
    if (this.isImportant(this.props.msg)) {
      //styleDiv.backgroundColor = '#444'
      classDiv += ' important'
    }
    var body = Util.urlify(this.props.msg.body)
    var avatar = Util.avatar(this.props.msg)
    var time = ''
    if (this.stream.settingShowTime()) {
      time = this.props.msg.time.substr(-8, 5) + ' '
    }
    var score = ''
    if (this.props.msg.score > 0) {
      var style = {
        color: '#339933'
        , fontWeight: 'bold'
      }
      score = <span style={style}>+{this.props.msg.score} </span>
    }
    var plus = ''
    if (this.state.show_plus) {
      styleAvatar['cursor'] = 'pointer'
      //plus = '+'
    }
    // data-toggle="tooltip" data-placement="right"
    // ref={function(el) {jQuery(el).tooltip()}}
    // data-toggle="tooltip" data-placement="right"
    // ref={function(el) {jQuery(el).tooltip()}}
    return <div className={classDiv}>
      {time}
      <div className="avatar-plus" data-uid={this.props.msg.key} onClick={this.onAvatarClick}
        onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}
        title="Daje plusa wypowiedzi">
        {avatar}
        {plus}
      </div>
      &nbsp;
      {score}
      <a style={styleLink} onClick={this.onNickClick}
        title={this.props.msg.time}>
        {this.props.msg.user}
      </a>&nbsp;
      {body}
    </div>
  }
}

export class Messages extends React.Component {
  constructor(props) {
    super(props)
    this.scrollMode = 'free'
    this.stream = props.stream
    this.state = {
      nop: 0
      ,user: {
        login: 'defaultUser'
        ,anon: true
      }
      ,data: []
        //key: 1,
        //user: "login1",
        //color: "#FF0000",
        //avatar: "http://...jpg",
        //body: "Losowy tekst"
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onGetMessage = this.onGetMessage.bind(this)
    this.onGetMe = this.onGetMe.bind(this)
    this.onMessagePriv = this.onMessagePriv.bind(this)
    this.onMessagePlus = this.onMessagePlus.bind(this)
    this.onConnectionInfo = this.onConnectionInfo.bind(this)
    this.onUserInfo = this.onUserInfo.bind(this)
    this.onLockChat = this.onLockChat.bind(this)
    this.onInfoMute = this.onInfoMute.bind(this)
    this.stream.onGetMessage((ev, msg) => this.onGetMessage(msg))
    this.stream.onGetMe((ev, msg) => this.onGetMe(msg))
    this.stream.onMessagePriv((ev, msg) => this.onMessagePriv(msg))
    this.stream.onConnectionInfo((ev, msg) => this.onConnectionInfo(msg))
    this.stream.onCommandInfo((ev, msg) => this.onConnectionInfo(msg))
    this.stream.onUserInfo((ev, msg) => this.onUserInfo(msg))
    this.stream.onMessagePlus((ev, msg) => this.onMessagePlus(msg))
    this.stream.onLockChat((ev, msg) => this.onLockChat(msg))
    this.stream.onLocalPrint((ev, msg) => this.addMessage(msg))
    this.stream.onInfoEnter((ev, msg) => this.onInfoEnterLeave(msg))
    this.stream.onInfoLeave((ev, msg) => this.onInfoEnterLeave(msg))
    this.stream.onInfoMute((ev, msg) => this.onInfoMute(msg))
  }

  addMessage(msg) {
    if (!Util.isBlacklisted(this.stream, msg)) {
      msg.key = (msg.uid ? msg.uid : Math.random())
      msg.time = (msg.time ? msg.time : moment().format('YYYY-MM-DD HH:mm:ss'))
      this.state.data.unshift(msg)
      //this.state.data.push(msg)
      this.setState({data: this.state.data})
    }
  }
  plusMessage(msg) {
    if (!this.stream.settingRemovePlusBoom()) {
      // TODO: fire global event
      //this.plusMessageBoom(msg);
    }
    var d = this.state.data
    $.each(d, function(i, ii) {
      if (d[i].key == msg.uid) {
        d[i].score += 1
      }
    })
    this.setState({data: d})
  }
  onGetMessage(msg) {
    if (this.stream.settingMuteAnon() && Util.isAnon(msg)) {
      return
    }
    this.addMessage(msg)
  }
  onGetMe(msg) {
    if (this.stream.settingMuteAnon() && Util.isAnon(msg)) {
      return
    }
    msg.color = '#cacecf'
    this.addMessage(msg)
  }
  onMessagePriv(msg) {
    if (!this.stream.settingMutePriv()) {
      this.addMessage(msg)
    }
  }
  onMessagePlus(msg) {
    this.plusMessage(msg)
  }
  onInfoEnterLeave(msg) {
    if (this.stream.settingShowEnter()) {
      msg.color = '#cacecf'
      this.addMessage(msg)
    }
  }
  onConnectionInfo(msg) {
    msg.user = 'SYSTEM'
    msg.color = '#FFFFFF'
    //msg.avatar = 'http://mirkoczat.pl/images/benek_av_30.png'
    this.addMessage(msg)
  }
  onUserInfo(msg) {
    this.setState({user: msg})
  }
  onInfoMute(msg) {
    var muted_user = msg.user
    var new_data = this.state.data.map(function(msg) {
      if (msg.user == muted_user) {
        msg.body = "*uciszone*"
      }
      return msg
    })
    this.setState({data: new_data})
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.scrollMode == 'block') {
      return false
    }
    if (this.scrollMode == 'block-next') {
      this.scrollMode = 'block' // last render
    }
    return true
  }
  onLockChat(is_locked) {
    if (is_locked) {
      this.scrollMode = 'block-next'
      this.setState({nop: this.state.nop + 1})
    } else {
      this.scrollMode = 'free'
      this.setState({nop: this.state.nop + 1})
    }
  }
  onMouseEnter() {
    if (this.stream.settingBlockIfOver()) {
      this.stream.doLockChat(true)
    }
  }
  onMouseLeave() {
    if (this.stream.settingBlockIfOver()) {
      this.stream.doLockChat(false)
    }
  }
  render() {
    var stream = this.stream
    var login = this.state.user.login
    var nodes = this.state.data.map(function(msg) {
      return <Message key={msg.key} msg={msg} stream={stream} login={login} />
    })
    var scrollingStopped = ''
    if (this.scrollMode == 'block') {
      var styleWarning = {
        padding: '5px',
        position: 'absolute',
        top: '5px',
        backgroundColor: '#1c1c1c',
        border: '1px solid #444'
      }
      scrollingStopped = <div style={styleWarning}>
        Aby ułatwić zaznaczanie tekstu i klikanie na nicki, wyświetlanie nowych
        wiadomości jest zawieszone na czas przebywania kursora w środkowej części ekranu.
        Żadna wiadomość nie zostanie utracona.
      </div>
    }
    return <div
      onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
      {scrollingStopped}
      {nodes}
    </div>
  }
}
