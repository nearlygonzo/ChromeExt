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
        var url = "http://translate.yandex.net/api/v1/tr.json/translate";
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