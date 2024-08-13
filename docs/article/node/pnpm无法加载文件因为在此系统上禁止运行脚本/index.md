# pnpm无法加载文件因为在此系统上禁止运行脚本

## 安装pnpm：

安装pnpm之前先给npm设置国内源：

```bash
npm config set registry https://registry.npmmirror.com
```

```bash
npm install -g pnpm
```

## 验证安装：

```bash
pnpm -v
```
## 终端报错：

```bash
pnpm : 无法加载文件 C:\Users\MAC\AppData\Roaming\npm\pnpm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/
go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ pnpm -v
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

## 解决报错：

pnpm : 无法加载文件 C:\Users\MAC\AppData\Roaming\npm\pnpm.ps1,因为在此系统上
报错信息表明 PowerShell 无法加载 `pnpm.ps1` 脚本文件，通常是因为以下原因之一：

`pnpm` 没有正确安装或者安装后没有配置环境变量。

脚本文件 `pnpm.ps1` 已损坏或不存在于指定路径。

PowerShell 的执行策略阻止执行脚本文件（Restricted 策略）。

解决方法：

确认 `pnpm` 是否已经通过 `npm` 安装：

```bash
npm install -g pnpm
```

确保 `pnpm` 的安装路径已经添加到环境变量 `PATH` 中。

如果 `pnpm.ps1` 文件损坏或不存在，尝试重新安装 `pnpm`：

```bash
npm uninstall -g pnpm
npm install -g pnpm
```

检查 PowerShell 的执行策略，确保它不是 `Restricted`。可以使用以下命令查看当前策略：

```bash
Get-ExecutionPolicy
```

如果是 `Restricted`，你可以使用以下命令暂时改变策略（在当前会话中）：

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

或者，如果你愿意运行脚本，可以设置为 `RemoteSigned`：

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

如果以上步骤都不能解决问题，可以尝试清除 `npm` 缓存，并重新安装 `pnpm`：

```bash
npm cache clean --force
npm install -g pnpm
```

确保在执行这些步骤时具有适当的权限，如果需要，使用管理员权限打开 PowerShell。