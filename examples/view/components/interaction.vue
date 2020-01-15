<template>
  <KView class="page interaction js_show">
    <KView class="page__hd">
      <h1 class="page__title">
        Interaction
      </h1>
      <p class="page__desc">
        小程序样式交互 API
      </p>
    </KView>
    <KView class="page__hd">
      <KButtonArea direction="horizontal">
        <KButton
          size="mini"
          type="primary"
          style="font-size: 14px;"
          @click="openToast"
        >
          showToast
        </KButton>
        <KButton
          size="mini"
          type="primary"
          style="font-size: 14px;"
          @click="hideToast"
        >
          hideToast
        </KButton>
      </KButtonArea>
      <KButton
        type="primary"
        @click="openCoverToast"
      >
        toast cover
      </KButton>
      <KButton
        type="primary"
        @click="showModal"
      >
        showModal
      </KButton>
      <KButtonArea direction="horizontal">
        <KButton
          @click="showLoading"
        >
          showLoading
        </KButton>
        <KButton
          @click="hideLoading"
        >
          hideLoading
        </KButton>
      </KButtonArea>
      <KButton
        type="primary"
        @click="showActionSheet"
      >
        showActionSheet
      </KButton>
    </KView>
  </KView>
</template>

<script>
import KboneAPI from "kbone-api"

export default {
    name: "Interaction",
    methods: {
        openToast() {
            KboneAPI.showToast({
                title: "零度的田",
                icon: "success"
            })
        },
        openCoverToast() {
            KboneAPI.showToast({
                title: "零度的田",
                icon: "loading",
                mask: true
            })
        },
        showModal() {
            KboneAPI.showModal({
                title: "微信小程序",
                content: "零度的田弹窗确认",
                cancelText: "取消",
                confirmText: "确认"
            })
        },
        hideToast() {
            KboneAPI.hideToast()
        },
        showLoading() {
            KboneAPI.showLoading({
                title: "loading 状态"
            })
        },
        hideLoading() {
            KboneAPI.hideLoading()
        },
        showActionSheet() {
            KboneAPI.showActionSheet({
                itemList: [
                    "1", "2", "3"
                ],
            })
                .then((res) => {
                    console.log(res.tapIndex)
                })
                .catch(() => {
                    console.log("取消触发")
                })
        }
    }
}
</script>
