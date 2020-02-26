<template>
  <KView class="page login js_show">
    <KView class="page__hd">
      <h1 class="page__title">
        apis
      </h1>
      <p class="page__desc">
        调用 api 相关信息
      </p>
    </KView>
    <KView class="page__hd">
      <KButton @click="gotologin">
        登录
      </KButton>
      <KButton @click="getSetting">
        获取小程序设置
      </KButton>
      <KButton open-type="openSetting">
        打开小程序设置
      </KButton>
    </KView>
  </KView>
</template>

<script>
export default {
    name: "LoginComponents",
    methods: {
        gotologin() {
            return this.$api.login().then(() => {
                this.$api.showToast({
                    title: "登录成功",
                })
            })
        },
        getSetting() {
            // 获取用户设置
            return this.$api.getSetting()
                .then(res => {
                    this.$api.showToast({
                        title: res.nickName || "零度的田"
                    })
                })
        }
    }
}
</script>
