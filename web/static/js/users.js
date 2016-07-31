import {ControlPanel} from 'web/static/js/control_panel'
import {Util} from 'web/static/js/util'
class User extends React.Component {
  constructor(props) {
    super(props)
    this.stream = props.stream
    this.state = {
      show_options: false
    }
    this.onClick = this.onClick.bind(this)
    this.onPriv = this.onPriv.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onClick() {
    var user = this.props.user.login.replace(/[@\+]/g, '')
    this.stream.doQuoteUsername({username: user})
  }
  onPriv() {
    var user = this.props.user.login.replace(/[@\+]/g, '')
    this.stream.doSendMessage({body: '/priv ' + user})
    $('#message-input').focus()
  }
  onMouseOver() {
    this.setState({show_options: true})
  }
  onMouseLeave() {
    this.setState({show_options: false})
  }
  render() {
    var styleDiv = {
      marginBottom: '5px'
    }
    var styleLink = {
      color: this.props.user.color
    }
    var username = this.props.user.login //.replace(/_/g, ' ')
    var avatar = Util.avatar(this.props.user)
    var options = ''
    var user = <span style={styleLink}>{username}</span>
    if (!this.props.profile) {
      styleLink['cursor'] = 'pointer'
      user = <a style={styleLink} onClick={this.onClick}
        title="Wstawia nick do pola wypowiedzi">
        {username}
      </a>
    }
    if (!this.props.profile && this.state.show_options) {
      var wykop_url = 'http://www.wykop.pl/ludzie/' + this.props.user.login.replace(/[@\+]/g, '')
      options = <span>
        {' ['}
        <a style={styleLink} onClick={this.onPriv}
          title="Uruchamia rozmowę prywatną">
          priv</a>
        {'|'}
        <a style={styleLink} href={wykop_url} target="_blank"
          title="Pokazuje profil na Wykop.pl">
          w</a>
        {']'}
      </span>
    }
    return <div style={styleDiv} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
      {avatar}&nbsp;{user}{options}
    </div>
  }
}

export class Users extends React.Component {
  constructor(props) {
    super(props)
    this.login_url = props.login_url
    this.state = {
      user: {
        login: 'defaultUser'
        ,anon: true
      },
      users: []
        //id: 1,
        //login: "login1",
        //color: "#FF0000",
        //avatar: "http://...jpg"
    }
    this.stream = props.stream
    this.onRoomInfo = this.onRoomInfo.bind(this)
    this.onUserInfo = this.onUserInfo.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.stream.onRoomInfo((ev, msg) => this.onRoomInfo(msg))
    this.stream.onUserInfo((ev, msg) => this.onUserInfo(msg))
  }
  onRoomInfo(msg) {
    var {users: users} = msg
    this.setState({users: users})
  }
  onUserInfo(msg) {
    this.setState({user: msg})
  }
  onLogout(ev) {
    window.localStorage.token = '';
    window.location = '/';
  }
  sorter(a, b) {
    var la = a.login
    var lb = b.login
    if (la.substr(0,5) === 'mirek') {la = "zzzzzzz" + la}
    if (lb.substr(0,5) === 'mirek') {lb = "zzzzzzz" + lb}
    return la.localeCompare(lb)
  }
  render() {
    var login = ''
    if (this.state.user.anon) {
      var style = {
        paddingTop: '5px'
      }
      login = <div style={style}>
        <a href={this.login_url} className="btn btn-primary">
          <i className="fa fa-sign-in "></i>
          {' '}
          Zaloguj z Wykopem
        </a>
      </div>
    } else {
      login = <div>
        <h4>Użytkownik</h4>
        <User user={this.state.user} stream={this.stream} profile="true" />
        <button type="button" className="btn btn-default"
          onClick={this.onLogout}><i className="fa fa-sign-out"></i> Wyloguj</button>
      </div>
    }
    var stream = this.stream
    var users = this.state.users.sort(this.sorter).map(function(user) {
      return <User key={user.id} user={user} stream={stream} />
    })
    return <div>
      <a className="btn btn-default" href="/rooms" target="_new">
        <i className="fa fa-list"></i>
        {' '}
        Lista kanałów
      </a>
      <ControlPanel stream={stream} />
      {login}
      <h4>Obecni ({this.state.users.length})</h4>
      {users}
    </div>
  }
}
