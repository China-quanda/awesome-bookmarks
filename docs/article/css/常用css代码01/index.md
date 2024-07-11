# 常用css代码01

## 效果

![xenxh-gco3y.gif](./images/xenxh-gco3y.gif)
<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div class="app">
      <div class="bg">
        <div class="b-wrap"></div>
      </div>
      <div class="box"></div>
    </div>
  </body>
</html> -->


## html代码
```html
<div class="app">
  <div class="bg">
    <div class="b-wrap"></div>
  </div>
  <div class="box"></div>
</div>
```

## css代码
```css
.app {
  position: relative;
  height: 500px;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: max(58.66666667vw, 220px);
  background: -webkit-linear-gradient(
    135deg,
    #9cecfb,
    #59e1d9,
    #7baefc,
    #56ccf2,
    #0ed2f7
  );
  background: -o-linear-gradient(
    135deg,
    #9cecfb,
    #59e1d9,
    #7baefc,
    #56ccf2,
    #0ed2f7
  );
  background: linear-gradient(
    315deg,
    #9cecfb,
    #59e1d9,
    #7baefc,
    #56ccf2,
    #0ed2f7
  );
  -webkit-animation: gradient 15s ease infinite;
  animation: gradient 15s ease infinite;
  -webkit-background-size: 400% 400%;
  background-size: 400%;
}

.bg .b-wrap {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(243, 245, 247, 0) 0%, #fff 99%);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.box {
  position: absolute;
  bottom: 150px;
  left: 15px;
  right: 15px;
  z-index: 9999;
  background-color: #db7373;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(255, 255, 255, 0.5)),
    to(#ffffff)
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 100%
  );
  -webkit-border-radius: 0.71428571em;
  -moz-border-radius: 0.71428571em;
  border-radius: 0.71428571em;
  padding: 2.2em;
  border: 1px solid #fff;
  margin-bottom: 2.85714286em;
  padding: 1.21428571em 0;
  margin-bottom: 1.42857143em;
  height: 100px;
}

```

