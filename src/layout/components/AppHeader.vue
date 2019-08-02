<template>
  <el-header class="app-header">
    <div class="logo pos-absolute left">Yums</div>
    <div class="login pos-absolute right">
      <router-link :to="{name:'Login'}">로그인</router-link>
      <router-link :to="{name:'Join'}">회원가입</router-link>
    </div>
  </el-header>
</template>
<style lang="scss" scoped>
.app-header{
  display: block;
  position: relative;
  height: 90px;
  padding: 24px 40px 23px;
  text-align: center;
  color: #333;
  background: #fff;
  transition: background-color .5s;
  z-index: 9;
  box-shadow: 0 2px 24px rgba(0,0,0,.1);

  .logo {
    left: 40px
  }
  .login {
    right: 40px;
  }
  a {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    transition: color .5s;
    padding: 11px 12px;
    color: inherit;
  }
}
</style>
