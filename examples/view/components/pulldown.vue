<template>
  <KView class="page login js_show">
    <KView class="page__hd">
      <h1 class="page__title">
        startPullDownRefresh
      </h1>
      <p class="page__desc">
        使用页面下拉
      </p>
    </KView>
    <KView class="page__hd">
      <KButton @click="pulldown">
        页面下拉
      </KButton>
      <KButton @click="stop">
        停止下拉
      </KButton>
    </KView>
  </KView>
</template>

<script>
export default {
    name: "PullDown",
    methods: {
        pulldown() {
            this.$api.startPullDownRefresh()
        },
        stop() {
            this.$api.stopPullDownRefresh()
        }
    }
}
</script>
