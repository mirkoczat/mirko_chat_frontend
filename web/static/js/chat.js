

import {Messages} from 'web/static/js/messages'
import {InputLine} from 'web/static/js/input_line'
import {PrivBox} from 'web/static/js/priv_box'
import {Util} from 'web/static/js/util'

export class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.stream = props.stream
    this.state = {
      user: {
        login: 'defaultUser'
        ,anon: true
      }
      ,tag: props.tag
      ,topic: "..."
    }
    this.onRoomInfo = this.onRoomInfo.bind(this)
    this.onUserInfo = this.onUserInfo.bind(this)
    this.stream.onRoomInfo((ev, msg) => this.onRoomInfo(msg))
    this.stream.onUserInfo((ev, msg) => this.onUserInfo(msg))
  }
  onRoomInfo(msg) {
    var {topic: topic} = msg
    this.setState({topic: topic})
  }
  onUserInfo(msg) {
    // TODO: save user info
    // this.setState({user:})
  }
  render() {
    var topic = Util.urlify(this.state.topic)
    var styleForm = {
      display: 'inline'
    }
    var styleInput = {
      display: 'inline'
      , width: Math.max(this.state.tag.length * 10, 45) + 10
    }
    return <div className="chat">
      <div className="title">
        <h4>
          {Util.widget_fav(this, this.state.tag)}
          {' '}
          #{this.state.tag}{' '}
          <span>{topic}</span>
        </h4>
      </div>
      <PrivBox stream={this.stream} />
      <InputLine stream={this.stream} />
      <Messages stream={this.stream} />
    </div>
  }
}
