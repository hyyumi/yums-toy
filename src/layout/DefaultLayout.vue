<template>
  <el-container class="default-layout" direction="vertical">
    <app-header></app-header>
    <app-main></app-main>

    <app-footer></app-footer>
  </el-container>
</template>
<script>
import { AppMain, AppHeader, AppFooter } from './components'

export default {
  name: 'DefaultLayout',
  components: {
    AppMain,
    AppHeader,
    AppFooter
  }
}
</script>
