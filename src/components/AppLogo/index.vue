<template>
    <router-link :to="{name:'Home'}" class="app-logo">
        Yums
    </router-link>
</template>
<style lang="scss">
.app-logo {
    font-size: 30px;
    font-weight: bold;
    color:black;
}
</style>
<script>
export default {
  name: 'AppLogo',
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
