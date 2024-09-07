# Node.js和vue3实现GitHub OAuth第三方登录

## 前言

第三方登入太常见了，微信，微博，QQ...总有一个你用过。

在开发中，我们希望用户可以通过GitHub账号登录我们的网站，这样用户就不需要注册账号，直接通过GitHub账号登录即可。

## 效果演示

![](./images/1.gif)

## 注册配置 GitHub 应用

### 1.首先登录你的GitHub然后点击右上角的头像->点击进入`Settings`页面

![](./images/WX20240907-133241.png)

### 2.在`Settings`页面中点击左侧边栏的 `Developer settings`

![](./images/WX20240907-141307.png)

### 3.然后点击`OAuth Apps`，点击 `Register a new application`

一个用户或组织最多可以拥有100个OAuth应用。

![](./images/WX20240907-143111.png)

### 4.填写应用信息

我这边使用了腾讯翻译插件，为了照顾英语不好的朋友观看理解。

![](./images/WX20240907-144204.png)

这里主要是`Authorization callback URL`的填写；

这个应用回调地址就是上面登录流程授权之后返回的`redirect_uri`。

### 5.点击`Generate new client secret`生成`Client Secret`

![](./images/WX20240907-144722.png)

### 6.将`Client ID`和`Client Secret`复制到配置文件，用于后面向GitHub发送请求传参。

**注意：** 只会出现一次`Client secrets`,自己保存好

![](./images/WX20240907-161327.png)


## 前后端调用流程步骤：

- 前端：用户点击按钮跳转到GitHub授权页面；
- 前端：用户在授权页面同意授权后，GitHub将用户重定向到您的网站；
- 前端：重定向的URL中包含一个授权码code，在该页面中获取授权码；
- 前端：调用后端登录api，将获取到的code传给后端；
- 后端：后端收到code后调用GitHub的token api，获取access_token；
- 后端：获取到access_token后调用 user api，获取用户信息返回给前端；
- 前端：拿到后端返回的用户信息后，将用户信息保存到本地，完成登录。

## 前端 Vue 实现

### 1.安装必要依赖

- axios是一个HTTP客户端库，用于向服务端发送请求。

```sh
npm install axios
```

### 2.替换你的配置信息
```js
// github配置信息
const config = {
  // 替换为你的回调地址
  redirect_uri: 'http://127.0.0.1:9090/pages/login/login',
  // 替换为你的 client_id
  client_id: 'Ov23li3ZcThmL87YHUBL',
}
```
### 3.代码示例

```vue
<template>
  <div class="user-box">
    <div v-if="userInfo.id" class="user-info">
      <img class="user-img" :src="userInfo.avatar_url" />
      <text class="user-name">用户昵称：{{ userInfo.name || userInfo.login }}</text>
      <text class="user-openid">nodeId{{ userInfo.node_id }}</text>
    </div>
    <div v-else class="user-empty">
      {{ loading ? '用户登录中...' : userInfo?.id ? '用户已登录' : '用户未登录' }}
    </div>
  </div>
  <button @click="oauth">发起GitHub授权</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const loading = ref(false)
let userInfo = ref({})
// github配置信息
const config = {
  // 替换为你的回调地址
  redirect_uri: 'http://127.0.0.1:9090/pages/login/login',
  // 替换为你的 client_id
  client_id: 'Ov23li3ZcThmL87YHUBL',
}

// 请求后端登录
function reqLogin(code) {
  console.log('3.将获取到的code发送给后端进行登录');
  if (loading.value) return
  loading.value = true
  axios.post('http://127.0.0.1:3000/api/github/login', { code })
    .then(res => {
      // 前端拿到用户信息后，可以保存到数据库或者本地，或者直接跳转到个人中心页面。
      console.log('4.登录成功获取到用户信息', res.data);
      userInfo.value = res.data
    }).catch(err => {
      console.log('登录出错了！', err);
    }).finally(() => {
      console.log('finally');
      loading.value = false
    })
}

// 获取地址栏中的code 获取不到将返回 null
function getCode() {
  // 获取当前 URL 的查询参数
  const urlParams = new URLSearchParams(window.location.search);
  // 从查询参数中获取 'code' 值
  const code = urlParams.get('code');
  if (code) {
    console.log('2.授权后，获取地址栏中的code');
  }
  return code
}

// 发起授权
function oauth() {
  console.log('1.点击授权按钮，跳转到GitHub授权页中');
  const url = `https://github.com/login/oauth/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`
  window.location.href = url
}

onMounted(() => {
  const code = getCode()
  if (code) reqLogin(code)
})
</script>

<style scoped lang="scss">
.user-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .user-img {
      width: 60px;
      height: 60px;
      border-radius: 99px;
      border: 1px solid black;
    }
  }

  .user-empty {
    // background-color: #f5f6f7;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 6px;
  }
}
</style>
```


## 后端 Node.js 实现

### 1.安装必要依赖
- express是一个Web应用框架，用于构建Web应用。
- cors是一个中间件，用于处理跨域请求。
- axios是一个HTTP客户端库，用于向服务端发送请求。

```sh
npm install express cors axios 
```

### 2.替换你的配置信息

```js
// github配置信息
const githubConfig = {
  // 替换为你的回调地址
  redirect_uri: 'http://127.0.0.1:9090/pages/login/login',
  // 替换为你的 client_id
  client_id: 'Ov23li3ZcThmL87YHUBL',
  // 替换为你的 client_secret
  client_secret: 'e021cb59a650476e62be3ee72fc9686e2c86c1d3',
}
```

### 2.代码示例

```js
// Node.js和vue3实现GitHub OAuth第三方登录
const express = require('express'); // 导入 Express 模块
const cors = require('cors'); // 导入 CORS 模块，用于处理跨域请求
const axios = require('axios'); // 导入 Axios 模块，用于发起 HTTP 请求

const app = express(); // 创建 Express 应用实例
app.use(cors()); // 使用 CORS 中间件解决跨越请求
app.use(express.json()) // 解析 json 格式请求体
app.use(express.urlencoded({ extended: true })) // 解析传统表单请求体

// github配置信息
const githubConfig = {
  // 替换为你的回调地址
  redirect_uri: 'http://127.0.0.1:9090/pages/login/login',
  // 替换为你的 client_id
  client_id: 'Ov23li3ZcThmL87YHUBL',
  // 替换为你的 client_secret
  client_secret: 'e021cb59a650476e62be3ee72fc9686e2c86c1d3',
}

// github登录
app.post('/api/github/login', async (req, res) => {
  // 1、校验必填参数
  if (!req.body.code) {
    throw new Error('必填参数不能为空！')
  }
  // 2、获取 Access token
  const accessTokenInfo = await getAccessToken(req.body.code)
  // 3、获取用户信息
  const userInfo = await getUserInfo(accessTokenInfo.access_token)
  // 4、在这步你可以将用户信息存入数据库中等其他操作，这里我直接返回了
  res.status(200).send(userInfo)
})

// 获取 access_token
async function getAccessToken(code) {

  //官方文档： https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

  // 1、验证后端传来的code
  if (!code || code.length !== 20) {
    throw new Error('code参数不正确！');
  }

  // 2、向github发送post请求，成功的话会，response.data里面有一个access_token
  const response = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    params: {
      redirect_uri: githubConfig.redirect_uri,
      client_id: githubConfig.client_id,
      client_secret: githubConfig.client_secret,
      code,
    },
    headers: { 'accept': 'application/json' },
  });

  if (!response.data?.access_token) {
    throw new Error('获取 access_token 失败！' + JSON.stringify(response.data))
  }

  // response.data:{
  //   "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  //   "scope":"repo,gist",
  //   "token_type":"bearer"
  // }

  return response.data
}


// 获取用户信息
async function getUserInfo(access_token) {
  //官方文档： https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#3-use-the-access-token-to-access-the-api
  const response = await axios({
    method: "get",
    url: 'https://api.github.com/user',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.data?.id) throw new Error('获取用户信息失败！')

  /**
  response.data = {
    "login": "China-quanda",
    "id": 36378336,
    "node_id": "MDQ6VXNlcjM2Mzc4MzM2",
    "avatar_url": "https://avatars.githubusercontent.com/u/36378336?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/China-quanda",
    "html_url": "https://github.com/China-quanda",
    "followers_url": "https://api.github.com/users/China-quanda/followers",
    "following_url": "https://api.github.com/users/China-quanda/following{/other_user}",
    "gists_url": "https://api.github.com/users/China-quanda/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/China-quanda/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/China-quanda/subscriptions",
    "organizations_url": "https://api.github.com/users/China-quanda/orgs",
    "repos_url": "https://api.github.com/users/China-quanda/repos",
    "events_url": "https://api.github.com/users/China-quanda/events{/privacy}",
    "received_events_url": "https://api.github.com/users/China-quanda/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Quanda",
    "company": null,
    "blog": "",
    "location": "北京",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "notification_email": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2018-02-11T17:35:16Z",
    "updated_at": "2024-09-07T10:31:22Z"
  }
  */

  return response.data;
}

// 启动服务
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
```

## 总结

1. 首先，在github上注册一个应用，并配置好回调地址，获取`client_id`和`client_secret`。
2. 在前端页面上，通过点击`发起GitHub授权`按钮，发起一个post请求，请求地址为 `https://github.com/login/oauth/authorize`，携带上我们前面获取的`client_id`和回调地址。
3. github会返回一个`code`，这个`code`是临时的，我们通过这个`code`向github请求`access_token`，再通过`access_token`向github请求用户信息。
4. 最后，将用户信息返回给前端，前端拿到用户信息后，可以保存到数据库或者本地，或者直接跳转到个人中心页面。
5. 注意，这个项目只是演示如何实现github登录，实际应用中，需要做更多的处理，比如用户注册，用户信息保存等。
6. 示例代码仅供参考，实际应用中，需要根据具体的业务需求进行修改。
7. 示例代码中，没有做任何的错误处理，实际应用中，需要做错误处理。

我们发现第三方登录的流程其实都差不多，差别就是不同的平台，和自己应用的业务会有点不一样。所以呢，在做之前先要理清思路，仔细看文档。
