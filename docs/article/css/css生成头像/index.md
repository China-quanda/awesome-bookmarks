# css 生成头像

## 效果：

<div class="logo-img">
	<div class="text">LOGO</div>
</div>

<style lang="scss" scoped>
.logo-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  font-size: 1.8rem;
  padding: 10px;
  border-radius: 4px;
  letter-spacing: 0;
  overflow: hidden;
  color: #fff;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  background-color: #7db3d9;
  .text {
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 2; //行数
    -webkit-box-orient: vertical; //盒子中内容竖直排列
  }
}
</style>

::: details 查看源码
```html
<div class="logo-img">
	<div class="text">LOGO</div>
</div>

<style lang="scss" scoped>
.logo-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  font-size: 1.8rem;
  padding: 10px;
  border-radius: 4px;
  letter-spacing: 0;
  overflow: hidden;
  color: #fff;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  background-color: #7db3d9;
  .text {
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 2; //行数
    -webkit-box-orient: vertical; //盒子中内容竖直排列
  }
}
</style>
```
:::


