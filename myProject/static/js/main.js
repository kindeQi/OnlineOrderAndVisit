/**
 * Created by Lynn on 2016/11/21.
 */
$('.banner a').click(function () {
    var _this = $(this).parent();
    _this.siblings().removeClass('selected');
    _this.addClass('selected');
});

$('.loginButton button').click(function () {
    $('.login-layer').removeClass('hidden');
    $('.login-table').removeClass('hidden');
})