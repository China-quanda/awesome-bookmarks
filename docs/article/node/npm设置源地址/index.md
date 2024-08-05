# npm pnpm yarn 设置源地址


在使用npm时，可以通过命令行设置或更改npm的源地址。

以下是如何设置npm源地址的步骤：

## 1、临时使用某个源：
```bash
npm install --registry https://registry.npmmirror.com
```

## 2、永久设置npm的源地址：
```bash
npm config set registry https://registry.npmmirror.com
```

## 3、通过`.npmrc`文件设置（全局或项目级别）：

```text
1、在用户的根目录下创建或编辑 .npmrc 文件
2、打开 .npmrc 文件，添加以下内容

registry=https://registry.npmmirror.com
```


## 4、使用`nrm`工具来管理源地址（推荐）：
首先安装`nrm`：
```bash
npm install -g nrm
```

然后使用`nrm`来切换源：
```bash
nrm use taobao // 切换到淘宝的npm源
```

## 5、通过npm命令查看当前的源地址：
```bash
npm config get registry
```

以上步骤可以帮助你设置npm的源地址。通常，淘宝NPM镜像是中国开发者常用的源之一，因为它比官方源更快。





