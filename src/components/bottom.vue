<template>
  <div class="bottom">
    <div class="box">
      <div class="left">
        <p>
          <a href="#">服务条约</a>
          <span>|</span>
          <a href="#">隐私条约</a>
          <span>|</span>
          <a href="#">儿童隐私条约</a>
          <span>|</span>
          <a href="#">版权投诉指引</a>
          <span>|</span>
          <a href="#">意见反馈</a>
        </p>
        <p>网易公司版权所有©1997-2021<a href="">杭州乐读科技有限公司运营：浙网文[2018]3506-263号</a></p>
        <p>违法和不良信息举报电话：0571-89853516<a href="#"> 举报邮箱：ncm5990@163.com</a></p>
        <p><a href="#">粤B2-20090191-18  工业和信息化部备案管理系统网站 </a></p>
      </div>
      <div class="right">
        <ul>
          <li class="one">
            <a href="#" class="logo"></a>
            <span>Apmed Studio</span>
          </li>
          <li class="two">
            <a href="#" class="logo"></a>
            <span>用户认证</span>
          </li>
          <li class="three">
            <a href="#" class="logo"></a>
            <span>独立音乐人</span>
          </li>
          <li class="four">
            <a href="#" class="logo"></a>
            <span>赞赏</span>
          </li>
          <li class="five">
            <a href="#" class="logo"></a>
            <span>视频奖励</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  }
}
</script>
<style scoped>
  a {
    color: black;
  }
  .bottom {
    border-top: 1px solid rgba(0,0,0,.1);
    height: 200px;
    width: 100%;
    
  }
  .box {
    width: 1100px;
    margin: auto;
    margin-top: 20px;
    display: flex;
  }
  .left p {
    margin-bottom: 10px;
  }
  .left p span {
    padding: 0 10px;
  }
  .right {
    height: 100px;
    /* border: 1px solid red; */
    width: 500px;
    margin-left: 70px;
    /* float: right; */
  }
  .right ul {
    margin-top: 20px;
    display: flex;
  }
  .right ul li {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .right ul li a {
    display: block;
    width: 47px;
    height: 45px;
    margin: auto;
  }
  .right ul li span {
    color: rgba(0,0,0,.2);
    font-size: 10px;
  }
  .right ul li .logo {
    background-image: url('/img/foot_enter_new.png');
    background-size: 110px 552px;
  }
  .one a {
    background-position: -63px -456.5px;
  }
  .two a {
    background-position: -63px -101px;
  }
  .three a {
    background-position: 0 0;
  }
  .four a {
    background-position: -63px -50px;
  }
  .five a {
    background-position: 0 -101px;
  }
</style>