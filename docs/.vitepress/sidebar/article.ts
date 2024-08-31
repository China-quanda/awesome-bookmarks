/**工具路由 */
export const articleSideBar = [{
  text: '文章',
  items: [
    {
      text: 'vue',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/vue' },
        { text: 'Vite启动后提示Network use --host to expose', link: '/article/vue/Vite启动后提示Network use --host to expose' },
      ]
    },
    {
      text: 'uniapp',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/uniapp' },
        { text: '解决uniapp微信小程序Android与iOS系统获取蓝牙广播包中deviceid不同的办法', link: '/article/uniapp/解决uniapp微信小程序Android与iOS系统获取蓝牙广播包中deviceid不同的办法/index' },
        { text: 'uniapp开发的微信小程序接入百度移动统计', link: '/article/uniapp/uniapp开发的微信小程序接入百度移动统计/index' },
        { text: 'uni-app开发的小程序版本更新提示', link: '/article/uniapp/uni-app开发的小程序版本更新提示/index' },
        { text: 'uniapp开发的微信小程序提示errMsg:getLocation:fail:require permission desc', link: '/article/uniapp/uniapp开发的微信小程序提示errMsg:getLocation:fail:require permission desc' },
        { text: 'uni-app和Node.js实现app更新功能', link: '/article/node/uni-app和Node.js实现app更新功能' },
      ]
    },
    {
      text: 'nuxt',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/nuxt' },
      ]
    },
    {
      text: '微信小程序',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/wxminiapp' },
        { text: '解决uniapp微信小程序Android与iOS系统获取蓝牙广播包中deviceid不同的办法', link: '/article/uniapp/解决uniapp微信小程序Android与iOS系统获取蓝牙广播包中deviceid不同的办法/index' },
        { text: 'uniapp开发的微信小程序接入百度移动统计', link: '/article/uniapp/uniapp开发的微信小程序接入百度移动统计/index' },
        { text: 'uni-app开发的小程序版本更新提示', link: '/article/uniapp/uni-app开发的小程序版本更新提示/index' },
        { text: 'uniapp开发的微信小程序提示errMsg:getLocation:fail:require permission desc', link: '/article/uniapp/uniapp开发的微信小程序提示errMsg:getLocation:fail:require permission desc' },
        { text: '微信小程序接入客服功能', link: '/article/wxminiapp/微信小程序接入客服功能' },
      ]
    },
    {
      text: 'javaScript',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/javaScript' },
        { text: 'JavaScript node通过url解析网址 获取 title标题 keywords关键词 description描述 favicon图标', link: '/article/javaScript/JavaScript node通过url解析网址 获取 title标题 keywords关键词 description描述 favicon图标/index' },
        { text: '电子签名signature', link: '/article/html/电子签名signature/index' },
        { text: '进制转换', link: '/article/javaScript/进制转换.md' },
        { text: '前端对图片不同区域进行点击事件', link: '/article/html/前端对图片不同区域进行点击事件/' },
      ]
    },
    {
      text: 'css',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/css' },
        { text: '常用css代码01', link: '/article/css/常用css代码01/index' },
        { text: '使用 CSS drop-shadow函数 为 PNG 透明图片添加设置阴影', link: '/article/css/使用 CSS drop-shadow函数 为 PNG 透明图片添加设置阴影/index' },
        { text: 'html+css实现switch开关效果', link: '/article/html/html+css实现switch开关效果/index' },
      ]
    },
    {
      text: 'html',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/html' },
        { text: '电子签名signature', link: '/article/html/电子签名signature/index' },
        { text: 'html+css实现switch开关效果', link: '/article/html/html+css实现switch开关效果/index' },
        { text: '前端对图片不同区域进行点击事件', link: '/article/html/前端对图片不同区域进行点击事件/' },
      ]
    },
    {
      text: 'nest',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/nest' },
      ]
    },
    {
      text: 'docker',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/docker' },
      ]
    },
    {
      text: 'git',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/git' },
        { text: '将本地仓库项目上传github和gitee仓库中', link: '/article/git/将本地仓库项目上传github和gitee仓库中/index' },
        { text: 'Git新建分支不要有主分支的代码', link: '/article/git/Git新建分支不要有主分支的代码/index' },
        { text: '在家里电脑使用git push 将本地仓库上传到远程仓库，使用公司电脑git pull 后公司电脑本地仓库却未改变', link: '/article/git/在家里电脑使用git push 将本地仓库上传到远程仓库，使用公司电脑git pull 后公司电脑本地仓库却未改变' },
      ]
    },
    {
      text: 'vscode',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/vscode' },
      ]
    },
    {
      text: 'vitePress',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/vitePress' },
      ]
    },
    {
      text: 'electron',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/electron' },
      ]
    },
    {
      text: 'other',
      collapsed: true,
      items: [
        { text: '列表', link: '/article/other' },
        { text: 'PD18 M系列 商业版激活教程', link: '/article/other/PD18 M系列 商业版激活教程' },
        { text: 'mac包管理软件Homebrew中安装nvm', link: '/article/other/mac包管理软件Homebrew中安装nvm' },
        { text: '接入极验滑动验证码', link: '/article/other/接入极验滑动验证码' },
      ]
    },
    {
      text: 'node.js',
      collapsed: true,
      items: [
        { text: 'node', link: '/article/node/index' },
        { text: 'npm设置源地址', link: '/article/node/npm设置源地址/index' },
        { text: '使用NodeJS解析chrome书签', link: '/article/node/使用NodeJS解析chrome书签' },
        { text: 'pnpm无法加载文件因为在此系统上禁止运行脚本', link: '/article/node/pnpm无法加载文件因为在此系统上禁止运行脚本' },
        { text: '使用node.js生成不限制的微信小程序码', link: '/article/node/使用node.js生成不限制的微信小程序码' },
        { text: 'Node.js接入geetest极验行为验证4.0滑动码', link: '/article/node/Node.js接入geetest极验行为验证4.0滑动码' },
        { text: 'uni-app和Node.js实现app更新功能', link: '/article/node/uni-app和Node.js实现app更新功能' },
        { text: 'Node版本管理工具 nvm', link: '/article/node/Node版本管理工具 nvm' },
      ]
    },
  ]
}]