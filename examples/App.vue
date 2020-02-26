<template>
  <KView
    id="app"
    class="container"
  >
    <router-link
      to="/"
      class="homeIcon"
    >
      返回首页
    </router-link>
    <router-view />
  </KView>
</template>

<style lang="less">
@import "./example.less";

</style>
