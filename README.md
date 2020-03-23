## kbone-api

**kbone-api**是一个能同时支持 小程序和 web 开发的多端 api 库。

## 特性

* 针对基于 kbone 的多端开发，满足在 Web 上直接使用小程序相关 api
* 不依赖 kbone 和 kbone-ui，一个无依赖的小程序 api 的跨端库
* 完整对齐 wx[apis]
* 同时支持 promise 化和 callback 调用



## 快速上手

下载 kbone-api

```
npm install kbone-api
```

通过 commonjs 的方式直接导出模块并使用：
```js
import kboneAPI from 'kbone-api'

kboneAPI.request()
kboneAPI.showToast()
kboneAPI.showModal()
```

为了方便 Vue 开发，可以直接使用 Vue.use(kboneAPI) 来设置全局对象.

```js
# main.js
import Vue from 'vue'

Vue.use(kboneAPI)

# logic code
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
```

## LICENSE
MIT