
import {Message} from 'web/static/js/messages'
import {Util} from 'web/static/js/util'

export class PrivBox extends React.Component {
  constructor(props) {
    super(props)
    this.stream = props.stream
    this.state = {
      data: []
    }
    this.onMessagePriv = this.onMessagePriv.bind(this)
    this.stream.onMessagePriv((ev, msg) => this.onMessagePriv(msg))
  }
  onMessagePriv(msg) {
    console.log(this)
    if (!Util.isBlacklisted(this.stream, msg)) {
      msg.key = (msg.uid ? msg.uid : Math.random())
      msg.time = (msg.time ? msg.time : moment().format('YYYY-MM-DD HH:mm:ss'))
      this.state.data.unshift(msg)
      //this.state.data = this.state.data.slice(0, 10) // max 10 msg
      this.setState({data: this.state.data})
    }
  }
  render() {
    if (!this.stream.settingShowPrivBox()) {
      console.log("checking settingShowPrivBox = false")
      return null
    }
    var stream = this.stream
    var nodes = this.state.data.map(function(msg) {
      return <Message key={msg.key} msg={msg} stream={stream} login="#" />
    })
    var styleDiv = {
      overflow: 'auto',
      maxHeight: '100px'
    }
    return <div className="privBox" style={styleDiv}>
      {nodes}
    </div>
  }
}
