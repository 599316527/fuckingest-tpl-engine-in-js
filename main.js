(function () {

    var t = ""
        + "'<h1>' + this.title + '</h1>"
        + "<ul>' + ((function(profile) {"
        +     "var ret = [];"
        +     "for (var i = 0; i < profile.length; i++) {"
        +         "ret.push('<li>' + profile[i].key + ': ' + profile[i].value + '</li>');"
        +     "}"
        +     "return ret.join('');"
        + "})(this.profile)) + '</ul>"
        + "<div class=\"full-body-shot\"><img src=\"' + this.image + '\"></div>'";

    var d = {
        title: 'Profile',
        profile: [
            {
                'key': '本名',
                'value': '小鳥遊 六花（たかなし りっか)'
            }, {
                'key': '身高',
                'value': '150cm'
            }, {
                'key': '体重',
                'value': '47kg'
            }, {
                'key': '三围',
                'value': 'B:78 W:53 H:80'
            }, {
                'key': '生日',
                'value': '6月12日'
            }, {
                'key': '萌点',
                'value': '呆毛、眼罩、中二病'
            }
        ],
        image: 'http://static.mengniang.org/common/d/d2/Takanashi_Rikka2.jpg'
    };

    document.getElementById('container').innerHTML = render(t, d);

})();
