<template>
  <KView class="page home js_show">
    <KView class="page__hd">
      <h1 class="page__title">
        kbone-api
      </h1>
      <p class="page__desc">
        kbone-api 用来磨平 H5 端和微信小程序在调用 api 上的差异性
      </p>
    </KView>
    <KView class="page__bd page__bd_spacing">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="{'js_show': item.active}"
        >
          <KFlex
            class="js_category"
            @click="activeItem(index)"
          >
            <KFlexItem>
              {{ item.title }}
            </KFlexItem>
            <img :src="item.img" />
          </KFlex>
          <KView class="page__category js_categoryInner">
            <KView class="weui-cells page__category-content">
              <KView
                v-for="(wrapItems,_index) in item.items"
                :key="_index"
                class="weui-cell weui-cell_access js_item"
                @click="jump2Url(wrapItems.link)"
              >
                <KView class="weui-cell__bd">
                  <p>{{ wrapItems.text }}</p>
                </KView>
                <KView class="weui-cell__ft" />
              </KView>
            </KView>
          </KView>
        </li>
      </ul>
    </KView>
  </KView>
</template>

<script>
import routes from "../../route/config"

export default {
    data() {
        return {
            routes,
            list: [
                {
                    title: "界面",
                    img: require("../../images/icon_nav_form.png"),
                    active: false,
                    items: [
                        {
                            text: "交互",
                            link: routes.pages.interaction
                        },
                        {
                            text: "顶部栏 api",
                            link: routes.pages.titleBar
                        },
                        {
                            text: "页面下拉",
                            link: routes.pages.pullDown
                        }
                    ]
                },
                {
                    title: "开放接口",
                    img: require("../../images/icon_nav_layout.png"),
                    active: false,
                    items: [
                        {
                            text: "常用接口",
                            link: routes.pages.login
                        },
                    ]
                },
                {
                    title: "网络",
                    img: require("../../images/icon_nav_special.png"),
                    active: false,
                    items: [
                        {
                            text: "请求接口",
                            link: routes.pages.request
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        activeItem(order) {
            this.list.forEach((item, index) => {
                if (order === index) {
                    // eslint-disable-next-line
                    item.active = !item.active
                } else {
                    // eslint-disable-next-line
                    item.active = false
                }
            })
        },
        jump2Url(link) {
            this.$router.push(link)
        }
    }
}
</script>
