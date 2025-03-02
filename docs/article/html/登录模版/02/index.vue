<template>
  <div class="login">
    <div class="login-logo">
      <img src="./images/logo.png" alt="logo">
      <h1>后台管理系统</h1>
    </div>
    <div class="login-bg">
      <div class="fly bg-fly-circle1"></div>
      <div class="fly bg-fly-circle2"></div>
      <div class="fly bg-fly-circle3"></div>
      <div class="fly bg-fly-circle4"></div>
    </div>
    <div class="login-wrap">
      <div class="login-left">
        <img src="./images/banner-BqOQ-fEP.png">
      </div>
      <div class="login-right">
        <div class="login-form">
          <h3 class="title">👋 嗨 欢迎来到后台管理系统</h3>
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

  .login-logo {
    position: fixed;
    top: 20px;
    left: 30px;
    z-index: 9999;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60px;
    }

    h1 {
      margin-left: 10px;
      font-size: 20px;
    }
  }

  .login-bg {
    .fly {
      pointer-events: none;
      position: fixed;
      z-index: 9999;
    }

    .bg-fly-circle1 {
      left: 40px;
      top: 100px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(22, 93, 255, .07), rgba(22, 93, 255, .04));
      animation: move-ce64e0ea 2.5s linear infinite;
    }

    .bg-fly-circle2 {
      left: 15%;
      bottom: 5%;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(22, 93, 255, .08), rgba(22, 93, 255, .04));
      animation: move-ce64e0ea 3s linear infinite;
    }

    .bg-fly-circle3 {
      right: 12%;
      top: 90px;
      width: 145px;
      height: 145px;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(22, 93, 255, .1), rgba(22, 93, 255, .04));
      animation: move-ce64e0ea 2.5s linear infinite;
    }

    .bg-fly-circle4 {
      right: 5%;
      top: 60%;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(22, 93, 255, .02), rgba(22, 93, 255, .04));
      animation: move-ce64e0ea 3.5s linear infinite;
    }

    @keyframes move-ce64e0ea {
      0% {
        transform: translateY(0) scale(1);
      }

      50% {
        transform: translateY(25px) scale(1.1);
      }

      100% {
        transform: translateY(0) scale(1);
      }
    }
  }

  .login-wrap {
    max-width: 850px;
    height: 490px;
    display: flex;
    z-index: 999;
    box-shadow: 0 2px 4px 2px #00000014;

    .login-left {
      flex: 0.55;
      // width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: linear-gradient(60deg, rgb(22, 93, 255), rgb(148, 191, 255));

      img {
        width: 110%;
      }
    }

    .login-right {
      flex: 0.45;
      // width: 100%;
      height: 100%;
      background: white;
      display: flex;
      flex-direction: column;
      padding: 30px;
      box-sizing: border-box;

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
          color: #707070;
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
    // background-color: #1890ff;
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
      .bg-fly-circle1{
      width: 60px;
      height: 60px;
      }
      .bg-fly-circle2{
      width: 90px;
      height: 90px;
      }
      .bg-fly-circle3{
      width: 90px;
      height: 90px;
      }
      .bg-fly-circle4{
        width: 110px;
        height: 110px;
      }
    }

    
  }
}

</style>
