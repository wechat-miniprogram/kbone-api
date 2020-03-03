<template>
  <KView class="page login js_show">
    <KView class="page__hd">
      <h1 class="page__title">
        网络请求
      </h1>
      <p class="page__desc">
        请求 apis 相关内容
      </p>
    </KView>
    <KView class="page__hd">
      <KButton @click="requestUrl">
        发起请求
      </KButton>
      <KButton @click="downloadUrl">
        图片下载
      </KButton>
      <KView style="text-align:center; margin: 20px;">
        <img
          v-show="imgUrl"
          :src="imgUrl"
          alt="图片下载"
        />
      </KView>
    </KView>
  </KView>
</template>

<script>
import urlConfig from "../utils/config"

export default {
    name: "RequestComponents",
    data() {
        return {
            imgUrl: ""
        }
    },
    methods: {
        requestUrl() {
            return this.$api.request({
                url: urlConfig.requestUrl
            })
                .then(() => {
                    this.$api.showToast({
                        title: "请求成功"
                    })
                })
        },
        downloadUrl() {
            return this.$api.downloadFile({
                url: urlConfig.downloadExampleUrl
            })
                .then(res => {
                    this.imgUrl = res.tempFilePath
                })
        }
    }
}
</script>
