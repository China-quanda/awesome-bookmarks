<template>
  <div class="login">
    <div class="login-bg">
      <div class="fly bg-fly-circle1"></div>
      <div class="fly bg-fly-circle2"></div>
      <div class="fly bg-fly-circle3"></div>
      <div class="fly bg-fly-circle4"></div>
    </div>
    <div class="login-wrap">
      <div class="login-left">
        <img src="./images/login-banner-GXzGQAm-.png">
      </div>
      <div class="login-right">
        <div class="login-form">
          <h3 class="title">欢迎来到 后台管理系统 👋🏻</h3>
          <div class="form-item">
            <div class="input">username</div>
          </div>
          <div class="form-item">
            <div class="input">password</div>
          </div>
          <div class="form-item">
            <div class="input">code</div>
            <div class="code">CODE</div>
          </div>
          <div class="form-item">
            <div class="code login-btn">登录</div>
          </div>
        </div>
      </div>
    </div>
    <div class="el-login-footer">
      <span>Copyright © 2022-2023 silian.cn All Rights Reserved.</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::before, &::after {
    content: '';
    position: fixed;
    bottom: 0;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -2;
  }

  &::before {
    width: 394px;
    height: 468px;
    background-image: url("./images/login_bg_left.png");
    left: 0;
  }

  &::after {
    width: 487px;
    height: 412px;
    background-image: url("./images/login_bg_right.png");
    right: 0;
  }

  .login-bg {
    .fly {
      pointer-events: none;
      position: fixed;
      z-index: 9999;
    }
  }

  .login-wrap {
    max-width: 850px;
    height: 490px;
    display: flex;
    z-index: 999;
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);;

    .login-left {
      flex: 0.5;
      // width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      // background: linear-gradient(60deg, rgb(22, 93, 255), rgb(148, 191, 255));
      background-color: #f2f2f2;

      img {
        width: 110%;
      }
    }

    .login-right {
      flex: 0.5;
      // width: 100%;
      height: 100%;
      background: white;
      display: flex;
      flex-direction: column;
      padding: 30px;
      box-sizing: border-box;
      background-color: white;

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 25px;
        border-radius: 6px;
        width: 400px;
        padding: 25px 25px 5px 25px;
        height: 500px;
        // background: #ffffff;
        // background-color: #36383c;

        .title {
          margin-bottom: 20px;
          text-align: center;
          color: #333;
          font-size: 24px;
          font-weight: 600;
          font-family: MicrosoftYaHeiSemibold;
        }

        .form-item {
          display: flex;
          align-items: center;
          gap: 10px;

          .input {
            flex: 1;
            height: 40px;
            line-height: 40px;
            padding: 0px 15px;
            color: rgb(186, 175, 175);
            border-radius: 4px;
            border: 1px solid #dcdfe6;
          }

          .code {
            cursor: pointer;
            padding: 0px 20px;
            height: 40px;
            line-height: 40px;
            border-radius: 4px;
            color: white;
            font-size: 14px;
            background-color: rgb(111, 176, 233);

            &:hover {
              opacity: 0.8;
            }
          }

          .login-btn {
            width: 100%;
            text-align: center;
            font-weight: 500;
            background-color: #1890ff;
          }
        }

        .el-input {
          height: 38px;

          input {
            height: 38px;
          }
        }

        .input-icon {
          height: 39px;
          width: 14px;
          margin-left: 2px;
        }
      }
    }

  }

}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #767171;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

@media (max-width: 760px) {
  .login{
    &::before,&::after  {
      display: none;
    }
    .login-wrap{
      // display: none;
      box-shadow:unset;
      .login-left{
        display: none;
      }
      .login-right {
        // background-color: white;
      }
    }
    .login-bg{
     
    }

    
  }
}
@media (max-width: 1200px) {
  .login{
    &::before {
      width: calc(394px / 2);
      height: calc(468px / 2);
    }
    &::after {
      width: calc(487px / 2);
      height: calc(412px / 2);
    }
  }
}


</style>
