# lufei_pc



# 项目起步

```shell
npm init vue@latest

```



# 设置全局配置

在src目录下创建settings.js站点开发配置文件：

```javascript
export default {
  Host:"http://127.0.0.1",
}

```

在main.js中引入

```js
import settings from "./settings";

const app = createApp(App);

app.config.globalProperties.$settings = settings;
```





# elementPlus引入

## 1. 安装elementPlus和自动导入插件

```bash
npm install element-plus --save
npm install -D unplugin-vue-components unplugin-auto-import

```

## 2. 配置自动按需导入

```javascript
// 引入插件
// vite.config.ts

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
```

## 3. 测试组件

```vue
<template>
  <el-button type="primary">i am button</el-button>
</template>
```

# 配置axios

```shell
npm i axios -S
```

在main.js中引用 axios插件

```javascript
import axios from 'axios'; // 从node_modules目录中导入包
// 允许ajax发送请求时附带cookie
axios.defaults.withCredentials = false;

Vue.prototype.$axios = axios; // 把对象挂载vue中
```





