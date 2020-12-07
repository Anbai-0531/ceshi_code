$(function() {
    layer = layui.layer
    $('btnLogout').on('click', function) {
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function() {

        })
    }

    function getUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',

            success: function(res) {
                if (res.status !== 0) {

                    return layui.layer.msg('获取用户信息失败')
                }

            }
        });

        function renderAvatar() {

        }
    }
})