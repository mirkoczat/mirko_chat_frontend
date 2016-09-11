import {Util} from 'web/static/js/util'
export class Rooms extends React.Component {
  constructor(props) {
    super(props)
    this.stream = props.stream
    this.state = {
      rooms: [],
      //name: "heheszki",
      //count: 1
      tags: []
      //name: "heheszki",
      //count: 7
    }
    this.renderRoom = this.renderRoom.bind(this)
    this.stream.onGlobalInfo( (ev, msg) => this.onGlobalInfo(msg))
  }
  onGlobalInfo(msg) {
    var {
      rooms: rooms,
      tags: tags
    } = msg
    this.setState({
      rooms: rooms,
      tags: tags
    })
  }
  showToken(ev) {
    console.log("Show token");
    var token = window.localStorage.token;
    console.log(token);
    $(".token").qrcode({
      "color": "#FFFFFF",
      "text": token
    });
  }
  sorter(a, b) {
    var result = b.count - a.count
    if (result == 0) {
      return a.name.localeCompare(b.name)
    }
    return result
  }
  renderRoom(room) {
    var link = '/t/' + encodeURIComponent(room.name)
    var link_anon = link + '/anon'
    //var counted = Util.numFormat(room.count, ["zalogowanych", "zalogowany", "zalogowanych"])
    var styleLink = {

    }
    var divClass = '';
    if (room.count_all == 1 && this.stream.settingHideSolo()) {
      divClass = 'hidden';
    }
    if (room.name == this.props.tag) {
      styleLink['fontWeight'] = 'bold'
    }
    var room_count = room.count
    if (room_count != room.count_all) {
      room_count = room_count + "/" + room.count_all
    }
    if (room.count > 0) {
      room_count = "(" + room_count + ")"
    }
    return <div key={room.name} className={divClass}>
      {Util.widget_fav(this, room.name)}
      &nbsp;
      <a href={link_anon} style={styleLink} target="_blank" title="Pisz anonimowo">A</a>
      &nbsp;
      <a href={link} style={styleLink} target="_blank">
        #{room.name}
        {' '}
        {room_count}
      </a>
    </div>
  }
  renderTag(tag) {
    var link_chat = '/t/' + tag.name
    var link_mirko = 'http://www.wykop.pl/tag/' + tag.name
    return <div key={tag.name}>
      #{tag.name} ({(tag.count * 100 / 48).toFixed(2)}% najnowszych)<br/>
      <a href={link_chat}>czat</a> / <a href={link_mirko}>mirko</a>
    </div>
  }
  render() {
    var fav_rooms = this.stream.settingFavTags().split(" ").filter(
      function(i) {
        if (i.length > 0) return i;
      }
    ).sort().map(
      function(tag_name) {
        return this.renderRoom({name: tag_name})
      }.bind(this)
    )
    if (fav_rooms.length == 0) {
      fav_rooms = "Kliknij na gwiazdkę, aby dodać kanał do ulubionych."
    }
    var rooms = this.state.rooms.sort(this.sorter).map(this.renderRoom)
    if (rooms.length == 0) {
      rooms = "Brak aktywnych dyskusji."
    }
    var tags = this.state.tags.map(this.renderTag)
    if (tags.length == 0) {
      tags = "Brak gorących tagów."
    }
    var listStyle = {
      marginBottom: '10px'
    }

    // image
    //var styleImg = {maxWidth: '100%'}
    //var urlImg = "/images/" + this.props.tag + ".jpg"
    // <img src={urlImg} alt=" " style={styleImg} />
    var fullscreen_url = "/t/" + this.props.tag + "/fullscreen"
    var token_style = {
      background: "white",
      paddingLeft: "10px",
    };

    return <div className="rooms">
      <a href="/">
        <h4>MirkoCzat.pl</h4>
      </a>
      <p>Ulubione</p>
      <div className="list-group" style={listStyle}>
        {fav_rooms}
      </div>
      <p>Aktywne dyskusje</p>
      <div className="list-group" style={listStyle}>
        {rooms}
      </div>
      <p>Gorące tagi na mirko</p>
      <div style={listStyle}>
        {tags}
      </div>
      <p>Stwórz nową dyskusję</p>
      <form action="/">
        <input name="tag" className="form-control" />
      </form>
      <p>
        <a href="/faq" target="_blank">Często zadawane pytania</a>
      </p>
      <p>
        <a href="/mirkoczat.user.js">Userscript 0.2 dla Wykop.pl</a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=pl.mirkoczat.mirkoczat">Aplikacja na Androida</a>
        <br />
        <button className="btn btn-link" onClick={this.showToken}>token dla aplikacji</button>
      </p>
      <div className="token" style={token_style}></div>

    </div>
  }
}
