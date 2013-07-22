/**
 * Created with JetBrains PhpStorm.
 * User: nearlygonzo
 * Date: 22.07.13
 * Time: 3:05
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    $('#btn_submit').click(function(e) {
        e.preventDefault();
        var input = $('#input').val();
        var key = "trnsl.1.1.20130722T121007Z.f15030650c3b3e9f.ff36bc77c618be26857549c92615aef55b33a0f1";
        var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + key + "&";
        var parent = /[а-яёЁ]/i;
        var language = (parent.test(input))? 'ru-en':'en-ru';
        $.getJSON(url, {lang: language, text: input}, function(res) {
            $('#result').text("");
            for (var i in res.text) {
                $('#result').text($('#result').text() + res.text[i] + " ");
            }
        });
    });
});