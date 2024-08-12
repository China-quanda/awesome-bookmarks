# 使用NodeJS解析chrome书签

平时在PC上积累了不少Chrome书签，一直希望能在其他地方使用，但在导出到其它浏览器，尤其是手机浏览器的时候遇到不少困难。虽然可以通过谷歌账号同步书签，但是因为总所周知的原因，存在诸多不便。于是写了个小程序，将chrome的html书签解析成json格式，方便拓展使用。

## 具体步骤

1. 在chrome书签管理器页面导出html格式书签；
2. 由于导出的html格式存在许多未闭合的标签，为方便之后的操作，使用chrome打开书签html文件；
3. chrome会自动补齐标签，调用开发者工具，将html复制保存；
4. 使用NodeJS解析书签html文件。

## html书签

补齐前书签是这样的，DT标签，p标签都未闭合

```html
<DL><p>
    <DT><H3 ADD_DATE="1446270688" LAST_MODIFIED="1475726879">书签栏</H3>
    <DL><p>
         <DT><A HREF="https://github.com/" ADD_DATE="1469689056">GitHub</A>
    <DL><p>
</DL><p>        
```

补齐标签后的html

```html
<dl><p></p>
    <dt>
        <h3 add_date="1446270688" last_modified="1475726879">书签栏</h3>
        <dl><p></p>
            <dt><a href="https://github.com/" add_date="1469689056">GitHub</a></dt>
        </dl>
    </dt>
</dl><p></p>    
```

## NodeJS程序

使用cheerio来执行dom操作，执行步骤

1. 首先，读取补齐后的html书签；
2. 获得最外层dt元素;
3. 从最外层dt元素开始遍历dom树，其中h3标签为文件夹名称，A标签包含书签名称、书签地址等信息；
4. 将书签和文件夹存储为对象，同一文件夹下的书签和文件夹对象的集合存储为数组；
5. 将最终的对象转化为json字符串，存储到json文件。

```javascript
var cheerio = require('cheerio'),
  fs = require('fs');

// 读取书签html文件
fs.readFile('bookmarks.html', 'utf-8', function (err, data) {
  if (err) {
    console.log("error");
  } else {
    parse(data);
  }
});

function parse(html) {

  // 加载html，使用常用的$符号
  var $ = cheerio.load(html);

  // 获取最外层的dt标签
  var $dl = $("dl").first();
  var $dt = $dl.children("dt").eq(0);

  // 从dt开始遍历dom树，生成对象
  var obj = foo($dt);

  // 将对象转化为json字符串，添加额外参数使json格式更易阅读
  var s = JSON.stringify(obj, null, 4);

  // 将json字符串写入json文件
  fs.writeFileSync('output.json', s);

  function foo($dt) {

    // h3标签为文件夹名称
    var $h3 = $dt.children("h3");

    if ($h3.length == 0) {

      // a标签为网址
      var $a = $dt.children("a");

      // 返回该书签的名称和网址组成的对象
      return $a.length > 0 ? { "name": $a.text(), "href": $a.attr('href'), "icon": $a.attr('icon') } : null;
    }

    var h3 = $h3.text();
    var arr = [];
    var obj = {};

    // 获取下一级dt标签集合
    var $dl = $dt.children("dl");
    var $dtArr = $dl.children("dt");
    for (var i = 0; i < $dtArr.length; i++) {

      // 遍历下一级dt标签
      var tmp = foo($dtArr.eq(i));

      // 将返回的对象push至子文件数组
      arr.push(tmp);
    }

    // 创建文件夹与子文件数组的键值对
    obj[h3] = arr;

    // 返回该对象
    return obj;
  }
}

```

## json文件
```json
{
  "书签栏": [
    {
      "name": "GitHub",
      "href": "https://github.com/"
    },
    {
      "name": "RequireJS 中文网",
      "href": "http://www.requirejs.cn/home.html"
    },
    {
      "name": "(2 封私信 / 99+ 条消息) 首页 - 知乎",
      "href": "https://www.zhihu.com/"
    },
    {
      "name": "慕课网(IMOOC)-国内最大的IT技能学习平台",
      "href": "http://www.imooc.com/"
    }
  ]
} 
```