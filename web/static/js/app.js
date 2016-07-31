
import {Connection} from 'web/static/js/connection'
import {Stream} from 'web/static/js/stream'
import {Rooms} from 'web/static/js/rooms'
import {Chat} from 'web/static/js/chat'
import {Users} from 'web/static/js/users'
import {Notifier} from 'web/static/js/notifier'
import {Dummy} from 'web/static/js/dummy'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.stream = new Stream()
    this.tag = props.tag
    this.login_url = props.login_url
    this.connection = new Connection(this.stream, props.tag, props.token)
    this.notifier = new Notifier(this.stream, this.tag)
    this.stream.onRedirectTag(this.redirectTag)
    window.mirkoczat = {
      stream: this.stream,
      dummy_data: () => {
        var dummy = new Dummy()
        dummy.data()
      }
    }
  }
  redirectTag(ev, msg) {
    window.location.href = '/t/' + msg.tag
  }
  render() {
    var styleLeft = {
      overflow: 'hidden',
      overflowY: 'auto',
      height: window.innerHeight
    }
    var styleMid = {
      padding: '5px',
      overflow: 'auto',
      height: window.innerHeight
    }
    var styleRight = {
      overflow: 'auto',
      height: window.innerHeight
    }
    if (this.props.embed) {
      var styleHidden = {
        display: 'none'
      }
      return <div className="row embed">
        <div className="col-xs-12" style={styleMid}>
          <Chat stream={this.stream} tag={this.tag} />
        </div>
        <div style={styleHidden}>
          <Users stream={this.stream} login_url={this.login_url} /></div>
        <div style={styleHidden}>
          <Rooms stream={this.stream} tag={this.tag} />
        </div>
      </div>
    } else {
      styleMid['borderLeft'] = '1px solid #444'
      styleMid['borderRight'] = '1px solid #444'
      styleMid['backgroundColor'] = '#2c2c2c'
    }
    return <div className="row">
      <div className="col-xs-12 col-sm-12 hidden-md hidden-lg">
        <a href="#settings" className="btn btn-default">
          Ustawienia
        </a>
      </div>
      <div className="hidden-xs hidden-sm col-md-2" style={styleLeft}>
        <Rooms stream={this.stream} tag={this.tag} /></div>
      <div className="col-sm-10 col-md-8" style={styleMid}>
        <Chat stream={this.stream} tag={this.tag} /></div>
      <div className="col-sm-2 col-md-2" style={styleRight}>
        <a name="settings"></a>
        <Users stream={this.stream} login_url={this.login_url} /></div>
    </div>
    //return <div className="row">
    //  <div className="col-md-2 col-md-2 hidden-xs" style={styleLeft}><Rooms stream={this.stream} tag={this.tag} /></div>
    //  <div className="col-md-8" style={styleMid}>
    //    <Chat stream={this.stream} tag={this.tag} /></div>
    //  <div className="col-md-2"><Users stream={this.stream} login_url={this.login_url} /></div>
    //</div>
  }

  static anon(tag, login_url) {
    ReactDOM.render(<App tag={tag} login_url={login_url} />,
      document.getElementById('content'))
  }
  static start(tag, login_url) {
    var token = window.localStorage.token || false
    if (token) {
      ReactDOM.render(<App tag={tag} token={token} />,
        document.getElementById('content'))
    } else {
      ReactDOM.render(<App tag={tag} login_url={login_url} />,
        document.getElementById('content'))
    }
  }

  static embed(tag, login_url) {
    var token = window.localStorage.token || false
    if (token) {
      ReactDOM.render(<App embed="true" tag={tag} token={token} />,
        document.getElementById('content'))
    } else {
      ReactDOM.render(<App embed="true" tag={tag} login_url={login_url} />,
        document.getElementById('content'))
    }
  }
}

export default App
