<template>
  <el-container class="v_account">
    <div class="left_wrap">
      <app-logo class="pos-absolute top"/>
    </div>
    <div class="right_wrap">
      <router-view />
    </div>
  </el-container>
</template>
<style lang="scss" scoped>
.v_account{
  min-height: 100vh;
  .left_wrap,
  .right_wrap{
    width: 50vw;
    padding: 40px;
  }

  .left_wrap{
    background-color: bisque;
  }

  .right_wrap{
    margin: auto;
  }
}
</style>
<script>
import AppLogo from '@/components/AppLogo'
export default {
  name: 'AccountLayout',
  components: {
    AppLogo
  }
}
</script>
