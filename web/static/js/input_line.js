
class LennyFace extends React.Component {
  constructor(props) {
    super(props)
    this.faces = [
      "( ͡° ʖ̯ ͡°)", "( ͡º ͜ʖ͡º)", "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)", "(⌐ ͡■ ͜ʖ ͡■)", "(╥﹏╥)",
      "(╯︵╰,)", "(ʘ‿ʘ)", "(｡◕‿‿◕｡)", "ᕙ(⇀‸↼‶)ᕗ", "ᕦ(òóˇ)ᕤ",
      "(✌ ﾟ ∀ ﾟ)☞", "ʕ•ᴥ•ʔ", "ᶘᵒᴥᵒᶅ", "(⌒(oo)⌒)",
      "( ͡€ ͜ʖ ͡€)", "( ͡° ͜ʖ ͡°)", "( ͡° ͜ʖ ͡°)ﾉ⌐■-■", "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
      "(ಥ﹏ಥ)", "ಠ_ಠ", "( ͡ᵔ ͜ʖ ͡ᵔ )", "(;´༎ຶД༎ຶ`)", "(•ω•)",
      "(；一_一)", "(¬‿¬)", "<(￣︶￣)>", "( ͡°. ͡°)", "ᖗσvσᖘ", "ლ(@╭╮@ლ)",
      "( ͠°‿ °)", "(・へ・)", "¯\\_(ツ)_/¯", "בּ_בּ", "¬_¬",
      "̿ ̿̿'̿'\̵͇̿̿\=(•̪●)=/̵͇̿̿/'̿̿ ̿ ̿ ̿", "┌∩┐(◕_◕)┌∩┐", "(ノಠ益ಠ)ノ彡┻━┻",
      "щ（ﾟДﾟщ）", "ಠ︵ಠ凸", "▄︻̷̿┻̿═━一"
    ]
    this.state = {
      open: false
    }
    this.close = props.close
    this.onClick = this.onClick.bind(this)
    this.renderFace = this.renderFace.bind(this)
  }
  onClick(ev) {
    this.setState({open: !this.state.open})
  }
  addFace(face) {
    return (ev) => {
      var inp = $('#message-input')
      inp.val( inp.val() + face)
      this.setState({open: false})
      inp.focus()
    }
  }
  renderFace(face) {
    var key = face.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)
    var style = {
      marginLeft: '0px',
      marginTop: '0px'
    }
    var click = this.addFace(face)
    return <a key={key} onClick={click}
      className="btn btn-default" style={style}>{face}</a>
  }
  render() {
    var styleDiv = {
      position: 'absolute',
      textAlign: 'right',
      top: '0',
      right: '0'
    }
    var styleFaces = {
      display: (this.state.open ? 'block' : 'none')
    }
    var faces = this.faces.map(this.renderFace);
    return <div style={styleDiv}>
      <a className="btn btn-default" onClick={this.onClick}>
        (⌐ ͡■ ͜ʖ ͡■)
      </a>
      <div style={styleFaces}>{faces}</div>
    </div>
  }
}

export class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.last_message = ''
    this.stream = props.stream
    this.stream.onQuoteUsername((ev, msg) =>
      this.reply(msg.username)
    )
    this.stream.onInputCustom((ev, msg) => this.onInputCustom(msg))
    this.stream.onRoomInfo((ev, msg) => this.onRoomInfo(msg))
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onRoomInfo = this.onRoomInfo.bind(this)
  }
  reply(username) {
    var inp = $('#message-input')
    inp.val( inp.val() + '@' + username + ': ')
    inp.focus()
  }
  onInputCustom(msg) {
    var inp = $('#message-input')
    inp.val( msg.body )
    inp.focus()
  }
  onKeyDown(ev) {
    if (ev.which == 38 && ev.ctrlKey) {
      $('#message-input').val(this.last_message)
    }
  }
  onKeyPress(ev) {
    if (ev.which == 13) {
      var msg = $('#message-input').val()
      this.last_message = msg
      this.stream.doSendMessage({body: msg})
      $('#message-input').val('')
      ev.preventDefault()
    }
  }
  onRoomInfo(msg) {
    var {users: users} = msg
    this.setState({users: users})
  }
  render() {
    var styleDiv = {
      height: '50px',
      position: 'relative'
    }
    var styleInput = {
      marginRight: '90px' // lenny padding
    }
    var styleTextarea = {
      height: '35px'
    }
    var mentions = this.state.users.map(function(user) {
      return user.login.replace('@','').replace('+','')
    }).sort().join(" ")

    return <div style={styleDiv}>
      <div style={styleInput}>
        <input type="text" id="message-input" className="form-control" style={styleTextarea}
          data-mentions={mentions}
          ref={function(el) {
            jQuery(el).textcomplete([{
              match: /\B@(\w*)$/,
              search: function (term, callback) {
                var mentions = jQuery(el).attr('data-mentions').split(" ")
                callback($.map(mentions, function (mention) {
                  return mention.indexOf(term) === 0 ? mention : null;
                }));
              },
              index: 1,
              replace: function (mention) {
                  return '@' + mention + ' ';
              }
            },{
              match: /^\/([\w!]*)$/,
              search: function (term, callback) {
                var mentions = [
                  'me ', 'priv ', 'allow_anon', 'unallow_anon', 'allow_all',
                  'unallow_all', 'mute_anon',
                  'unmute_anon', 'mute_all', 'unmute_all',
                  'mute ', 'mute! ', 'unmute ',
                  'op ', 'unop ', 'v ', 'unv ', 'kick ', 'ban ', 'unban ',
                  'topic ', 'register', 'save', 'state', 'ping', 'mark',
                  'taktyk', 'version', 'help', 'help_op', 'history_limit ',
                  'benek', 'unbenek', 'motd ',
                  'dice ', 'n', 'msg ', 'global ', 'clear',
                  'rozdajo', 'group'
                ]
                callback($.map(mentions, function (mention) {
                  return mention.indexOf(term) === 0 ? mention : null;
                }));
              },
              index: 1,
              replace: function (mention) {
                  return '/' + mention;
              }
            }])
          }}
          onKeyPress={this.onKeyPress} onKeyDown={this.onKeyDown}></input>
      </div>
      <div>
        <LennyFace />
      </div>
    </div>
  }
}
