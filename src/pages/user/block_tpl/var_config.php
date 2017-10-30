<script>
    <?php
    /**
     * Created by PhpStorm.
     * User: jiangzg
     * Date: 2017/10/30
     * Time: 下午6:23
     */

    $USER_VAR_CONFIG = array(
        'wxLoginUrl' => '/mb/user/wxlogin.html',
        'qqLoginUrl' => 'http://m.jguo.com' . $this->createUrl('/mb/oauth/index', array('type' => 'qq', 'id' => session_id(), 'coded' => md5(substr(session_id(), 5)))) . '?back_url=' . urlencode(Yii::app()->request->getHostInfo() . $this->createUrl('user/login')),
        'weiboLoginUrl' => 'http://m.jguo.com' . $this->createUrl('/mb/oauth/index', array('type' => 'sina', 'id' => session_id(), 'coded' => md5(substr(session_id(), 5)))) . '?back_url=' . urlencode(Yii::app()->request->getHostInfo() . $this->createUrl('user/login')),
        'passwdCode' => $this->createUrl('/mb/api/validatecode', array('color' => 'mb')),
        'registerCode' => $this->createUrl('/mb/api/validatecode', array('color' => 'mb')),

    );
    ?>
    window.USER_VAR_CONFIG = <?php echo json_encode($USER_VAR_CONFIG);?>
</script>
