<template>
  <KView
    id="app"
    class="container"
  >
    <router-link
      :to="routes.index"
      class="homeIcon"
    >
      返回首页
    </router-link>
    <router-view />
  </KView>
</template>

<script>
import routes from "./route/config"

export default {
    data() {
        return {
            routes
        }
    }
}
</script>

<style lang="less">
@import "./example.less";

</style>
