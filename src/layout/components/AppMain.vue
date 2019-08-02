<template>
  <el-main class="app-main">
    <el-container>
      <router-view name="appAside" />
      <router-view />
    </el-container>
  </el-main>
</template>
<style lang="scss" scoped>
.app-main {
  min-height: 50vh;
}
</style>
