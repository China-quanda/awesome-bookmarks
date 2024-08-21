# mac包管理软件Homebrew中安装nvm
要使用 Homebrew 安装 nvm，你可以执行以下步骤：

### 1、打开终端。

### 2、运行以下命令以通过 Homebrew 安装 nvm：

```bash
brew install nvm
```

安装成功后控制台会输出：

```bash
==> Downloading https://formulae.brew.sh/api/formula.json
######################################################################## 100.0%
==> Downloading https://formulae.brew.sh/api/cask.json
######################################################################## 100.0%
==> Fetching nvm
==> Downloading https://ghcr.io/v2/homebrew/core/nvm/manifests/0.40.0
Already downloaded: /Users/a111/Library/Caches/Homebrew/downloads/23320f7b59a96c183ad17d583fb2bd400c63bbcd53dc0ffa79570c8ba43885ec--nvm-0.40.0.bottle_manifest.json
==> Downloading https://ghcr.io/v2/homebrew/core/nvm/blobs/sha256:af3f9692df19ac0f8599ea485d68a42b0af097227e4ec8684e2710f36d4443be
Already downloaded: /Users/a111/Library/Caches/Homebrew/downloads/4c8118e6e68defdb175afbf33b35d35708325fa99f4f7eb3b5c6edf2170df856--nvm--0.40.0.all.bottle.tar.gz
==> Pouring nvm--0.40.0.all.bottle.tar.gz
==> Caveats
Please note that upstream has asked us to make explicit managing
nvm via Homebrew is unsupported by them and you should check any
problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:
  mkdir ~/.nvm

Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:
  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

You can set $NVM_DIR to any location, but leaving it unchanged from
$HOMEBREW_CELLAR/nvm/0.40.0 will destroy any nvm-installed Node installations
upon upgrade/reinstall.

Type `nvm help` for further information.
==> Summary
🍺  /usr/local/Cellar/nvm/0.40.0: 10 files, 200.6KB
==> Running `brew cleanup nvm`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```

### 3、安装完成后，你需要将初始化脚本添加到你的 shell 配置文件中。如果你使用的是 `bash` 或 `zsh`，可以在你的 `~/.bash_profile` 或 `~/.zshrc` 文件中添加以下行：

```bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```
vim ~/.zshrc # 配置环境变量，或者vim /etc/profile

### 4、保存文件并重新启动终端或执行以下命令以使更改生效：
```bash
source ~/.bash_profile  # 如果你使用的是 bash
source ~/.zshrc         # 如果你使用的是 zsh
```

### 5、确认 nvm 安装成功，运行：

```bash
nvm --version
```