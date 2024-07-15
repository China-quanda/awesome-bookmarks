# 使用 CSS drop-shadow函数 为 PNG 透明图片添加设置阴影

### 前言

通常，我们为div盒子或者图片设置阴影使用`box-shadow`属性，代码如下：

``` css
box-shadow: 10px 10px 10px gray;
```

### 问题抛出

使用`box-shadow`属性 给div盒子设置阴影倒还好，如果用在透明的图片上，阴影会变成方形的，让其看起来像添加了一个边框一样。

### 解决方法

我们可以通过css的另一种参数，为透明png实现基于透明图片的阴影效果，效果如下图，左侧是`box-shadow`，右侧是`drop-shadow`。
![01](./images/01.png)

#### drop-shadow()说明：

`drop-shadow()`是CSS中用于为图像或文本添加阴影效果的一个函数，‌它属于`filter`属性的一部分。‌这个函数允许你为元素创建阴影，‌而不需要考虑元素的形状或边界框。‌与`box-shadow`不同，‌`drop-shadow`可以应用于非矩形形状，‌如透明的PNG或SVG图像，‌它使用元素的Alpha蒙版来决定阴影的形状。‌这意味着，‌即使元素没有背景，`‌drop-shadow`也能为图像的非透明部分创建阴影。‌


#### drop-shadow()语法如下：

``` css
filter: drop-shadow( offset-x offset-y blur-radius spread-radius color )
```

#### drop-shadow()参数说明如下：

- `offset-x`：该参数设置图像的水平偏移量。正值创建右侧偏移，负值创建左侧偏移。
- `offset-y`：此参数设置图像的垂直偏移量。正值创建到底部的偏移量，负值创建到顶部的偏移量。
- `blur-radius`：设置模糊半径的值。它是一个可选参数。
- `spread-radius`：设置传播半径的值。它是一个可选参数。
- `color`：设置投影的颜色。它的可选参数。

### 演示代码如下：

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .img_box .left_img{
      box-shadow: 10px 10px 10px gray;
    }
    .img_box .right_img{
      filter: drop-shadow(2px 4px 8px rgb(225, 170, 170));
    }
  </style>
</head>
<body>

  <div class="img_box">
    <img class="left_img" src="./lihua.png" />
    <img class="right_img" src="./lihua.png" />
  </div>
  
</body>
</html>
```

### 总结

尽管有很好的支持，但 drop-shadow 滤镜仍然没有得到充分的利用。我希望这篇文章强调了一些使用 box-shadow的 情况，也许你可以在你的下一个项目中使用它！