export class Util {
  static urlify(s) {
    s = s.split(/(http[^ ]+)/)
    s = s.map(function(url) {
      if (url.match(/(http[^ ]+)/)) {
        //var href = "/r?url=" + encodeURIComponent(url) // no longer needed
        var href = url
        var key = Math.random()
        return <a key={key} href={href} target="_blank">{url}</a>
      } else {
        return url.replace(/\*\*(.*?)\*\*/g, '<strong>\2</strong>').replace(/\*(.*?)\*/g, '<em>\2</em>') //(⌐ ͡■ ͜ʖ ͡■)
      }
    })
    return s
  }
  static isAnon(msg) {
    return msg.user.startsWith('mirek')
  }
  static genderColor(sex) {
    if (sex === "male") {
      return 'rgba(70, 171, 242, 1)'
    } else if (sex === "female") {
      return 'rgba(242, 70, 208, 1)'
    } else {
      return 'rgba(0, 0, 0, 0)'
    }
  }
  static avatar(user) {
    var styleImg = {
      backgroundColor: Util.genderColor(user.sex)
      , paddingLeft: '5px'
      , width: '35px'
      , height: '30px'
    }
    var avatar = user.avatar || "/images/empty.gif"
    if (window.location.protocol == "https:") {
      avatar = avatar.replace("http://", "/imgwykop?url=")
    }
    return <img src={avatar} alt="" style={styleImg} />
  }
  static numFormat(value, numerals) {
    var t0 = value % 10,
        t1 = value % 100,
        vo = [];
    if (value === 1 && numerals[1])
        vo.push(numerals[1]);
    else if ((value == 0 || (t0 >= 0 && t0 <= 1) || (t0 >= 5 && t0 <= 9) || (t1 > 10 && t1 < 20)) && numerals[0])
        vo.push(numerals[0]);
    else if (((t1 < 10 || t1 > 20) && t0 >= 2 && t0 <= 4) && numerals[2])
        vo.push(numerals[2]);
    return vo.join(' ');
  }
  static isBlacklisted(stream, msg) {
    var blacklisted = stream.settingBlacklist().split(" ")
    var isNotBlacklisted = ($.inArray(msg.user, blacklisted) == -1)
    return !isNotBlacklisted
  }
  static isFollowed(stream, msg) {
    var blacklisted = stream.settingFollowed().split(" ")
    var isNotBlacklisted = ($.inArray(msg.user, blacklisted) == -1)
    return !isNotBlacklisted
  }
  static isFavTag(stream, tag_name) {
    var fav_tags = stream.settingFavTags().split(" ")
    var isNotFav = ($.inArray(tag_name, fav_tags) == -1)
    return !isNotFav
  }
  static addFavTag(stream, tag_name) {
    var fav_tags = stream.settingFavTags().split(" ")
    fav_tags.push(tag_name)
    window.localStorage.setItem('fav_tags', fav_tags.join(" "))
  }
  static removeFavTag(stream, tag_name) {
    var fav_tags = stream.settingFavTags().split(" ")
      .filter(function(i) {if(i != tag_name) return i})
    window.localStorage.setItem('fav_tags', fav_tags.join(" "))
  }
  static widget_fav(component, room_name) {
    var fav_icon;
    var fav_onClick;
    if (Util.isFavTag(component.stream, room_name)) {
      fav_icon = "fa fa-star"
      fav_onClick = function() {
        Util.removeFavTag(this.stream, room_name)
        this.setState({})
      }.bind(component)
    } else {
      fav_icon = "fa fa-star-o"
      fav_onClick = function() {
        Util.addFavTag(this.stream, room_name)
        this.setState({})
      }.bind(component)
    }
    return <a href="#" onClick={fav_onClick}>
      <i className={fav_icon}></i>
    </a>
  }
}
