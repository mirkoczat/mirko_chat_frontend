
export class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
    this.stream = props.stream
    this.state = {
      show: false
      ,mute_anon: this.stream.settingMuteAnon()
      ,mute_sound: this.stream.settingMuteSound()
      ,mute_anon_sound: this.stream.settingMuteAnonSound()
      ,mute_priv: this.stream.settingMutePriv()
      ,block_if_over: this.stream.settingBlockIfOver()
      ,remove_plus_boom: this.stream.settingRemovePlusBoom()
      ,show_time: this.stream.settingShowTime()
      ,show_enter: this.stream.settingShowEnter()
      ,show_priv_box: this.stream.settingShowPrivBox()
      ,notify_mentions: this.stream.settingNotifyMentions()
      ,followed: this.stream.settingFollowed()
      ,blacklist: this.stream.settingBlacklist()
    }
    this.onClick = this.onClick.bind(this)
    this.onSave = this.onSave.bind(this)
  }
  onClick(ev) {
    this.setState({show: !this.state.show})
  }
  onSave(ev) {
    $('.setting').each( (_id, el) => {
      window.localStorage.setItem(el.name, el.checked)
    })
    window.localStorage.setItem('followed', $('#followed').val())
    window.localStorage.setItem('blacklist', $('#blacklist').val())
    this.stream.doSettingsRefresh()
    this.stream.doLocalPrint({
      body: 'Ustawienia zapisane.'
    })
  }
  renderCheckbox(name, label) {
    var val = this.state[name]
    var new_state = {}
    new_state[name] = !val
    var change = () => this.setState(new_state)
    return <div className="checkbox">
      <label>
        <input name={name} className="setting" type="checkbox" onChange={change} checked={val} />&nbsp;{label}
      </label>
    </div>
  }
  renderTextarea(name, title, placeholder) {
    var val = this.state[name]
    return <div>
      <label htmlFor={name}>{title}</label>
      <textarea id={name} className="form-control" placeholder={placeholder}
        defaultValue={val} />
    </div>
  }
  render() {
    var styleDiv = {
      cursor: "pointer",
      marginTop: '5px'
    }
    var styleContainer = {
      display: (this.state.show ? 'block' : 'none')
    }
    var styleToken = {
      marginLeft: '5px'
    }
    return <div style={styleDiv}>
      <button className="btn btn-default" onClick={this.onClick}>
        <i className="fa fa-cog"></i>{' '}Ustawienia</button>
      <div style={styleContainer}>
        {this.renderCheckbox('mute_anon', 'Ucisz niezalogowanych')}
        {this.renderCheckbox('mute_sound', 'Ucisz dzwięki')}
        {this.renderCheckbox('mute_anon_sound', 'Ucisz dzwięki od niezalogowanych')}
        {this.renderCheckbox('mute_priv', 'Ucisz zaproszenia priv')}
        {this.renderCheckbox('block_if_over', 'Zatrzymaj nowe wiadomości, \
          gdy mysz jest nad polem czatu')}
        {this.renderCheckbox('show_time', 'Pokaż czas otrzymania wiadomości')}
        {this.renderCheckbox('show_enter', 'Pokaż wejścia i wyjścia')}
        {this.renderCheckbox('show_priv_box', 'Pokaż okno PRIV')}
        {this.renderCheckbox('notify_mentions', 'Powiadomienia na pulpicie')}
        {this.renderTextarea('followed', 'Śledzeni', 'pseudonimy oddzielone spacją')}
        {this.renderTextarea('blacklist', 'Czarna lista', 'pseudonimy oddzielone spacją')}
          <br />
        <button type="button" className="btn btn-primary"
          onClick={this.onSave}>Zapisz</button>
      </div>
    </div>
  }
}
