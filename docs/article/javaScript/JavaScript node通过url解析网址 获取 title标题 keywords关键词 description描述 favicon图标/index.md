# JavaScript Node通过url解析网址 获取 title标题 keywords关键词 description描述 favicon图标



**这里我们介绍两种方法来获取：**

1. javaScrip获取 因为浏览器安全问题在浏览器中运行时可能会存在跨域问题
2. nodejs获取 获取不会存在跨域问题


## 一、JavaScript获取

可以使用 JavaScript 的 XMLHttpRequest 对象或 fetch API 来获取网页的 HTML 代码，然后使用正则表达式或 DOM 操作来提取网页的元数据。

例如，使用 fetch API 获取 HTML 代码并提取 title标题 keywords关键词 description描述 favicon图标 的示例代码如下：

> 注意：如果网站有跨域无法使用该方法


定义方法：
```javascript
async function getWebsiteMetadata(url) {
  try {
    const response = await fetch(url);
		
    const text = await response.text();
		
    const parser = new DOMParser();
		
    const doc = parser.parseFromString(text, 'text/html');
 
    // 获取 title
    const title = doc.title;
 
    // 获取 favicon
    const faviconEl = doc.querySelector('link[rel~="icon"]');
    const favicon = faviconEl ? faviconEl.href : null;
		
		// 获取 keywords
		const keywordsEl = doc.querySelector('meta[name~="keywords"]');
		const keywords = keywordsEl ? keywordsEl.content : null;
		
		// 获取 description
		const descriptionEl = doc.querySelector('meta[name~="description"]');
		const description = descriptionEl ? descriptionEl.content : null;
 
    return { title,keywords, description,favicon };
  } catch (error) {
    console.error('Error fetching website metadata:', error);
    return {};
  }
}
```

使用方法：
```javascript
// 使用函数获取指定网站的元数据
getWebsiteMetadata('https://www.example.com').then(metadata => {
  console.log(metadata);

  // 请求地址：
  // https://juejin.cn/post/7349561234932367401?utm_source=gold_browser_extension

  // metadata 返回数据为：
  // {
  //   "title": "Uiverse.io：打造 超炫酷 界面 的秘密武器！！！ - 掘金",
  //   "keywords": "前端,JavaScript,CSS",
  //   "description": "偶尔闲逛国外网站，会不经意看到一些炫酷的网页元素，不禁呆呆的观察一会，相信你也遇到过吧，特别是新颖炫酷的界面元素，那么我们如何实现这些炫酷的效果的呢？ 如果你特别精通 css 的话, 可能这些实现起来",
  //   "favicon": "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png"
  // }
});
```

## 二、NODE获取

> 推荐使用node端获取不会存在跨越问题

**node来获取流程通常包括以下几个步骤：**
1. 发发送网络请求：首先需要发送网络请求，获取网页的HTML代码。Node.js有很多第三方模块可以帮助我们进行网络请求，比如Request、Axios等等。这些模块可以帮助我们发送HTTP请求，并且可以设置请求头、请求参数等等。
2. 解析HTML页面：需要解析HTML页面，提取出有用的信息，比如标题、正文、链接等等。在Node.js中，我们可以使用Cheerio模块来解析HTML页面。Cheerio是一个类似于jQuery的库，可以帮助我们更方便地进行HTML解析和DOM操作。

cheerio是第三方模块，所以我们需要先下载安装：
```shell
npm install cheerio
```

在根目录下新建 index.js
```javascript
// 引入 node 内置模块
const http = require('http');
const https = require('https');
// 引入 cheerio 模块
const cheerio = require('cheerio');

// 定义方法
const getWebsiteMetadata = (url)=> {
  // 正则匹配请求是 https 还是 http
  const pattern = /^http(s)?:\/\//;
  const isHTTPS = pattern.test(url);
  const request = isHTTPS ? https : http;
  
  // 使用 Node.js 的内置 http或者https 模块来发起 GET 请求
  request.get(url, (resp) => {
    let data = '';
   
    // 接收数据
    resp.on('data', (chunk) => {
      data += chunk;
    });
   
    // 数据接收完毕
    resp.on('end', () => {

      // 使用 cheerio 模块来解析 HTML，将 HTML 转换成一个类似于 jQuery 的对象 $
      const $ = cheerio.load(data);

      // 获取 title
      const title = $('title').text().trim();

      // 获取 favicon
      const faviconEl = $('link[rel~="icon"]');
      const favicon = faviconEl ? faviconEl.eq(0).attr('href') : null;
      
      // 获取 keywords
      const keywordsEl = $('meta[name~="keywords"]');
      const keywords = keywordsEl ? keywordsEl.eq(0).attr('content') : null;
      
      // 获取 description
      const descriptionEl = $('meta[name~="description"]');
      const description = descriptionEl ? descriptionEl.eq(0).attr('content') : null;

      // 输出结果
      const result = {  title, favicon, keywords, description }
      console.log(result)

    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}


getWebsiteMetadata('https://juejin.cn/post/7341642966790766627')
getWebsiteMetadata('https://blog.csdn.net/weixin_46232841/article/details/131984150')

```

上面这段代码使用了 Node.js 的 http 模块来发起 GET 请求，并使用 cheerio 模块来解析 HTML
它首先获取url的 HTML，然后使用 cheerio 将 HTML 转换成一个类似于 jQuery 的对象 $
接着使用 $ 来查找页面中的 title、favicon、keywords、description，并将它们定义对象输出
最后将这个对象输出到控制台上，我们来看看控制台会输出什么：

```shell
// 控制台使用node运行 index.js 
Maya@192 Desktop % node index.js
{
  title: '4 年深度 Mac OS 用户装机必备软件推荐 - 掘金',
  favicon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
  keywords: '人工智能,开源,产品',
  description: '每年 Apple官方 都会推出年度App表彰优秀的开发者，作为一枚多年Mac的使用用户，让我种草不少有趣的 App，也让我想要总结Mac OS爱用软件造福大家，无论是工作还是生活都能高频用上，盘点开始'
}
{
  title: '都2023年了还不会Node.js爬虫？快学起来！_node爬虫-CSDN博客',
  favicon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
  keywords: 'node爬虫',
  description: '文章浏览阅读2.1k次，点赞3次，收藏7次。爬虫（Web Crawler）是一种自动化程序，可以在互联网上自动抓取网页，并从中提取有用的信息。爬虫可以模拟人类浏览器的行为，自动访问网站、解析网页、提取数据等。通俗来说，爬虫就像是一只蜘蛛，它会沿着网页上的链接不断爬行，把整个网站的内容都爬取下来。这样，我们就可以从大量的网页中获取到我们需要的数据。动态页面：动态页面是指页面内容是通过 JavaScript 或者其他脚本语言动态生成的页面，这种页面往往需要使用浏览器来执行脚本才能获取到完整的页面内容，因此比较难以爬取。_node爬虫'
}
```

这样就实现了获取网页的标题、关键字、描述和图标。